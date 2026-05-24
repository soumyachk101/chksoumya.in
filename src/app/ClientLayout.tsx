"use client";

import { useState, useEffect } from 'react';
import { ThemeProvider } from 'next-themes';
import { AnimatePresence, motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import Preloader from '../components/Preloader';
import ErrorBoundary from '../components/ErrorBoundary';

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(true);
  const pathname = usePathname();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <ErrorBoundary>
      <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
        <div className="bg-background min-h-screen text-foreground transition-colors duration-300">
          <AnimatePresence mode='wait'>
            {isLoading && <Preloader key="preloader" />}
          </AnimatePresence>

          {!isLoading && (
            <AnimatePresence mode='wait'>
              <motion.div
                key={pathname}
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ 
                    duration: 1.0, 
                    ease: [0.16, 1, 0.3, 1], // Ultra smooth easeOut
                    delay: 0.05
                }}
              >
                {children}
              </motion.div>
            </AnimatePresence>
          )}
        </div>
      </ThemeProvider>
    </ErrorBoundary>
  );
}
