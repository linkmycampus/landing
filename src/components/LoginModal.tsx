import React, { useState } from 'react';

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialType?: 'student' | 'creator' | 'organization';
}

const LoginModal: React.FC<LoginModalProps> = ({ isOpen, onClose, initialType = 'student' }) => {
  const [authMode, setAuthMode] = useState<'signin' | 'signup'>('signin');
  const [type, setType] = useState<'student' | 'creator' | 'organization'>(initialType);

  React.useEffect(() => {
    setType(initialType); // eslint-disable-line
  }, [initialType, isOpen]);

  if (!isOpen) return null;

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const toggleAuthMode = (e: React.MouseEvent) => {
    e.preventDefault();
    setAuthMode(prev => prev === 'signin' ? 'signup' : 'signin');
  };

  return (
    <div className={`modal-overlay ${isOpen ? 'open' : ''}`} onClick={handleOverlayClick}>
      <div className="modal">
        <button className="modal-close" onClick={onClose}>&times;</button>

        <h3 className="modal-title">
          {authMode === 'signin' ? 'Sign in to LinkMyCampus' : 'Create your account'}
        </h3>
        <p className="modal-sub">
          Choose how you&apos;ll use the platform.
        </p>

        <div className="modal-type-toggle">
          <button
            className={`type-btn ${type === 'student' ? 'active' : ''}`}
            onClick={() => setType('student')}
          >
            Student
          </button>
          <button
            className={`type-btn ${type === 'creator' ? 'active' : ''}`}
            onClick={() => setType('creator')}
          >
            Creator
          </button>
          <button
            className={`type-btn ${type === 'organization' ? 'active' : ''}`}
            onClick={() => setType('organization')}
          >
            Organization
          </button>
        </div>

        <div className="form-group">
          <label className="form-label">Email Address</label>
          <input type="email" className="form-input" placeholder="your@university.edu" />
        </div>

        <div className="form-group">
          <label className="form-label">Password</label>
          <input type="password" className="form-input" placeholder="Your password" />
        </div>

        <button className="form-submit">
          Continue with Email
        </button>

        <div className="auth-divider">
          <div className="auth-divider-line"></div>
          <span className="auth-divider-text">or continue with</span>
          <div className="auth-divider-line"></div>
        </div>

        <div className="social-auth-btns">
          <button className="social-btn">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M17.64 9.205c0-.639-.057-1.252-.164-1.841H9v3.481h4.844a4.14 4.14 0 0 1-1.796 2.716v2.259h2.908c1.702-1.567 2.684-3.875 2.684-6.615z" fill="#4285F4"/>
              <path d="M9 18c2.43 0 4.467-.806 5.956-2.18l-2.908-2.259c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.036-3.711H.957v2.332A8.997 8.997 0 0 0 9 18z" fill="#34A853"/>
              <path d="M3.964 10.71A5.41 5.41 0 0 1 3.682 9c0-.593.102-1.17.282-1.71V4.958H.957A8.996 8.996 0 0 0 0 9c0 1.452.348 2.827.957 4.042l3.007-2.332z" fill="#FBBC05"/>
              <path d="M9 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.463.891 11.426 0 9 0A8.997 8.997 0 0 0 .957 4.958L3.964 7.29C4.672 5.163 6.656 3.58 9 3.58z" fill="#EA4335"/>
            </svg>
            Google
          </button>
          <button className="social-btn">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M14.03 9.57c-.02-2.1 1.72-3.1 1.8-3.16-1-1.44-2.53-1.63-3.07-1.65-1.3-.13-2.55.77-3.21.77-.67 0-1.7-.75-2.8-.73-1.44.02-2.77.84-3.51 2.13-1.5 2.6-.38 6.45 1.07 8.56.72 1.03 1.57 2.19 2.69 2.15 1.08-.05 1.49-.7 2.8-.7 1.3 0 1.67.7 2.81.67 1.16-.02 1.9-1.05 2.6-2.08.83-1.19 1.17-2.35 1.19-2.41-.03-.01-2.27-.87-2.3-3.45z" fill="#1A1F2E"/>
              <path d="M11.9 3.27c.59-.73.99-1.74.88-2.75-.85.04-1.9.57-2.5 1.28-.55.63-1.03 1.65-.9 2.62.94.07 1.91-.48 2.52-1.15z" fill="#1A1F2E"/>
            </svg>
            Apple
          </button>
        </div>

        <p className="modal-footer">
          {authMode === 'signin' ? (
            <>Don&apos;t have an account? <a href="#" onClick={toggleAuthMode}>Create one free</a></>
          ) : (
            <>Already have an account? <a href="#" onClick={toggleAuthMode}>Sign in</a></>
          )}
        </p>
      </div>
    </div>
  );
};

export default LoginModal;
