import React, { useState } from 'react';
import LoginModal from './components/LoginModal';
import ApplyModal from './components/ApplyModal';
import BrandLogo from './components/BrandLogo';
import { useModal } from './context/ModalContext';

const Layout = ({ children }: { children: React.ReactNode }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const {
    isLoginOpen, closeLoginModal, loginType,
    isApplyOpen, closeApplyModal,
    openLoginModal
  } = useModal();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="min-h-screen relative">
      <nav>
        <div className="nav-inner">
          <a href="#" className="nav-logo">
            <div className="logo-mark">
              <BrandLogo size={22} />
            </div>
            <span className="logo-text">LinkMyCampus</span>
          </a>

          <ul className="nav-links">
            <li><a href="#what">About</a></li>
            <li><a href="#features">Features</a></li>
            <li><a href="#for-you">For You</a></li>
            <li><a href="#how">How It Works</a></li>
          </ul>

          <div className="nav-actions">
            <button className="btn-ghost" onClick={() => openLoginModal()}>Sign In</button>
            <button className="btn-primary" onClick={() => openLoginModal()}>Join Campus</button>
          </div>

          <button className="hamburger" onClick={toggleMobileMenu} aria-label="Menu">
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>

      <div className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}>
        <a href="#what" onClick={toggleMobileMenu}>About</a>
        <a href="#features" onClick={toggleMobileMenu}>Features</a>
        <a href="#for-you" onClick={toggleMobileMenu}>For You</a>
        <a href="#how" onClick={toggleMobileMenu}>How It Works</a>
        <div className="mobile-menu-login">
          <button
            onClick={() => { openLoginModal(); toggleMobileMenu(); }}
            style={{ background: 'var(--deep)', color: 'var(--ivory)', borderColor: 'var(--deep)', width: '100%', padding: '12px', borderRadius: '8px', fontWeight: 500 }}
          >
            Sign In
          </button>
          <button
            onClick={() => { openLoginModal(); toggleMobileMenu(); }}
            style={{ background: 'var(--gold)', color: 'white', borderColor: 'var(--gold)', width: '100%', padding: '12px', borderRadius: '8px', fontWeight: 500, marginTop: '8px' }}
          >
            Join Free
          </button>
        </div>
      </div>

      <main>
        {children}
      </main>

      <footer>
        <div className="footer-inner">
          <div className="footer-top">
            <div className="footer-brand">
              <a href="#" className="footer-logo">
                <div className="footer-logo-mark">
                  <BrandLogo size={18} />
                </div>
                <span className="footer-logo-text">LinkMyCampus</span>
              </a>
              <p className="footer-tagline">
                The campus social network where students connect visibly or anonymously — starting at OAU.
              </p>
            </div>

            <div>
              <p className="footer-col-title">Platform</p>
              <ul className="footer-links">
                <li><a href="#what">About</a></li>
                <li><a href="#features">Features</a></li>
                <li><a href="#for-you">For Students</a></li>
                <li><a href="#how">How It Works</a></li>
              </ul>
            </div>

            <div>
              <p className="footer-col-title">Community</p>
              <ul className="footer-links">
                <li><a href="#features">Home Feed</a></li>
                <li><a href="#features">Groups</a></li>
                <li><a href="#features">Reels</a></li>
                <li><a href="#for-you">Creators</a></li>
              </ul>
            </div>

            <div>
              <p className="footer-col-title">Company</p>
              <ul className="footer-links">
                <li><a href="#">About Us</a></li>
                <li><a href="#">Safety</a></li>
                <li><a href="#">Press</a></li>
                <li><a href="#">Contact</a></li>
              </ul>
            </div>
          </div>

          <div className="footer-bottom">
            <span className="footer-copy">&copy; {new Date().getFullYear()} LinkMyCampus. All rights reserved.</span>
            <div className="footer-legal">
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Service</a>
              <a href="#">Community Guidelines</a>
            </div>
          </div>
        </div>
      </footer>

      <LoginModal
        isOpen={isLoginOpen}
        onClose={closeLoginModal}
        initialType={loginType}
      />

      <ApplyModal
        isOpen={isApplyOpen}
        onClose={closeApplyModal}
      />
    </div>
  );
};

export default Layout;
