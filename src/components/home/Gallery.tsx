import marketStall from '../../assets/photos/market-stall.jpg';
import signoutDay from '../../assets/photos/signout-day.jpg';
import boysUnderTrees from '../../assets/photos/boys-under-trees.jpg';
import friendsLawn from '../../assets/photos/friends-lawn.jpg';
import { Reveal } from './primitives';

/* After the reference's "Club moments gallery": a loose collage with small captions. */
const shots = [
  { src: boysUnderTrees, cap: 'Campus gathering', ratio: 'aspect-[4/3]' },
  { src: signoutDay, cap: 'Sign-out day', ratio: 'aspect-[3/4]' },
  { src: marketStall, cap: 'Market day', ratio: 'aspect-[4/5]' },
  { src: friendsLawn, cap: 'Around campus', ratio: 'aspect-[4/3]' },
];

export default function Gallery() {
  return (
    <section id="moments" aria-labelledby="gallery-title" className="py-[clamp(56px,8vw,112px)]">
      <div className="wrap">
        <Reveal className="text-center">
          <h2 id="gallery-title" className="text-[clamp(2.25rem,1.5rem+2.4vw,3.75rem)] font-semibold leading-[1.04] tracking-[-0.015em]">
            Campus moments <span className="text-faint">gallery</span>
          </h2>
        </Reveal>

        <div className="mt-[clamp(40px,6vw,72px)] columns-2 gap-4 lg:columns-4">
          {shots.map((s, i) => (
            <Reveal key={s.cap} delay={(i % 3) * 90} className="mb-4 break-inside-avoid">
              <figure className={`unveil relative overflow-hidden rounded-[20px] ${s.ratio}`}>
                <img src={s.src} alt={s.cap} className="h-full w-full object-cover" loading="lazy" />
                <figcaption className="absolute bottom-3 left-3 rounded-full bg-white/85 px-3 py-1 text-[12px] font-medium text-ink backdrop-blur-md">
                  {s.cap}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
