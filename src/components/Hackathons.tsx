"use client";

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Trophy, Calendar, MapPin, ExternalLink, Github, Sparkles } from 'lucide-react';
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
    const [selectedCartridge, setSelectedCartridge] = useState(0);
    const [insertedCartridge, setInsertedCartridge] = useState<number | null>(0);
    const [isBooting, setIsBooting] = useState(false);
    const [screenMsg, setScreenMsg] = useState<string | null>(null);
    const [activeButton, setActiveButton] = useState<string | null>(null);

    const bootTimerRef = useRef<NodeJS.Timeout | null>(null);
    const msgTimerRef = useRef<NodeJS.Timeout | null>(null);

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
            cartridgeColor: "bg-amber-600 border-amber-700 text-amber-100",
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
            desc: "Developed an AI hiring platform with real-time video feeds, collaborative IDE, and auto analytics.",
            tags: ["FastAPI", "React", "LiveKit", "Supabase", "Gemini AI"],
            github: "https://github.com/soumyachk101/Neeti-AI",
            live: "https://neetiai.vercel.app/",
            cartridgeColor: "bg-blue-600 border-blue-700 text-blue-100",
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
            desc: "Built a retrieval-augmented generation engine capable of reading text, charts, and images for prompt synthesis.",
            tags: ["React", "Node.js", "RAG", "LLM", "Vector DB"],
            github: "https://github.com/soumyachk101/RUSK-Multimodal-RAG-Assistant",
            live: "https://rusk-web.vercel.app/",
            cartridgeColor: "bg-purple-600 border-purple-700 text-purple-100",
            stickerEmoji: "🧠"
        }
    ];

    const handleCartridgeClick = (idx: number) => {
        if (insertedCartridge === idx || isBooting) return;
        
        setIsBooting(true);
        setScreenMsg(null);
        setInsertedCartridge(null); // Eject first

        if (bootTimerRef.current) clearTimeout(bootTimerRef.current);

        // Slide new cartridge in after a small ejection delay
        bootTimerRef.current = setTimeout(() => {
            setInsertedCartridge(idx);
            setSelectedCartridge(idx);
            
            // Screen boot flow finishes after 1.4s
            bootTimerRef.current = setTimeout(() => {
                setIsBooting(false);
            }, 1400);
        }, 300);
    };

    const handleButtonPress = (btn: string) => {
        setActiveButton(btn);
        
        let message = "";
        switch (btn) {
            case "A":
                message = "A PRESS: CAST CODE SPELL! ✨";
                break;
            case "B":
                message = "B PRESS: RUN NPM BUILD! 🛠️";
                break;
            case "UP":
                message = "D-PAD: MOVE UP ⬆️";
                break;
            case "DOWN":
                message = "D-PAD: MOVE DOWN ⬇️";
                break;
            case "LEFT":
                message = "D-PAD: MOVE LEFT ⬅️";
                break;
            case "RIGHT":
                message = "D-PAD: MOVE RIGHT ➡️";
                break;
            case "SELECT":
                message = "SELECT: SWAP SOUNDTRACK 🎵";
                break;
            default:
                message = "SOUMYA GAME BOY v1.0";
        }

        setScreenMsg(message);

        if (msgTimerRef.current) clearTimeout(msgTimerRef.current);
        msgTimerRef.current = setTimeout(() => {
            setScreenMsg(null);
            setActiveButton(null);
        }, 1500);
    };

    // Clean timers
    useEffect(() => {
        return () => {
            if (bootTimerRef.current) clearTimeout(bootTimerRef.current);
            if (msgTimerRef.current) clearTimeout(msgTimerRef.current);
        };
    }, []);

    const activeItem = hackathons[selectedCartridge];

    return (
        <section id="hackathons" className="py-24 relative overflow-hidden bg-background">
            {/* Background elements */}
            <div className="absolute top-20 left-10 opacity-10 pointer-events-none" aria-hidden="true">
                <svg width="100" height="100" viewBox="0 0 100 100" fill="none">
                    <path d="M50,10 L90,90 L10,90 Z" stroke="#2d2d2d" strokeWidth="3" fill="none" strokeLinejoin="round" />
                </svg>
            </div>

            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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
                        🎮 Insert game cartridges into the console to load hackathon spec sheets!
                    </p>
                </div>

                {/* Handheld Game console Workspace */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                    
                    {/* LEFT: Game Cartridges (4 Columns) */}
                    <div className="lg:col-span-4 flex flex-row lg:flex-col gap-6 justify-center select-none">
                        {hackathons.map((hack, idx) => {
                            const isSelected = selectedCartridge === idx;
                            const isInserted = insertedCartridge === idx;
                            return (
                                <motion.div
                                    key={idx}
                                    whileHover={{ scale: isInserted ? 1 : 1.05 }}
                                    whileTap={{ scale: isInserted ? 1 : 0.98 }}
                                    onClick={() => handleCartridgeClick(idx)}
                                    className={`w-28 h-36 border-2 border-pencil rounded-lg p-3 cursor-pointer shadow-hard flex flex-col justify-between transition-all select-none relative ${hack.cartridgeColor} ${isInserted ? 'opacity-30 pointer-events-none filter grayscale translate-x-3' : ''}`}
                                    style={{ rotate: idx % 2 === 0 ? '-3deg' : '3deg' }}
                                >
                                    {/* Cartridge Grip ridges */}
                                    <div className="flex gap-1 justify-center border-b border-pencil/20 pb-2">
                                        {[...Array(4)].map((_, r) => (
                                            <div key={r} className="w-1 h-3 bg-pencil/20 rounded-full" />
                                        ))}
                                    </div>
                                    {/* Game Title Sticker */}
                                    <div className="bg-white text-pencil text-[9px] font-mono leading-tight font-black p-1 text-center border border-pencil rounded shadow-inner flex-1 flex flex-col justify-around my-2">
                                        <span className="text-sm">{hack.stickerEmoji}</span>
                                        <span className="truncate block font-bold">{hack.name.split(' ')[0]}</span>
                                    </div>
                                    <div className="text-[8px] font-mono text-center font-bold opacity-60">cartridge.rom</div>
                                </motion.div>
                            );
                        })}
                    </div>

                    {/* RIGHT: Game Boy Handheld Console (8 Columns) */}
                    <div className="lg:col-span-8 flex justify-center">
                        <div className="relative w-80 md:w-96 bg-stone-300 border-4 border-pencil border-wobbly rounded-3xl p-6 shadow-hard-lg flex flex-col items-center select-none">
                            
                            {/* Visual Cartridge Insertion Area at the top */}
                            <div className="absolute -top-12 left-12 right-12 h-12 bg-stone-400 border-t-4 border-l-4 border-r-4 border-pencil rounded-t-xl z-0 overflow-hidden flex justify-center">
                                <AnimatePresence mode="wait">
                                    {insertedCartridge !== null && (
                                        <motion.div
                                            key={`cartridge-${insertedCartridge}`}
                                            initial={{ y: -50 }}
                                            animate={{ y: 0 }}
                                            exit={{ y: -50 }}
                                            transition={{ type: "spring", stiffness: 200, damping: 18 }}
                                            className={`w-24 h-12 rounded-t border-t-2 border-l-2 border-r-2 border-pencil p-1 text-center flex flex-col justify-end ${hackathons[insertedCartridge].cartridgeColor}`}
                                        >
                                            <span className="text-[9px] font-mono font-black">{hackathons[insertedCartridge].name.split(' ')[0]}</span>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                                {/* Slot opening shadow */}
                                <div className="absolute bottom-0 left-0 right-0 h-1 bg-stone-900/30" />
                            </div>

                            {/* Console Header details */}
                            <div className="w-full flex justify-between items-center mb-4 z-10">
                                <div className="w-6 h-1.5 bg-pencil/40 rounded-full" />
                                <span className="font-mono text-xs font-black text-pencil/50 tracking-wider">SOUMYA COLOR</span>
                                <div className="w-6 h-1.5 bg-pencil/40 rounded-full" />
                            </div>

                            {/* Game Screen Container */}
                            <div className="w-full bg-slate-700 border-4 border-pencil p-4 rounded-xl flex flex-col items-center shadow-inner relative z-10">
                                <div className="absolute top-1 left-2 flex gap-1 items-center">
                                    <div className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
                                    <span className="text-[7px] text-white/50 font-mono font-bold">POWER</span>
                                </div>

                                {/* Main Green Retro Matrix Screen */}
                                <div className="w-full h-52 bg-[#8bac0f] border-2 border-pencil rounded p-2 text-[#0f380f] font-mono text-[11px] overflow-hidden relative flex flex-col justify-between shadow-[inset_0_2px_4px_rgba(0,0,0,0.3)]">
                                    
                                    {/* Retro LCD lines pattern */}
                                    <div className="absolute inset-0 pointer-events-none opacity-5" style={{ backgroundImage: 'linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px)', backgroundSize: '100% 2px' }} />

                                    <AnimatePresence mode="wait">
                                        {insertedCartridge === null ? (
                                            /* Ejected / Empty Screen */
                                            <motion.div 
                                                key="empty" 
                                                initial={{ opacity: 0 }} 
                                                animate={{ opacity: 1 }} 
                                                exit={{ opacity: 0 }}
                                                className="flex-1 flex flex-col items-center justify-center text-center space-y-1 font-bold text-xs"
                                            >
                                                <span>INSERT ROM CARTRIDGE</span>
                                                <span className="animate-pulse">● ● ●</span>
                                            </motion.div>
                                        ) : isBooting ? (
                                            /* Boot sequence scrolling logo */
                                            <motion.div 
                                                key="boot"
                                                initial={{ y: -80 }}
                                                animate={{ y: 40 }}
                                                exit={{ opacity: 0 }}
                                                transition={{ duration: 1.0, ease: "easeOut" }}
                                                className="w-full text-center text-xl font-black italic tracking-widest text-[#0f380f] flex flex-col items-center"
                                            >
                                                <span>SOUMYA</span>
                                                <span className="text-[8px] font-mono font-black mt-2 tracking-normal border border-[#0f380f] px-1 py-0.5 rounded-sm">LICENSED BY HACKER</span>
                                            </motion.div>
                                        ) : screenMsg ? (
                                            /* Live feedback on button press */
                                            <motion.div 
                                                key="msg" 
                                                initial={{ opacity: 0, scale: 0.9 }} 
                                                animate={{ opacity: 1, scale: 1 }} 
                                                exit={{ opacity: 0 }}
                                                className="flex-1 flex flex-col items-center justify-center text-center font-bold text-sm text-[#0f380f]"
                                            >
                                                <div className="border-2 border-[#0f380f] px-3 py-2 rounded border-wobbly-sm shadow-[2px_2px_0px_0px_#0f380f]">
                                                    {screenMsg}
                                                </div>
                                            </motion.div>
                                        ) : (
                                            /* Loaded Game Info Screen */
                                            <motion.div 
                                                key="game" 
                                                initial={{ opacity: 0 }} 
                                                animate={{ opacity: 1 }} 
                                                className="flex-1 flex flex-col justify-between h-full"
                                            >
                                                {/* Top scoreboard stats */}
                                                <div className="border-b border-[#0f380f]/30 pb-1.5 flex justify-between items-baseline font-bold text-[10px]">
                                                    <span className="truncate max-w-[150px]">{activeItem.project}</span>
                                                    <span className="text-[8px] uppercase">{activeItem.achievement ? "★ WINNER" : "★ DONE"}</span>
                                                </div>

                                                {/* Gameplay Info Panel */}
                                                <div className="flex-1 my-1.5 space-y-1">
                                                    <div className="grid grid-cols-2 gap-1 text-[9px] border-b border-[#0f380f]/10 pb-1 font-bold">
                                                        <div>STAMINA: {activeItem.duration}</div>
                                                        <div>PARTY: {activeItem.partySize}</div>
                                                    </div>
                                                    <p className="leading-tight text-[10px] font-medium leading-snug">
                                                        {activeItem.desc}
                                                    </p>
                                                </div>

                                                {/* Loot items */}
                                                <div className="border-t border-[#0f380f]/30 pt-1.5 flex flex-wrap gap-1">
                                                    {activeItem.tags.slice(0, 4).map((t, idx) => (
                                                        <span key={idx} className="px-1 border border-[#0f380f] rounded-sm text-[8px] font-bold">
                                                            {t}
                                                        </span>
                                                    ))}
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            </div>

                            {/* Console Control Buttons */}
                            <div className="w-full mt-6 grid grid-cols-12 gap-4 items-center z-10">
                                
                                {/* D-PAD LEFT (5 Columns) */}
                                <div className="col-span-5 flex items-center justify-center">
                                    <div className="relative w-28 h-28 flex items-center justify-center bg-stone-400 border-2 border-pencil rounded-full">
                                        
                                        {/* Horizontal bar */}
                                        <div className="absolute w-24 h-8 bg-neutral-800 border-2 border-pencil rounded flex justify-between px-1.5 items-center select-none shadow-hard-sm">
                                            <button 
                                                onClick={() => handleButtonPress('LEFT')}
                                                className={`w-6 h-6 hover:bg-neutral-900 cursor-pointer ${activeButton === 'LEFT' ? 'scale-90 bg-neutral-900' : ''}`}
                                            />
                                            <button 
                                                onClick={() => handleButtonPress('RIGHT')}
                                                className={`w-6 h-6 hover:bg-neutral-900 cursor-pointer ${activeButton === 'RIGHT' ? 'scale-90 bg-neutral-900' : ''}`}
                                            />
                                        </div>

                                        {/* Vertical bar */}
                                        <div className="absolute w-8 h-24 bg-neutral-800 border-2 border-pencil rounded flex flex-col justify-between py-1.5 items-center select-none shadow-hard-sm">
                                            <button 
                                                onClick={() => handleButtonPress('UP')}
                                                className={`w-6 h-6 hover:bg-neutral-900 cursor-pointer ${activeButton === 'UP' ? 'scale-90 bg-neutral-900' : ''}`}
                                            />
                                            <button 
                                                onClick={() => handleButtonPress('DOWN')}
                                                className={`w-6 h-6 hover:bg-neutral-900 cursor-pointer ${activeButton === 'DOWN' ? 'scale-90 bg-neutral-900' : ''}`}
                                            />
                                        </div>

                                        {/* Center pivot */}
                                        <div className="absolute w-6 h-6 bg-neutral-800 rounded z-10" />
                                    </div>
                                </div>

                                {/* Speaker slots (2 Columns) */}
                                <div className="col-span-2 flex flex-col gap-1 items-center rotate-[30deg]">
                                    {[...Array(4)].map((_, i) => (
                                        <div key={i} className="w-8 h-1 bg-pencil/20 rounded-full" />
                                    ))}
                                </div>

                                {/* A/B Buttons RIGHT (5 Columns) */}
                                <div className="col-span-5 flex justify-end gap-3 items-center pr-2">
                                    {/* B Button */}
                                    <div className="flex flex-col items-center gap-1">
                                        <button 
                                            onClick={() => handleButtonPress('B')}
                                            className={`w-10 h-10 rounded-full bg-red-700 border-2 border-pencil text-white font-bold flex items-center justify-center shadow-hard cursor-pointer transition-transform ${activeButton === 'B' ? 'scale-90 shadow-none translate-y-0.5' : ''}`}
                                        >
                                            B
                                        </button>
                                        <span className="text-[9px] font-mono font-bold text-pencil/50">BUILD</span>
                                    </div>

                                    {/* A Button */}
                                    <div className="flex flex-col items-center gap-1">
                                        <button 
                                            onClick={() => handleButtonPress('A')}
                                            className={`w-10 h-10 rounded-full bg-red-700 border-2 border-pencil text-white font-bold flex items-center justify-center shadow-hard cursor-pointer transition-transform ${activeButton === 'A' ? 'scale-90 shadow-none translate-y-0.5' : ''}`}
                                        >
                                            A
                                        </button>
                                        <span className="text-[9px] font-mono font-bold text-pencil/50">SPELL</span>
                                    </div>
                                </div>
                            </div>

                            {/* SELECT / START buttons (Middle bottom) */}
                            <div className="flex gap-6 mt-8 z-10">
                                <div className="flex flex-col items-center gap-1">
                                    <button 
                                        onClick={() => handleButtonPress('SELECT')}
                                        className="w-12 h-3.5 bg-neutral-500 border-2 border-pencil rounded-full -rotate-[28deg] shadow-hard-sm cursor-pointer active:scale-95 active:shadow-none"
                                    />
                                    <span className="text-[8px] font-mono font-bold text-pencil/50 uppercase tracking-widest mt-1">SELECT</span>
                                </div>

                                <div className="flex flex-col items-center gap-1">
                                    <div className="flex gap-2">
                                        {activeItem.github && (
                                            <a 
                                                href={activeItem.github} 
                                                target="_blank" 
                                                rel="noopener noreferrer" 
                                                className="w-10 h-5 bg-white border-2 border-pencil flex items-center justify-center rounded text-[9px] font-mono font-black shadow-hard-sm active:translate-x-[1px] active:translate-y-[1px]"
                                                title="View Repository"
                                            >
                                                GIT
                                            </a>
                                        )}
                                        {activeItem.live && activeItem.live !== "#" && (
                                            <a 
                                                href={activeItem.live} 
                                                target="_blank" 
                                                rel="noopener noreferrer" 
                                                className="w-10 h-5 bg-accent text-white border-2 border-pencil flex items-center justify-center rounded text-[9px] font-mono font-black shadow-hard-sm active:translate-x-[1px] active:translate-y-[1px]"
                                                title="Run Demo"
                                            >
                                                RUN
                                            </a>
                                        )}
                                    </div>
                                    <span className="text-[8px] font-mono font-bold text-pencil/50 uppercase tracking-widest mt-1">START LOOT</span>
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
