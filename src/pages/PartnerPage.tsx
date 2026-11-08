import { useState } from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import { Building2, Download, GraduationCap, Newspaper, Smartphone, Sparkles, Users } from 'lucide-react';
import { BRAND, BRAND_ICON } from '../config/iconColors';
import FormPageLayout from '../components/forms/FormPageLayout';
import PartnerFlow from '../components/partners/PartnerFlow';
import { PROGRAMS, type Program } from '../config/partners';
import marketFriends from '../assets/photos/market-friends.jpg';
import marketBeanbag from '../assets/photos/market-beanbag.jpg';
import marketTrio from '../assets/photos/market-trio.jpg';
import campusEvent from '../assets/photos/campus-event.jpg';
import friendsAmphitheatre from '../assets/photos/friends-amphitheatre.jpg';

const PHOTOS: Record<string, string> = {
  ambassador: marketFriends,
  'og-creator': marketBeanbag,
  'departmental-creator': marketBeanbag,
  'faculty-page-moderator': friendsAmphitheatre,
  'onboarding-team-member': campusEvent,
  media: marketTrio,
};

function ProgramPage({ program, onExit }: { program: Program; onExit?: () => void }) {
  return (
    <FormPageLayout
      title={program.pageTitle}
      description={program.pageDescription}
      photo={PHOTOS[program.slug] ?? marketFriends}
      photoAlt="Students together on campus"
    >
      <PartnerFlow key={program.slug} program={program} onExit={onExit} />
    </FormPageLayout>
  );
}

const CHOICES = [
  {
    slug: 'og-creator',
    tag: '10 spots at launch',
    line: 'Make content for every OAU student.',
    dark: true,
    color: BRAND_ICON,
    Icon: Sparkles,
  },
  {
    slug: 'departmental-creator',
    tag: '2 per department',
    line: 'Make content for your own department.',
    dark: false,
    color: BRAND_ICON,
    Icon: GraduationCap,
  },
] as const;

function ChoiceCard({ c, onPick }: { c: (typeof CHOICES)[number]; onPick: () => void }) {
  const program = PROGRAMS[c.slug];
  return (
    <div
      className={`group relative overflow-hidden rounded-[24px] p-5 transition-transform duration-300 hover:-translate-y-0.5 ${
        c.dark ? 'bg-brand text-white' : ''
      }`}
      style={c.dark ? undefined : { background: BRAND.purpleSoft }}
    >
      <span
        className="inline-block rounded-full px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-[0.08em]"
        style={c.dark ? { background: '#fff', color: BRAND.purple } : { background: BRAND.purple, color: '#fff' }}
      >
        {c.tag}
      </span>
      <h3 className={`mt-4 font-display text-[24px] font-semibold tracking-[-0.025em] ${c.dark ? 'text-white' : 'text-ink'}`}>
        {program.name}
      </h3>
      <p className={`mt-1 text-[15px] ${c.dark ? 'text-white/70' : 'text-muted'}`}>{c.line}</p>
      <div className="relative mt-6 flex flex-wrap items-center gap-3">
        <button
          type="button"
          onClick={onPick}
          className={`btn ring-glow ${c.dark ? '!bg-white !text-ink hover:!bg-[#ececf0]' : ''}`}
        >
          Read and sign
        </button>
        {program.pdf && (
          <a
            href={program.pdf}
            download
            className={`ring-glow inline-flex h-12 items-center gap-1.5 rounded-full px-4 text-[13.5px] font-semibold ${
              c.dark ? 'bg-white/10 text-white hover:bg-white/15' : 'bg-white text-ink hover:bg-white/80'
            }`}
          >
            <Download size={15} strokeWidth={2} aria-hidden />
            PDF
          </a>
        )}
      </div>
    </div>
  );
}

/** "Join as a creator": pick O.G or Departmental, then go through that agreement. */
export function CreatorPage() {
  const [pick, setPick] = useState<string | null>(null);
  if (pick) return <ProgramPage program={PROGRAMS[pick]} onExit={() => setPick(null)} />;

  return (
    <FormPageLayout
      title="Become a Campus Creator."
      description="Make videos on LinkMyCampus and earn sponsorship for your own brand. Pick the creator type that fits you."
      photo={marketBeanbag}
      photoAlt="A student relaxing at a campus market day"
      note="No cash is paid to creators. You earn sponsorship vouchers instead."
    >
      <h2 className="font-display text-[clamp(1.75rem,1.3rem+1.5vw,2.3rem)] font-semibold leading-[1.05] tracking-[-0.03em] text-ink">
        Which creator are you?
      </h2>
      <p className="t-body mt-2">Both earn 1 sponsorship voucher for every 15 qualifying videos.</p>
      <div className="mt-7 grid gap-3">
        {CHOICES.map((c) => (
          <ChoiceCard key={c.slug} c={c} onPick={() => setPick(c.slug)} />
        ))}
      </div>
    </FormPageLayout>
  );
}
/** /partners/:slug */
export function ProgramRoute() {
  const { slug = '' } = useParams();
  if (slug === 'creator') return <CreatorPage />;
  if (slug === 'ambassador') return <Navigate to="/ambassador" replace />;
  const program = PROGRAMS[slug];
  if (!program) return <Navigate to="/partners" replace />;
  return <ProgramPage program={program} />;
}

export function AmbassadorRoute() {
  return <ProgramPage program={PROGRAMS.ambassador} />;
}

const HUB = [
  { to: '/ambassador', slug: 'ambassador', Icon: Users, color: BRAND_ICON, perk: 'Certificate after 6 months' },
  {
    to: '/partners/creator',
    slug: 'og-creator',
    name: 'Campus Creator',
    blurb: 'O.G and Departmental Creators. Make videos and earn sponsorship for your brand.',
    Icon: Sparkles,
    color: BRAND_ICON,
    perk: 'Sponsorship vouchers',
  },
  { to: '/partners/faculty-page-moderator', slug: 'faculty-page-moderator', Icon: Building2, color: BRAND_ICON, perk: 'Sponsorship vouchers' },
  { to: '/partners/onboarding-team-member', slug: 'onboarding-team-member', Icon: Smartphone, color: BRAND_ICON, perk: 'NGN 50 per user' },
  { to: '/partners/media', slug: 'media', Icon: Newspaper, color: BRAND_ICON, perk: 'Up to NGN 50,000' },
];

/** /partners: every way to work with LinkMyCampus. */
export function PartnersHub() {
  return (
    <section className="pb-[clamp(72px,10vw,144px)] pt-[clamp(24px,4vw,56px)]">
      <div className="wrap">
        <h1 className="display max-w-[12em]">Work with LinkMyCampus.</h1>
        <p className="lede mt-4 max-w-[32em]">
          Pick a role, read the agreement and sign it here. You can also download each agreement as a PDF.
        </p>
        <ul className="mt-10 grid gap-3 md:grid-cols-2 lg:grid-cols-3">
          {HUB.map((h, i) => {
            const p = PROGRAMS[h.slug];
            return (
              <li key={h.to} className={`stagger-in ${i === 0 ? 'lg:col-span-2' : ''}`} style={{ animationDelay: `${i * 70}ms` }}>
                <Link
                  to={h.to}
                  className="group relative flex h-full min-h-[220px] flex-col overflow-hidden rounded-[24px] p-6 transition-transform duration-300 hover:-translate-y-1"
                  style={{ background: 'var(--bg-2)' }}
                >
                  <h.Icon size={26} strokeWidth={1.7} style={{ color: h.color.fg }} aria-hidden />
                  <span className="relative mt-auto pt-8">
                    <span className="block font-display text-[22px] font-semibold tracking-[-0.025em] text-ink">{h.name ?? p.name}</span>
                    <span className="mt-1 block max-w-[30em] text-[14.5px] leading-relaxed text-ink/65">{h.blurb ?? p.pageDescription}</span>
                    <span
                      className="mt-4 inline-block rounded-full bg-brand px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-[0.08em] text-white"
                    >
                      {h.perk}
                    </span>
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
