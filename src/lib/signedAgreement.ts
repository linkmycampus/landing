import type { Program } from '../config/partners';
import { PARTNER_SUBMIT_URL } from '../config/partners';

export type Signature = { kind: 'typed'; text: string } | { kind: 'drawn'; dataUrl: string };

export type SignedRecord = {
  program: string;
  agreementVersion: string;
  fullName: string;
  details: Record<string, string>;
  signature: Signature;
  /** ISO time the partner signed. */
  signedAt: string;
  /** The device used. The server should add the IP address. */
  userAgent: string;
};

/** Sends the signed record to the backend. Returns false if it could not be saved. */
export async function submitRecord(record: SignedRecord, pdfBase64?: string): Promise<boolean> {
  if (!PARTNER_SUBMIT_URL) {
    console.warn('VITE_PARTNER_SUBMIT_URL is not set, so this signed agreement was not saved anywhere.', record);
    return true;
  }
  try {
    const res = await fetch(PARTNER_SUBMIT_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...record, pdfBase64 }),
    });
    return res.ok;
  } catch {
    return false;
  }
}

const PURPLE: [number, number, number] = [92, 42, 134];
const PINK: [number, number, number] = [214, 32, 128];
const INK: [number, number, number] = [30, 30, 30];

function formatDate(iso: string) {
  return new Date(iso).toLocaleString('en-GB', { dateStyle: 'long', timeStyle: 'short' });
}

/** Builds the signed agreement as a PDF, laid out like the paper deal sheet. */
export async function buildSignedPdf(program: Program, record: SignedRecord) {
  const { jsPDF } = await import('jspdf');
  const doc = new jsPDF({ unit: 'pt', format: 'a4' });
  const W = doc.internal.pageSize.getWidth();
  const H = doc.internal.pageSize.getHeight();
  const M = 48;
  const maxW = W - M * 2;

  // Header band
  doc.setFillColor(...PURPLE);
  doc.rect(M, 40, maxW, 78, 'F');
  doc.setFillColor(...PINK);
  doc.rect(M, 118, maxW, 3, 'F');
  doc.setTextColor(232, 214, 250);
  doc.setFont('helvetica', 'bold').setFontSize(8);
  doc.text('LINKMYCAMPUS  |  PRACAD TECHNOLOGIES', M + 14, 60);
  doc.setTextColor(255, 255, 255).setFontSize(16);
  doc.text(program.agreementTitle.toUpperCase(), M + 14, 84);
  doc.setFont('helvetica', 'normal').setFontSize(9);
  doc.text(program.agreementSub, M + 14, 102);

  // Partner details
  let y = 146;
  const signedOn = new Date(record.signedAt).toLocaleDateString('en-GB', { dateStyle: 'long' });
  const rows: [string, string][] = [
    ...program.fields
      .filter((f) => f.id !== 'why' && record.details[f.id])
      .map((f): [string, string] => {
        const v = record.details[f.id];
        const opt = f.options?.find(([k]) => k === v);
        return [f.label, opt ? opt[1] : v];
      }),
    ['Start date', signedOn],
  ];
  doc.setFontSize(9);
  for (let i = 0; i < rows.length; i += 2) {
    doc.setFillColor(244, 238, 250);
    doc.rect(M, y - 12, maxW, 20, 'F');
    rows.slice(i, i + 2).forEach(([label, value], j) => {
      const x = M + 10 + j * (maxW / 2);
      doc.setFont('helvetica', 'bold').setTextColor(...PURPLE);
      doc.text(`${label}:`, x, y + 1);
      const lw = doc.getTextWidth(`${label}:`) + 5;
      doc.setFont('helvetica', 'normal').setTextColor(...INK);
      doc.text(doc.splitTextToSize(value, maxW / 2 - lw - 20)[0] ?? '', x + lw, y + 1);
    });
    y += 26;
  }

  // Terms
  y += 8;
  doc.setFontSize(10);
  (program.terms ?? []).forEach((t, i) => {
    const head = `${i + 1}.  ${t.title}. `;
    doc.setFont('helvetica', 'bold');
    const hw = doc.getTextWidth(head);
    const lines: string[] = doc.setFont('helvetica', 'normal').splitTextToSize(t.body, maxW - hw);
    // First line sits next to the bold heading; the rest wrap to full width.
    const rest: string[] = lines.length > 1 ? doc.splitTextToSize(lines.slice(1).join(' '), maxW) : [];
    doc.setFont('helvetica', 'bold').setTextColor(...PINK);
    doc.text(`${i + 1}.`, M, y);
    doc.setTextColor(...PURPLE);
    doc.text(`${t.title}.`, M + doc.getTextWidth(`${i + 1}.  `), y);
    doc.setFont('helvetica', 'normal').setTextColor(...INK);
    doc.text(lines[0], M + hw, y);
    rest.forEach((l, k) => doc.text(l, M, y + 14 * (k + 1)));
    y += 14 * (rest.length + 1) + 8;
  });

  // Signatures
  y = Math.max(y + 16, H - 250);
  doc.setDrawColor(...PINK).setLineWidth(1);
  doc.line(M, y, W - M, y);
  y += 18;
  doc.setFont('helvetica', 'italic').setFontSize(10).setTextColor(90, 90, 90);
  doc.text('Signed by both parties, who agree to the terms above.', M, y);
  y += 22;

  const colX = [M, M + maxW / 2];
  doc.setFont('helvetica', 'bold').setFontSize(11).setTextColor(...PURPLE);
  doc.text('For PRACAD Technologies (LinkMyCampus)', colX[0], y);
  doc.text(program.signer, colX[1], y);
  doc.setFont('helvetica', 'normal').setFontSize(10).setTextColor(...INK);

  const lineY = (n: number) => y + 22 + n * 26;
  ['Name:', 'Signature:', 'Date:'].forEach((l, n) => {
    doc.text(`${l} ______________________________`, colX[0], lineY(n));
    doc.text(l, colX[1], lineY(n));
  });
  const vx = colX[1] + 62;
  doc.text(record.fullName, vx, lineY(0));
  if (record.signature.kind === 'drawn') {
    doc.addImage(record.signature.dataUrl, 'PNG', vx, lineY(1) - 26, 120, 34);
  } else {
    doc.setFont('times', 'bolditalic').setFontSize(16);
    doc.text(record.signature.text, vx, lineY(1));
    doc.setFont('helvetica', 'normal').setFontSize(10);
  }
  doc.text(signedOn, vx, lineY(2));

  doc.setFontSize(8).setTextColor(120, 120, 120);
  doc.text(
    `Signed electronically on ${formatDate(record.signedAt)}. Agreement version: ${record.agreementVersion}.`,
    colX[1],
    lineY(2) + 22,
    { maxWidth: maxW / 2 },
  );

  // Footer
  doc.setFont('helvetica', 'bold').setFontSize(8).setTextColor(...PINK);
  doc.text('LinkMyCampus  |  LIVE MORE. CONNECT MORE.', W / 2, H - 36, { align: 'center' });

  return doc;
}
