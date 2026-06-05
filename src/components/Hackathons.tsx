"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Trophy, ExternalLink, Github, MapPin } from 'lucide-react';
import { Card } from './ui/Card';

interface HackathonItem {
    name: string;
    project: string;
    organizer: string;
    role: string;
    achievement?: string;
    duration: string;
    partySize: string;
    desc: string;
    tags: string[];
    github?: string;
    live?: string;
    cartridgeColor: string;
    stickerEmoji: string;
}

const Hackathons = () => {
    const [selectedQuest, setSelectedQuest] = useState(0);

    const playSound = (type: 'select' | 'loot') => {
        if (typeof window === 'undefined') return;
        const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
        if (!AudioContextClass) return;

        try {
            const ctx = new AudioContextClass();
            
            if (type === 'select') {
                // Simulate paper rustling sound with low bandpass white noise
                const bufferSize = ctx.sampleRate * 0.12; 
                const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
                const data = buffer.getChannelData(0);
                for (let i = 0; i < bufferSize; i++) {
                    data[i] = Math.random() * 2 - 1;
                }
                
                const noise = ctx.createBufferSource();
                noise.buffer = buffer;
                
                const filter = ctx.createBiquadFilter();
                filter.type = 'bandpass';
                filter.frequency.value = 450;
                filter.Q.value = 1.2;
                
                const gain = ctx.createGain();
                gain.gain.setValueAtTime(0.06, ctx.currentTime);
                gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.1);
                
                noise.connect(filter);
                filter.connect(gain);
                gain.connect(ctx.destination);
                noise.start();
            } else if (type === 'loot') {
                // Success sound (retro 8-bit rising arpeggio chime)
                const notes = [523.25, 659.25, 783.99, 1046.50]; // C5, E5, G5, C6
                notes.forEach((freq, idx) => {
                    const osc = ctx.createOscillator();
                    const gain = ctx.createGain();
                    osc.type = 'triangle';
                    osc.frequency.setValueAtTime(freq, ctx.currentTime + idx * 0.08);
                    
                    gain.gain.setValueAtTime(0.04, ctx.currentTime + idx * 0.08);
                    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + idx * 0.08 + 0.14);
                    
                    osc.connect(gain);
                    gain.connect(ctx.destination);
                    
                    osc.start(ctx.currentTime + idx * 0.08);
                    osc.stop(ctx.currentTime + idx * 0.08 + 0.14);
                });
            }
        } catch (e) {
            console.warn("AudioContext fail", e);
        }
    };

    const hackathons: HackathonItem[] = [
        {
            name: "HACKTROPICA 2K26",
            project: "PHYGITAL TRACE",
            organizer: "AEC College",
            role: "Full Stack Dev",
            achievement: "Blockchain Nominee",
            duration: "36 Hours",
            partySize: "4 Players",
            desc: "Built a blockchain supply chain ledger bridging physical tags with digital assets for anti-counterfeiting.",
            tags: ["Next.js", "Solidity", "Base L2", "FastAPI", "IPFS"],
            github: "https://github.com/soumyachk101/Phygital-trace-done",
            cartridgeColor: "bg-[#fef3c7] border-[#f59e0b] text-[#78350f]", // gold/yellow notes
            stickerEmoji: "🐲"
        },
        {
            name: "CODE FOR CHANGE 2.0",
            project: "NEETI AI",
            organizer: "NSHM College",
            role: "Backend & Team Lead",
            achievement: "1st Place Winner",
            duration: "24 Hours",
            partySize: "4 Players",
            desc: "Developed an AI hiring platform with real-time video feeds, collaborative IDE, and automated analysis reports.",
            tags: ["FastAPI", "React", "LiveKit", "Supabase", "Gemini AI"],
            github: "https://github.com/soumyachk101/Neeti-AI",
            live: "https://neetiai.vercel.app/",
            cartridgeColor: "bg-[#e0f2fe] border-[#0ea5e9] text-[#0369a1]", // blue notes
            stickerEmoji: "🤖"
        },
        {
            name: "TEKATHON 2K26",
            project: "MULTIMODAL RAG",
            organizer: "Techno College",
            role: "Full Stack Dev",
            duration: "24 Hours",
            partySize: "4 Players",
            achievement: "RAG Finalist",
            desc: "Built a retrieval-augmented generation engine capable of parsing text, tables, charts, and images for prompt synthesis.",
            tags: ["React", "Node.js", "RAG", "LLM", "Vector DB"],
            github: "https://github.com/soumyachk101/RUSK-Multimodal-RAG-Assistant",
            live: "https://rusk-web.vercel.app/",
            cartridgeColor: "bg-[#f3e8ff] border-[#a855f7] text-[#581c87]", // purple notes
            stickerEmoji: "🧠"
        }
    ];

    const activeItem = hackathons[selectedQuest];

    return (
        <section id="hackathons" className="py-24 relative overflow-hidden bg-background">
            {/* Background elements */}
            <div className="absolute top-20 left-10 opacity-10 pointer-events-none" aria-hidden="true">
                <svg width="100" height="100" viewBox="0 0 100 100" fill="none">
                    <path d="M50,10 L90,90 L10,90 Z" stroke="#2d2d2d" strokeWidth="3" fill="none" strokeLinejoin="round" />
                </svg>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center justify-center p-2 mb-4 border-2 border-pencil border-wobbly text-pencil transform -rotate-2 bg-white shadow-hard-sm">
                        <Trophy size={24} className="mr-2 text-accent" strokeWidth={2.5} />
                        <span className="text-lg font-sans font-bold tracking-widest uppercase">Competitions</span>
                    </div>
                    <h2 className="text-4xl md:text-6xl font-display font-bold mb-4 text-pencil tracking-tight transform rotate-1 inline-block relative block">
                        Guild Quest Board
                        <svg className="absolute -bottom-4 left-0 w-full h-4" viewBox="0 0 100 20" preserveAspectRatio="none">
                            <path d="M0,10 Q50,20 100,10 M10,15 Q50,5 90,15" stroke="#e85d04" strokeWidth="3" fill="none" className="path-draw" />
                        </svg>
                    </h2>
                    <p className="mt-8 text-pencil/80 font-sans text-xl font-bold transform -rotate-1">
                        📜 Review the active quest logs, complete bounty missions, and claim rewards!
                    </p>
                </div>

                {/* Corkboard Workspace */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
                    
                    {/* LEFT COLUMN: Pinned Wanted Posters (5 Columns) */}
                    <div className="lg:col-span-5 flex flex-col gap-6 w-full">
                        <div className="bg-[#e7d7c1] border-4 border-pencil border-wobbly rounded-2xl p-6 shadow-hard-lg relative flex-1 flex flex-col justify-around min-h-[420px] select-none">
                            
                            {/* Board cork effect */}
                            <div className="absolute inset-0 opacity-[0.06] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#2d2d2d 2px, transparent 2px)', backgroundSize: '12px 12px' }} />
                            <div className="absolute top-1 right-2 text-[8px] font-mono opacity-30 select-none">guild_bounty_board.db</div>
                            
                            <h3 className="text-xs uppercase font-sans font-black tracking-wider text-pencil/60 border-b border-pencil/20 pb-2 mb-4">
                                Pinned Wanted Bounties
                            </h3>

                            <div className="flex flex-col gap-5 justify-center flex-1">
                                {hackathons.map((hack, idx) => {
                                    const isSelected = selectedQuest === idx;
                                    const rotation = idx % 2 === 0 ? '-rotate-2' : 'rotate-2';
                                    
                                    return (
                                        <motion.div
                                            key={idx}
                                            whileHover={{ scale: 1.03, rotate: isSelected ? 0 : idx % 2 === 0 ? '-1deg' : '1deg' }}
                                            whileTap={{ scale: 0.98 }}
                                            onClick={() => {
                                                setSelectedQuest(idx);
                                                playSound('select');
                                            }}
                                            className={`relative p-5 border-2 border-pencil border-wobbly bg-amber-50 cursor-pointer shadow-hard transition-all duration-300 ${isSelected ? 'ring-4 ring-offset-2 ring-accent scale-[1.02] rotate-0 z-20' : `${rotation} opacity-85 hover:opacity-100`}`}
                                        >
                                            {/* Styled Red Pushpin */}
                                            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 w-7 h-7 bg-red-600 border-2 border-pencil rounded-full flex items-center justify-center shadow-hard z-30 select-none">
                                                <div className="w-2.5 h-2.5 bg-white/60 rounded-full absolute top-1 left-1.5" />
                                            </div>

                                            {/* Masking tape on corners */}
                                            <div className="absolute -top-2 -left-2 w-8 h-4 bg-pencil/10 backdrop-blur-sm -rotate-45" />
                                            <div className="absolute -bottom-2 -right-2 w-8 h-4 bg-pencil/10 backdrop-blur-sm -rotate-45" />

                                            <div className="flex justify-between items-start pt-2">
                                                <div>
                                                    <span className="text-[9px] uppercase font-sans font-extrabold text-accent block tracking-wider mb-0.5">Active Quest</span>
                                                    <h4 className="text-xl font-display font-black text-pencil leading-tight">
                                                        {hack.name}
                                                    </h4>
                                                </div>
                                                <span className="text-2xl">{hack.stickerEmoji}</span>
                                            </div>

                                            {/* Stamp/Status indicators */}
                                            <div className="mt-4 flex justify-between items-center border-t border-dashed border-pencil/20 pt-3">
                                                <span className="text-[10px] font-mono text-pencil/50">obj: {hack.project}</span>
                                                {hack.achievement ? (
                                                    <span className="px-2 py-0.5 border-2 border-dashed border-amber-600 text-amber-700 text-[9px] font-mono font-black uppercase rotate-6 shadow-sm select-none">
                                                        🏆 CHAMPION
                                                    </span>
                                                ) : (
                                                    <span className="px-2 py-0.5 border border-dashed border-pencil/40 text-pencil/60 text-[9px] font-mono font-semibold uppercase -rotate-6 select-none">
                                                        ⚔️ SOLVED
                                                    </span>
                                                )}
                                            </div>
                                        </motion.div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>

                    {/* RIGHT COLUMN: Parchment Scroll Quest Logs (7 Columns) */}
                    <div className="lg:col-span-7 flex flex-col h-full w-full">
                        <div className="relative flex-1 bg-white border-4 border-pencil border-wobbly-alt rounded-3xl p-6 md:p-8 shadow-hard-lg flex flex-col justify-between min-h-[500px] select-text">
                            
                            {/* Masking tape on top center */}
                            <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-32 h-8 bg-pencil/15 backdrop-blur-sm rotate-1 z-10" />

                            {/* Top margins decoration */}
                            <div className="absolute top-2 left-6 right-6 flex justify-between opacity-10 font-mono text-[9px] text-pencil uppercase pointer-events-none select-none">
                                <span>{"/// mission_directives.log"}</span>
                                <span>level_99_wizard</span>
                            </div>

                            <div className="space-y-6 pt-4 flex-1 flex flex-col justify-between">
                                {/* Header */}
                                <div className="border-b-2 border-dashed border-pencil/20 pb-4">
                                    <div className="flex items-center gap-2 mb-2">
                                        <span className="px-2.5 py-0.5 bg-accent/5 border border-accent border-dashed rounded text-[10px] font-sans font-black text-accent uppercase tracking-wider">
                                            Bounty Spec Sheet
                                        </span>
                                        <span className="text-xl">{activeItem.stickerEmoji}</span>
                                    </div>
                                    <h3 className="text-3xl font-display font-black text-pencil uppercase leading-tight tracking-tight">
                                        {activeItem.name}
                                    </h3>
                                    <p className="text-sm font-sans font-extrabold text-pencil/50 mt-1 uppercase tracking-wider flex items-center gap-1">
                                        <span>📍 Host:</span> 
                                        <span className="underline decoration-wavy decoration-accent">{activeItem.organizer}</span>
                                    </p>
                                </div>

                                {/* Attributes Panel */}
                                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                                    <div className="bg-[#fffcf7] border-2 border-pencil border-wobbly-sm p-3 shadow-hard-sm flex flex-col justify-between rounded-lg">
                                        <span className="text-[9px] uppercase font-sans font-black text-pencil/40 block">⚔️ Player Class</span>
                                        <span className="text-sm font-display font-bold text-accent truncate">{activeItem.role}</span>
                                    </div>
                                    <div className="bg-[#fffcf7] border-2 border-pencil border-wobbly-sm p-3 shadow-hard-sm flex flex-col justify-between rounded-lg">
                                        <span className="text-[9px] uppercase font-sans font-black text-pencil/40 block">⏳ Quest Time</span>
                                        <span className="text-sm font-display font-bold text-pencil truncate">{activeItem.duration}</span>
                                    </div>
                                    <div className="bg-[#fffcf7] border-2 border-pencil border-wobbly-sm p-3 shadow-hard-sm flex flex-col justify-between rounded-lg col-span-2 sm:col-span-1">
                                        <span className="text-[9px] uppercase font-sans font-black text-pencil/40 block">👥 Party Size</span>
                                        <span className="text-sm font-display font-bold text-pencil truncate">{activeItem.partySize}</span>
                                    </div>
                                </div>

                                {/* Description Scroll Block */}
                                <div className="bg-amber-50/40 border-2 border-dashed border-pencil/20 p-4 rounded-xl relative overflow-hidden">
                                    <span className="text-[10px] uppercase font-mono font-black text-pencil/30 block mb-2">{"/// Objective Description"}</span>
                                    <p className="text-pencil font-sans text-base leading-relaxed font-semibold">
                                        {activeItem.desc}
                                    </p>
                                </div>

                                {/* Acquired Inventory (Tech Stack) */}
                                <div className="space-y-2">
                                    <span className="text-[10px] uppercase font-sans font-black text-pencil/40 block tracking-wider">Acquired Loot Items (Tech Stack)</span>
                                    <div className="flex flex-wrap gap-2">
                                        {activeItem.tags.map((tag, idx) => (
                                            <span 
                                                key={idx}
                                                className="px-3 py-1 bg-white border-2 border-pencil border-wobbly-sm text-pencil font-sans font-extrabold text-xs shadow-hard-sm hover:scale-105 transition-transform"
                                                style={{ rotate: idx % 2 === 0 ? '-1.5deg' : '1.5deg' }}
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Action Items (Loot Claim Buttons) */}
                                <div className="border-t-2 border-dashed border-pencil/20 pt-6 flex flex-wrap justify-between items-center gap-4">
                                    <div className="flex gap-4 w-full sm:w-auto">
                                        {activeItem.github && (
                                            <a 
                                                href={activeItem.github} 
                                                target="_blank" 
                                                rel="noopener noreferrer"
                                                onClick={() => playSound('loot')}
                                                className="flex-1 sm:flex-initial px-5 py-3 bg-white hover:bg-pencil text-pencil hover:text-paper border-2 border-pencil border-wobbly font-sans font-black text-sm shadow-hard flex items-center justify-center gap-2 cursor-pointer transition-all active:translate-x-[2px] active:translate-y-[2px] active:shadow-none"
                                            >
                                                <Github size={16} strokeWidth={2.5} />
                                                <span>CLAIM CODE BASE</span>
                                            </a>
                                        )}
                                        {activeItem.live && activeItem.live !== "#" && (
                                            <a 
                                                href={activeItem.live} 
                                                target="_blank" 
                                                rel="noopener noreferrer"
                                                onClick={() => playSound('loot')}
                                                className="flex-1 sm:flex-initial px-5 py-3 bg-accent hover:bg-pencil text-paper hover:text-paper border-2 border-pencil border-wobbly font-sans font-black text-sm shadow-hard flex items-center justify-center gap-2 cursor-pointer transition-all active:translate-x-[2px] active:translate-y-[2px] active:shadow-none"
                                            >
                                                <ExternalLink size={16} strokeWidth={2.5} />
                                                <span>RUN APPLICATION</span>
                                            </a>
                                        )}
                                    </div>

                                    {/* HP indicators */}
                                    <div className="flex items-center gap-1.5 text-red-500 font-sans font-extrabold text-xs ml-auto">
                                        <span>HP:</span>
                                        <div className="flex gap-0.5 text-sm select-none">❤️❤️❤️</div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Hackathons;
