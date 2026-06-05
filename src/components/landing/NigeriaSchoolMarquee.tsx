const nigeriaSchools = [
  { name: 'Obafemi Awolowo University', short: 'OAU' },
  { name: 'University of Lagos', short: 'UNILAG' },
  { name: 'University of Ibadan', short: 'UI' },
  { name: 'Ahmadu Bello University', short: 'ABU' },
  { name: 'University of Nigeria, Nsukka', short: 'UNN' },
  { name: 'University of Benin', short: 'UNIBEN' },
  { name: 'Federal University of Technology, Akure', short: 'FUTA' },
  { name: 'Lagos State University', short: 'LASU' },
  { name: 'Nnamdi Azikiwe University', short: 'UNIZIK' },
  { name: 'Bayero University Kano', short: 'BUK' },
  { name: 'Covenant University', short: 'CU' },
  { name: 'Babcock University', short: 'BU' },
] as const;

const marqueeItems = [...nigeriaSchools, ...nigeriaSchools];

function SchoolLogo({ short }: { short: string }) {
  return (
    <span className="school-marquee-logo" aria-hidden>
      <svg viewBox="0 0 40 40" className="h-10 w-10" fill="none">
        <circle cx="20" cy="20" r="18" stroke="currentColor" strokeWidth="1.5" />
        <path
          d="M20 8 L28 14 V26 L20 32 L12 26 V14 Z"
          stroke="currentColor"
          strokeWidth="1.25"
          strokeLinejoin="round"
        />
      </svg>
      <span className="school-marquee-logo-text">{short}</span>
    </span>
  );
}

export default function NigeriaSchoolMarquee() {
  return (
    <section
      className="school-marquee border-y border-border bg-white py-8 md:py-10"
      aria-label="Nigerian universities on LinkMyCampus"
    >
      <div className="school-marquee-track">
        <div className="school-marquee-inner">
          {marqueeItems.map((school, index) => (
            <div key={`${school.short}-${index}`} className="school-marquee-item">
              <SchoolLogo short={school.short} />
              <span className="school-marquee-name">{school.name}</span>
            </div>
          ))}
        </div>
        <div className="school-marquee-inner" aria-hidden="true">
          {marqueeItems.map((school, index) => (
            <div key={`dup-${school.short}-${index}`} className="school-marquee-item">
              <SchoolLogo short={school.short} />
              <span className="school-marquee-name">{school.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
