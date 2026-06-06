import React from 'react';
import { Check } from 'lucide-react';

interface ApplyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ApplyModal: React.FC<ApplyModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className={`modal-overlay ${isOpen ? 'open' : ''}`} onClick={handleOverlayClick}>
      <div className="modal apply-modal">
        <button className="modal-close" onClick={onClose}>&times;</button>
        <h3 className="modal-title">Request Early Access</h3>
        <p className="modal-sub">Join the LinkMyCampus waitlist. We&apos;re launching first at Obafemi Awolowo University.</p>

        <div className="apply-checklist">
          <div className="apply-check">
            <div className="check-icon">
              <Check size={12} strokeWidth={2.5} aria-hidden />
            </div>
            <span>You are a current student at OAU (Obafemi Awolowo University)</span>
          </div>
          <div className="apply-check">
            <div className="check-icon">
              <Check size={12} strokeWidth={2.5} aria-hidden />
            </div>
            <span>You have a valid email address for account verification</span>
          </div>
          <div className="apply-check">
            <div className="check-icon">
              <Check size={12} strokeWidth={2.5} aria-hidden />
            </div>
            <span>You agree to our community guidelines and moderation policies</span>
          </div>
        </div>

        <div className="form-group">
          <label className="form-label">Full Name</label>
          <input type="text" className="form-input" placeholder="Your full name" />
        </div>
        <div className="form-group">
          <label className="form-label">Email</label>
          <input type="email" className="form-input" placeholder="you@email.com" />
        </div>
        <div className="form-group">
          <label className="form-label">Department / Faculty</label>
          <input type="text" className="form-input" placeholder="e.g. Computer Science, Faculty of Science" />
        </div>
        <div className="form-group">
          <label className="form-label">Matric Number (optional)</label>
          <input type="text" className="form-input" placeholder="For faster verification" />
        </div>

        <button className="form-submit" style={{ background: 'var(--gold)' }}>
          Join Waitlist
        </button>

        <p className="modal-footer">
          We&apos;ll notify you when your campus opens. OAU students first.
        </p>
      </div>
    </div>
  );
};

export default ApplyModal;
