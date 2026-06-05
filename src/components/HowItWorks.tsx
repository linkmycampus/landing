
const HowItWorks = () => {
  return (
    <section id="how" className="how-section reveal">
      <div className="section-inner">
        <div className="section-intro">
          <span className="section-kicker">// How It Works //</span>
          <h2 className="section-headline">
            Sign Up. Verify. <em>Start Posting.</em>
          </h2>
          <p className="section-body">
            Getting on LinkMyCampus takes minutes. Campus verification keeps the community student-only, then you choose how you want to show up — visible or anonymous.
          </p>
        </div>

        <div className="how-steps">
          <div className="how-connector"></div>

          <div className="how-step">
            <div className="how-num"><span className="how-num-inner">1</span></div>
            <h4 className="how-step-title">Sign Up</h4>
            <p className="how-step-body">Create your account with secure authentication. Enter your student details to get started.</p>
          </div>

          <div className="how-step">
            <div className="how-num"><span className="how-num-inner">2</span></div>
            <h4 className="how-step-title">Campus Verification</h4>
            <p className="how-step-body">Verify you belong to your university. At launch, LinkMyCampus opens first to Obafemi Awolowo University students.</p>
          </div>

          <div className="how-step">
            <div className="how-num"><span className="how-num-inner">3</span></div>
            <h4 className="how-step-title">Build Your Profile</h4>
            <p className="how-step-body">Set up your visible profile with photo and username. Your anonymous profile is ready whenever you need it.</p>
          </div>

          <div className="how-step">
            <div className="how-num"><span className="how-num-inner">4</span></div>
            <h4 className="how-step-title">Join the Feed</h4>
            <p className="how-step-body">Enter your campus feed. Post, comment, join groups, and watch reels — toggle anonymous or visible anytime.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
