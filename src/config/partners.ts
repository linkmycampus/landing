/*
  Partner programmes and their agreements.

  Agreement terms must match the signed PDF deal sheets word for word.
  If a deal sheet changes, bump its `version` so partners sign the new one.

  Fill in `community` links (e.g. WhatsApp group invites) when they are ready.
  Until a link is set, the welcome screen tells people the link will be sent to them.
*/

export type IconName =
  | 'award'
  | 'megaphone'
  | 'message'
  | 'shirt'
  | 'users'
  | 'certificate'
  | 'shield'
  | 'file'
  | 'video'
  | 'ticket'
  | 'repeat'
  | 'clock'
  | 'phone'
  | 'userPlus'
  | 'wallet'
  | 'ban'
  | 'building'
  | 'newspaper';

export type Item = { icon: IconName; text: string; /** Shown as a badge; the item gets a standout card. */ badge?: string };

export type Field = {
  id: string;
  label: string;
  type?: 'text' | 'email' | 'tel' | 'url' | 'select' | 'textarea';
  placeholder?: string;
  autoComplete?: string;
  options?: readonly (readonly [string, string])[];
  required?: boolean;
};

export type Term = { title: string; body: string };

export type Program = {
  slug: string;
  /** Short role name, e.g. "O.G Creator". */
  name: string;
  /** Who signs, as printed on the agreement, e.g. "Creator". */
  signer: string;
  /** Agreement title, as printed on the PDF. */
  agreementTitle: string;
  /** Subtitle under the agreement title. */
  agreementSub: string;
  /** Version recorded with every signature. */
  version: string;
  pageTitle: string;
  pageDescription: string;
  /** Blank PDF of the agreement, for download. */
  pdf?: string;
  doing: Item[];
  get: Item[];
  expect: Item[];
  fields: Field[];
  /** Agreement terms. Null means no agreement yet: the flow ends at "Application received". */
  terms: Term[] | null;
  community: { label: string; url: string };
};

const base: Field[] = [
  { id: 'fullName', label: 'Full name', placeholder: 'Your full name', autoComplete: 'name' },
  { id: 'email', label: 'Email', type: 'email', placeholder: 'you@email.com', autoComplete: 'email' },
  { id: 'phone', label: 'WhatsApp number', type: 'tel', placeholder: '+234 …', autoComplete: 'tel' },
];

const handle: Field = { id: 'handle', label: 'Platform handle', placeholder: 'Your LinkMyCampus username' };
const faculty: Field = { id: 'faculty', label: 'Faculty', placeholder: 'e.g. Faculty of Technology' };

/* Creator terms 2–10 are shared by O.G and Departmental Creators. */
const creatorTerms: Term[] = [
  { title: 'Content', body: 'The Creator makes and posts videos on LMC following briefs supplied by the LMC team.' },
  {
    title: 'Reward',
    body: 'No cash is paid to Creators. The reward is sponsorship, earned through vouchers. Every 15 qualifying videos unlock 1 sponsorship voucher.',
  },
  {
    title: 'Qualifying video',
    body: 'A video qualifies when at least 45% of its viewers watched 65% or more of its length, as measured by LMC analytics.',
  },
  {
    title: 'Using a voucher',
    body: "A voucher sponsors the Creator's personal or business brand content on LMC, where it is shown to LMC users. It may be held until the Creator wants to use it, traded with other students, or given to a friend, provided the holder is a user on LMC.",
  },
  { title: 'Expiry', body: 'A voucher expires 21 days after it is unlocked. Expired vouchers cannot be used, traded or restored.' },
  { title: 'Limits', body: 'Sponsorship is a maximum of 4 posts per month, each running for 5 days. One voucher sponsors one post.' },
  {
    title: 'Records',
    body: 'LMC keeps the count of qualifying videos, unlock dates and expiry dates, and shows them to the Creator on request.',
  },
  {
    title: 'Conduct',
    body: 'No fake views, fake engagement or misleading content. Violations void unused vouchers and may end this agreement.',
  },
  {
    title: 'Duration',
    body: "From signing until either party ends it with 7 days' written notice. Qualifying videos made before signing do not count.",
  },
];

const creatorGet: Item[] = [
  { icon: 'ticket', text: '1 sponsorship voucher every 15 qualifying videos' },
  { icon: 'megaphone', text: 'Your brand sponsored to LMC users' },
  { icon: 'repeat', text: 'Hold, trade or gift your vouchers' },
];

const creatorExpect: Item[] = [
  { icon: 'file', text: 'Follow the LMC briefs' },
  { icon: 'shield', text: 'Real views and engagement only' },
  { icon: 'clock', text: 'Use vouchers within 21 days' },
];

export const PROGRAMS: Record<string, Program> = {
  ambassador: {
    slug: 'ambassador',
    name: 'Campus Ambassador',
    signer: 'Ambassador',
    agreementTitle: 'Ambassador agreement',
    agreementSub: 'Campus Ambassador programme',
    version: 'ambassador-v1',
    pageTitle: 'Become an ambassador.',
    pageDescription: 'Bring LinkMyCampus to your school and lead the community there.',
    doing: [
      { icon: 'award', text: 'Represent LinkMyCampus' },
      { icon: 'megaphone', text: 'Spread the word' },
      { icon: 'message', text: 'Share campus feedback' },
    ],
    get: [
      { icon: 'award', text: 'Official recognition' },
      { icon: 'shirt', text: 'Branded merchandise' },
      { icon: 'users', text: 'Events and networking' },
      { icon: 'certificate', text: 'Certificate of engagement', badge: 'After 6 months' },
    ],
    expect: [
      { icon: 'shield', text: 'Act professionally' },
      { icon: 'file', text: 'Follow brand guidelines' },
      { icon: 'message', text: 'Stay in touch' },
    ],
    fields: [
      ...base,
      { id: 'university', label: 'University', placeholder: 'e.g. Obafemi Awolowo University', autoComplete: 'organization' },
      {
        id: 'role',
        label: 'Role you want',
        type: 'select',
        options: [
          ['recruitment', 'Recruitment Ambassador'],
          ['content', 'Content Ambassador'],
          ['community', 'Community Ambassador'],
          ['event', 'Event Ambassador'],
          ['campus-lead', 'Campus Lead'],
        ],
      },
      { id: 'why', label: 'Why you?', type: 'textarea', placeholder: 'Your reach on campus, or ideas for the launch…' },
    ],
    terms: [
      { title: 'Role', body: 'You represent LinkMyCampus on your campus.' },
      { title: 'Conduct', body: 'Act professionally and respectfully.' },
      { title: 'Confidentiality', body: 'Keep confidential information private.' },
      { title: 'Brand', body: 'Follow brand guidelines. Make no unauthorised promises.' },
      { title: 'Benefits', body: 'Rewards vary by availability and performance.' },
      { title: 'Ending', body: 'Either side may end the partnership.' },
    ],
    community: { label: 'Join the ambassador community', url: '' },
  },

  'og-creator': {
    slug: 'og-creator',
    name: 'O.G Creator',
    signer: 'Creator',
    agreementTitle: 'O.G Creator Agreement',
    agreementSub: 'Content creator partnership, sponsorship voucher system',
    version: 'og-creator-v1',
    pageTitle: 'Become an O.G Creator.',
    pageDescription: 'Make content for every OAU student and earn sponsorship for your own brand.',
    pdf: '/agreements/og-creator.pdf',
    doing: [
      { icon: 'video', text: 'Make videos for all OAU students' },
      { icon: 'file', text: 'Follow briefs from the LMC team' },
      { icon: 'users', text: 'One of 10 O.G Creators at launch' },
    ],
    get: creatorGet,
    expect: creatorExpect,
    fields: [...base, handle],
    terms: [
      {
        title: 'Role',
        body: 'As an O.G Creator, the Creator makes general content for all OAU students. LMC works with 10 O.G Creators at launch and may add more.',
      },
      ...creatorTerms,
    ],
    community: { label: 'Join the creator community', url: '' },
  },

  'departmental-creator': {
    slug: 'departmental-creator',
    name: 'Departmental Creator',
    signer: 'Creator',
    agreementTitle: 'Departmental Creator Agreement',
    agreementSub: 'Content creator partnership, sponsorship voucher system',
    version: 'departmental-creator-v1',
    pageTitle: 'Become a Departmental Creator.',
    pageDescription: "Make content for your department's students and earn sponsorship for your own brand.",
    pdf: '/agreements/departmental-creator.pdf',
    doing: [
      { icon: 'video', text: "Make videos for your department's students" },
      { icon: 'file', text: 'Follow briefs from the LMC team' },
      { icon: 'users', text: 'One of 2 creators per department' },
    ],
    get: creatorGet,
    expect: creatorExpect,
    fields: [
      ...base,
      handle,
      { id: 'department', label: 'Department', placeholder: 'e.g. Computer Science' },
      faculty,
    ],
    terms: [
      {
        title: 'Role',
        body: "As a Departmental Creator, the Creator makes content for their own department's students. LMC works with 2 Departmental Creators per department and may add more.",
      },
      ...creatorTerms,
    ],
    community: { label: 'Join the creator community', url: '' },
  },

  'faculty-page-moderator': {
    slug: 'faculty-page-moderator',
    name: 'Faculty Page Moderator',
    signer: 'Moderator',
    agreementTitle: 'Faculty Page Moderator Agreement',
    agreementSub: 'Official faculty page on LMC, sponsorship voucher system',
    version: 'faculty-page-moderator-v1',
    pageTitle: 'Run your faculty page.',
    pageDescription: 'Create and manage the official LinkMyCampus page for your faculty.',
    pdf: '/agreements/faculty-page-moderator.pdf',
    doing: [
      { icon: 'building', text: 'Run the official faculty page' },
      { icon: 'megaphone', text: 'Post updates, events and videos' },
      { icon: 'userPlus', text: 'Bring faculty students onto LMC' },
    ],
    get: creatorGet,
    expect: [
      { icon: 'shield', text: 'Accurate and respectful posts' },
      { icon: 'clock', text: 'Keep the page active' },
      { icon: 'ticket', text: 'Use vouchers within 21 days' },
    ],
    fields: [...base, faculty],
    terms: [
      { title: 'Role', body: 'The Moderator creates and manages the official LMC page for their faculty.' },
      {
        title: 'Duties',
        body: 'Post faculty updates, events and videos, keep the page active and accurate, and bring students of the faculty onto LMC.',
      },
      {
        title: 'Reward',
        body: 'No cash is paid. The reward is sponsorship under the same voucher system as Creators: every 15 qualifying videos unlock 1 sponsorship voucher.',
      },
      {
        title: 'Qualifying video',
        body: 'A video qualifies when at least 45% of its viewers watched 65% or more of its length, as measured by LMC analytics.',
      },
      {
        title: 'Using a voucher',
        body: "A voucher sponsors the Moderator's personal or business brand content on LMC, shown to LMC users. It may be held, traded with other students, or given to a friend, provided the holder is a user on LMC.",
      },
      { title: 'Expiry', body: 'A voucher expires 21 days after it is unlocked. Expired vouchers cannot be used, traded or restored.' },
      { title: 'Limits', body: 'Sponsorship is a maximum of 4 posts per month, each running for 5 days. One voucher sponsors one post.' },
      {
        title: 'Conduct',
        body: 'Only accurate and respectful content may be posted on the page. LMC may remove a Moderator who misuses the page, and unused vouchers are then void.',
      },
      {
        title: 'Duration',
        body: "From signing until either party ends it with 7 days' written notice. Qualifying videos made before signing do not count.",
      },
    ],
    community: { label: 'Join the moderator community', url: '' },
  },

  'onboarding-team-member': {
    slug: 'onboarding-team-member',
    name: 'Onboarding Team Member',
    signer: 'Onboarding Team Member',
    agreementTitle: 'Onboarding Team Member Agreement',
    agreementSub: 'Campus user onboarding, pay per qualifying user',
    version: 'onboarding-team-member-v1',
    pageTitle: 'Join the onboarding team.',
    pageDescription: 'Help OAU students get on LinkMyCampus and earn for every student who joins.',
    pdf: '/agreements/onboarding-team-member.pdf',
    doing: [
      { icon: 'phone', text: 'Help students download LMC' },
      { icon: 'userPlus', text: 'Set up their accounts' },
      { icon: 'users', text: 'Onboard in person, on campus' },
    ],
    get: [
      { icon: 'wallet', text: 'NGN 50 per qualifying user' },
      { icon: 'repeat', text: 'No target and no upper limit' },
      { icon: 'clock', text: 'Paid weekly' },
    ],
    expect: [
      { icon: 'ban', text: 'No fake or duplicate accounts' },
      { icon: 'wallet', text: 'No paying users to sign up' },
      { icon: 'ticket', text: 'Onboard with your member code' },
    ],
    fields: base,
    terms: [
      {
        title: 'Role',
        body: 'The Member helps OAU students download LinkMyCampus (LMC) and set up their accounts, through physical and direct onboarding.',
      },
      { title: 'Payment', body: 'NGN 50 for every qualifying user. There is no individual target and no upper limit per Member.' },
      {
        title: 'Qualifying user',
        body: "A student onboarded through the Member's code who completes their profile, follows LMC's on-platform profiles (the last step of onboarding), and is active on at least 3 days within their first 7 days. Duplicate, fake and unattributable accounts do not count.",
      },
      {
        title: 'Onboarding budget',
        body: 'The onboarding budget is NGN 100,000 in total. A place in the budget is reserved when a user completes their profile. When the budget is fully reserved, all onboarding activity ends. Users already reserved are still paid once they qualify.',
      },
      { title: 'Payout', body: 'Paid weekly for users who have qualified by that date.' },
      {
        title: 'Tracking',
        body: "LMC gives the Member a unique Member ID and code. LMC's records are the basis for all counts, and the Member may request a weekly summary.",
      },
      {
        title: 'Conduct',
        body: 'No fake or duplicate accounts, and no paying users to sign up. Violations cancel all unpaid earnings and end this agreement.',
      },
      { title: 'Duration', body: 'From signing until the onboarding budget is used up or LMC ends the programme with notice.' },
    ],
    community: { label: 'Join the onboarding team', url: '' },
  },

  media: {
    slug: 'media',
    name: 'Media & Blog Partner',
    signer: 'Partner',
    agreementTitle: 'Media & Blog Partner Agreement',
    agreementSub: 'Campus media partnership',
    version: 'media-v0',
    pageTitle: 'Partner with us.',
    pageDescription: 'Campus magazines, blogs and media houses: distribute your stories through LinkMyCampus.',
    doing: [
      { icon: 'newspaper', text: 'Share your campus stories' },
      { icon: 'megaphone', text: 'Reach students across the network' },
      { icon: 'message', text: 'Cover campus life as it happens' },
    ],
    get: [
      { icon: 'users', text: 'A bigger student audience' },
      { icon: 'award', text: 'Official partner recognition' },
      { icon: 'ticket', text: 'Early access to campus events' },
    ],
    expect: [
      { icon: 'shield', text: 'Accurate, respectful reporting' },
      { icon: 'file', text: 'Follow brand guidelines' },
      { icon: 'message', text: 'Stay in touch' },
    ],
    fields: [
      ...base,
      { id: 'outlet', label: 'Media or blog name', placeholder: 'e.g. Campus Gist' },
      { id: 'link', label: 'Link to your page', type: 'url', placeholder: 'https://…' },
      { id: 'university', label: 'University', placeholder: 'e.g. Obafemi Awolowo University', autoComplete: 'organization' },
    ],
    terms: null,
    community: { label: 'Join the partner community', url: '' },
  },
};

/* Creator types offered when someone taps "Join as a creator". */
export const CREATOR_TYPES = ['og-creator', 'departmental-creator'] as const;

/* Where signed agreements are sent. Set VITE_PARTNER_SUBMIT_URL in Vercel. */
export const PARTNER_SUBMIT_URL: string = import.meta.env?.VITE_PARTNER_SUBMIT_URL ?? '';
