"use client";

import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import { ThemeProvider } from 'next-themes';
import { usePathname } from 'next/navigation';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import ErrorBoundary from '../components/ErrorBoundary';

// Preloader renders only on the client (avoids SSR/CSR framer-motion
// hydration mismatches) and sits as a non-blocking overlay so the LCP
// element is paintable in the first frame.
const Preloader = dynamic(() => import('../components/Preloader'), { ssr: false });

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  // Show the preloader for ~1s of real time, but DO NOT gate the children
  // behind it. The children paint into the SSR HTML immediately, so the
  // LCP element is part of the initial response. The preloader overlays
  // the top with `pointer-events: none` after its exit animation so it
  // does not block interaction.
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Roughly match the Preloader timeline: 650ms first word + 7×160ms word
    // cycle + 250ms hold + 650ms curtain exit ≈ 2.7s.
    const exitDuration = 2700;
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, exitDuration);
    return () => clearTimeout(timer);
  }, []);

  return (
    <ErrorBoundary>
      <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
        <div className="bg-background min-h-screen text-foreground transition-colors duration-300">
          {isLoading && (
            <div
              aria-hidden="true"
              className="fixed inset-0 z-[100] pointer-events-none"
            >
              <Preloader />
            </div>
          )}

          {children}
        </div>
      </ThemeProvider>
      <Analytics />
      <SpeedInsights />
    </ErrorBoundary>
  );
}
