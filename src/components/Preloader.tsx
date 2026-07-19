"use client";

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface PreloaderProps {
    onComplete?: () => void;
}

const ease = [0.76, 0, 0.24, 1] as const;

// Theme palette (tailwind.config.js)
const PAPER = '#fdfbf7';
const INK = '#2d2d2d';
const ACCENT = '#dd2c38';

// Greeting cycle — English first (longer hold), Bengali second (mother tongue), then the rest.
// Full greeting cycle ~2.1s total, kept short so the overlay doesn't hurt
// Lighthouse Speed Index.
const words = ['Hello', 'নমস্কার', 'नमस्ते', 'Bonjour', 'Ciao', 'Olá', 'こんにちは', '안녕하세요', 'Hallo'];

const FIRST_WORD_MS = 450;
const WORD_MS = 100;
const EXIT_HOLD_MS = 200;
const FLAP_H = 150;

const Preloader = ({ onComplete }: PreloaderProps) => {
    const [index, setIndex] = useState(0);
    const [exiting, setExiting] = useState(false);
    const [width, setWidth] = useState(0);

    useEffect(() => {
        setWidth(window.innerWidth);
    }, []);

    useEffect(() => {
        if (index === words.length - 1) {
            const t = setTimeout(() => setExiting(true), EXIT_HOLD_MS);
            return () => clearTimeout(t);
        }
        const t = setTimeout(() => setIndex(index + 1), index === 0 ? FIRST_WORD_MS : WORD_MS);
        return () => clearTimeout(t);
    }, [index]);

    // Curved paper flap below the sheet: bulges down while covering, flattens on exit.
    const flapFill = `M0 0 L${width} 0 Q${width / 2} ${FLAP_H} 0 0 Z`;
    const flapFillFlat = `M0 0 L${width} 0 Q${width / 2} 0 0 0 Z`;
    const flapEdge = `M0 0 Q${width / 2} ${FLAP_H} ${width} 0`;
    const flapEdgeFlat = `M0 0 Q${width / 2} 0 ${width} 0`;

    const dotGrid = {
        backgroundColor: PAPER,
        backgroundImage: `radial-gradient(#e5e0d8 1px, transparent 1px)`,
        backgroundSize: '24px 24px',
    };

    if (width === 0) {
        return <div className="absolute inset-0" style={dotGrid} />;
    }

    return (
        <motion.div
            className="absolute inset-0"
            initial={{ y: 0 }}
            animate={exiting ? { y: '-100vh' } : { y: 0 }}
            transition={{ duration: 0.65, ease }}
            onAnimationComplete={() => exiting && onComplete?.()}
        >
            {/* Paper sheet with dot grid */}
            <div className="absolute inset-0" style={dotGrid} />

            {/* Curved flap hanging below the sheet, with a pencil edge line */}
            <svg
                className="absolute left-0 w-full pointer-events-none"
                style={{ top: '100%', height: FLAP_H }}
                viewBox={`0 0 ${width} ${FLAP_H}`}
                preserveAspectRatio="none"
            >
                <motion.path
                    fill={PAPER}
                    initial={{ d: flapFill }}
                    animate={exiting ? { d: flapFillFlat } : { d: flapFill }}
                    transition={{ duration: 0.7, ease }}
                />
                <motion.path
                    fill="none"
                    stroke={INK}
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    initial={{ d: flapEdge }}
                    animate={exiting ? { d: flapEdgeFlat } : { d: flapEdge }}
                    transition={{ duration: 0.7, ease }}
                />
            </svg>

            {/* Content */}
            <motion.div
                className="absolute inset-0 z-10 flex flex-col justify-between p-6 md:p-10"
                animate={{ opacity: exiting ? 0 : 1, y: exiting ? -40 : 0 }}
                transition={{ duration: 0.3, ease: 'easeIn' }}
            >
                {/* Top row */}
                <div className="flex justify-between items-start overflow-hidden">
                    <motion.p
                        initial={{ y: '120%' }}
                        animate={{ y: 0 }}
                        transition={{ duration: 0.6, ease, delay: 0.15 }}
                        className="font-sans text-xs md:text-sm tracking-[0.25em] uppercase"
                        style={{ color: `${INK}99` }}
                    >
                        Soumya Chakraborty
                    </motion.p>
                    <motion.p
                        initial={{ y: '120%' }}
                        animate={{ y: 0 }}
                        transition={{ duration: 0.6, ease, delay: 0.25 }}
                        className="font-sans text-xs md:text-sm tracking-[0.25em] uppercase"
                        style={{ color: `${INK}99` }}
                    >
                        Portfolio — 2026
                    </motion.p>
                </div>

                {/* Center greeting */}
                <div className="flex flex-col items-center gap-2">
                    <div className="flex items-center gap-4">
                        {/* Pulsing red ink dot */}
                        <motion.span
                            className="inline-block w-2.5 h-2.5 md:w-3.5 md:h-3.5 rounded-full"
                            style={{ backgroundColor: ACCENT }}
                            animate={{ scale: [1, 1.35, 1] }}
                            transition={{ duration: 1.2, repeat: Infinity, ease: 'easeInOut' }}
                        />
                        {/* Word: masked slide-up with a hand-drawn tilt on every swap.
                            Fixed width so varying word lengths never re-lay the row (CLS). */}
                        <span className="overflow-hidden inline-flex justify-center py-1 w-[280px] md:w-[480px]">
                            <motion.span
                                key={index}
                                initial={{ y: '110%', rotate: index % 2 === 0 ? -3 : 3, opacity: 0 }}
                                animate={{ y: 0, rotate: index % 2 === 0 ? -1.5 : 1.5, opacity: 1 }}
                                transition={{ duration: index === 0 ? 0.4 : 0.12, ease }}
                                className="font-heading font-bold text-4xl md:text-6xl lg:text-7xl tracking-tight select-none leading-tight"
                                style={{ color: INK }}
                            >
                                {words[index]}
                            </motion.span>
                        </span>
                    </div>

                    {/* Red scribble underline, redrawn under each word */}
                    <svg width="180" height="14" viewBox="0 0 180 14" fill="none" className="md:w-[240px]">
                        <motion.path
                            key={index}
                            d="M4,8 Q30,3 60,9 T120,7 T176,9"
                            stroke={ACCENT}
                            strokeWidth="2.5"
                            strokeLinecap="round"
                            fill="none"
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: 1 }}
                            transition={{ duration: index === 0 ? 0.5 : 0.2, ease: [0.65, 0, 0.35, 1] }}
                        />
                    </svg>
                </div>

                {/* Bottom row */}
                <div className="flex justify-between items-end overflow-hidden">
                    <motion.p
                        initial={{ y: '120%' }}
                        animate={{ y: 0 }}
                        transition={{ duration: 0.6, ease, delay: 0.35 }}
                        className="font-sans text-xs md:text-sm tracking-[0.25em] uppercase"
                        style={{ color: `${INK}99` }}
                    >
                        Creative Developer
                    </motion.p>
                    {/* Word progress ticks — pencil dashes filling in red ink */}
                    <motion.div
                        initial={{ y: '120%' }}
                        animate={{ y: 0 }}
                        transition={{ duration: 0.6, ease, delay: 0.45 }}
                        className="flex gap-1.5 items-center"
                    >
                        {words.map((_, i) => (
                            <span
                                key={i}
                                className="h-[3px] rounded-full transition-all duration-200"
                                style={{
                                    width: i <= index ? 16 : 8,
                                    backgroundColor: i <= index ? ACCENT : `${INK}26`,
                                }}
                            />
                        ))}
                    </motion.div>
                </div>
            </motion.div>
        </motion.div>
    );
};

export default Preloader;
