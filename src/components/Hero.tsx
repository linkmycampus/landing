import { Clapperboard } from 'lucide-react';
import { useModal } from '../context/ModalContext';

const Hero = () => {
  const { openLoginModal } = useModal();

  return (
    <section className="hero" id="hero">
      <div className="hero-bg">
        <div className="hero-grid"></div>
        <div className="hero-orb hero-orb-1"></div>
        <div className="hero-orb hero-orb-2"></div>
      </div>

      <div className="hero-stage">
        <div className="hero-float hero-float--tl">
          <div className="hero-float-card-title">Anonymous</div>
          <div className="hero-float-card-name">Campus Confession</div>
          <div className="hero-float-card-role">OAU · 248 likes</div>
        </div>

        <div className="hero-float hero-float--tr">
          <div className="hero-float-card-title">Visible</div>
          <div className="hero-float-card-name">@ade_campus</div>
          <div className="hero-float-card-role">Faculty of Science · Verified</div>
        </div>

        <div className="hero-float hero-float--br hero-float-job">
          <Clapperboard size={18} className="hero-float-job-icon" strokeWidth={2} aria-hidden />
          <h4>Trending Reel</h4>
          <p>Hostel life · Block A</p>
          <p className="salary">1.2k views · 89 comments</p>
        </div>

        <div className="hero-center">
          <h1 className="hero-headline">
            Your Campus. <em>Your Voice.</em><br />
            Visible or Anonymous.
          </h1>

          <p className="hero-sub">
            LinkMyCampus is the mobile-first social network built for university students — share thoughts, join groups, post reels, and talk freely within your campus community. Launching first at Obafemi Awolowo University.
          </p>

          <div className="hero-ctas">
            <button type="button" className="cta-main" onClick={() => openLoginModal('student')}>
              Join OAU Campus
            </button>
            <a href="#what" className="cta-gold">
              See How It Works
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
