'use client';

import { useEffect, useRef, useState } from 'react';
import VideoBackgroundRounded from '@/components/VideoBackgroundRounded';

const HONEYBOOK_PID = '5ddd379ab8a407001bb8c4d0';
const HONEYBOOK_SCRIPT =
  'https://widget.honeybook.com/assets_users_production/websiteplacements/placement-controller.min.js';

export default function Booking() {
  const placementRef = useRef<HTMLDivElement>(null);
  const [widgetReady, setWidgetReady] = useState(false);
  const [takingLong, setTakingLong] = useState(false);

  useEffect(() => {
    const placement = placementRef.current;
    if (!placement) return;

    let revealed = false;
    let iframeSeenAt = 0;

    const reveal = () => {
      if (revealed) return;
      revealed = true;
      setWidgetReady(true);
    };

    const watchIframe = () => {
      const iframe = placement.querySelector('iframe');
      if (!iframe) return;
      if (!iframeSeenAt) {
        iframeSeenAt = Date.now();
        iframe.addEventListener('load', reveal, { once: true });
      }
    };

    watchIframe();
    const observer = new MutationObserver(watchIframe);
    observer.observe(placement, { childList: true, subtree: true });

    const fallback = window.setInterval(() => {
      watchIframe();
      if (iframeSeenAt && Date.now() - iframeSeenAt > 6000) reveal();
    }, 250);

    const slowTimer = window.setTimeout(() => setTakingLong(true), 8000);

    (window as Window & { _HB_?: { pid?: string } })._HB_ = { pid: HONEYBOOK_PID };
    if (!document.querySelector(`script[src="${HONEYBOOK_SCRIPT}"]`)) {
      const script = document.createElement('script');
      script.type = 'text/javascript';
      script.async = true;
      script.src = HONEYBOOK_SCRIPT;
      document.body.appendChild(script);
    }

    return () => {
      observer.disconnect();
      window.clearInterval(fallback);
      window.clearTimeout(slowTimer);
    };
  }, []);

  return (
    <div className="min-h-screen">
      <section className="relative text-white overflow-x-hidden min-h-[30vh] flex items-center justify-center">
        <div className="absolute inset-0 w-full h-full z-0">
          <VideoBackgroundRounded />
        </div>

        <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-6 relative z-10 w-full text-center">
          <div className="mb-4 sm:mb-8">
            <div className="inline-block px-4 py-2 sm:px-6 sm:py-3 glass-strong rounded-full">
              <p className="text-xs sm:text-sm uppercase tracking-[0.2em] text-primary-500 font-semibold">Request a Quote</p>
            </div>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-8 leading-tight">
            <span className="block bg-gradient-to-r from-white via-white to-primary-500 bg-clip-text text-transparent">
              Book Our DJ Services
            </span>
          </h1>
          <p className="text-base sm:text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto font-light">
            Tell us about your event and we&apos;ll get back to you with a quote
          </p>
        </div>
      </section>

      <section className="py-16 bg-dark">
        <div className="max-w-4xl mx-auto px-2 sm:px-4 lg:px-6">
          <div className="honeybook-container glass-card rounded-2xl p-4 sm:p-8">
            <h2 className="text-lg sm:text-xl font-bold text-primary-500 mb-2">Tell Us About Your Event</h2>
            <p className="text-gray-300 text-sm sm:text-base mb-6">
              Share a few details about your event and we&apos;ll reply with availability and pricing.
            </p>
            <div className="relative">
              {!widgetReady && (
                <div
                  className="absolute inset-0 z-10 flex min-h-[420px] flex-col items-center justify-center gap-3 rounded-xl border border-white/10 bg-[#141414]"
                  role="status"
                  aria-live="polite"
                >
                  <span
                    className="h-9 w-9 animate-spin rounded-full border-2 border-white/15 border-t-primary-500"
                    aria-hidden="true"
                  />
                  <p className="text-sm text-gray-300">Loading the booking form…</p>
                  {takingLong && (
                    <p className="max-w-xs text-center text-xs text-gray-500">
                      This is taking a little longer than usual.
                    </p>
                  )}
                </div>
              )}
              <div
                ref={placementRef}
                className={`hb-p-5ddd379ab8a407001bb8c4d0-5${widgetReady ? '' : ' pointer-events-none'}`}
                aria-hidden={!widgetReady}
              />
            </div>
            <img
              height={1}
              width={1}
              style={{ display: 'none' }}
              src={`https://www.honeybook.com/p.png?pid=${HONEYBOOK_PID}`}
              alt=""
            />
          </div>
        </div>
      </section>
    </div>
  );
}
