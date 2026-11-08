import { Link } from 'react-router-dom';
import graduatesSeated from '../../assets/photos/graduates-seated.jpg';
import { Reveal } from './primitives';

/* After the reference's closing "Get in touch" block and dark contact band. */
export default function ClosingCTA() {
  return (
    <section aria-labelledby="cta-title" className="pb-[clamp(72px,10vw,144px)]">
      <div className="wrap">
        <Reveal className="grid items-center gap-10 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-[clamp(32px,5vw,96px)]">
          <div className="text-center lg:text-left">
            <h2 id="cta-title" className="text-[clamp(2.25rem,1.5rem+2.4vw,3.5rem)] font-semibold leading-[1.04] tracking-[-0.015em]">
              Your campus
              <span className="block text-faint">is waiting.</span>
            </h2>
            <dl className="mx-auto mt-8 grid max-w-sm gap-2 text-left lg:mx-0">
              {[
                ['Email', 'hello@linkmycampus.com', 'mailto:hello@linkmycampus.com'],
                ['Support', 'support@linkmycampus.com', 'mailto:support@linkmycampus.com'],
                ['Ambassadors', 'Apply to represent your school', '/ambassador'],
              ].map(([k, v, href]) => (
                <div key={k} className="flex items-baseline justify-between gap-4 rounded-[14px] bg-[#fbfbfc] px-4 py-3.5 shadow-[0_0_0_1px_rgba(0,0,0,0.05)]">
                  <dt className="text-[14px] text-muted">{k}</dt>
                  <dd className="text-right text-[14px]">
                    {href.startsWith('/') ? (
                      <Link to={href} className="inline-link">{v}</Link>
                    ) : (
                      <a href={href} className="inline-link">{v}</a>
                    )}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
          <figure className="unveil overflow-hidden rounded-[20px]">
            <img src={graduatesSeated} alt="Graduates at their convocation ceremony" className="aspect-[16/10] w-full object-cover" loading="lazy" />
          </figure>
        </Reveal>

        <Reveal className="relative mt-4 overflow-hidden rounded-[20px] bg-navy px-[clamp(20px,4vw,56px)] py-[clamp(32px,4vw,56px)] text-white">
          <div
            className="absolute inset-0 opacity-90"
            style={{
              background:
                'radial-gradient(60% 120% at 90% 0%, #6a45d6 0%, rgba(106,69,214,0) 60%), linear-gradient(175deg, #35167f 0%, #24105e 55%, #120a2c 100%)',
            }}
            aria-hidden
          />
          <div className="relative flex flex-col justify-between gap-6 md:flex-row md:items-center">
            <p className="text-[clamp(1.75rem,1.2rem+1.8vw,2.75rem)] font-display font-semibold leading-tight tracking-[-0.015em]">
              Open to all students. <span className="text-white/60">Join the waitlist.</span>
            </p>
            <div className="flex flex-wrap gap-3">
              <Link to="/waitlist" className="btn btn-light ring-glow">
                Join the waitlist
              </Link>
              <Link
                to="/ambassador"
                className="btn-ring btn-ring-dark h-12"
              >
                Become an ambassador
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
