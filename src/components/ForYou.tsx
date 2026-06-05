import { useState } from 'react';
import {
  MessageCircle,
  Eye,
  Users,
  Clapperboard,
  Megaphone,
  Building2,
  Sparkles,
} from 'lucide-react';
import { useModal } from '../context/ModalContext';

type Tab = 'student' | 'creator' | 'organization';

const ForYou = () => {
  const [activeTab, setActiveTab] = useState<Tab>('student');
  const { openLoginModal } = useModal();

  return (
    <section id="for-you" className="for-section reveal">
      <div className="section-inner">
        <div className="section-intro">
          <span className="section-kicker">// Built For You //</span>
          <h2 className="section-headline">
            One Platform, <em>Every Campus Role.</em>
          </h2>
          <p className="section-body">
            Whether you want to vent anonymously, build your campus brand, or grow your student org — LinkMyCampus has a space for you.
          </p>
        </div>

        <div className="for-tabs">
          <button
            className={`for-tab ${activeTab === 'student' ? 'active' : ''}`}
            onClick={() => setActiveTab('student')}
          >
            Students
          </button>
          <button
            className={`for-tab ${activeTab === 'creator' ? 'active' : ''}`}
            onClick={() => setActiveTab('creator')}
          >
            Creators
          </button>
          <button
            className={`for-tab ${activeTab === 'organization' ? 'active' : ''}`}
            onClick={() => setActiveTab('organization')}
          >
            Organizations
          </button>
        </div>

        <div className="for-panels">
          <div className={`for-panel ${activeTab === 'student' ? 'active' : ''}`}>
            <div className="for-panel-grid">
              <div className="for-card">
                <div className="for-card-icon">
                  <MessageCircle className="lmc-icon" strokeWidth={1.75} aria-hidden />
                </div>
                <h4 className="for-card-title">Anonymous Conversations</h4>
                <p className="for-card-body">
                  Share thoughts about campus life without fear of judgment. Post anonymously — no profile photo, username, or link to your visible identity.
                </p>
              </div>

              <div className="for-card">
                <div className="for-card-icon">
                  <Eye className="lmc-icon" strokeWidth={1.75} aria-hidden />
                </div>
                <h4 className="for-card-title">Visible Social Profile</h4>
                <p className="for-card-body">
                  Build your campus presence with a profile photo, username, and public posts. Connect with classmates the way you want to be seen.
                </p>
              </div>

              <div className="for-card">
                <div className="for-card-icon">
                  <Users className="lmc-icon" strokeWidth={1.75} aria-hidden />
                </div>
                <h4 className="for-card-title">Groups & Communities</h4>
                <p className="for-card-body">
                  Join faculty, departmental, class, and hostel groups. Find your people and keep discussions focused on what matters on campus.
                </p>
              </div>

              <div className="for-card">
                <div className="for-card-icon">
                  <Clapperboard className="lmc-icon" strokeWidth={1.75} aria-hidden />
                </div>
                <h4 className="for-card-title">Campus Reels</h4>
                <p className="for-card-body">
                  Create and discover short-form video from students around you. Engage with likes, comments, and shares on content built for your campus.
                </p>
              </div>
            </div>

            <div className="for-cta-row">
              <button className="cta-white" type="button" onClick={() => openLoginModal('student')}>
                Create Student Account
              </button>
              <a href="#how" className="cta-outline-white">See how it works</a>
            </div>
          </div>

          <div className={`for-panel ${activeTab === 'creator' ? 'active' : ''}`}>
            <div className="for-panel-grid">
              <div className="for-card">
                <div className="for-card-icon">
                  <Sparkles className="lmc-icon" strokeWidth={1.75} aria-hidden />
                </div>
                <h4 className="for-card-title">Grow Your Campus Brand</h4>
                <p className="for-card-body">
                  Student influencers and creators can post reels, build followings, and spark viral campus discussions — all within a verified student audience.
                </p>
              </div>

              <div className="for-card">
                <div className="for-card-icon">
                  <Clapperboard className="lmc-icon" strokeWidth={1.75} aria-hidden />
                </div>
                <h4 className="for-card-title">Reels-First Discovery</h4>
                <p className="for-card-body">
                  Vertical video optimized for engagement. Your creativity reaches students who actually attend your university — not random strangers online.
                </p>
              </div>
            </div>
            <div className="for-cta-row">
              <button className="cta-white" type="button" onClick={() => openLoginModal('creator')}>
                Join as Creator
              </button>
            </div>
          </div>

          <div className={`for-panel ${activeTab === 'organization' ? 'active' : ''}`}>
            <div className="for-panel-grid">
              <div className="for-card">
                <div className="for-card-icon">
                  <Building2 className="lmc-icon" strokeWidth={1.75} aria-hidden />
                </div>
                <h4 className="for-card-title">Reach Your Campus</h4>
                <p className="for-card-body">
                  Student organizations use LinkMyCampus to announce events, recruit members, and host group discussions — directly where students already spend time.
                </p>
              </div>

              <div className="for-card">
                <div className="for-card-icon">
                  <Megaphone className="lmc-icon" strokeWidth={1.75} aria-hidden />
                </div>
                <h4 className="for-card-title">Group Channels</h4>
                <p className="for-card-body">
                  Create dedicated group spaces for your org, faculty chapter, or initiative. Post updates, moderate discussions, and build membership on campus.
                </p>
              </div>
            </div>
            <div className="for-cta-row">
              <button className="cta-white" type="button" onClick={() => openLoginModal('organization')}>
                Register Organization
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForYou;
