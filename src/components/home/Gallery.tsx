import foodTruck from '../../assets/photos/food-truck.jpg';
import graduatesGarden from '../../assets/photos/graduates-garden.jpg';
import campusCrowd from '../../assets/photos/campus-crowd.jpg';
import campusPharmacy from '../../assets/photos/campus-pharmacy.jpg';
import { Reveal } from './primitives';

/* After the reference's "Club moments gallery": a loose collage with small captions. */
const shots = [
  { src: campusCrowd, cap: 'Matriculation day', ratio: 'aspect-[4/3]' },
  { src: graduatesGarden, cap: 'Convocation', ratio: 'aspect-[3/4]' },
  { src: foodTruck, cap: 'Campus eats', ratio: 'aspect-[4/5]' },
  { src: campusPharmacy, cap: 'Around campus', ratio: 'aspect-[4/3]' },
];

export default function Gallery() {
  return (
    <section id="moments" aria-labelledby="gallery-title" className="py-[clamp(56px,8vw,112px)]">
      <div className="wrap">
        <Reveal className="text-center">
          <h2 id="gallery-title" className="text-[clamp(2.25rem,1.5rem+2.4vw,3.75rem)] font-semibold leading-[1.04] tracking-[-0.03em]">
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
