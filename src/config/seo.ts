import { sectionFor } from './sections';

/* Search and link-preview metadata for every page. The layout applies it on each route change. */

export const SITE_URL = 'https://www.linkmycampus.com';
export const SITE_NAME = 'LinkMyCampus';
export const OG_IMAGE = `${SITE_URL}/og-image.jpg`;

type PageMeta = { title: string; description: string; noindex?: boolean };

const DEFAULT_DESCRIPTION =
  'LinkMyCampus is the social app for university, polytechnic and college students in Nigeria. Campus Feed, Chat, Pages, Events and Reels in one place. Live more. Connect more.';

export const PAGE_META: Record<string, PageMeta> = {
  '/': {
    title: 'LinkMyCampus | Planet Campus, the social app for Nigerian students',
    description: DEFAULT_DESCRIPTION,
  },
  '/about': {
    title: 'Our story: Planet Campus | LinkMyCampus',
    description:
      'Every campus is a world of its own. LinkMyCampus is the digital home of Planet Campus: one place to discover what’s happening, find events, meet people and join communities.',
  },
  '/waitlist': {
    title: 'Join the waitlist | LinkMyCampus',
    description:
      'Get early access to LinkMyCampus at your school. Open to all students at universities, polytechnics and colleges in Nigeria.',
  },
  '/partners': {
    title: 'Partner with LinkMyCampus | LinkMyCampus',
    description: 'Become a Campus Ambassador, Creator, Faculty Page Moderator, Onboarding Team Member or Media Partner. Read the agreement and sign it online.',
  },
  '/partners/creator': {
    title: 'Become a Campus Creator | LinkMyCampus',
    description: 'O.G and Departmental Creators make videos on LinkMyCampus and earn sponsorship vouchers for their own brand.',
  },
  '/partners/og-creator': {
    title: 'O.G Creator agreement | LinkMyCampus',
    description: 'Make content for every OAU student on LinkMyCampus and earn sponsorship vouchers. Read and sign the agreement online.',
  },
  '/partners/departmental-creator': {
    title: 'Departmental Creator agreement | LinkMyCampus',
    description: "Make content for your department's students on LinkMyCampus and earn sponsorship vouchers. Read and sign the agreement online.",
  },
  '/partners/faculty-page-moderator': {
    title: 'Faculty Page Moderator | LinkMyCampus',
    description: 'Create and manage the official LinkMyCampus page for your faculty. Read and sign the agreement online.',
  },
  '/partners/onboarding-team-member': {
    title: 'Join the onboarding team | LinkMyCampus',
    description: 'Help OAU students get on LinkMyCampus and earn NGN 50 for every qualifying user. Read and sign the agreement online.',
  },
  '/partners/media': {
    title: 'Media & Blog Partner | LinkMyCampus',
    description: 'Campus media and blogs: promote LinkMyCampus to OAU students for 4 weeks and earn up to NGN 50,000.',
  },
  '/ambassador': {
    title: 'Become a campus ambassador | LinkMyCampus',
    description:
      'Bring LinkMyCampus to your school. Apply to be a campus ambassador and lead the student community at your university, polytechnic or college.',
  },
  '/privacy': {
    title: 'Privacy Policy | LinkMyCampus',
    description: 'How LinkMyCampus collects, uses and protects your information.',
  },
  '/terms': {
    title: 'Terms and Conditions | LinkMyCampus',
    description: 'The terms that govern your use of LinkMyCampus.',
  },
  '/community-standards': {
    title: 'Community Standards | LinkMyCampus',
    description: 'What we expect from every member of the LinkMyCampus community.',
  },
  '/delete-account': {
    title: 'Delete your account | LinkMyCampus',
    description: 'How to request deletion of your LinkMyCampus account and data.',
  },
  '/delete-data': {
    title: 'Delete your data | LinkMyCampus',
    description: 'How to request deletion of your LinkMyCampus data without closing your account.',
  },
};

export const FALLBACK_META: PageMeta = {
  title: 'Page not found | LinkMyCampus',
  description: DEFAULT_DESCRIPTION,
  noindex: true,
};

function setMeta(attr: 'name' | 'property', key: string, value: string) {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute('content', value);
}

/** Apply the title, description, canonical URL and social tags for a route. */
export function applyPageMeta(pathname: string) {
  // Section addresses like /creators are the homepage, so they share its title and canonical URL.
  const path = sectionFor(pathname) ? '/' : pathname.replace(/\/+$/, '') || '/';
  const meta = PAGE_META[path] ?? FALLBACK_META;
  const url = SITE_URL + (path === '/' ? '/' : path);

  document.title = meta.title;
  setMeta('name', 'description', meta.description);
  setMeta('name', 'robots', meta.noindex ? 'noindex, follow' : 'index, follow, max-image-preview:large');
  setMeta('property', 'og:title', meta.title);
  setMeta('property', 'og:description', meta.description);
  setMeta('property', 'og:url', url);
  setMeta('name', 'twitter:title', meta.title);
  setMeta('name', 'twitter:description', meta.description);

  let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  if (!canonical) {
    canonical = document.createElement('link');
    canonical.rel = 'canonical';
    document.head.appendChild(canonical);
  }
  canonical.href = url;
}
