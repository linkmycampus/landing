/*
  Clean addresses for homepage sections, e.g. linkmycampus.com/creators instead of /#creators.
  Each one opens the homepage and scrolls to that section. Key = address, value = section id.
*/
export const SECTIONS: Record<string, string> = {
  story: 'story',
  features: 'features',
  campus: 'moments',
  creators: 'creators',
  faq: 'faq',
};

/** "/creators" -> "creators" (the section id), or null for any other page. */
export function sectionFor(pathname: string): string | null {
  const key = pathname.replace(/^\/+|\/+$/g, '');
  return SECTIONS[key] ?? null;
}

/** Scrolls smoothly to a homepage section, below the sticky header. */
export function scrollToSection(id: string, smooth = true) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: smooth ? 'smooth' : 'instant', block: 'start' });
  return !!el;
}
