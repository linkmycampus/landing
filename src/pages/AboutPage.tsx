import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

const metaRows = [
  { label: 'App version', value: '1.0.0' },
  { label: 'Release date', value: '2026-09-01' },
];

const legalLinks = [
  {
    title: 'Privacy Policy',
    caption: 'How we collect and use your data',
    to: '/privacy',
  },
  {
    title: 'Terms and Conditions',
    caption: 'Rules governing your use of LMC',
    to: '/terms',
  },
  {
    title: 'Community Standards',
    caption: 'What we expect from every member',
    to: '/community-standards',
  },
  {
    title: 'Delete account',
    caption: 'Request account and data deletion',
    to: '/delete-account',
  },
  {
    title: 'Delete data',
    caption: 'Request data deletion without closing your account',
    to: '/delete-data',
  },
];

/* The full brand story (from the CEO's "Planet Campus" document), as readable text for people and search engines. */
function BrandStory() {
  return (
    <section aria-labelledby="our-story" className="pb-[clamp(56px,8vw,112px)] pt-[clamp(32px,5vw,72px)]">
      <div className="wrap split items-start">
        <div className="lg:sticky lg:top-24">
          <h1 className="display max-w-[11em]">
            Planet Campus
            <span className="block text-faint">The place where campus life happens.</span>
          </h1>
          <p className="mt-8 font-display text-[15px] font-semibold tracking-[0.08em] text-brand">
            LIVE MORE. CONNECT MORE.
          </p>
        </div>

        <div id="our-story" className="prose-lmc max-w-[40em] text-[17px]">
          <p className="!text-ink">
            Every campus is more than a school. It is a world of its own, with its own people,
            culture, communities, opportunities, conversations, businesses, events, influencers,
            authorities and stories. We call it Planet Campus.
          </p>
          <p>
            Just as a country has governments, industries, companies and communities shaping what
            happens around us, Planet Campus has its own ecosystem: school management, student
            unions and associations, lecturers, clubs, campus businesses, event organisers,
            creators and students. Announcements, opportunities, conversations, trends and
            memories are created every single day.
          </p>

          <h2>But campus life is scattered</h2>
          <p>
            One event is posted on Instagram. An important announcement is buried in a WhatsApp
            group. An opportunity is shared in someone’s DM. A new community is discovered by
            accident. A campus business exists, but you don’t know about it. And sometimes, the
            best things happening on your campus are the things you never hear about.
          </p>
          <p>
            When you enter Planet Campus, you want to know what’s happening, what’s trending, what
            the school is saying, what events and opportunities are available, which communities
            you can join and who you can meet. Because you are not just attending a university.
            You are living in a world, and you deserve to experience it fully.
          </p>

          <h2>That’s why LinkMyCampus exists</h2>
          <p>
            LinkMyCampus is a place to discover what’s happening, find events, meet people, join
            communities, discover opportunities, support campus businesses, create experiences and
            share what is happening around you. Most importantly, it is a place to be part of your
            campus.
          </p>
          <p>
            University isn’t just about the classes you attend. It’s about the people you meet,
            the communities you become part of, the opportunities you find, the events you
            experience, the memories you create, and the stories you eventually tell.
          </p>
          <p>
            You shouldn’t have to know the right people to experience campus. You shouldn’t have
            to be in ten different WhatsApp groups to know what is happening. And you shouldn’t
            have to discover something after it’s over and hear, “Ah, you didn’t know?”
          </p>

          <h2>The digital home of Planet Campus</h2>
          <p>
            Not just another social platform. Not just another place to find events. A place where
            the people, information, opportunities, businesses, communities, conversations and
            experiences that make campus what it is come together. Because being on campus is one
            thing. Experiencing campus is another.
          </p>
          <p className="!text-ink">
            More experiences. More connections. More opportunities. More discoveries. More
            memories. Welcome to Planet Campus. Welcome to LinkMyCampus.
          </p>
        </div>
      </div>
    </section>
  );
}

export default function AboutPage() {
  return (
    <>
    <BrandStory />
    <section className="sec">
      <div className="wrap split items-start">
        <div className="lg:sticky lg:top-24">
          <h2 className="h2 max-w-[11em]">
            LinkMyCampus
            <span className="t2">The social app for your campus.</span>
          </h2>
          <p className="lede mt-5 max-w-[28em]">
            A campus feed, chat, Pages, events and reels, open to all students in Nigeria.
          </p>

          <dl className="mt-10 grid max-w-md gap-2">
            {metaRows.map((row) => (
              <div key={row.label} className="flex items-center justify-between rounded-[14px] bg-surface px-4 py-3.5">
                <dt className="text-[15px] text-muted">{row.label}</dt>
                <dd className="font-mono text-[13px] text-ink">{row.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div>
          <h2 className="t-title">Policies and requests</h2>
          <ul className="mt-5 grid gap-2">
            {legalLinks.map((item) => (
              <li key={item.to}>
                <Link to={item.to} className="group flex items-center justify-between gap-6 rounded-[18px] bg-surface px-5 py-4 transition-colors hover:bg-tile">
                  <span>
                    <span className="t-title block">{item.title}</span>
                    <span className="t-body mt-0.5 block">{item.caption}</span>
                  </span>
                  <ArrowUpRight
                    size={18}
                    strokeWidth={1.6}
                    className="shrink-0 text-muted transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-brand"
                  />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
    </>
  );
}
