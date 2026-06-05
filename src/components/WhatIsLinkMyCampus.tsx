
const WhatIsLinkMyCampus = () => {
  return (
    <section id="what" className="reveal">
      <div className="section-inner">
        <div className="section-intro">
          <span className="section-kicker">// About LinkMyCampus //</span>
          <h2 className="section-headline">
            Campus Social, <em>Reimagined.</em>
          </h2>
          <p className="section-body">
            Students need a safe digital space to express thoughts about campus life — without judgment from parents, faculty, or administration. LinkMyCampus is a campus-restricted network with a dual identity system: post as yourself or stay completely anonymous.
          </p>
        </div>

        <div className="what-grid">
          <div className="what-visual">
            <div className="what-float-tag float-top-right">Campus Verified</div>
            <div className="what-float-tag float-bottom-left">Dual Profile</div>

            <div className="what-card">
              <div className="what-card-header">
                <div className="status-dot"></div>
                <span className="what-card-title">Profile Modes</span>
              </div>
              <div className="match-rows">
                <div className="match-row">
                  <div className="match-left">
                    <div className="match-avatar">VC</div>
                    <div>
                      <div className="match-name">Visible Profile</div>
                      <div className="match-role">Photo · Username · Campus</div>
                    </div>
                  </div>
                  <div className="match-score">
                    <div className="score-bar"><div className="score-fill" style={{ width: '100%' }}></div></div>
                    <span className="score-num">On</span>
                  </div>
                </div>

                <div className="match-row">
                  <div className="match-left">
                    <div className="match-avatar" style={{ background: 'var(--deep)' }}>??</div>
                    <div>
                      <div className="match-name">Anonymous Profile</div>
                      <div className="match-role">No identity shown</div>
                    </div>
                  </div>
                  <div className="match-score">
                    <div className="score-bar"><div className="score-fill" style={{ width: '100%' }}></div></div>
                    <span className="score-num">On</span>
                  </div>
                </div>

                <div className="match-row">
                  <div className="match-left">
                    <div className="match-avatar" style={{ background: 'var(--muted)' }}>OAU</div>
                    <div>
                      <div className="match-name" style={{ color: 'var(--muted)' }}>Campus Scope</div>
                      <div className="match-role">Obafemi Awolowo University</div>
                    </div>
                  </div>
                  <div className="match-score">
                    <div className="score-bar"><div className="score-fill" style={{ width: '100%', background: 'var(--teal)' }}></div></div>
                    <span className="score-num" style={{ color: 'var(--teal)' }}>Live</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="what-content">
            <p className="section-body" style={{ fontSize: '15px' }}>
              Toggle between visible and anonymous profiles when you post or interact. Anonymous activity is never publicly linked to your visible profile — your identity stays protected while moderation keeps the community safe.
            </p>
            <p className="section-body" style={{ fontSize: '15px' }}>
              Unlike generic social media, every conversation happens inside your verified campus. No outsiders, no noise — just students sharing campus life, joining groups, and discovering reels from people who actually get it.
            </p>

            <div className="what-stat-row">
              <div className="what-stat">
                <div className="stat-num">2</div>
                <div className="stat-label">Profile modes per user</div>
              </div>
              <div className="what-stat">
                <div className="stat-num">1</div>
                <div className="stat-label">Campus at launch (OAU)</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatIsLinkMyCampus;
