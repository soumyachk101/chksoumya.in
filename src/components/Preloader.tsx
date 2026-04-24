import { motion, animate, useMotionValue, useTransform } from 'framer-motion';
import { useEffect, useState, useMemo } from 'react';

const ease = [0.76, 0, 0.24, 1] as const;

const Preloader = () => {
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
        const controls = animate(count, 100, {
            duration: 1.8,
            ease: [0.16, 1, 0.3, 1],
            onUpdate: (v) => setProgress(Math.round(v)),
        });
        return controls.stop;
    }, [count]);

    const firstName = 'Soumya';
    const lastName = 'Chakraborty';

    const letterVariants = useMemo(() => ({
        hidden: { y: '100%', rotateX: -80, opacity: 0 },
        visible: (i: number) => ({
            y: '0%',
            rotateX: 0,
            opacity: 1,
            transition: {
                duration: 0.8,
                ease,
                delay: 0.3 + i * 0.04,
            },
        }),
    }), []);

    // SVG signature path
    const signaturePath = "M5,40 C15,10 25,10 35,40 C45,70 55,70 65,40 L65,40 C70,25 80,20 90,30 C100,40 105,35 110,25 L115,20 M120,15 L120,40";

    return (
        <motion.div
            className="fixed inset-0 z-[100] flex flex-col overflow-hidden"
            exit="exit"
        >
            {/* Top half curtain */}
            <motion.div
                className="w-full flex-1 bg-[#1a1a1a] origin-top"
                variants={{
                    exit: {
                        scaleY: 0,
                        transition: { duration: 0.8, ease, delay: 0.1 },
                    },
                }}
            />
            {/* Bottom half curtain */}
            <motion.div
                className="w-full flex-1 bg-[#1a1a1a] origin-bottom"
                variants={{
                    exit: {
                        scaleY: 0,
                        transition: { duration: 0.8, ease, delay: 0.1 },
                    },
                }}
            />

            {/* Actual content layer (sits on top of curtains) */}
            <motion.div
                className="absolute inset-0 flex flex-col justify-between p-6 md:p-12 lg:p-16 pointer-events-none"
                variants={{
                    exit: {
                        opacity: 0,
                        transition: { duration: 0.3, ease: 'easeOut' },
                    },
                }}
            >
                {/* ── Top row ── */}
                <div className="flex justify-between items-start">
                    <div className="overflow-hidden">
                        <motion.p
                            initial={{ y: '110%' }}
                            animate={{ y: 0 }}
                            transition={{ duration: 0.9, ease, delay: 0.1 }}
                            className="text-[#666] text-xs md:text-sm tracking-[0.3em] uppercase font-mono"
                        >
                            Portfolio — 2025
                        </motion.p>
                    </div>
                    <div className="overflow-hidden">
                        <motion.p
                            initial={{ y: '110%' }}
                            animate={{ y: 0 }}
                            transition={{ duration: 0.9, ease, delay: 0.15 }}
                            className="text-[#666] text-xs md:text-sm tracking-[0.3em] uppercase font-mono"
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
                                className="text-[12vw] md:text-[9vw] lg:text-[8vw] font-heading font-black text-white leading-[0.9] tracking-tight inline-block"
                                style={{ display: 'inline-block' }}
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
                                className="text-[12vw] md:text-[9vw] lg:text-[8vw] font-heading font-black leading-[0.9] tracking-tight inline-block"
                                style={{
                                    display: 'inline-block',
                                    color: 'transparent',
                                    WebkitTextStroke: '1.5px rgba(255,255,255,0.35)',
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
                        className="mt-4 md:mt-6"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.8, duration: 0.5 }}
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
                                duration: 1.2,
                                ease: [0.65, 0, 0.35, 1],
                                delay: 0.9,
                            }}
                        />
                    </motion.svg>
                </div>

                {/* ── Bottom row ── */}
                <div className="flex justify-between items-end">
                    {/* Progress bar */}
                    <div className="w-32 md:w-48 lg:w-64">
                        <div className="overflow-hidden">
                            <motion.p
                                initial={{ y: '110%' }}
                                animate={{ y: 0 }}
                                transition={{ duration: 0.9, ease, delay: 0.2 }}
                                className="text-[#555] text-[10px] md:text-xs tracking-[0.2em] uppercase font-mono mb-3"
                            >
                                Loading experience
                            </motion.p>
                        </div>
                        <div className="h-[2px] bg-[#333] relative overflow-hidden rounded-full">
                            <motion.div
                                className="absolute left-0 top-0 h-full bg-white rounded-full"
                                style={{ width: `${progress}%` }}
                            />
                        </div>
                    </div>

                    {/* Large counter */}
                    <div className="overflow-hidden">
                        <motion.div
                            initial={{ y: '110%' }}
                            animate={{ y: 0 }}
                            transition={{ duration: 0.9, ease, delay: 0.25 }}
                            className="flex items-baseline gap-1"
                        >
                            <span
                                className="text-6xl md:text-8xl lg:text-9xl font-heading font-black text-white leading-none tracking-tighter tabular-nums"
                            >
                                {displayCount}
                            </span>
                            <span className="text-2xl md:text-4xl font-heading font-black text-[#555] leading-none">
                                %
                            </span>
                        </motion.div>
                    </div>
                </div>
            </motion.div>

            {/* Accent line across screen */}
            <motion.div
                className="absolute top-1/2 left-0 h-[1px] bg-gradient-to-r from-transparent via-[#ff4d4d]/40 to-transparent"
                initial={{ width: '0%' }}
                animate={{ width: '100%' }}
                transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
            />
        </motion.div>
    );
};

export default Preloader;