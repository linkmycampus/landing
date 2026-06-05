import { Shield, EyeOff, Flag } from 'lucide-react';

const PrivacySecurity = () => {
  return (
    <section className="ai-section reveal">
      <div className="section-inner">
        <div className="ai-intro">
          <span className="section-kicker">// Privacy & Safety //</span>
          <h2 className="section-headline">
            Anonymous by Design. <br />
            <em>Protected by Moderation.</em>
          </h2>
          <p className="section-body">
            Anonymous platforms need strong safeguards. LinkMyCampus protects student privacy while keeping conversations respectful through reporting, filtering, and human review.
          </p>
        </div>

        <div className="ai-grid">
          <div>
            <div className="ai-features">
              <div className="ai-feature">
                <div className="ai-feature-icon">
                  <EyeOff className="lmc-icon" strokeWidth={1.75} aria-hidden />
                </div>
                <div className="ai-feature-content">
                  <h4 className="ai-feature-title">Anonymous Identity Protection</h4>
                  <p className="ai-feature-body">
                    Anonymous posts show no identifiable user information. Anonymous activity is never publicly linked to your visible profile.
                  </p>
                </div>
              </div>

              <div className="ai-feature">
                <div className="ai-feature-icon">
                  <Shield className="lmc-icon" strokeWidth={1.75} aria-hidden />
                </div>
                <div className="ai-feature-content">
                  <h4 className="ai-feature-title">Secure Authentication</h4>
                  <p className="ai-feature-body">
                    Campus verification and secure sign-in ensure only verified students access your university network.
                  </p>
                </div>
              </div>

              <div className="ai-feature">
                <div className="ai-feature-icon">
                  <Flag className="lmc-icon" strokeWidth={1.75} aria-hidden />
                </div>
                <div className="ai-feature-content">
                  <h4 className="ai-feature-title">Moderation Safeguards</h4>
                  <p className="ai-feature-body">
                    Content reporting, automated filtering, and manual moderation review work together to prevent abuse and protect the community.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="ai-visual">
            <div className="ai-terminal">
              <div className="terminal-bar">
                <div className="terminal-dot t-red"></div>
                <div className="terminal-dot t-yellow"></div>
                <div className="terminal-dot t-green"></div>
                <span className="terminal-title">linkmycampus-moderation</span>
              </div>
              <div className="terminal-body">
                <div className="t-line t-comment"># Processing anonymous post...</div>
                <div className="t-line">
                  <span className="t-key">const</span> <span className="t-val">post</span> = Campus.createPost(<span className="t-str">&quot;mode: anonymous&quot;</span>);
                </div>
                <div className="t-line">
                  <span className="t-key">const</span> <span className="t-val">user</span> = Auth.verifyStudent(<span className="t-str">&quot;oau_verified&quot;</span>);
                </div>
                <div className="t-line">&nbsp;</div>
                <div className="t-line t-comment"># Privacy checks</div>
                <div className="t-line">
                  &gt; Identity Exposure: <span className="t-pass">[PASS] Hidden</span>
                </div>
                <div className="t-line">
                  &gt; Profile Link: <span className="t-pass">[PASS] Not linked</span>
                </div>
                <div className="t-line">
                  &gt; Content Filter: <span className="t-pass">[PASS] Clean</span>
                </div>
                <div className="t-line">&nbsp;</div>
                <div className="t-line">
                  <span className="t-val">Status:</span> <span className="t-str">Published to OAU feed</span>
                </div>
                <div className="t-line">
                  &gt; <span className="t-key">Moderation:</span> Report queue active.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrivacySecurity;
