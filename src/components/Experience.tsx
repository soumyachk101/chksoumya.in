"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, ExternalLink, MapPin, Sparkles, Trophy } from 'lucide-react';
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
}

const Experience = () => {
    const [activeQuest, setActiveQuest] = useState(0);

    const experiences: ExperienceItem[] = [
        {
            company: "EduSkills Academy",
            role: "Python Full Stack Developer Intern",
            type: "Internship",
            desc: "Completed a 10-week program building scalable web applications with Python, Django, SQL, and frontend technologies.",
            date: "2026",
            location: "Remote",
            certificate: "/certificates/Soumya  Chakraborty_Certificate.pdf",
            xpGained: ["Python", "Django", "SQL", "HTML5", "CSS3", "REST APIs"]
        },
        {
            company: "Codec Technologies Pvt. Ltd.",
            role: "MERN Stack Developer Intern",
            type: "Internship",
            desc: "Worked on full stack web development using MongoDB, Express.js, React, and Node.js to build scalable applications.",
            date: "2026",
            location: "Remote",
            certificate: "/certificates/MERN Stack Developer Intern.pdf",
            xpGained: ["MongoDB", "Express.js", "React.js", "Node.js", "JavaScript"]
        },
        {
            company: "AWS",
            role: "AWS Media & Entertainment Cloud Engineering",
            type: "Internship",
            desc: "Focused on cloud engineering solutions for media workflows, asset management, and CDN distribution structures.",
            date: "2025",
            location: "Remote",
            xpGained: ["AWS EC2", "AWS S3", "Cloud Computing", "Media Workflows"]
        },
        {
            company: "AICTE",
            role: "Data Analytics Process Automation",
            type: "Virtual Internship",
            desc: "Worked on real-world automation challenges using industry data modeling toolkits, scripting automations, and reporting pipelines.",
            date: "2025",
            location: "Remote",
            certificate: "/certificates/Data Analytics Process Automation Virtual Internship By AICTE.pdf",
            xpGained: ["Data Analytics", "Process Automation", "Python", "Pandas", "Reporting"]
        },
        {
            company: "IBM SkillsBuild",
            role: "Data Analytics & Business Intelligence",
            type: "Internship",
            desc: "Built solutions for data visualization and business insights. Modelled datasets and generated interactive analytical templates.",
            date: "2025",
            location: "Remote",
            certificate: "/certificates/Data Analytics & Business Intelligence Lab_ Explore, Analyze & Build Real-World Solutions By IBM Skill Build.pdf",
            xpGained: ["Data Analytics", "Business Intelligence", "Charts.js", "SQL", "IBM SkillsBuild"]
        },
        {
            company: "CodeAlpha",
            role: "Python Programming Internship",
            type: "Internship",
            desc: "Developed robust Python applications and solved complex algorithmic challenges, data sorting structures, and scripting tasks.",
            date: "2024",
            location: "Remote",
            xpGained: ["Python Programming", "Algorithms", "Data Structures", "Scripting"]
        }
    ];

    const currentQuest = experiences[activeQuest];

    return (
        <section id="experience" className="py-20 relative overflow-hidden">
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
                        🗺️ Click the milestones on the quest map to read case reports and inspect loot!
                    </p>
                </div>

                {/* Quest Trail Map */}
                <div className="relative mb-16 select-none bg-white border-2 border-pencil border-dashed p-6 rounded-xl">
                    <div className="absolute top-1 left-2 text-[10px] text-pencil/30 font-mono">quest_map_coordinates.db</div>
                    
                    {/* SVG Dotted Line Connecting Nodes on Desktop */}
                    <div className="absolute left-10 right-10 top-1/2 -translate-y-1/2 h-1 hidden md:block" aria-hidden="true">
                        <svg className="w-full h-8 -translate-y-3 stroke-pencil stroke-[3] fill-none" strokeDasharray="6 6">
                            <path d="M 10 10 Q 150 25 300 10 T 600 10 T 900 15" />
                        </svg>
                    </div>

                    {/* Milestones scrollable row */}
                    <div className="flex overflow-x-auto gap-4 md:justify-between pb-4 md:pb-0 scrollbar-none relative z-10 w-full min-h-[90px] items-center">
                        {experiences.map((exp, idx) => {
                            const isActive = idx === activeQuest;
                            return (
                                <div key={idx} className="flex flex-col items-center flex-shrink-0 md:flex-1">
                                    <motion.button
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.9 }}
                                        onClick={() => setActiveQuest(idx)}
                                        className={`w-14 h-14 rounded-full flex items-center justify-center font-display font-black border-2 border-pencil cursor-pointer relative shadow-hard-sm ${isActive ? 'bg-accent text-white scale-110 border-solid rotate-6' : 'bg-paper text-pencil border-dashed hover:rotate-3'}`}
                                    >
                                        {isActive && (
                                            <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
                                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                                                <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-accent"></span>
                                            </span>
                                        )}
                                        <span>Q{idx + 1}</span>
                                    </motion.button>
                                    <span className="text-xs font-sans font-bold text-pencil/60 mt-2.5 uppercase tracking-wider bg-white px-2 py-0.5 border border-pencil/20 rounded">
                                        {exp.date}
                                    </span>
                                    <span className="text-xs font-display font-bold text-pencil/80 mt-1 max-w-[100px] text-center truncate hidden sm:block">
                                        {exp.company}
                                    </span>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Diary Quest Log Page */}
                <div className="relative max-w-4xl mx-auto">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeQuest}
                            initial={{ opacity: 0, scale: 0.96, rotate: -1 }}
                            animate={{ opacity: 1, scale: 1, rotate: 1 }}
                            exit={{ opacity: 0, scale: 0.96, rotate: 1 }}
                            transition={{ type: "spring", stiffness: 200, damping: 20 }}
                        >
                            <Card 
                                decoration="tape"
                                className="bg-[#fffdf5] border-2 border-pencil border-wobbly shadow-hard-lg p-6 md:p-10 relative flex flex-col min-h-[380px]"
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
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
};

export default Experience;
