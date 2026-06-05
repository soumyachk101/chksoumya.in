"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Trophy, Calendar, MapPin, Zap, Github, ExternalLink, Sparkles, Shield, Award } from 'lucide-react';
import { Card } from './ui/Card';

interface HackathonItem {
    name: string;
    organizer: string;
    role: string;
    achievement?: string;
    date: string;
    location: string;
    desc: string;
    tags: string[];
    github?: string;
    live?: string;
    icon: React.ReactNode;
}

const Hackathons = () => {
    const [selectedBattle, setSelectedBattle] = useState(0);

    const hackathons: HackathonItem[] = [
        {
            name: "HACKTROPICA 2K26",
            organizer: "Asansol Engineering College",
            role: "Full Stack Developer",
            date: "2026",
            location: "On-site",
            desc: "Developed 'Phygital Trace', a blockchain-powered supply chain solution, during a high-intensity 36-hour coding marathon focused on innovation and scalability.",
            tags: ["Next.js", "Solidity", "Base L2", "FastAPI", "Gemini AI", "IPFS", "React Native"],
            github: "https://github.com/soumyachk101/Phygital-trace-done",
            icon: <Shield size={32} className="text-amber-500" strokeWidth={2.5} />
        },
        {
            name: "CODE FOR CHANGE 2.0",
            organizer: "NSHM College",
            role: "Backend & Lead",
            achievement: "Winner / Honorable Mention",
            date: "2026",
            location: "Kolkata, India",
            desc: "Collaborated to build 'Neeti AI', an AI-powered recruitment platform, during a 24-hour hackathon aimed at driving social change through technology.",
            tags: ["FastAPI", "React", "LiveKit", "Supabase", "AI", "Tailwind"],
            github: "https://github.com/soumyachk101/Neeti-AI",
            live: "https://neetiai.vercel.app/",
            icon: <Trophy size={32} className="text-yellow-500" strokeWidth={2.5} />
        },
        {
            name: "TEKATHON 2K26",
            organizer: "Techno International College",
            role: "Full Stack Developer",
            date: "2026",
            location: "Kolkata, India",
            desc: "Built a Multimodal RAG Assistant — an AI-powered retrieval-augmented generation system capable of processing text, images, and documents to deliver intelligent, context-aware responses.",
            tags: ["React", "Node.js", "RAG", "AI", "LLM", "Vector DB"],
            github: "https://github.com/soumyachk101/RUSK-Multimodal-RAG-Assistant",
            live: "https://rusk-web.vercel.app/",
            icon: <Award size={32} className="text-secondary" strokeWidth={2.5} />
        }
    ];

    const currentBattle = hackathons[selectedBattle];

    return (
        <section id="hackathons" className="py-24 relative overflow-hidden bg-background">
            {/* Background elements */}
            <div className="absolute top-20 left-10 opacity-10 pointer-events-none" aria-hidden="true">
                <svg width="100" height="100" viewBox="0 0 100 100" fill="none">
                    <path d="M50,10 L90,90 L10,90 Z" stroke="#2d2d2d" strokeWidth="3" fill="none" strokeLinejoin="round" />
                </svg>
            </div>

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center justify-center p-2 mb-4 border-2 border-pencil border-wobbly text-pencil transform -rotate-2">
                        <Trophy size={24} className="mr-2 text-accent" strokeWidth={2.5} />
                        <span className="text-lg font-sans font-bold tracking-widest uppercase">Competitions</span>
                    </div>
                    <h2 className="text-4xl md:text-6xl font-display font-bold mb-4 text-pencil tracking-tight transform rotate-1 inline-block relative block">
                        Hackathons & Trophies
                        <svg className="absolute -bottom-4 left-0 w-full h-4" viewBox="0 0 100 20" preserveAspectRatio="none">
                            <path d="M0,10 Q50,20 100,10 M10,15 Q50,5 90,15" stroke="#e85d04" strokeWidth="3" fill="none" className="path-draw" />
                        </svg>
                    </h2>
                    <p className="mt-8 text-pencil/80 font-sans text-xl font-bold transform -rotate-1">
                        🏆 Click on the trophies to view the hackathon battle logs!
                    </p>
                </div>

                {/* Trophy Shelf Display */}
                <div className="relative mb-12 select-none pt-6 flex flex-col items-center">
                    
                    {/* The Trophy Items Row */}
                    <div className="flex gap-16 md:gap-24 relative z-10 items-end min-h-[90px] px-8">
                        {hackathons.map((hack, idx) => {
                            const isActive = idx === selectedBattle;
                            return (
                                <div key={idx} className="flex flex-col items-center">
                                    <motion.button
                                        whileHover={{ scale: 1.15, y: -5 }}
                                        whileTap={{ scale: 0.95 }}
                                        onClick={() => setSelectedBattle(idx)}
                                        className={`w-16 h-16 rounded-full flex items-center justify-center border-2 border-pencil cursor-pointer relative shadow-hard-sm ${isActive ? 'bg-[#fffdf5] ring-4 ring-offset-2 ring-accent border-solid -translate-y-2' : 'bg-white border-dashed hover:-translate-y-1'}`}
                                    >
                                        {hack.icon}
                                        {isActive && (
                                            <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
                                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                                                <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-accent"></span>
                                            </span>
                                        )}
                                    </motion.button>
                                    <span className="text-xs font-display font-bold text-pencil mt-2 text-center max-w-[100px] truncate">
                                        {hack.name.split(' ')[0]}
                                    </span>
                                </div>
                            );
                        })}
                    </div>

                    {/* Sketched Wooden Shelf Board */}
                    <div className="w-full h-5 border-t-4 border-b-4 border-pencil bg-[#854d0e]/15 mt-2 rounded shadow-hard relative">
                        <div className="absolute top-1 left-2 text-[8px] text-pencil/30 font-mono">trophy_shelf.bin</div>
                    </div>
                </div>

                {/* Battle Logs Detail Card */}
                <div className="relative">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={selectedBattle}
                            initial={{ opacity: 0, scale: 0.96, y: 10 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.96, y: -10 }}
                            transition={{ type: "spring", stiffness: 200, damping: 20 }}
                        >
                            <Card 
                                decoration={selectedBattle % 2 === 0 ? 'tape' : 'tack'}
                                className="bg-[#fffdf5] border-2 border-pencil border-wobbly-alt shadow-hard-lg p-6 md:p-10 relative flex flex-col min-h-[380px]"
                            >
                                {/* Achievement Banner */}
                                <div className="flex flex-col md:flex-row md:items-start justify-between border-b-2 border-dashed border-pencil/20 pb-6 mb-6 gap-4">
                                    <div className="space-y-2">
                                        <div className="flex items-center gap-2">
                                            <Zap size={18} className="text-accent" strokeWidth={2.5} />
                                            <span className="text-pencil font-sans font-black text-sm uppercase tracking-widest bg-muted px-2 py-0.5 rounded border border-pencil border-dashed">
                                                Battle Station: {currentBattle.organizer}
                                            </span>
                                        </div>
                                        <h3 className="text-3xl font-display font-black text-pencil mt-2">
                                            {currentBattle.name}
                                        </h3>
                                        <p className="text-lg font-sans font-bold text-pencil/50 italic mt-1">
                                            Role: {currentBattle.role}
                                        </p>
                                    </div>

                                    {/* Winner Medal Sticker */}
                                    <div className="flex flex-col justify-start items-start md:items-end">
                                        {currentBattle.achievement ? (
                                            <div className="px-4 py-2 bg-accent text-white font-sans font-black text-xs uppercase tracking-widest border-2 border-pencil border-wobbly shadow-hard rotate-3 flex items-center gap-1.5 select-none">
                                                <Sparkles size={14} className="text-yellow-300 animate-pulse" />
                                                <span>{currentBattle.achievement}</span>
                                            </div>
                                        ) : (
                                            <div className="px-4 py-2 bg-white text-pencil/50 font-sans font-bold text-xs uppercase tracking-widest border-2 border-pencil border-dashed rounded flex items-center gap-1.5 select-none">
                                                <span>Participant badge</span>
                                            </div>
                                        )}
                                    </div>
                                </div>

                                {/* Mission Desc */}
                                <div className="flex-1 mb-8">
                                    <h4 className="text-lg uppercase font-sans font-extrabold text-pencil/40 mb-3 block tracking-wider">Campaign Report</h4>
                                    <p className="text-pencil font-sans text-lg md:text-xl leading-relaxed font-medium">
                                        {currentBattle.desc}
                                    </p>
                                </div>

                                {/* Tools & Loots */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6 border-t-2 border-dashed border-pencil/20 mt-auto">
                                    {/* Tech Stamps */}
                                    <div className="space-y-2">
                                        <span className="text-[10px] uppercase font-sans font-black text-pencil/40 block tracking-wider">Weapon Arsenal (Tech Stack)</span>
                                        <div className="flex flex-wrap gap-2">
                                            {currentBattle.tags.map((tag, idx) => (
                                                <span 
                                                    key={idx} 
                                                    className="px-2.5 py-1 bg-white border-2 border-pencil border-wobbly-sm shadow-hard-sm text-pencil font-sans font-bold text-xs select-none hover:-translate-y-0.5 transition-transform"
                                                    style={{ rotate: idx % 2 === 0 ? '-2deg' : '2deg' }}
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Action button loots */}
                                    <div className="flex flex-wrap gap-3 items-end justify-start md:justify-end">
                                        {currentBattle.github && (
                                            <a 
                                                href={currentBattle.github}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-white hover:bg-pencil text-pencil hover:text-paper border-2 border-pencil border-wobbly font-sans font-extrabold text-sm shadow-hard active:shadow-none active:translate-x-[4px] active:translate-y-[4px] transition-all cursor-pointer w-full sm:w-auto"
                                            >
                                                <Github size={16} strokeWidth={2.5} />
                                                <span>Source Code</span>
                                            </a>
                                        )}
                                        {currentBattle.live && (
                                            <a 
                                                href={currentBattle.live}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-accent hover:bg-pencil text-paper hover:text-paper border-2 border-pencil border-wobbly font-sans font-extrabold text-sm shadow-hard active:shadow-none active:translate-x-[4px] active:translate-y-[4px] transition-all cursor-pointer w-full sm:w-auto"
                                            >
                                                <ExternalLink size={16} strokeWidth={2.5} />
                                                <span>Run Demo</span>
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </Card>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
};

export default Hackathons;
