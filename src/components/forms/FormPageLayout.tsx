
type FormPageLayoutProps = {
  title: string;
  description: string;
  photo: string;
  photoAlt: string;
  /** Small line under the photo, e.g. "Open to all students in Nigeria." */
  note?: string;
  children: React.ReactNode;
};

export default function FormPageLayout({ title, description, photo, photoAlt, note, children }: FormPageLayoutProps) {
  return (
    <section className="pb-[clamp(72px,10vw,144px)] pt-[clamp(24px,4vw,56px)]">
      <div className="wrap grid items-start gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-[clamp(32px,5vw,88px)]">
        <div className="lg:sticky lg:top-24">
          <h1 className="display max-w-[11em]">
            <span className="hero-line">
              <span className="hero-line-in" style={{ animationDelay: '80ms' }}>
                {title}
              </span>
            </span>
          </h1>
          <p className="hero-fade lede mt-4 max-w-[28em]" style={{ animationDelay: '240ms' }}>
            {description}
          </p>

          <figure
            className="hero-fade mt-8 hidden overflow-hidden rounded-[24px] lg:block"
            style={{ animationDelay: '360ms' }}
          >
            <img src={photo} alt={photoAlt} className="kenburns aspect-[16/11] w-full object-cover" />
          </figure>
          {note && (
            <p className="hero-fade mt-4 hidden text-[13px] text-muted lg:block" style={{ animationDelay: '420ms' }}>
              {note}
            </p>
          )}
        </div>

        <div className="hero-fade card p-6 sm:p-8 md:p-10" style={{ animationDelay: '200ms' }}>
          {children}
        </div>
      </div>
    </section>
  );
}
