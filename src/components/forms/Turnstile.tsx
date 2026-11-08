import { useEffect, useRef } from 'react';
import { TURNSTILE_SITE_KEY } from '../../config/partners';

/* Cloudflare Turnstile bot check. Renders nothing when VITE_TURNSTILE_SITE_KEY is not set (e.g. local dev). */

type TurnstileApi = {
  render: (el: HTMLElement, opts: Record<string, unknown>) => string;
  remove: (id: string) => void;
  reset: (id: string) => void;
};
declare global {
  interface Window {
    turnstile?: TurnstileApi;
  }
}

const SCRIPT_SRC = 'https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit';
let loading: Promise<void> | null = null;

function loadScript() {
  if (window.turnstile) return Promise.resolve();
  if (!loading) {
    loading = new Promise((resolve, reject) => {
      const s = document.createElement('script');
      s.src = SCRIPT_SRC;
      s.async = true;
      s.onload = () => resolve();
      s.onerror = () => {
        loading = null;
        reject(new Error('Turnstile failed to load'));
      };
      document.head.appendChild(s);
    });
  }
  return loading;
}

export default function Turnstile({ onToken }: { onToken: (token: string) => void }) {
  const box = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!TURNSTILE_SITE_KEY) return;
    let id = '';
    let gone = false;
    loadScript()
      .then(() => {
        if (gone || !box.current || !window.turnstile) return;
        id = window.turnstile.render(box.current, {
          sitekey: TURNSTILE_SITE_KEY,
          theme: 'light',
          'refresh-expired': 'auto',
          callback: (t: string) => onToken(t),
          'expired-callback': () => onToken(''),
          'error-callback': () => onToken(''),
        });
      })
      .catch(() => onToken(''));
    return () => {
      gone = true;
      if (id && window.turnstile) window.turnstile.remove(id);
    };
  }, [onToken]);

  if (!TURNSTILE_SITE_KEY) return null;
  return <div ref={box} className="mt-6 min-h-[65px]" />;
}

export const turnstileEnabled = !!TURNSTILE_SITE_KEY;
