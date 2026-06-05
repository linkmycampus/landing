
const items = [
  'Faculty Groups',
  'Department Chats',
  'Class Communities',
  'Hostel Groups',
  'Campus Reels',
  'Anonymous Posts',
  'Interest Groups',
  'Student Orgs',
  'Campus Events',
  'Creator Hub',
];

const scrollItems = [...items, ...items];

const TrustBar = () => {
  return (
    <div className="trust-bar">
      <div className="trust-marquee-wrapper">
        <span className="trust-label-fixed">Built for</span>
        <div className="trust-divider-fixed"></div>
        <div className="trust-marquee-track">
          <div className="trust-marquee-inner">
            {scrollItems.map((item, i) => (
              <span key={i} className="trust-marquee-item">
                {item}
                <span className="trust-marquee-dot">·</span>
              </span>
            ))}
          </div>
          <div className="trust-marquee-inner" aria-hidden="true">
            {scrollItems.map((item, i) => (
              <span key={i} className="trust-marquee-item">
                {item}
                <span className="trust-marquee-dot">·</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrustBar;
