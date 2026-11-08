import { useState } from 'react';
import { Plus, X } from 'lucide-react';

const SOCIAL_PLATFORMS = [
  'Instagram',
  'TikTok',
  'X (Twitter)',
  'YouTube',
  'Facebook',
  'Snapchat',
  'LinkedIn',
  'WhatsApp channel',
  'Telegram',
  'LinkMyCampus',
  'Website / blog',
  'Other',
] as const;

type Row = { platform: string; handle: string };

/** Turns the saved text ("Instagram: @ada\nTikTok: @ada") back into rows. */
function parse(value: string): Row[] {
  const rows = value
    .split('\n')
    .map((line) => {
      const i = line.indexOf(': ');
      return i > 0 ? { platform: line.slice(0, i), handle: line.slice(i + 2) } : { platform: 'Instagram', handle: line };
    })
    .filter((r) => r.handle.trim());
  return rows.length ? rows : [{ platform: 'Instagram', handle: '' }];
}

/**
 * Lets people add as many social accounts as they like. The form receives them under `name`
 * as one line per account, e.g. "Instagram: @ada", so each goes into the sheet on its own line.
 */
export default function SocialsInput({
  id,
  name,
  defaultValue = '',
  invalid,
  describedBy,
}: {
  id: string;
  name: string;
  defaultValue?: string;
  invalid?: boolean;
  describedBy?: string;
}) {
  const [rows, setRows] = useState<Row[]>(() => parse(defaultValue));
  const value = rows
    .filter((r) => r.handle.trim())
    .map((r) => `${r.platform}: ${r.handle.trim()}`)
    .join('\n');

  const update = (i: number, patch: Partial<Row>) => setRows((rs) => rs.map((r, k) => (k === i ? { ...r, ...patch } : r)));
  const remove = (i: number) => setRows((rs) => (rs.length > 1 ? rs.filter((_, k) => k !== i) : [{ platform: 'Instagram', handle: '' }]));
  const add = () => {
    // Suggest the next platform they haven't used yet.
    const used = new Set(rows.map((r) => r.platform));
    const nextPlatform = SOCIAL_PLATFORMS.find((p) => !used.has(p)) ?? 'Other';
    setRows((rs) => [...rs, { platform: nextPlatform, handle: '' }]);
  };

  return (
    <div className="space-y-2.5">
      <input type="hidden" name={name} value={value} />
      {rows.map((r, i) => (
        <div key={i} className="flex gap-2">
          <select
            aria-label={`Platform ${i + 1}`}
            value={r.platform}
            onChange={(e) => update(i, { platform: e.target.value })}
            className="field w-[42%] shrink-0 cursor-pointer pr-2 sm:w-[38%]"
          >
            {SOCIAL_PLATFORMS.map((p) => (
              <option key={p} value={p}>
                {p}
              </option>
            ))}
          </select>
          <input
            id={i === 0 ? id : undefined}
            aria-label={`${r.platform} handle`}
            aria-invalid={invalid && i === 0}
            aria-describedby={i === 0 ? describedBy : undefined}
            value={r.handle}
            onChange={(e) => update(i, { handle: e.target.value })}
            placeholder={r.platform === 'Website / blog' ? 'https://…' : '@yourhandle'}
            autoComplete="off"
            className="field min-w-0 flex-1"
          />
          {rows.length > 1 && (
            <button
              type="button"
              onClick={() => remove(i)}
              aria-label={`Remove ${r.platform}`}
              className="flex h-[48px] w-10 shrink-0 items-center justify-center rounded-[12px] text-faint transition-colors hover:bg-fill hover:text-ink"
            >
              <X size={17} strokeWidth={2} aria-hidden />
            </button>
          )}
        </div>
      ))}
      {rows.length < 10 && (
        <button
          type="button"
          onClick={add}
          className="inline-flex items-center gap-1.5 rounded-full px-1 py-1 text-[13.5px] font-semibold text-brand hover:underline"
        >
          <Plus size={16} strokeWidth={2.2} aria-hidden />
          Add another
        </button>
      )}
    </div>
  );
}
