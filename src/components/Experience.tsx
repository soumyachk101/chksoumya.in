"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, ExternalLink, MapPin, Sparkles } from 'lucide-react';
import { Card } from './ui/Card';

interface ExperienceItem {
    company: string;
    role: string;
    type: string;
    desc: string;
    date: string;
    location: string;
    certificate?: string;
    xpGained: string[];
    landmark: string;
    doodle: string;
    coords: { x: number; y: number };
}

const Experience = () => {
    const [activeQuest, setActiveQuest] = useState(0);
    const [chestOpened, setChestOpened] = useState(false);
    const [lootSparkles, setLootSparkles] = useState<{ id: number; x: number; y: number }[]>([]);

    const experiences: ExperienceItem[] = [
        {
            company: "EduSkills Academy",
            role: "Python Full Stack Developer Intern",
            type: "Internship",
            desc: "Completed a 10-week program building scalable web applications with Python, Django, SQL, and frontend technologies.",
            date: "2026",
            location: "Remote",
            certificate: "/certificates/Soumya  Chakraborty_Certificate.pdf",
            xpGained: ["Python", "Django", "SQL", "HTML5", "CSS3", "REST APIs"],
            landmark: "The Python Jungle",
            doodle: "🐍",
            coords: { x: 20, y: 35 }
        },
        {
            company: "Codec Technologies Pvt. Ltd.",
            role: "MERN Stack Developer Intern",
            type: "Internship",
            desc: "Worked on full stack web development using MongoDB, Express.js, React, and Node.js to build scalable applications.",
            date: "2026",
            location: "Remote",
            certificate: "/certificates/MERN Stack Developer Intern.pdf",
            xpGained: ["MongoDB", "Express.js", "React.js", "Node.js", "JavaScript"],
            landmark: "The MERN Oasis",
            doodle: "🌴",
            coords: { x: 35, y: 70 }
        },
        {
            company: "AWS",
            role: "AWS Media & Entertainment Cloud Engineering",
            type: "Internship",
            desc: "Focused on cloud engineering solutions for media workflows, asset management, and CDN distribution structures.",
            date: "2025",
            location: "Remote",
            xpGained: ["AWS EC2", "AWS S3", "Cloud Computing", "Media Workflows"],
            landmark: "The Cloud Fortress",
            doodle: "🏰",
            coords: { x: 50, y: 20 }
        },
        {
            company: "AICTE",
            role: "Data Analytics Process Automation",
            type: "Virtual Internship",
            desc: "Worked on real-world automation challenges using industry data modeling toolkits, scripting automations, and reporting pipelines.",
            date: "2025",
            location: "Remote",
            certificate: "/certificates/Data Analytics Process Automation Virtual Internship By AICTE.pdf",
            xpGained: ["Data Analytics", "Process Automation", "Python", "Pandas", "Reporting"],
            landmark: "The Data Plains",
            doodle: "🌾",
            coords: { x: 65, y: 75 }
        },
        {
            company: "IBM SkillsBuild",
            role: "Data Analytics & Business Intelligence",
            type: "Internship",
            desc: "Built solutions for data visualization and business insights. Modelled datasets and generated interactive analytical templates.",
            date: "2025",
            location: "Remote",
            certificate: "/certificates/Data Analytics & Business Intelligence Lab_ Explore, Analyze & Build Real-World Solutions By IBM Skill Build.pdf",
            xpGained: ["Data Analytics", "Business Intelligence", "Charts.js", "SQL", "IBM SkillsBuild"],
            landmark: "The Analytical Tower",
            doodle: "🗼",
            coords: { x: 80, y: 35 }
        },
        {
            company: "CodeAlpha",
            role: "Python Programming Internship",
            type: "Internship",
            desc: "Developed robust Python applications and solved complex algorithmic challenges, data sorting structures, and scripting tasks.",
            date: "2024",
            location: "Remote",
            xpGained: ["Python Programming", "Algorithms", "Data Structures", "Scripting"],
            landmark: "The Algorithm Dungeon",
            doodle: "🕳️",
            coords: { x: 92, y: 62 }
        }
    ];

    // Reset chest when activeQuest changes
    useEffect(() => {
        setChestOpened(false);
        setLootSparkles([]);
    }, [activeQuest]);

    const openChest = () => {
        setChestOpened(true);
        // Spawn 12 sparkles throwing outwards
        const sparks = Array.from({ length: 12 }).map((_, i) => ({
            id: Math.random(),
            x: Math.random() * 100 - 50,
            y: Math.random() * -100 - 30
        }));
        setLootSparkles(sparks);
        setTimeout(() => setLootSparkles([]), 900);
    };

    const currentQuest = experiences[activeQuest];

    return (
        <section id="experience" className="py-20 relative overflow-hidden bg-background">
            {/* Background elements */}
            <div className="absolute top-10 left-1/2 -translate-x-1/2 opacity-5 pointer-events-none w-full max-w-7xl h-full" aria-hidden="true">
                <svg className="w-full h-full" viewBox="0 0 1000 600" fill="none">
                    <path d="M 50 100 Q 250 200 450 100 T 850 300" stroke="#2d2d2d" strokeWidth="4" strokeDasharray="10 10" />
                </svg>
            </div>

            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-6xl font-display font-bold mb-4 text-pencil transform rotate-1 inline-block relative">
                        Journey & Quests
                        <svg className="absolute -bottom-4 left-0 w-full h-4" viewBox="0 0 100 20" preserveAspectRatio="none">
                            <path d="M0,15 Q50,5 100,15 M10,10 Q50,20 90,10" stroke="#e85d04" strokeWidth="3" fill="none" className="path-draw" />
                        </svg>
                    </h2>
                    <p className="mt-8 text-pencil/80 font-sans text-xl font-bold transform -rotate-1">
                        🗺️ Click landmarks on the Realm Map to review entries and inspect quest chests!
                    </p>
                </div>

                {/* Double-page Sketchbook Journal */}
                <div className="relative bg-[#f5ebe0]/40 border-4 border-pencil border-wobbly rounded-2xl p-4 md:p-8 shadow-hard select-none min-h-[500px]">
                    
                    {/* Ring binder in the center for desktop screens */}
                    <div className="absolute left-1/2 top-0 bottom-0 w-1 border-l-2 border-dashed border-pencil/30 hidden md:block -translate-x-1/2 z-10" />
                    <div className="absolute left-1/2 top-0 bottom-0 w-8 flex flex-col justify-around items-center hidden md:flex -translate-x-1/2 z-20 pointer-events-none">
                        {[...Array(6)].map((_, i) => (
                            <div key={i} className="w-5 h-5 border-4 border-pencil rounded-full bg-paper rotate-45 border-wobbly shadow-hard-sm" />
                        ))}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch">
                        
                        {/* LEFT PAGE: Realm Quest Map (6 Columns) */}
                        <div className="md:col-span-6 flex flex-col justify-between p-2 relative min-h-[300px] md:min-h-[400px]">
                            <div className="absolute top-1 left-2 text-[10px] text-pencil/30 font-mono">realm_quest_map.db</div>
                            
                            {/* Visual Adventure Map Container */}
                            <div className="relative border-2 border-pencil border-dashed rounded-xl bg-[#fffdf5] w-full flex-1 min-h-[280px] overflow-hidden shadow-inner flex items-center justify-center">
                                
                                {/* Background landmarks doodles */}
                                <div className="absolute left-[5%] bottom-[5%] text-2xl opacity-15">🌲</div>
                                <div className="absolute right-[5%] bottom-[8%] text-2xl opacity-15">🌲</div>
                                <div className="absolute left-[8%] top-[10%] text-2xl opacity-15">⛰️</div>
                                <div className="absolute right-[40%] top-[40%] text-2xl opacity-15">⛵</div>
                                
                                {/* Dotted lines connector */}
                                <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="absolute inset-0 w-full h-full pointer-events-none">
                                    <path 
                                        d="M 20 35 Q 27.5 55 35 70 Q 42.5 45 50 20 Q 57.5 50 65 75 Q 72.5 55 80 35 Q 86 50 92 62" 
                                        stroke="#2d2d2d" 
                                        strokeWidth="3.5" 
                                        strokeDasharray="6 6" 
                                        fill="none" 
                                        vectorEffect="non-scaling-stroke"
                                    />
                                </svg>

                                {/* Traveling Character Sticker */}
                                <motion.div 
                                    animate={{ 
                                        left: `${currentQuest.coords.x}%`, 
                                        top: `${currentQuest.coords.y}%` 
                                    }}
                                    transition={{ type: "spring", stiffness: 85, damping: 13 }}
                                    className="absolute w-12 h-12 bg-accent border-2 border-pencil rounded-full flex items-center justify-center -ml-6 -mt-6 z-30 shadow-hard transform rotate-6 select-none pointer-events-none text-2xl"
                                >
                                    🧙‍♂️
                                </motion.div>

                                {/* Landmarks list */}
                                {experiences.map((exp, idx) => {
                                    const isActive = idx === activeQuest;
                                    return (
                                        <div 
                                            key={idx}
                                            className="absolute -ml-7 -mt-7 flex flex-col items-center z-20 group"
                                            style={{ left: `${exp.coords.x}%`, top: `${exp.coords.y}%` }}
                                        >
                                            <motion.button
                                                whileHover={{ scale: 1.15 }}
                                                whileTap={{ scale: 0.9 }}
                                                onClick={() => setActiveQuest(idx)}
                                                className={`w-12 h-12 rounded-full flex flex-col items-center justify-center font-display font-black border-2 border-pencil cursor-pointer relative shadow-hard-sm ${isActive ? 'bg-accent text-white scale-110 border-solid rotate-6' : 'bg-white text-pencil border-dashed hover:rotate-3'}`}
                                            >
                                                <span className="text-sm">{exp.doodle}</span>
                                            </motion.button>
                                            
                                            {/* Landmark Label */}
                                            <div className="absolute top-14 bg-white border-2 border-pencil px-1.5 py-0.5 rounded shadow-hard-sm text-[9px] font-sans font-bold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none text-pencil">
                                                {exp.landmark}
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>

                            {/* Legend indicator */}
                            <div className="text-center font-display font-bold text-sm text-pencil/50 pt-2 italic">
                                Page 1: Map of the Virtual Realm
                            </div>
                        </div>

                        {/* RIGHT PAGE: Quest Journal Entry (6 Columns) */}
                        <div className="md:col-span-6 flex flex-col justify-between p-2 min-h-[400px]">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={activeQuest}
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    transition={{ duration: 0.3 }}
                                    className="flex flex-col justify-between h-full space-y-6"
                                >
                                    {/* Quest stats */}
                                    <div className="space-y-4">
                                        <div>
                                            <div className="flex items-center gap-2">
                                                <span className="inline-flex pulse-opacity text-accent">
                                                    <Sparkles size={16} className="text-accent" />
                                                </span>
                                                <span className="text-accent font-sans font-black text-xs uppercase tracking-widest bg-accent/5 px-2 py-0.5 rounded border border-accent border-dashed">
                                                    Quest Log: {currentQuest.type}
                                                </span>
                                            </div>
                                            <h3 className="text-3xl font-display font-black text-pencil mt-2 leading-tight">
                                                {currentQuest.role}
                                            </h3>
                                            <p className="text-lg font-display font-bold text-secondary">
                                                @{currentQuest.company}
                                            </p>
                                        </div>

                                        <div className="flex flex-wrap gap-4 text-xs font-sans font-bold text-pencil/60">
                                            <div className="flex items-center gap-1">
                                                <Calendar size={14} />
                                                <span>Timeline: {currentQuest.date}</span>
                                            </div>
                                            <div className="flex items-center gap-1 uppercase">
                                                <MapPin size={14} />
                                                <span>{currentQuest.location}</span>
                                            </div>
                                        </div>

                                        <p className="text-pencil font-sans text-base leading-relaxed font-medium">
                                            {currentQuest.desc}
                                        </p>

                                        {/* Technology XP Tags */}
                                        <div className="space-y-2">
                                            <span className="text-[10px] uppercase font-sans font-black text-pencil/40 block tracking-wider">XP Gained (Tech Stack)</span>
                                            <div className="flex flex-wrap gap-1.5">
                                                {currentQuest.xpGained.map((tag, idx) => (
                                                    <span 
                                                        key={idx} 
                                                        className="px-2 py-0.5 bg-white border-2 border-pencil border-wobbly-sm shadow-hard-sm text-pencil font-sans font-bold text-xs select-none"
                                                        style={{ rotate: idx % 2 === 0 ? '-1.5deg' : '1.5deg' }}
                                                    >
                                                        {tag}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Interactive Quest Loot Chest */}
                                    <div className="pt-4 border-t border-dashed border-pencil/20 flex flex-col items-center">
                                        <span className="text-[10px] uppercase font-sans font-black text-pencil/40 block tracking-wider mb-2">Quest Loot Inspector</span>
                                        
                                        <div className="relative">
                                            {/* Particle Glow elements */}
                                            <AnimatePresence>
                                                {lootSparkles.map((spark) => (
                                                    <motion.div
                                                        key={spark.id}
                                                        initial={{ x: 0, y: 0, scale: 0, opacity: 1 }}
                                                        animate={{ 
                                                            x: spark.x,
                                                            y: spark.y,
                                                            scale: [1, 1.3, 0.4],
                                                            opacity: 0
                                                        }}
                                                        exit={{ opacity: 0 }}
                                                        transition={{ duration: 0.9, ease: "easeOut" }}
                                                        className="absolute left-[38px] top-[20px] text-lg pointer-events-none z-30"
                                                    >
                                                        ✨
                                                    </motion.div>
                                                ))}
                                            </AnimatePresence>

                                            {/* Box Button */}
                                            {!chestOpened ? (
                                                <button 
                                                    onClick={openChest}
                                                    className="w-24 h-20 text-5xl flex items-center justify-center filter drop-shadow hover:scale-110 active:scale-95 transition-transform cursor-pointer"
                                                    title="Click to unlock certificate loot!"
                                                >
                                                    🧰
                                                </button>
                                            ) : (
                                                <div className="w-24 h-20 text-5xl flex items-center justify-center filter drop-shadow animate-[pulse_1.5s_infinite]">
                                                    🔓
                                                </div>
                                            )}
                                        </div>

                                        <AnimatePresence mode="wait">
                                            {!chestOpened ? (
                                                <motion.p
                                                    key="closed-tip"
                                                    initial={{ opacity: 0 }}
                                                    animate={{ opacity: 1 }}
                                                    exit={{ opacity: 0 }}
                                                    className="text-xs font-sans font-extrabold text-accent text-center mt-2"
                                                >
                                                    <span className="inline-block pulse-opacity">[ Click Chest to Unlock Certificate Scroll ]</span>
                                                </motion.p>
                                            ) : (
                                                <motion.div 
                                                    key="open-loot"
                                                    initial={{ opacity: 0, y: 10 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    className="w-full flex justify-center mt-3"
                                                >
                                                    {currentQuest.certificate ? (
                                                        <a 
                                                            href={currentQuest.certificate}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="inline-flex items-center justify-center gap-2 px-5 py-2 bg-accent hover:bg-pencil text-paper hover:text-paper border-2 border-pencil border-wobbly font-sans font-black text-xs shadow-hard active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-all cursor-pointer w-full sm:w-auto"
                                                        >
                                                            <span>Read Scroll (Certificate)</span>
                                                            <ExternalLink size={14} />
                                                        </a>
                                                    ) : (
                                                        <div className="text-xs font-sans font-bold text-pencil/50 italic py-2">
                                                            No physical loot discovered for this quest.
                                                        </div>
                                                    )}
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                    
                                    {/* page sub indicator */}
                                    <div className="text-center font-display font-bold text-sm text-pencil/50 pt-2 border-t border-dashed border-pencil/10 italic">
                                        Page 2: Active Quest Log Record
                                    </div>
                                </motion.div>
                            </AnimatePresence>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
