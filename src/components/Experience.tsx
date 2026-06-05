"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, ExternalLink, MapPin, Sparkles, Trophy, ShieldAlert, CheckCircle2 } from 'lucide-react';
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
    coords: { x: number; y: number };
}

const Experience = () => {
    const [activeQuest, setActiveQuest] = useState(0);
    const [solvedQuests, setSolvedQuests] = useState<number[]>([]);
    const [isCombatActive, setIsCombatActive] = useState(false);
    const [combatStage, setCombatStage] = useState<'intro' | 'solved'>('intro');

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
            coords: { x: 10, y: 40 }
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
            coords: { x: 25, y: 70 }
        },
        {
            company: "AWS",
            role: "AWS Media & Entertainment Cloud Engineering",
            type: "Internship",
            desc: "Focused on cloud engineering solutions for media workflows, asset management, and CDN distribution structures.",
            date: "2025",
            location: "Remote",
            xpGained: ["AWS EC2", "AWS S3", "Cloud Computing", "Media Workflows"],
            coords: { x: 42, y: 25 }
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
            coords: { x: 58, y: 75 }
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
            coords: { x: 74, y: 35 }
        },
        {
            company: "CodeAlpha",
            role: "Python Programming Internship",
            type: "Internship",
            desc: "Developed robust Python applications and solved complex algorithmic challenges, data sorting structures, and scripting tasks.",
            date: "2024",
            location: "Remote",
            xpGained: ["Python Programming", "Algorithms", "Data Structures", "Scripting"],
            coords: { x: 90, y: 60 }
        }
    ];

    const combatEncounters = [
        {
            name: "Syntax Python Serpent",
            problem: "an Indentation Error outbreak",
            action: "Format Indents (cast Black Magic)",
            solvedMsg: "Syntax Serpent formatted! Gained +100 XP!"
        },
        {
            name: "MERN Mutator",
            problem: "infinite state re-renders",
            action: "Add dependency array (cast Hook Ward)",
            solvedMsg: "MERN Mutator stabilized! Gained +100 XP!"
        },
        {
            name: "AWS Congestion Slime",
            problem: "S3 Bucket Access Denied exception",
            action: "Attach IAM policy (cast Access Seal)",
            solvedMsg: "AWS Slime bypassed! Gained +100 XP!"
        },
        {
            name: "Data Anomaly Wraith",
            problem: "Null values in analytical models",
            action: "Drop NaN values (cast Cleanse script)",
            solvedMsg: "Data Anomaly Wraith banished! Gained +100 XP!"
        },
        {
            name: "BI Report Specter",
            problem: "untethered charts metrics",
            action: "Recalculate JOINs (cast Query Pierce)",
            solvedMsg: "Report Specter aligned! Gained +100 XP!"
        },
        {
            name: "Algorithmic Minotaur",
            problem: "an Infinite Recursion loop",
            action: "Define Base Case (cast Stack Break)",
            solvedMsg: "Algorithmic Minotaur defeated! Gained +100 XP!"
        }
    ];

    const handleMilestoneClick = (idx: number) => {
        setActiveQuest(idx);
        if (!solvedQuests.includes(idx)) {
            setIsCombatActive(true);
            setCombatStage('intro');
        } else {
            setIsCombatActive(false);
        }
    };

    const handleSolveCombat = () => {
        setCombatStage('solved');
        setSolvedQuests(prev => [...prev, activeQuest]);
        setTimeout(() => {
            setIsCombatActive(false);
        }, 1200);
    };

    const currentQuest = experiences[activeQuest];
    const currentCombat = combatEncounters[activeQuest];

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
                        🗺️ Click the milestones on the quest map to solve anomalies and inspect epic loot!
                    </p>
                </div>

                {/* Quest Trail Map */}
                <div className="relative mb-16 select-none bg-[#fffdf5] border-4 border-pencil border-wobbly p-6 rounded-2xl min-h-[280px] md:min-h-[360px] shadow-hard overflow-hidden">
                    <div className="absolute top-1.5 left-2 text-[10px] text-pencil/30 font-mono">quest_map_coordinates.db</div>
                    
                    {/* Doodles on map */}
                    <div className="absolute left-[5%] top-[12%] text-2xl opacity-15">🌲</div>
                    <div className="absolute right-[8%] top-[15%] text-2xl opacity-15">⛰️</div>
                    <div className="absolute left-[38%] bottom-[8%] text-2xl opacity-15">🌲</div>
                    <div className="absolute right-[35%] top-[10%] text-2xl opacity-15">⛵</div>
                    <div className="absolute left-[50%] top-[40%] text-xl opacity-10">👾</div>

                    {/* Dotted path curve connecting milestones */}
                    <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ minHeight: '280px' }}>
                        <path 
                            d="M 10% 40% Q 17.5% 65% 25% 70% Q 33.5% 45% 42% 25% Q 50% 60% 58% 75% Q 66% 50% 74% 35% Q 82% 52.5% 90% 60%" 
                            stroke="#2d2d2d" 
                            strokeWidth="3.5" 
                            strokeDasharray="6 6" 
                            fill="none" 
                        />
                    </svg>

                    {/* Animated Wizard Avatar gliding along path */}
                    <motion.div 
                        animate={{ 
                            left: `${currentQuest.coords.x}%`, 
                            top: `${currentQuest.coords.y}%` 
                        }}
                        transition={{ type: "spring", stiffness: 90, damping: 14 }}
                        className="absolute w-12 h-12 bg-accent border-2 border-pencil rounded-full flex items-center justify-center -ml-6 -mt-6 z-30 shadow-hard transform rotate-6 select-none pointer-events-none text-2xl"
                    >
                        🧙‍♂️
                    </motion.div>

                    {/* Map Nodes */}
                    {experiences.map((exp, idx) => {
                        const isActive = idx === activeQuest;
                        const isSolved = solvedQuests.includes(idx);
                        return (
                            <div 
                                key={idx} 
                                className="absolute -ml-7 -mt-7 flex flex-col items-center z-25"
                                style={{ left: `${exp.coords.x}%`, top: `${exp.coords.y}%` }}
                            >
                                <motion.button
                                    whileHover={{ scale: 1.15 }}
                                    whileTap={{ scale: 0.9 }}
                                    onClick={() => handleMilestoneClick(idx)}
                                    className={`w-12 h-12 rounded-full flex items-center justify-center font-display font-black border-2 border-pencil cursor-pointer relative shadow-hard-sm text-sm ${isActive ? 'bg-accent text-white scale-110 border-solid rotate-6' : isSolved ? 'bg-green-100 text-green-700 border-solid' : 'bg-paper text-pencil border-dashed hover:rotate-3'}`}
                                >
                                    <span>Q{idx + 1}</span>
                                    {/* Small check icon if solved */}
                                    {isSolved && (
                                        <span className="absolute -top-1 -right-1 bg-green-500 text-white rounded-full p-0.5 border border-pencil text-[8px]">
                                            ✓
                                        </span>
                                    )}
                                </motion.button>
                                
                                {/* Hover label */}
                                <div className="absolute top-14 bg-white border-2 border-pencil px-2 py-0.5 rounded shadow-hard-sm text-[10px] font-sans font-bold whitespace-nowrap pointer-events-none opacity-80 scale-90 md:scale-100">
                                    {exp.company.split(' ')[0]}
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Diary Quest Log Page */}
                <div className="relative max-w-4xl mx-auto min-h-[400px]">
                    <AnimatePresence mode="wait">
                        {isCombatActive ? (
                            /* RPG Combat Encounter Screen Overlay */
                            <motion.div
                                key="combat"
                                initial={{ opacity: 0, scale: 0.95, rotate: -1 }}
                                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                                exit={{ opacity: 0, scale: 0.95, rotate: 1 }}
                                transition={{ duration: 0.3 }}
                                className="absolute inset-0 z-40"
                            >
                                <Card 
                                    decoration="tack"
                                    className="bg-red-50/95 border-2 border-red-500 border-wobbly shadow-hard-lg p-8 flex flex-col items-center justify-center text-center min-h-[400px]"
                                >
                                    {combatStage === 'intro' ? (
                                        <>
                                            <div className="w-20 h-20 bg-red-100 border-2 border-red-500 border-wobbly rounded-full flex items-center justify-center text-red-500 mb-6 shadow-hard-sm animate-bounce">
                                                <ShieldAlert size={40} strokeWidth={2.5} />
                                            </div>
                                            <h3 className="text-3xl font-display font-black text-red-600 mb-2 uppercase tracking-wide">
                                                👾 Encounter: {currentCombat.name}
                                            </h3>
                                            <p className="text-pencil font-sans font-bold text-lg md:text-xl max-w-lg mb-8 leading-relaxed">
                                                Your deployment is blocked by <span className="underline decoration-wavy decoration-red-500">{currentCombat.problem}</span>! Clear it to claim loot.
                                            </p>
                                            
                                            <button 
                                                onClick={handleSolveCombat}
                                                className="px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-sans font-black text-base border-2 border-pencil shadow-hard hover:shadow-[1px_1px_0_0_#2d2d2d] hover:translate-x-[2px] hover:translate-y-[2px] transition-all cursor-pointer flex items-center gap-2"
                                            >
                                                ✨ {currentCombat.action}
                                            </button>
                                        </>
                                    ) : (
                                        <motion.div 
                                            initial={{ scale: 0.8 }}
                                            animate={{ scale: 1 }}
                                            className="flex flex-col items-center"
                                        >
                                            <div className="w-20 h-20 bg-green-100 border-2 border-green-500 border-wobbly rounded-full flex items-center justify-center text-green-600 mb-6 shadow-hard-sm animate-pulse">
                                                <CheckCircle2 size={40} strokeWidth={2.5} />
                                            </div>
                                            <h3 className="text-3xl font-display font-black text-green-600 mb-2 uppercase tracking-wide">
                                                🎉 Victory!
                                            </h3>
                                            <p className="text-pencil font-sans font-black text-lg md:text-xl leading-relaxed">
                                                {currentCombat.solvedMsg}
                                            </p>
                                        </motion.div>
                                    )}
                                </Card>
                            </motion.div>
                        ) : (
                            /* Standard Diary Quest Entry Log */
                            <motion.div
                                key={activeQuest}
                                initial={{ opacity: 0, scale: 0.96, rotate: -1 }}
                                animate={{ opacity: 1, scale: 1, rotate: 1 }}
                                exit={{ opacity: 0, scale: 0.96, rotate: 1 }}
                                transition={{ type: "spring", stiffness: 200, damping: 20 }}
                                className="w-full"
                            >
                                <Card 
                                    decoration="tape"
                                    className="bg-[#fffdf5] border-2 border-pencil border-wobbly shadow-hard-lg p-6 md:p-10 relative flex flex-col min-h-[400px]"
                                >
                                    {/* RPG Header info */}
                                    <div className="flex flex-col md:flex-row md:items-start justify-between border-b-2 border-dashed border-pencil/20 pb-6 mb-6 gap-4">
                                        <div className="space-y-2">
                                            <div className="flex items-center gap-2">
                                                <Sparkles size={18} className="text-accent" strokeWidth={2.5} />
                                                <span className="text-accent font-sans font-black text-sm uppercase tracking-widest bg-accent/5 px-2 py-0.5 rounded border border-accent border-dashed">
                                                    Quest Complete: {currentQuest.type}
                                                </span>
                                            </div>
                                            <h3 className="text-3xl font-display font-black text-pencil mt-2">
                                                {currentQuest.role}
                                            </h3>
                                            <p className="text-xl font-display font-bold text-secondary">
                                                @{currentQuest.company}
                                            </p>
                                        </div>
                                        <div className="text-pencil flex flex-wrap gap-4 text-base font-sans font-bold md:text-right md:flex-col md:gap-1">
                                            <div className="flex items-center md:justify-end gap-1.5">
                                                <Calendar size={16} strokeWidth={2.5} />
                                                <span>Timeline: {currentQuest.date}</span>
                                            </div>
                                            <div className="flex items-center md:justify-end gap-1.5 uppercase tracking-wider">
                                                <MapPin size={16} strokeWidth={2.5} />
                                                <span>Location: {currentQuest.location}</span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Quest Log (Desc) */}
                                    <div className="flex-1 mb-8">
                                        <h4 className="text-lg uppercase font-sans font-extrabold text-pencil/40 mb-3 block tracking-wider">Quest Log</h4>
                                        <p className="text-pencil font-sans text-lg md:text-xl leading-relaxed font-medium">
                                            {currentQuest.desc}
                                        </p>
                                    </div>

                                    {/* Loot & XP gained */}
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6 border-t-2 border-dashed border-pencil/20 mt-auto">
                                        {/* XP Gained list */}
                                        <div className="space-y-2">
                                            <span className="text-[10px] uppercase font-sans font-black text-pencil/40 block tracking-wider">Gained XP (Technologies)</span>
                                            <div className="flex flex-wrap gap-2">
                                                {currentQuest.xpGained.map((tag, idx) => (
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

                                        {/* Epic Loot (Certificate) */}
                                        <div className="flex flex-col justify-end items-start md:items-end">
                                            {currentQuest.certificate ? (
                                                <div className="w-full sm:w-auto">
                                                    <span className="text-[10px] uppercase font-sans font-black text-pencil/40 block tracking-wider mb-2 md:text-right">Epic Loot Claimed</span>
                                                    <a 
                                                        href={currentQuest.certificate}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-accent hover:bg-pencil text-paper hover:text-paper border-2 border-pencil border-wobbly font-sans font-extrabold text-base shadow-hard active:shadow-none active:translate-x-[4px] active:translate-y-[4px] transition-all cursor-pointer w-full sm:w-auto"
                                                    >
                                                        View Scroll (Certificate)
                                                        <ExternalLink size={16} strokeWidth={2.5} />
                                                    </a>
                                                </div>
                                            ) : (
                                                <div>
                                                    <span className="text-[10px] uppercase font-sans font-black text-pencil/40 block tracking-wider mb-2 md:text-right">Epic Loot Status</span>
                                                    <div className="px-4 py-2 border-2 border-dashed border-pencil/30 text-pencil/40 font-sans font-bold text-sm rounded">
                                                        No Certificate Item Discovered
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </Card>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
};

export default Experience;
