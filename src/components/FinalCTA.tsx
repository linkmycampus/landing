import { useModal } from '../context/ModalContext';

const FinalCTA = () => {
  const { openLoginModal } = useModal();

  return (
    <section className="final-cta reveal">
      <div className="final-inner">
        <h2 className="final-headline">
          Ready to link<br />
          <em>your campus?</em>
        </h2>
        <p className="final-body">
          Be among the first OAU students on LinkMyCampus. Anonymous confessions, campus groups, and reels — all in one place.
        </p>
        <div className="final-ctas">
          <button className="cta-main" onClick={() => openLoginModal('student')}>
            Join OAU Campus
          </button>
          <a href="#features" className="cta-gold">
            Explore Features
          </a>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
