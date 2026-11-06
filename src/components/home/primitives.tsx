import { useEffect, useRef, useState, type ReactNode } from 'react';

/**
 * Wraps each word of the headings inside `root` in a span so CSS can fade them in
 * one after another. Headings are static text, so touching their text nodes is safe.
 */
function splitHeadingWords(root: HTMLElement) {
  root.querySelectorAll<HTMLElement>('h2').forEach((h) => {
    if (h.dataset.split) return;
    h.dataset.split = '1';
    let i = 0;
    const walker = document.createTreeWalker(h, NodeFilter.SHOW_TEXT);
    const nodes: Text[] = [];
    while (walker.nextNode()) nodes.push(walker.currentNode as Text);
    nodes.forEach((node) => {
      const parts = (node.textContent ?? '').split(/(\s+)/);
      const frag = document.createDocumentFragment();
      parts.forEach((part) => {
        if (!part) return;
        if (/^\s+$/.test(part)) {
          frag.append(part);
          return;
        }
        const w = document.createElement('span');
        w.className = 'w';
        w.style.setProperty('--i', String(i++));
        w.textContent = part;
        frag.append(w);
      });
      node.replaceWith(frag);
    });
  });
}

/** Fades children up the first time they scroll into view. */
export function Reveal({
  children,
  className = '',
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    splitHeadingWords(el);
    if (!('IntersectionObserver' in window)) {
      el.classList.add('is-visible');
      return;
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('is-visible');
          io.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`reveal ${className}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  );
}

/** Section header: statement + greyed second line on the left, lede on the right. */
export function SecHead({
  id,
  title,
  subtitle,
  children,
}: {
  id: string;
  title: ReactNode;
  subtitle: ReactNode;
  children?: ReactNode;
}) {
  return (
    <Reveal className="sec-head">
      <h2 id={id} className="h2">
        {title}
        <span className="t2">{subtitle}</span>
      </h2>
      {children && <div className="lede md:pt-2">{children}</div>}
    </Reveal>
  );
}

/**
 * A real app screenshot in a slim device frame (screen fixed at 1:2, cropped from
 * the top). `card` renders shorter captures, like the feed, at their own ratio.
 */
export function PhoneFrame({
  src,
  alt,
  className = '',
  card = false,
}: {
  src: string;
  alt: string;
  className?: string;
  card?: boolean;
}) {
  if (card) {
    return (
      <div className={`card overflow-hidden p-1.5 ${className}`}>
        <img src={src} alt={alt} className="h-auto w-full rounded-[14px]" loading="lazy" decoding="async" />
      </div>
    );
  }

  return (
    <div className={`rounded-[2.4rem] bg-[#1d1d1f] p-[7px] shadow-[var(--shadow)] ${className}`}>
      <div className="relative aspect-[1/2] overflow-hidden rounded-[2rem] bg-white">
        <img
          src={src}
          alt={alt}
          className="absolute inset-0 h-full w-full object-cover object-top"
          loading="lazy"
          decoding="async"
        />
      </div>
    </div>
  );
}

/** Counts up to a value like "35" or "1.4k+" the first time it scrolls into view. */
export function CountUp({ value }: { value: string }) {
  const m = value.match(/^([\d.]+)(.*)$/);
  const target = m ? parseFloat(m[1]) : 0;
  const suffix = m ? m[2] : value;
  const decimals = m && m[1].includes('.') ? m[1].split('.')[1].length : 0;
  const ref = useRef<HTMLSpanElement>(null);
  const [n, setN] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el || !m) return;
    let reduce = false;
    try {
      reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    } catch {
      /* ignore */
    }
    if (reduce || !('IntersectionObserver' in window)) {
      setN(target);
      return;
    }
    let raf = 0;
    let done = 0;
    const dur = 1400;
    const io = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return;
      io.disconnect();
      const start = performance.now();
      const tick = (t: number) => {
        const p = Math.min(1, (t - start) / dur);
        setN(target * (1 - Math.pow(1 - p, 3)));
        if (p < 1) raf = requestAnimationFrame(tick);
      };
      raf = requestAnimationFrame(tick);
      // Safety net: always land on the real number, even if frames are throttled.
      done = window.setTimeout(() => setN(target), dur + 200);
    }, { threshold: 0.2 });
    io.observe(el);
    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
      window.clearTimeout(done);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  if (!m) return <span>{value}</span>;
  return (
    <span ref={ref} aria-label={value}>
      <span aria-hidden>
        {n.toFixed(decimals)}
        {suffix}
      </span>
    </span>
  );
}

