import { Link } from 'react-router-dom';
import marketFriends from '../../assets/photos/market-friends.jpg';
import marketBeanbag from '../../assets/photos/market-beanbag.jpg';
import marketTrio from '../../assets/photos/market-trio.jpg';
import { Reveal, SecHead } from './primitives';

const paths = [
  {
    title: 'Campus Ambassador',
    body: 'Represent LinkMyCampus at your school, host activations and grow a verified student community.',
    cta: 'Apply',
    to: '/ambassador',
    src: marketFriends,
  },
  {
    title: 'Campus Creator',
    body: 'Share campus stories and reels, build your audience and get featured across the network.',
    cta: 'Join as a creator',
    to: '/partners/creator',
    src: marketBeanbag,
  },
  {
    title: 'Media & Blog Partner',
    body: 'Campus magazines, blogs and media houses: distribute your stories through the network.',
    cta: 'Partner with us',
    to: '/partners/media',
    src: marketTrio,
  },
];


export default function CreatorsSection() {
  return (
    <section id="creators" aria-labelledby="creators-title" className="sec">
      <div className="wrap">
        <SecHead id="creators-title" title="Got a voice on campus?" subtitle="Make it louder.">
          LinkMyCampus works with ambassadors, creators and campus media to shape what students
          see. Pick a path and grow with the network.
        </SecHead>

        <Reveal className="grid gap-4 md:grid-cols-3">
          {paths.map(({ title, body, cta, to, src }) => (
            <Link
              key={title}
              to={to}
              className="tile group flex flex-col overflow-hidden p-2 transition-[transform,box-shadow] duration-[260ms] ease-[var(--ease)] hover:-translate-y-0.5 hover:shadow-[0_10px_24px_-14px_rgba(0,0,0,0.25)]"
            >
              <span className="block overflow-hidden rounded-[20px]">
                <img
                  src={src}
                  alt=""
                  className="aspect-[4/3] w-full object-cover transition-transform duration-700 ease-[var(--ease-out)] group-hover:scale-[1.04]"
                  loading="lazy"
                />
              </span>
              <span className="flex flex-1 flex-col px-4 pb-4 pt-5">
                <h3 className="t-title">{title}</h3>
                <p className="t-body mt-2 flex-1">{body}</p>
                <span className="btn-ring mt-8 w-fit group-hover:bg-brand group-hover:text-white">{cta}</span>
              </span>
            </Link>
          ))}
        </Reveal>

        <p className="mt-8 text-center text-[15px] text-muted">
          Faculty page moderators and onboarding team members too.{' '}
          <Link to="/partners" className="font-medium text-brand underline underline-offset-4">
            See all partner roles
          </Link>
        </p>
      </div>
    </section>
  );
}
