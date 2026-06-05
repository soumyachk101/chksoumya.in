"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Globe, Database, Layers, Infinity, Cpu, GraduationCap, Award, Code2, Cloud, X, ExternalLink } from 'lucide-react';
import { categories, certificates } from '../data/certificates';
import { Card } from './ui/Card';

const Certificates = () => {
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

    const getCategoryIcon = (id: string) => {
        switch (id) {
            case 'google': return <Globe size={28} className="text-pencil" strokeWidth={2.5} />;
            case 'ibm': return <Database size={28} className="text-accent" strokeWidth={2.5} />;
            case 'microsoft': return <Layers size={28} className="text-pencil" strokeWidth={2.5} />;
            case 'meta': return <Infinity size={28} className="text-accent" strokeWidth={2.5} />;
            case 'nvidia': return <Cpu size={28} className="text-pencil" strokeWidth={2.5} />;
            case 'hackerrank': return <Code2 size={28} className="text-pencil" strokeWidth={2.5} />;
            case 'aws': return <Cloud size={28} className="text-accent" strokeWidth={2.5} />;
            case 'universities': return <GraduationCap size={28} className="text-pencil" strokeWidth={2.5} />;
            default: return <Award size={28} className="text-pencil" strokeWidth={2.5} />;
        }
    };

    const playSound = (type: 'open' | 'close' | 'pdf') => {
        if (typeof window === 'undefined') return;
        const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
        if (!AudioContextClass) return;

        try {
            const ctx = new AudioContextClass();
            if (type === 'open') {
                // Simulate paper unrolling with filtered noise bursts
                const playRustle = (delay: number) => {
                    const bufferSize = ctx.sampleRate * 0.15;
                    const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
                    const data = buffer.getChannelData(0);
                    for (let i = 0; i < bufferSize; i++) {
                        data[i] = Math.random() * 2 - 1;
                    }
                    const noise = ctx.createBufferSource();
                    noise.buffer = buffer;

                    const filter = ctx.createBiquadFilter();
                    filter.type = 'bandpass';
                    filter.frequency.setValueAtTime(300, ctx.currentTime + delay);
                    filter.frequency.exponentialRampToValueAtTime(800, ctx.currentTime + delay + 0.12);
                    filter.Q.value = 2.0;

                    const gain = ctx.createGain();
                    gain.gain.setValueAtTime(0, ctx.currentTime + delay);
                    gain.gain.linearRampToValueAtTime(0.04, ctx.currentTime + delay + 0.03);
                    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + delay + 0.15);

                    noise.connect(filter);
                    filter.connect(gain);
                    gain.connect(ctx.destination);
                    noise.start(ctx.currentTime + delay);
                };
                playRustle(0);
                playRustle(0.08);
                playRustle(0.16);
            } else if (type === 'close') {
                // Short parchment fold noise burst
                const bufferSize = ctx.sampleRate * 0.12;
                const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
                const data = buffer.getChannelData(0);
                for (let i = 0; i < bufferSize; i++) {
                    data[i] = Math.random() * 2 - 1;
                }
                const noise = ctx.createBufferSource();
                noise.buffer = buffer;

                const filter = ctx.createBiquadFilter();
                filter.type = 'lowpass';
                filter.frequency.setValueAtTime(500, ctx.currentTime);
                filter.frequency.exponentialRampToValueAtTime(200, ctx.currentTime + 0.1);

                const gain = ctx.createGain();
                gain.gain.setValueAtTime(0.05, ctx.currentTime);
                gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.1);

                noise.connect(filter);
                filter.connect(gain);
                gain.connect(ctx.destination);
                noise.start();
            } else if (type === 'pdf') {
                // Rising arpeggio loot chime
                const notes = [1046.50, 1567.98, 2093.00]; 
                notes.forEach((freq, idx) => {
                    const osc = ctx.createOscillator();
                    const gain = ctx.createGain();
                    osc.type = 'sine';
                    osc.frequency.setValueAtTime(freq, ctx.currentTime + idx * 0.07);

                    gain.gain.setValueAtTime(0.03, ctx.currentTime + idx * 0.07);
                    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + idx * 0.07 + 0.1);

                    osc.connect(gain);
                    gain.connect(ctx.destination);
                    osc.start(ctx.currentTime + idx * 0.07);
                    osc.stop(ctx.currentTime + idx * 0.07 + 0.1);
                });
            }
        } catch (e) {
            console.warn("AudioContext fail", e);
        }
    };

    // Close modal on Escape keypress
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                setSelectedCategory(null);
                playSound('close');
            }
        };
        if (selectedCategory) {
            window.addEventListener('keydown', handleKeyDown);
        }
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [selectedCategory]);

    // Prevent body scroll when modal is open
    useEffect(() => {
        if (selectedCategory) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [selectedCategory]);

    const displayCategories = categories.filter(c => c.id !== 'all');

    return (
        <section id="certificates" className="py-20 relative overflow-hidden bg-background">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-16 relative"
                >
                    <h2 className="text-4xl md:text-6xl font-display font-bold mb-4 text-pencil transform rotate-1 inline-block relative">
                        Achievements
                        <svg className="absolute -bottom-4 left-0 w-full h-4" viewBox="0 0 100 20" preserveAspectRatio="none">
                            <path d="M0,15 Q50,5 100,15 M10,10 Q50,20 90,10" stroke="#e85d04" strokeWidth="3" fill="none" className="path-draw" />
                        </svg>
                    </h2>
                    <p className="mt-8 text-pencil/80 font-sans text-xl font-bold transform -rotate-1">Explore my certifications by category</p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {displayCategories.map((cat, index) => {
                        const count = certificates.filter(c => c.category === cat.id).length;
                        const rotClass = index % 3 === 0 ? '-rotate-1' : index % 3 === 1 ? 'rotate-1' : '-rotate-2';

                        return (
                            <button
                                key={cat.id}
                                onClick={() => {
                                    setSelectedCategory(cat.id);
                                    playSound('open');
                                }}
                                className="block group text-left w-full cursor-pointer focus:outline-none"
                            >
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.4, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    className="h-full w-full"
                                >
                                    <Card 
                                        decoration={index % 2 === 0 ? 'tape' : 'tack'} 
                                        className={`h-full flex flex-col ${rotClass} group-hover:rotate-0 transition-all duration-300 group-hover:scale-[1.02] bg-white`}
                                    >
                                        <div className="flex items-start justify-between mb-6">
                                            <div className="p-3 bg-white border-2 border-pencil border-wobbly text-pencil group-hover:bg-pencil group-hover:text-paper transition-all shadow-hard transform -rotate-3 group-hover:rotate-0">
                                                {getCategoryIcon(cat.id)}
                                            </div>
                                            <span className="text-3xl font-display font-bold text-pencil/50 group-hover:text-accent transition-colors">
                                                {String(index + 1).padStart(2, '0')}
                                            </span>
                                        </div>

                                        <h3 className="text-2xl font-display font-bold text-pencil mb-2 group-hover:text-accent transition-colors">
                                            {cat.label}
                                        </h3>

                                        <div className="flex items-center justify-between mt-auto pt-6 border-t-2 border-dashed border-pencil/20">
                                            <span className="text-sm font-sans font-bold text-pencil bg-white border-2 border-pencil border-wobbly px-4 py-1.5 shadow-[2px_2px_0px_0px_#2d2d2d]">
                                                {count} Certificates
                                            </span>
                                            <ArrowRight size={24} className="text-pencil transform group-hover:translate-x-2 transition-transform" strokeWidth={2.5} />
                                        </div>
                                    </Card>
                                </motion.div>
                            </button>
                        );
                    })}
                </div>
            </div>

            {/* Achievement Details Modal Scroll Overlay */}
            <AnimatePresence>
                {selectedCategory && (() => {
                    const activeCat = categories.find(c => c.id === selectedCategory);
                    const activeCerts = certificates.filter(c => c.category === selectedCategory);
                    if (!activeCat) return null;

                    return (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => {
                                setSelectedCategory(null);
                                playSound('close');
                            }}
                            className="fixed inset-0 z-50 flex items-center justify-center bg-pencil/40 backdrop-blur-sm p-4 sm:p-6"
                        >
                            <motion.div
                                initial={{ scale: 0.95, y: 15, rotate: -1 }}
                                animate={{ scale: 1, y: 0, rotate: 0 }}
                                exit={{ scale: 0.95, y: 15, rotate: 1 }}
                                transition={{ type: "spring", stiffness: 300, damping: 25 }}
                                onClick={(e) => e.stopPropagation()}
                                className="relative w-full max-w-3xl bg-white border-4 border-pencil border-wobbly-alt rounded-3xl p-6 sm:p-8 shadow-hard-lg max-h-[85vh] flex flex-col justify-between overflow-hidden select-text"
                            >
                                {/* Red Pushpin at top center */}
                                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 w-8 h-8 bg-red-600 border-2 border-pencil rounded-full flex items-center justify-center shadow-hard z-30 select-none pointer-events-none">
                                    <div className="w-2.5 h-2.5 bg-white/60 rounded-full absolute top-1.5 left-2" />
                                </div>

                                {/* Corner masking tapes */}
                                <div className="absolute top-2 left-2 w-12 h-6 bg-pencil/10 backdrop-blur-sm -rotate-45 pointer-events-none select-none" />
                                <div className="absolute bottom-2 right-2 w-12 h-6 bg-pencil/10 backdrop-blur-sm -rotate-45 pointer-events-none select-none" />

                                {/* Close Button */}
                                <button
                                    onClick={() => {
                                        setSelectedCategory(null);
                                        playSound('close');
                                    }}
                                    className="absolute top-4 right-4 p-2 border-2 border-pencil bg-white hover:bg-accent hover:text-white rounded-full shadow-hard-sm transition-all active:translate-x-[1px] active:translate-y-[1px] active:shadow-none cursor-pointer z-30 flex items-center justify-center"
                                    aria-label="Close achievements modal"
                                >
                                    <X size={16} strokeWidth={3} />
                                </button>

                                {/* Modal Header */}
                                <div className="border-b-2 border-dashed border-pencil/20 pb-4 mb-6 pr-8">
                                    <div className="flex items-center gap-2.5 mb-1.5">
                                        <div className="p-1.5 bg-white border border-pencil border-wobbly text-pencil shadow-hard-sm transform -rotate-3 select-none">
                                            {getCategoryIcon(selectedCategory)}
                                        </div>
                                        <span className="px-2 py-0.5 bg-accent/5 border border-accent border-dashed rounded text-[10px] font-sans font-black text-accent uppercase tracking-wider">
                                            Scroll of Achievements
                                        </span>
                                    </div>
                                    <h3 className="text-3xl font-display font-black text-pencil uppercase leading-tight tracking-tight mt-2 relative inline-block">
                                        {activeCat.label} Collection
                                        <svg className="absolute -bottom-2.5 left-0 w-full h-3" viewBox="0 0 100 20" preserveAspectRatio="none">
                                            <path d="M0,10 Q50,20 100,10 M15,13 Q50,3 85,13" stroke="#e85d04" strokeWidth="2.5" fill="none" />
                                        </svg>
                                    </h3>
                                    <p className="text-xs font-sans font-extrabold text-pencil/50 uppercase tracking-wider mt-4">
                                        📜 Total Verified Credentials: {activeCerts.length}
                                    </p>
                                </div>

                                {/* Scrollable Certificates list */}
                                <div className="flex-1 overflow-y-auto pr-2 my-2 space-y-4 scrollbar-thin select-text">
                                    {activeCerts.map((cert, certIdx) => {
                                        const cardRot = certIdx % 2 === 0 ? '-rotate-[0.5deg]' : 'rotate-[0.5deg]';
                                        return (
                                            <div 
                                                key={certIdx}
                                                className={`bg-[#fffcf7] border-2 border-pencil border-wobbly-sm p-4 rounded-xl shadow-hard-sm flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 transition-transform hover:scale-[1.01] ${cardRot}`}
                                            >
                                                <div className="space-y-1">
                                                    <div className="flex items-center gap-1.5">
                                                        <span className="text-lg select-none">🎖️</span>
                                                        <h4 className="font-display font-black text-lg text-pencil leading-tight">
                                                            {cert.title}
                                                        </h4>
                                                    </div>
                                                    <p className="text-xs font-sans font-extrabold text-pencil/50 uppercase tracking-wider pl-6">
                                                        Issued by: <span className="text-accent underline decoration-wavy decoration-accent/30">{cert.issuer}</span> &bull; {cert.date}
                                                    </p>
                                                </div>
                                                <a 
                                                    href={cert.link}
                                                    target="_blank" 
                                                    rel="noopener noreferrer"
                                                    onClick={() => playSound('pdf')}
                                                    className="flex-shrink-0 inline-flex items-center justify-center gap-1.5 px-5 py-2.5 border-2 border-pencil border-wobbly bg-white hover:bg-pencil text-pencil hover:text-paper font-sans font-black text-xs shadow-hard active:translate-x-[1px] active:translate-y-[1px] active:shadow-none transition-all cursor-pointer text-center"
                                                >
                                                    <span>VIEW BADGE</span>
                                                    <ExternalLink size={12} strokeWidth={2.5} />
                                                </a>
                                            </div>
                                        );
                                    })}
                                </div>

                                {/* Modal Footer decoration */}
                                <div className="border-t border-dashed border-pencil/20 pt-4 mt-4 text-center opacity-30 select-none pointer-events-none">
                                    <div className="font-mono text-[8px] uppercase tracking-widest">
                                        verified_by_cryptographic_signatures.log
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>
                    );
                })()}
            </AnimatePresence>
        </section>
    );
};

export default Certificates;
