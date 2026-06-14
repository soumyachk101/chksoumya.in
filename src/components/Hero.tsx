"use client";

import { useEffect, useRef, useState } from 'react';
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { Button } from "./ui/Button";

const Hero = () => {
    const heroRef = useRef<HTMLDivElement>(null);
    // Defer the drag/hover framer-motion mount so the first paint ships plain
    // HTML for the letters and toys. This drops the 100+ ms long main-thread
    // task that framer-motion drag subscribers cause at first paint.
    const [interactive, setInteractive] = useState(false);

    useEffect(() => {
        const ric = (cb: () => void) =>
            (window as any).requestIdleCallback
                ? (window as any).requestIdleCallback(cb, { timeout: 250 })
                : setTimeout(cb, 50);
        const id = ric(() => setInteractive(true));
        return () => {
            if ((window as any).cancelIdleCallback) (window as any).cancelIdleCallback(id);
            else clearTimeout(id);
        };
    }, []);

    const firstName = Array.from("Soumya");
    const lastName = Array.from("Chakraborty");

    // Draggable letter hover/spring variants
    const letterVariants = {
        hover: {
            scale: 1.2,
            rotate: [0, -5, 5, 0],
            color: "#e85d04",
            transition: { duration: 0.3 }
        },
        tap: {
            scale: 0.95
        }
    };

    // Plain (non-framer) wrappers used until `interactive` flips, so the
    // initial paint is composited text without framer's per-element
    // MotionValue / PanInfo overhead.
    const LetterShell = ({ char, color }: { char: string; color?: string }) => (
        <span
            className="inline-block cursor-grab select-none"
            style={color ? { color } : undefined}
        >
            {char}
        </span>
    );

    return (
        <section
            id="home"
            ref={heroRef}
            className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-background pt-20 select-none"
        >
            {/* Hand-drawn Decorative Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none" aria-hidden="true">
                <svg className="absolute top-20 right-10 w-32 h-32 text-muted hidden md:block" viewBox="0 0 100 100" fill="none">
                    <path d="M10,50 Q50,10 90,50 T50,90 T10,50" stroke="currentColor" strokeWidth="2" strokeDasharray="5,5" />
                </svg>
                <div className="absolute bottom-20 left-20 w-16 h-16 border-4 border-accent border-wobbly rounded-full opacity-50 pulse-opacity hidden md:block"></div>
            </div>

            {/* Draggable Background Toys */}
            {interactive ? (
                <>
                    <motion.div
                        drag
                        dragConstraints={heroRef}
                        dragElastic={0.25}
                        whileDrag={{ scale: 1.3, rotate: 20 }}
                        className="absolute cursor-grab active:cursor-grabbing text-3xl p-3 bg-[#fff9c4] border-2 border-pencil border-wobbly rounded-full shadow-hard-sm hidden md:block z-20"
                        style={{ top: "22%", left: "8%", rotate: "-12deg" }}
                        title="Toss me!"
                    >
                        ✏️
                    </motion.div>

                    <motion.div
                        drag
                        dragConstraints={heroRef}
                        dragElastic={0.25}
                        whileDrag={{ scale: 1.3, rotate: -25 }}
                        className="absolute cursor-grab active:cursor-grabbing text-3xl p-3 bg-white border-2 border-pencil border-wobbly rounded-full shadow-hard-sm hidden md:block z-20"
                        style={{ top: "18%", right: "12%", rotate: "15deg" }}
                        title="Fly me!"
                    >
                        ✈️
                    </motion.div>

                    <motion.div
                        drag
                        dragConstraints={heroRef}
                        dragElastic={0.25}
                        whileDrag={{ scale: 1.3, rotate: 18 }}
                        className="absolute cursor-grab active:cursor-grabbing text-3xl p-3 bg-[#ffe4e6] border-2 border-pencil border-wobbly rounded-full shadow-hard-sm hidden md:block z-20"
                        style={{ bottom: "25%", right: "8%", rotate: "-8deg" }}
                        title="Boost me!"
                    >
                        ☕
                    </motion.div>

                    <motion.div
                        drag
                        dragConstraints={heroRef}
                        dragElastic={0.25}
                        whileDrag={{ scale: 1.3, rotate: -15 }}
                        className="absolute cursor-grab active:cursor-grabbing text-3xl p-3 bg-[#e0f2fe] border-2 border-pencil border-wobbly rounded-full shadow-hard-sm hidden md:block z-20"
                        style={{ bottom: "18%", left: "12%", rotate: "10deg" }}
                        title="Clip me!"
                    >
                        📎
                    </motion.div>
                </>
            ) : (
                <>
                    <div className="absolute text-3xl p-3 bg-[#fff9c4] border-2 border-pencil border-wobbly rounded-full shadow-hard-sm hidden md:block z-20" style={{ top: "22%", left: "8%", rotate: "-12deg" }} aria-hidden="true">✏️</div>
                    <div className="absolute text-3xl p-3 bg-white border-2 border-pencil border-wobbly rounded-full shadow-hard-sm hidden md:block z-20" style={{ top: "18%", right: "12%", rotate: "15deg" }} aria-hidden="true">✈️</div>
                    <div className="absolute text-3xl p-3 bg-[#ffe4e6] border-2 border-pencil border-wobbly rounded-full shadow-hard-sm hidden md:block z-20" style={{ bottom: "25%", right: "8%", rotate: "-8deg" }} aria-hidden="true">☕</div>
                    <div className="absolute text-3xl p-3 bg-[#e0f2fe] border-2 border-pencil border-wobbly rounded-full shadow-hard-sm hidden md:block z-20" style={{ bottom: "18%", left: "12%", rotate: "10deg" }} aria-hidden="true">📎</div>
                </>
            )}

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                <div className="mb-8 inline-block hero-reveal">
                    <span className="inline-block px-6 py-2 bg-post-it border-2 border-pencil border-wobbly-sm shadow-hard-sm text-pencil text-lg font-bold tracking-wide transform hover:rotate-2 transition-transform cursor-pointer">
                        Available for Full Stack Opportunities
                    </span>
                </div>

                <h1 className="text-4xl xs:text-5xl sm:text-7xl md:text-8xl font-heading font-black mb-8 tracking-tight text-pencil relative inline-block select-none">
                    <span className="block mb-2">
                        Hi, I&apos;m{" "}
                        {firstName.map((char, index) =>
                            interactive ? (
                                <motion.span
                                    key={`fn-${index}`}
                                    drag
                                    dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
                                    dragElastic={0.65}
                                    dragTransition={{ bounceStiffness: 600, bounceDamping: 15 }}
                                    variants={letterVariants}
                                    whileHover="hover"
                                    whileTap="tap"
                                    whileDrag={{ scale: 1.3, rotate: 12, color: "#e85d04" }}
                                    className="inline-block cursor-grab active:cursor-grabbing text-accent select-none"
                                >
                                    {char}
                                </motion.span>
                            ) : (
                                <LetterShell key={`fn-${index}`} char={char} color="#e85d04" />
                            )
                        )}
                    </span>
                    <span className="block">
                        {lastName.map((char, index) =>
                            interactive ? (
                                <motion.span
                                    key={`ln-${index}`}
                                    drag
                                    dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
                                    dragElastic={0.65}
                                    dragTransition={{ bounceStiffness: 600, bounceDamping: 15 }}
                                    variants={letterVariants}
                                    whileHover="hover"
                                    whileTap="tap"
                                    whileDrag={{ scale: 1.3, rotate: 12, color: "#14b8a6" }}
                                    className="inline-block cursor-grab active:cursor-grabbing select-none"
                                >
                                    {char}
                                </motion.span>
                            ) : (
                                <LetterShell key={`ln-${index}`} char={char} />
                            )
                        )}
                    </span>

                    {/* Scribbled underline */}
                    <svg className="absolute -bottom-4 left-0 w-full h-6 text-secondary hidden md:block" viewBox="0 0 300 20" preserveAspectRatio="none" aria-hidden="true">
                        <path d="M5,10 Q100,20 150,5 T295,15" fill="none" stroke="currentColor" strokeWidth="4" />
                    </svg>
                </h1>

                {/*
                  LCP element. Plain <p> with a CSS-only reveal keyframe so the
                  text is paintable on first frame and the compositor handles
                  transform + opacity (no framer-motion wrapper).
                */}
                <p className="text-lg sm:text-2xl md:text-3xl text-pencil mb-12 max-w-3xl mx-auto font-sans leading-relaxed pointer-events-none hero-reveal">
                    A 3rd Year B.Tech CSE Student and <span className="font-bold border-b-4 border-accent border-dashed">Full Stack Developer</span> creating intuitive, high-performance digital experiences.
                </p>

                <div
                    className="flex flex-col sm:flex-row items-center justify-center gap-6 hero-reveal"
                >
                    <a href="#projects" className="w-full sm:w-auto">
                        <Button variant="primary" className="w-full text-xl py-4 hover:-rotate-2">
                            View My Work
                        </Button>
                    </a>
                    <a href="#contact" className="w-full sm:w-auto">
                        <Button variant="secondary" className="w-full text-xl py-4 bg-white hover:rotate-2">
                            Contact Me
                        </Button>
                    </a>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div
                className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10 hero-reveal"
            >
                <a href="#about" aria-label="Scroll down to explore" className="text-pencil/50 hover:text-accent transition-colors block border-2 border-transparent hover:border-pencil rounded-full p-2 border-wobbly">
                    <ArrowDown size={32} strokeWidth={2.5} />
                </a>
            </div>
        </section>
    );
};

export default Hero;
