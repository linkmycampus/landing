import React, { useRef, useEffect, useCallback } from 'react';
import SectionWatermark from './SectionWatermark';

const testimonials = [
  {
    quote: "Finally a place to talk about campus life without everyone knowing it's me. The anonymous posts feel safe and the groups are actually useful.",
    name: 'Sarah L.',
    org: 'Director of Nursing, PrimeCare',
    initials: 'SL',
  },
  {
    quote: "I use my visible profile for reels and my anonymous one for the real talk. LinkMyCampus gets how students actually use social media.",
    name: 'David M.',
    org: 'Physical Therapist, Relocated to Texas',
    initials: 'DM',
  },
  {
    quote: "The integration meant candidates flowed directly into our ATS. Credential verification that used to take weeks now happens instantly.",
    name: 'Dr. Elena C.',
    org: 'Chief Medical Officer, HealthCore',
    initials: 'EC',
  },
  {
    quote: "I was matched with a role I genuinely wanted within 72 hours of completing my profile. No agency call, no CV black hole — just a direct offer.",
    name: 'Amara A.',
    org: 'Senior Consultant, NHS Trust London',
    initials: 'AA',
  },
  {
    quote: "Our faculty group blew up during exam season. Way better engagement than our WhatsApp groups ever had.",
    name: 'James R.',
    org: 'Head of HR, Meridian Health Group',
    initials: 'JR',
  },
];

// Triple the list so looping is seamless
const items = [...testimonials, ...testimonials, ...testimonials];

const Testimonials = () => {
  const trackRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number>(0);
  const isDragging = useRef(false);
  const isHovered = useRef(false);
  const startX = useRef(0);
  const scrollStart = useRef(0);
  const velocity = useRef(0);
  const lastX = useRef(0);
  const lastTime = useRef(0);

  // Auto-scroll speed (px per frame at 60fps)
  const SPEED = 0.6;

  const tick = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;

    if (!isDragging.current && !isHovered.current) {
      el.scrollLeft += SPEED;

      // Seamless loop: when we've scrolled past the first third, jump back
      const third = el.scrollWidth / 3;
      if (el.scrollLeft >= third * 2) {
        el.scrollLeft -= third;
      }
    }

    rafRef.current = requestAnimationFrame(tick); // eslint-disable-line
  }, []);

  useEffect(() => {
    // Seed the scroll position at the start of the second segment for clean looping
    const el = trackRef.current;
    if (el) {
      el.scrollLeft = el.scrollWidth / 3;
    }
    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, [tick]);

  /* ── Mouse drag handlers ── */
  const onMouseEnter = () => { isHovered.current = true; };
  const onMouseLeave = () => {
    isHovered.current = false;
    isDragging.current = false;
    trackRef.current!.style.cursor = 'grab';
  };

  const onMouseDown = (e: React.MouseEvent) => {
    isDragging.current = true;
    startX.current = e.pageX;
    scrollStart.current = trackRef.current!.scrollLeft;
    lastX.current = e.pageX;
    lastTime.current = Date.now();
    velocity.current = 0;
    trackRef.current!.style.cursor = 'grabbing';
    trackRef.current!.style.userSelect = 'none';
  };

  const onMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current) return;
    const el = trackRef.current!;
    const dx = e.pageX - startX.current;
    el.scrollLeft = scrollStart.current - dx;

    // Track velocity for momentum
    const now = Date.now();
    const dt = now - lastTime.current;
    if (dt > 0) {
      velocity.current = (lastX.current - e.pageX) / dt;
    }
    lastX.current = e.pageX;
    lastTime.current = now;

    // Loop correction while dragging
    const third = el.scrollWidth / 3;
    if (el.scrollLeft >= third * 2) el.scrollLeft -= third;
    if (el.scrollLeft < third * 0.5) el.scrollLeft += third;
  };

  const onMouseUp = () => {
    isDragging.current = false;
    trackRef.current!.style.cursor = 'grab';
    trackRef.current!.style.userSelect = '';
  };

  /* ── Touch support ── */
  const onTouchStart = (e: React.TouchEvent) => {
    isDragging.current = true;
    startX.current = e.touches[0].pageX;
    scrollStart.current = trackRef.current!.scrollLeft;
  };

  const onTouchMove = (e: React.TouchEvent) => {
    if (!isDragging.current) return;
    const el = trackRef.current!;
    const dx = e.touches[0].pageX - startX.current;
    el.scrollLeft = scrollStart.current - dx;
    const third = el.scrollWidth / 3;
    if (el.scrollLeft >= third * 2) el.scrollLeft -= third;
    if (el.scrollLeft < third * 0.5) el.scrollLeft += third;
  };

  const onTouchEnd = () => { isDragging.current = false; };

  return (
    <section className="testimonials-section reveal section-has-watermark">
      <SectionWatermark text="LinkMyCampus" />
      <div className="section-inner" style={{ paddingBottom: 0 }}>
        <div className="section-intro">
          <h2 className="section-headline">
            The people who've seen what a<br />
            real match <em>looks like.</em>
          </h2>
        </div>
      </div>

      {/* Slider track — full bleed */}
      <div
        ref={trackRef}
        className="testi-slider-track"
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={onMouseUp}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        {items.map((t, i) => (
          <div key={i} className="testi-card">
            <div className="testi-stars">
              {'★★★★★'.split('').map((s, j) => (
                <span key={j} className="star">{s}</span>
              ))}
            </div>
            <p className="testi-quote">"{t.quote}"</p>
            <div className="testi-author">
              <div className="testi-avatar">{t.initials}</div>
              <div>
                <div className="testi-name">{t.name}</div>
                <div className="testi-org">{t.org}</div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div style={{ height: '100px' }} />
    </section>
  );
};

export default Testimonials;
