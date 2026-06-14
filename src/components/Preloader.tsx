"use client";

import { motion, animate, useMotionValue, useTransform } from 'framer-motion';
import { useEffect, useState, useMemo } from 'react';

const ease = [0.76, 0, 0.24, 1] as const;
const bouncyEase = [0.34, 1.56, 0.64, 1] as const;

interface PreloaderProps {
    onComplete?: () => void;
}

const Preloader = ({ onComplete }: PreloaderProps) => {
    const [mounted, setMounted] = useState(false);
    const [done, setDone] = useState(false);
    useEffect(() => {
        setMounted(true);
    }, []);

    const [progress, setProgress] = useState(0);
    const count = useMotionValue(0);
    const rounded = useTransform(count, (v) => Math.round(v));

    // Subscribe to rounded for display
    const [displayCount, setDisplayCount] = useState(0);
    useEffect(() => {
        const unsub = rounded.on('change', (v) => setDisplayCount(v));
        return unsub;
    }, [rounded]);

    useEffect(() => {
        // Throttle setProgress: only fire when the value crosses a 5% boundary
        // (one setState per ~60ms instead of one per 16ms frame).
        const controls = animate(count, 100, {
            duration: 0.5,
            ease: [0.22, 1, 0.36, 1],
            onUpdate: (v) => {
                const next = Math.round(v);
                if (Math.floor(next / 5) !== Math.floor(progress / 5)) {
                    setProgress(next);
                }
            },
        });
        return controls.stop;
    }, [count, progress]);

    const firstName = 'Soumya';
    const lastName = 'Chakraborty';

    // Wobbly letter variants to simulate hand-drawn bounce
    const letterVariants = useMemo(() => ({
        hidden: { y: '120%', rotate: -15, scale: 0.8, opacity: 0 },
        visible: (i: number) => ({
            y: '0%',
            rotate: i % 2 === 0 ? 2 : -2,
            scale: 1,
            opacity: 1,
            transition: {
                duration: 0.4,
                ease: bouncyEase,
                delay: 0.05 + i * 0.015,
            },
        }),
    }), []);

    // SVG signature path
    const signaturePath = "M5,40 C15,10 25,10 35,40 C45,70 55,70 65,40 L65,40 C70,25 80,20 90,30 C100,40 105,35 110,25 L115,20 M120,15 L120,40";

    // Torn paper SVG path definitions for top and bottom curtains
    // These paths have detailed jagged noise to look like a torn sketchbook sheet
    const tornPathBottom = "M 0,0 L 100,0 L 100,8 Q 98,6 96,9 T 92,7 T 88,10 T 84,6 T 80,9 T 76,7 T 72,11 T 68,8 T 64,10 T 60,6 T 56,9 T 52,7 T 48,11 T 44,7 T 40,10 T 36,6 T 32,9 T 28,7 T 24,11 T 20,8 T 16,10 T 12,6 T 8,9 T 4,7 T 0,10 Z";
    const tornPathTop = "M 0,20 L 100,20 L 100,12 Q 98,14 96,11 T 92,13 T 88,10 T 84,14 T 80,11 T 76,13 T 72,9 T 68,12 T 64,10 T 60,14 T 56,11 T 52,13 T 48,9 T 44,13 T 40,10 T 36,14 T 32,11 T 28,13 T 24,9 T 20,12 T 16,10 T 12,14 T 8,11 T 4,13 T 0,10 Z";

    if (!mounted) {
        return <div className="absolute inset-0 bg-[#1a1a1a]" />;
    }

    return (
        <motion.div
            className="absolute inset-0 flex flex-col overflow-hidden"
            initial={{ opacity: 1 }}
            animate={{ opacity: 0 }}
            transition={{ duration: 0.4, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            onAnimationComplete={() => onComplete?.()}
        >
            {/* Top half curtain - Slides up */}
            <motion.div
                className="absolute top-0 left-0 w-full h-[50vh] bg-[#1a1a1a] flex flex-col justify-end"
                initial={{ y: 0 }}
                animate={{ y: '-100%' }}
                transition={{ duration: 0.4, ease: ease, delay: 0.5 }}
            >
                {/* Jagged Torn Paper Bottom Edge */}
                <svg 
                    className="absolute left-0 w-full h-8 pointer-events-none fill-[#1a1a1a]" 
                    style={{ bottom: '-30px' }} 
                    viewBox="0 0 100 20" 
                    preserveAspectRatio="none"
                >
                    <path d={tornPathBottom} />
                </svg>
            </motion.div>

            {/* Bottom half curtain - Slides down */}
            <motion.div
                className="absolute bottom-0 left-0 w-full h-[50vh] bg-[#1a1a1a]"
                initial={{ y: 0 }}
                animate={{ y: '100%' }}
                transition={{ duration: 0.4, ease: ease, delay: 0.5 }}
            >
                {/* Jagged Torn Paper Top Edge */}
                <svg 
                    className="absolute left-0 w-full h-8 pointer-events-none fill-[#1a1a1a]" 
                    style={{ top: '-30px' }} 
                    viewBox="0 0 100 20" 
                    preserveAspectRatio="none"
                >
                    <path d={tornPathTop} />
                </svg>
            </motion.div>

            {/* Content layer (fades out slightly before slide) */}
            <motion.div
                className="absolute inset-0 flex flex-col justify-between p-6 md:p-12 lg:p-16 pointer-events-none z-10"
                initial={{ opacity: 1, y: 0 }}
                animate={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.2, ease: 'easeIn', delay: 0.5 }}
            >
                {/* ── Top row ── */}
                <div className="flex justify-between items-start">
                    <div className="overflow-hidden">
                        <motion.p
                            initial={{ y: '110%' }}
                            animate={{ y: 0 }}
                            transition={{ duration: 0.4, ease, delay: 0.05 }}
                            className="text-[#888] text-xs md:text-sm tracking-[0.3em] uppercase font-mono"
                        >
                            Portfolio — 2026
                        </motion.p>
                    </div>
                    <div className="overflow-hidden">
                        <motion.p
                            initial={{ y: '110%' }}
                            animate={{ y: 0 }}
                            transition={{ duration: 0.4, ease, delay: 0.08 }}
                            className="text-[#888] text-xs md:text-sm tracking-[0.3em] uppercase font-mono"
                        >
                            Creative Developer
                        </motion.p>
                    </div>
                </div>

                {/* ── Center name reveal ── */}
                <div className="flex-1 flex flex-col items-center justify-center gap-1 md:gap-2">
                    {/* First name */}
                    <div className="overflow-hidden flex" style={{ perspective: '600px' }}>
                        {firstName.split('').map((char, i) => (
                            <motion.span
                                key={`fn-${i}`}
                                custom={i}
                                variants={letterVariants}
                                initial="hidden"
                                animate="visible"
                                className="text-[12vw] md:text-[9vw] lg:text-[8vw] font-heading font-bold text-white leading-[0.9] tracking-tight inline-block select-none"
                            >
                                {char}
                            </motion.span>
                        ))}
                    </div>

                    {/* Last name */}
                    <div className="overflow-hidden flex" style={{ perspective: '600px' }}>
                        {lastName.split('').map((char, i) => (
                            <motion.span
                                key={`ln-${i}`}
                                custom={i + firstName.length}
                                variants={letterVariants}
                                initial="hidden"
                                animate="visible"
                                className="text-[12vw] md:text-[9vw] lg:text-[8vw] font-heading font-bold leading-[0.9] tracking-tight inline-block select-none"
                                style={{
                                    color: 'transparent',
                                    WebkitTextStroke: '1.5px rgba(255,255,255,0.4)',
                                }}
                            >
                                {char}
                            </motion.span>
                        ))}
                    </div>

                    {/* Signature SVG draw */}
                    <motion.svg
                        width="140"
                        height="50"
                        viewBox="0 0 140 50"
                        fill="none"
                        className="mt-4 md:mt-6 drop-shadow-[0_2px_8px_rgba(255,77,77,0.3)]"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3, duration: 0.2 }}
                    >
                        <motion.path
                            d={signaturePath}
                            stroke="#ff4d4d"
                            strokeWidth="2.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            fill="none"
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: 1 }}
                            transition={{
                                duration: 0.5,
                                ease: [0.65, 0, 0.35, 1],
                                delay: 0.3,
                            }}
                        />
                    </motion.svg>
                </div>

                {/* ── Bottom row ── */}
                <div className="flex justify-between items-end">
                    {/* Wobbly progress bar with scribbling pencil */}
                    <div className="w-32 md:w-48 lg:w-64 relative">
                        <div className="overflow-hidden">
                            <motion.p
                                initial={{ y: '110%' }}
                                animate={{ y: 0 }}
                                transition={{ duration: 0.4, ease, delay: 0.1 }}
                                className="text-[#888] text-[10px] md:text-xs tracking-[0.2em] uppercase font-mono mb-3"
                            >
                                Sketching layout
                            </motion.p>
                        </div>
                        
                        {/* Wobbly border progress container */}
                        <div className="h-3 bg-white/5 border-2 border-white/20 border-wobbly relative overflow-hidden rounded-md backdrop-blur-sm">
                            <motion.div
                                className="absolute left-0 top-0 h-full bg-[#ff4d4d] rounded-r"
                                style={{ width: `${progress}%` }}
                            />
                        </div>

                        {/* Scribbling Pencil gliding on progress bar */}
                        <motion.div
                            className="absolute top-[-2px] h-6 w-6 flex items-center justify-center pointer-events-none text-base"
                            style={{ 
                                left: `calc(${progress}% - 12px)`
                            }}
                            animate={{ 
                                y: [0, -3, 0, -2, 0],
                                rotate: [12, 28, 8, 22, 12]
                            }}
                            transition={{
                                repeat: Infinity,
                                duration: 0.5,
                                ease: "easeInOut"
                            }}
                        >
                            ✏️
                        </motion.div>
                    </div>

                    {/* Large hand-drawn style percentage counter */}
                    <div className="overflow-hidden">
                        <motion.div
                            initial={{ y: '110%' }}
                            animate={{ y: 0 }}
                            transition={{ duration: 0.4, ease, delay: 0.12 }}
                            className="flex items-baseline gap-1"
                        >
                            <span
                                className="text-6xl md:text-8xl lg:text-9xl font-heading font-bold text-white leading-none tracking-tighter tabular-nums"
                            >
                                {displayCount}
                            </span>
                            <span className="text-2xl md:text-4xl font-heading font-bold text-[#ff4d4d] leading-none">
                                %
                            </span>
                        </motion.div>
                    </div>
                </div>
            </motion.div>

            {/* Hand-drawn scribble divider line across the center */}
            <svg 
                className="absolute top-1/2 left-0 w-full h-8 -translate-y-1/2 pointer-events-none opacity-25 z-0" 
                viewBox="0 0 1000 20" 
                preserveAspectRatio="none"
            >
                <motion.path
                    d="M 0,10 Q 250,6 500,12 T 1000,10"
                    stroke="#ff4d4d"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    fill="none"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
                />
            </svg>
        </motion.div>
    );
};

export default Preloader;