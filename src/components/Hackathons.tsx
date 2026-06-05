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
    const playSound = (type: 'insert' | 'boot' | 'button' | 'select' | 'dpad') => {
        if (typeof window === 'undefined') return;
        const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
        if (!AudioContextClass) return;

        try {
            const ctx = new AudioContextClass();
            const osc = ctx.createOscillator();
            const gain = ctx.createGain();
            osc.connect(gain);
            gain.connect(ctx.destination);

            const now = ctx.currentTime;

            if (type === 'button') {
                osc.type = 'square';
                osc.frequency.setValueAtTime(880, now);
                gain.gain.setValueAtTime(0.04, now);
                gain.gain.exponentialRampToValueAtTime(0.01, now + 0.08);
                osc.start(now);
                osc.stop(now + 0.08);
            } else if (type === 'dpad') {
                osc.type = 'sine';
                osc.frequency.setValueAtTime(350, now);
                gain.gain.setValueAtTime(0.03, now);
                gain.gain.exponentialRampToValueAtTime(0.01, now + 0.05);
                osc.start(now);
                osc.stop(now + 0.05);
            } else if (type === 'select') {
                osc.type = 'triangle';
                osc.frequency.setValueAtTime(440, now);
                gain.gain.setValueAtTime(0.05, now);
                gain.gain.exponentialRampToValueAtTime(0.01, now + 0.08);
                osc.start(now);
                osc.stop(now + 0.08);
            } else if (type === 'insert') {
                osc.type = 'triangle';
                osc.frequency.setValueAtTime(220, now);
                osc.frequency.exponentialRampToValueAtTime(80, now + 0.12);
                gain.gain.setValueAtTime(0.06, now);
                gain.gain.exponentialRampToValueAtTime(0.01, now + 0.12);
                osc.start(now);
                osc.stop(now + 0.12);
            } else if (type === 'boot') {
                osc.type = 'sine';
                osc.frequency.setValueAtTime(523.25, now); // C5
                gain.gain.setValueAtTime(0.04, now);
                gain.gain.exponentialRampToValueAtTime(0.01, now + 0.08);
                osc.start(now);
                osc.stop(now + 0.08);

                const osc2 = ctx.createOscillator();
                const gain2 = ctx.createGain();
                osc2.connect(gain2);
                gain2.connect(ctx.destination);
                osc2.type = 'sine';
                osc2.frequency.setValueAtTime(1046.50, now + 0.1); // C6
                gain2.gain.setValueAtTime(0.03, now + 0.1);
                gain2.gain.exponentialRampToValueAtTime(0.005, now + 0.4);
                osc2.start(now + 0.1);
                osc2.stop(now + 0.4);
            }
        } catch (error) {
            console.warn("AudioContext failed", error);
        }
    };

    const [selectedCartridge, setSelectedCartridge] = useState(0);
    const [insertedCartridge, setInsertedCartridge] = useState<number | null>(0);
    const [isBooting, setIsBooting] = useState(false);
    const [screenMsg, setScreenMsg] = useState<string | null>(null);
    const [activeButton, setActiveButton] = useState<string | null>(null);
    const [adventureLogs, setAdventureLogs] = useState<string[]>([
        `[${new Date().toLocaleTimeString()}] SYSTEM: ROM Cartridge initialized.`,
        `[${new Date().toLocaleTimeString()}] SYSTEM: Handheld game console active.`
    ]);

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
        
        playSound('insert');
        setIsBooting(true);
        setScreenMsg(null);
        setInsertedCartridge(null); // Eject first

        const selectedName = hackathons[idx].name;
        setAdventureLogs(prev => [
            ...prev.slice(-10),
            `[${new Date().toLocaleTimeString()}] EJECTED previous cartridge.`,
            `[${new Date().toLocaleTimeString()}] INSERTED cartridge: ${selectedName}.`,
            `[${new Date().toLocaleTimeString()}] BOOTING retro ROM system...`
        ]);

        if (bootTimerRef.current) clearTimeout(bootTimerRef.current);

        // Slide new cartridge in after a small ejection delay
        bootTimerRef.current = setTimeout(() => {
            setInsertedCartridge(idx);
            setSelectedCartridge(idx);
            playSound('boot');
            
            // Screen boot flow finishes after 1.4s
            bootTimerRef.current = setTimeout(() => {
                setIsBooting(false);
                setAdventureLogs(prev => [
                    ...prev.slice(-10),
                    `[${new Date().toLocaleTimeString()}] QUEST LOADED: ${hackathons[idx].project} is active on the monitor.`
                ]);
            }, 1400);
        }, 300);
    };

    const handleButtonPress = (btn: string) => {
        setActiveButton(btn);
        
        if (btn === 'A' || btn === 'B') {
            playSound('button');
        } else if (btn === 'SELECT') {
            playSound('select');
        } else {
            playSound('dpad');
        }
        
        let message = "";
        let logText = "";
        switch (btn) {
            case "A":
                message = "A PRESS: CAST SPELL! ✨";
                logText = "P1 Pressed A: Cast code spell! ✨ Fireballs loaded!";
                break;
            case "B":
                message = "B PRESS: RUN BUILD! 🛠️";
                logText = "P1 Pressed B: Ran npm run build. Success!";
                break;
            case "UP":
                message = "D-PAD: MOVE UP ⬆️";
                logText = "P1 Pressed UP: Wizard moves north.";
                break;
            case "DOWN":
                message = "D-PAD: MOVE DOWN ⬇️";
                logText = "P1 Pressed DOWN: Wizard moves south.";
                break;
            case "LEFT":
                message = "D-PAD: MOVE LEFT ⬅️";
                logText = "P1 Pressed LEFT: Ejected package config.";
                break;
            case "RIGHT":
                message = "D-PAD: MOVE RIGHT ➡️";
                logText = "P1 Pressed RIGHT: Checked network sockets.";
                break;
            case "SELECT":
                message = "SELECT: SOUND FX 🎵";
                logText = "P1 Pressed SELECT: 8-bit sound chip updated.";
                break;
            default:
                message = "SOUMYA GAME BOY v1.0";
                logText = "Console reset.";
        }

        setScreenMsg(message);
        setAdventureLogs(prev => [
            ...prev.slice(-10),
            `[${new Date().toLocaleTimeString()}] ${logText}`
        ]);

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

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
                    
                    {/* LEFT COLUMN: Controls & Cartridge / Console (5 Columns) */}
                    <div className="lg:col-span-5 flex flex-col items-center w-full">
                        {/* Horizontal Cartridge Rack */}
                        <div className="w-full bg-white border-2 border-pencil border-dashed p-4 rounded-3xl shadow-hard mb-6 relative">
                            <div className="absolute top-1 right-2 text-[8px] font-mono opacity-30 select-none">rom_vault.sh</div>
                            <h3 className="text-xs font-sans font-extrabold uppercase tracking-wide text-pencil/60 mb-3 select-none">Game ROM Cartridge Rack:</h3>
                            <div className="flex flex-wrap gap-2.5 sm:gap-4 justify-center">
                                {hackathons.map((hack, idx) => {
                                    const isSelected = selectedCartridge === idx;
                                    const isInserted = insertedCartridge === idx;
                                    return (
                                        <motion.div
                                            key={idx}
                                            whileHover={{ scale: isInserted ? 1 : 1.05, y: isInserted ? 0 : -3 }}
                                            whileTap={{ scale: isInserted ? 1 : 0.95 }}
                                            onClick={() => handleCartridgeClick(idx)}
                                            className={`w-18 h-22 sm:w-20 sm:h-24 border-2 border-pencil rounded-lg p-2 cursor-pointer shadow-hard flex flex-col justify-between transition-all select-none relative ${hack.cartridgeColor} ${isInserted ? 'opacity-30 pointer-events-none filter grayscale translate-y-2 shadow-none' : ''}`}
                                            style={{ rotate: idx % 2 === 0 ? '-3deg' : '3deg' }}
                                        >
                                            {/* Cartridge Grip ridges */}
                                            <div className="flex gap-0.5 justify-center border-b border-pencil/20 pb-1.5">
                                                {[...Array(3)].map((_, r) => (
                                                    <div key={r} className="w-0.5 h-2 bg-pencil/20 rounded-full" />
                                                ))}
                                            </div>
                                            {/* Game Title Sticker */}
                                            <div className="bg-white text-pencil text-[9px] font-mono leading-tight font-black p-1 text-center border border-pencil rounded shadow-inner flex-1 flex flex-col justify-around my-1">
                                                <span className="text-xs sm:text-sm">{hack.stickerEmoji}</span>
                                                <span className="truncate block font-bold text-[7px] sm:text-[8px]">{hack.name.split(' ')[0]}</span>
                                            </div>
                                        </motion.div>
                                    );
                                })}
                            </div>
                        </div>

                        {/* Responsive scaling wrapper for Game Boy Console */}
                        <div className="w-full flex justify-center scale-[0.82] min-[340px]:scale-[0.88] min-[390px]:scale-95 sm:scale-100 origin-top py-2">
                            <div className="relative w-[340px] sm:w-[380px] bg-stone-300 border-4 border-pencil border-wobbly rounded-3xl p-4 sm:p-6 shadow-hard-lg flex flex-col items-center select-none">
                            
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
                                    <div className="w-12 h-3.5 bg-neutral-500 border-2 border-pencil rounded-full -rotate-[28deg] shadow-hard-sm" />
                                    <span className="text-[8px] font-mono font-bold text-pencil/50 uppercase tracking-widest mt-1">START</span>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                    {/* RIGHT COLUMN: Retro Arcade CRT Cabinet (7 Columns) */}
                    <div className="lg:col-span-7 flex flex-col h-full">
                        <div className="relative flex-1 bg-zinc-950 border-4 border-pencil rounded-3xl p-6 shadow-hard-lg flex flex-col overflow-hidden text-zinc-300 min-h-[580px]">
                            {/* CRT Phosphor Glow */}
                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.06)_0%,transparent_100%)] pointer-events-none" />
                            
                            {/* CRT Scanline Effect */}
                            <div className="absolute inset-0 pointer-events-none opacity-8 z-20" 
                                 style={{ 
                                     backgroundImage: 'linear-gradient(rgba(0,0,0,0.3) 50%, rgba(255,255,255,0.05) 50%)', 
                                     backgroundSize: '100% 4px' 
                                 }} 
                            />
                            
                            {/* Screen Header Bar */}
                            <div className="flex justify-between items-center border-b border-zinc-800 pb-3 mb-4 font-mono text-xs text-zinc-500 uppercase tracking-widest z-10 select-none">
                                <div className="flex items-center gap-2">
                                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                                    <span className="text-emerald-500 font-black">ARCADE MONITOR CRT-101</span>
                                </div>
                                <div className="font-extrabold text-[10px] text-zinc-600">[ SOUMYA_WIZARD_LVL_99 ]</div>
                            </div>

                            {/* Main Content Layout */}
                            <div className="flex-1 flex flex-col justify-between gap-5 z-10">
                                
                                {/* Quest Header */}
                                <div>
                                    <div className="text-[9px] font-mono font-black uppercase text-emerald-400 tracking-wider">Active Adventure Quest</div>
                                    <h3 className="text-2xl md:text-3xl font-display font-black text-white uppercase mt-1 tracking-tight border-b-2 border-emerald-500/20 pb-2.5 flex items-center justify-between">
                                        <span>{activeItem.name}</span>
                                        <span className="text-2xl md:text-3xl p-1 bg-zinc-900 border border-zinc-800 rounded">{activeItem.stickerEmoji}</span>
                                    </h3>
                                </div>

                                {/* RPG Attribute Sheets */}
                                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                                    <div className="bg-zinc-900/60 border border-zinc-800/80 rounded p-2 flex flex-col justify-between">
                                        <span className="text-[8px] text-zinc-500 uppercase font-black tracking-wide font-mono">⚔️ Project Code</span>
                                        <span className="text-xs font-black text-white truncate font-sans">{activeItem.project}</span>
                                    </div>
                                    <div className="bg-zinc-900/60 border border-zinc-800/80 rounded p-2 flex flex-col justify-between">
                                        <span className="text-[8px] text-zinc-500 uppercase font-black tracking-wide font-mono">📍 Quest Host</span>
                                        <span className="text-xs font-black text-white truncate font-sans">{activeItem.organizer}</span>
                                    </div>
                                    <div className="bg-zinc-900/60 border border-emerald-900/40 rounded p-2 flex flex-col justify-between bg-emerald-950/10">
                                        <span className="text-[8px] text-emerald-500 uppercase font-black tracking-wide font-mono">🛡️ Player Class</span>
                                        <span className="text-xs font-black text-emerald-400 truncate font-sans">{activeItem.role}</span>
                                    </div>
                                    <div className="bg-zinc-900/60 border border-zinc-800/80 rounded p-2 flex flex-col justify-between">
                                        <span className="text-[8px] text-zinc-500 uppercase font-black tracking-wide font-mono">⏳ Stamina Duration</span>
                                        <span className="text-xs font-bold text-zinc-300 font-sans">{activeItem.duration}</span>
                                    </div>
                                    <div className="bg-zinc-900/60 border border-zinc-800/80 rounded p-2 flex flex-col justify-between">
                                        <span className="text-[8px] text-zinc-500 uppercase font-black tracking-wide font-mono">👥 Party Size</span>
                                        <span className="text-xs font-bold text-zinc-300 font-sans">{activeItem.partySize}</span>
                                    </div>
                                    <div className="bg-zinc-900/60 border border-amber-900/40 rounded p-2 flex flex-col justify-between bg-amber-950/10 col-span-2 md:col-span-1">
                                        <span className="text-[8px] text-amber-500 uppercase font-black tracking-wide font-mono">💎 Acquired Loot</span>
                                        <span className="text-xs font-black text-amber-400 truncate flex items-center gap-1 font-sans">
                                            <span>🏆</span>
                                            <span className="truncate">{activeItem.achievement || "QUEST COMPLETE"}</span>
                                        </span>
                                    </div>
                                </div>

                                {/* Mission Logs (Description) */}
                                <div className="bg-zinc-900/40 border border-zinc-800/60 rounded-xl p-3 font-mono relative">
                                    <span className="text-[9px] text-zinc-500 block mb-1 uppercase font-black">{"/// Mission Directives & Logs"}</span>
                                    <p className="text-xs text-zinc-300 leading-relaxed font-sans font-semibold">
                                        {activeItem.desc}
                                    </p>
                                </div>

                                {/* Inventory Items (Tags) */}
                                <div>
                                    <span className="text-[9px] text-zinc-500 block mb-2 uppercase font-black font-mono">{"/// Acquired Inventory Items"}</span>
                                    <div className="flex flex-wrap gap-1.5">
                                        {activeItem.tags.map((t, index) => (
                                            <span key={index} className="px-2.5 py-1 bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 hover:border-emerald-500/50 hover:text-emerald-400 rounded-md text-[10px] font-bold font-mono transition-colors cursor-default">
                                                [{t}]
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* P1 / P2 Controllers (Actions) */}
                                <div className="border-t border-zinc-900 pt-4 flex flex-wrap justify-between items-center gap-3">
                                    <div className="flex gap-3">
                                        {activeItem.github && (
                                            <a 
                                                href={activeItem.github} 
                                                target="_blank" 
                                                rel="noopener noreferrer"
                                                onClick={() => playSound('select')}
                                                className="px-4 py-2 bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 hover:border-zinc-300 rounded-lg text-xs font-bold text-white transition-all shadow-hard flex items-center gap-2 cursor-pointer active:translate-y-0.5 active:shadow-none"
                                            >
                                                <Github size={13} />
                                                <span>P1: VIEW SOURCE</span>
                                            </a>
                                        )}
                                        {activeItem.live && activeItem.live !== "#" && (
                                            <a 
                                                href={activeItem.live} 
                                                target="_blank" 
                                                rel="noopener noreferrer"
                                                onClick={() => playSound('select')}
                                                className="px-4 py-2 bg-emerald-700 hover:bg-emerald-600 border border-emerald-500 hover:border-emerald-400 rounded-lg text-xs font-bold text-white transition-all shadow-hard flex items-center gap-2 cursor-pointer active:translate-y-0.5 active:shadow-none"
                                            >
                                                <ExternalLink size={13} />
                                                <span>P2: RUN DEMO</span>
                                            </a>
                                        )}
                                    </div>
                                    
                                    {/* Retro Health HUD */}
                                    <div className="flex gap-1 items-center select-none text-red-500 text-xs font-mono font-black">
                                        <span>HP</span>
                                        <span className="ml-1 flex gap-0.5">❤️ ❤️ ❤️</span>
                                    </div>
                                </div>

                                {/* Scrolling Live Adventure Log */}
                                <div className="bg-zinc-950 border border-zinc-900/60 rounded-xl p-3 font-mono text-[9px] text-zinc-500 min-h-24 max-h-24 overflow-y-auto flex flex-col justify-between">
                                    <div className="flex justify-between border-b border-zinc-900 pb-1 mb-1 text-[8px] uppercase tracking-wider font-black text-zinc-600">
                                        <span>Adventure Console Stream</span>
                                        <span className="animate-pulse text-emerald-500">● ON-LINE</span>
                                    </div>
                                    <div className="space-y-0.5 overflow-y-auto flex-1 max-h-16 pr-1 select-text">
                                        {adventureLogs.map((log, index) => (
                                            <div key={index} className={log.includes("A PRESS") || log.includes("Cast code") || log.includes("Pressed A") ? "text-amber-400" : log.includes("B PRESS") || log.includes("RUN BUILD") || log.includes("Pressed B") ? "text-sky-400" : log.includes("QUEST LOADED") ? "text-emerald-400" : "text-zinc-500"}>
                                                {log}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            
                            {/* Decorative Screen glare shine */}
                            <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rotate-45 translate-x-10 -translate-y-10 pointer-events-none rounded-full blur-xl" />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Hackathons;
