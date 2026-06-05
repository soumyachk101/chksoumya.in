"use client";

import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code2, Database, Layout, Terminal, Cloud, PenTool, Cpu, Globe, Brain, Sparkles, RefreshCw, Info } from 'lucide-react';
import { Card } from './ui/Card';

interface Skill {
    name: string;
    category: string;
    level: number;
    tagline: string;
    desc: string;
    bg: string;
    border: string;
    text: string;
    icon: React.ReactNode;
    doodle: string;
}

interface SoftSkillInfo {
    name: string;
    description: string;
    statName: string;
    statValue: string;
    bg: string;
    border: string;
    text: string;
}

const Skills = () => {
    // State to track selected technical skill
    const [activeSkill, setActiveSkill] = useState<Skill | null>(null);
    // Key-modifier state to reset sticker positions
    const [resetCounter, setResetCounter] = useState(0);
    // Reference to outer boundaries for technical sticker dragging
    const sandboxRef = useRef<HTMLDivElement>(null);

    // RPG Character Sheet state for soft skills
    const [characterSheet, setCharacterSheet] = useState<{
        superpower: SoftSkillInfo | null;
        buff: SoftSkillInfo | null;
        trait: SoftSkillInfo | null;
    }>({
        superpower: null,
        buff: null,
        trait: null
    });
    const [activeSlot, setActiveSlot] = useState<'superpower' | 'buff' | 'trait'>('superpower');

    const categories = [
        { id: 'languages', title: 'Programming Languages', icon: <Code2 className="text-pencil" size={28} strokeWidth={2.5} /> },
        { id: 'frameworks', title: 'Frameworks & Dev', icon: <Layout className="text-pencil" size={28} strokeWidth={2.5} /> },
        { id: 'tools', title: 'Tools & Platforms', icon: <Terminal className="text-pencil" size={28} strokeWidth={2.5} /> }
    ];

    const skills: Skill[] = [
        {
            name: "Python",
            category: "languages",
            level: 95,
            tagline: "First-class scripting, automation & AI workflows",
            desc: "Speaks fluent indentation. Wrote my first script to automate homework and now leveraging it for machine learning and backend servers with Django & FastAPI.",
            bg: "bg-[#fef9c3]", // yellow
            border: "border-[#eab308]",
            text: "text-[#854d0e]",
            icon: <Brain size={18} strokeWidth={2.5} />,
            doodle: "M 20 80 Q 40 20 50 50 T 80 20 M 80 20 L 70 25 M 80 20 L 78 32 M 35 50 C 45 40 55 60 65 50"
        },
        {
            name: "JavaScript",
            category: "languages",
            level: 90,
            tagline: "The engine of web interactivity & logic",
            desc: "The chaotic good of the web. Fully mastered ES6+, closures, event loops, and asynchronous flows. Runs on coffee and console.log.",
            bg: "bg-[#ccfbf1]", // teal
            border: "border-[#14b8a6]",
            text: "text-[#115e59]",
            icon: <Code2 size={18} strokeWidth={2.5} />,
            doodle: "M 30 30 L 70 30 L 70 70 L 30 70 Z M 40 60 Q 50 65 60 60"
        },
        {
            name: "TypeScript",
            category: "languages",
            level: 85,
            tagline: "JavaScript with a safety harness",
            desc: "JavaScript's responsible older sibling. Saving my code from runtime crashes and 'undefined' daily with strict compile-time types.",
            bg: "bg-[#dbeafe]", // blue
            border: "border-[#3b82f6]",
            text: "text-[#1e3a8a]",
            icon: <Code2 size={18} strokeWidth={2.5} />,
            doodle: "M 50 20 L 80 35 L 80 65 L 50 85 L 20 65 L 20 35 Z M 40 50 L 48 58 L 65 42"
        },
        {
            name: "SQL",
            category: "languages",
            level: 88,
            tagline: "Querying databases with precision",
            desc: "SELECT, JOIN, and GROUP BY are my close friends. Optimizing indexes and normalization structures to keep backend queries blazing fast.",
            bg: "bg-[#dcfce7]", // green
            border: "border-[#22c55e]",
            text: "text-[#14532d]",
            icon: <Database size={18} strokeWidth={2.5} />,
            doodle: "M 30 35 C 30 25 70 25 70 35 M 30 35 L 30 55 C 30 65 70 65 70 55 L 70 35 M 30 55 L 30 75 C 30 85 70 85 70 75 L 70 55"
        },
        {
            name: "C",
            category: "languages",
            level: 80,
            tagline: "Pointers, memory & foundational systems",
            desc: "My first programming love. Taught me memory allocation, pointer arithmetic, and the beauty of compile-time code before higher-level abstractions.",
            bg: "bg-[#f3e8ff]", // purple
            border: "border-[#a855f7]",
            text: "text-[#581c87]",
            icon: <Cpu size={18} strokeWidth={2.5} />,
            doodle: "M 70 35 C 50 20 30 40 30 55 C 30 70 50 90 70 75 M 40 35 L 50 45"
        },
        {
            name: "React.js",
            category: "frameworks",
            level: 92,
            tagline: "Building dynamic, state-driven UIs",
            desc: "Components, hooks, and virtual DOM. Can structure large-scale modular UIs in my sleep. Has a strong opinion on prop drilling.",
            bg: "bg-[#ecfeff]", // cyan
            border: "border-[#06b6d4]",
            text: "text-[#083344]",
            icon: <Globe size={18} strokeWidth={2.5} />,
            doodle: "M 50 50 C 10 30 90 70 50 50 M 50 50 C 90 30 10 70 50 50 M 50 50 C 50 10 50 90 50 50"
        },
        {
            name: "Next.js",
            category: "frameworks",
            level: 85,
            tagline: "Server-side rendering & route optimization",
            desc: "Server components, file-system routing, and static generation. The engine driving this very website to run at warp speed.",
            bg: "bg-[#ffedd5]", // orange
            border: "border-[#f97316]",
            text: "text-[#7c2d12]",
            icon: <Globe size={18} strokeWidth={2.5} />,
            doodle: "M 25 75 L 50 25 L 75 75 Z M 37 50 L 63 50"
        },
        {
            name: "Node.js",
            category: "frameworks",
            level: 88,
            tagline: "Fast, non-blocking backend runtimes",
            desc: "Scalable backend APIs and asynchronous scripts. Designing REST endpoints, middleware systems, and microservices on Node runtimes.",
            bg: "bg-[#f0fdf4]", // light green
            border: "border-[#4ade80]",
            text: "text-[#166534]",
            icon: <Terminal size={18} strokeWidth={2.5} />,
            doodle: "M 50 20 L 75 35 L 75 65 L 50 80 L 25 65 L 25 35 Z M 50 20 L 50 80 M 25 35 L 75 65 M 25 65 L 75 35"
        },
        {
            name: "Tailwind CSS",
            category: "frameworks",
            level: 95,
            tagline: "Crafting custom designs at speed",
            desc: "Utility-first CSS styling. Can translate complex designs into gorgeous responsive frontends in record time without bloated stylesheets.",
            bg: "bg-[#e0f2fe]", // sky blue
            border: "border-[#0ea5e9]",
            text: "text-[#0369a1]",
            icon: <PenTool size={18} strokeWidth={2.5} />,
            doodle: "M 20 50 Q 35 30 50 50 T 80 50 M 20 60 Q 35 40 50 60 T 80 60"
        },
        {
            name: "Framer Motion",
            category: "frameworks",
            level: 88,
            tagline: "Smooth animations & layout physics",
            desc: "Breathing life into standard web components. Creating elastic transitions, hover reactions, drag mechanics, and layout morphs.",
            bg: "bg-[#fdf2f8]", // pink
            border: "border-[#f472b6]",
            text: "text-[#9d174d]",
            icon: <Layout size={18} strokeWidth={2.5} />,
            doodle: "M 20 30 L 40 30 C 50 30 50 70 60 70 L 80 70 M 35 50 Q 50 20 65 50"
        },
        {
            name: "Three.js (Basics)",
            category: "frameworks",
            level: 75,
            tagline: "Stepping into 3D rendering & WebGL scenes",
            desc: "Exploring lights, cameras, meshes, and textures. Creating engaging WebGL environments and bringing three-dimensional spaces to the browser.",
            bg: "bg-[#fef3c7]", // amber
            border: "border-[#f59e0b]",
            text: "text-[#78350f]",
            icon: <Cpu size={18} strokeWidth={2.5} />,
            doodle: "M 50 20 L 80 35 L 80 65 L 50 80 L 20 65 L 20 35 Z M 50 20 L 50 80 M 20 35 L 50 50 L 80 35 M 20 65 L 50 50 L 80 65"
        },
        {
            name: "Git & GitHub",
            category: "tools",
            level: 90,
            tagline: "The coder's time machine & sync manager",
            desc: "Branching, committing, pulling, pushing. Reverting accidents and resolving merge conflicts. Keeping code history clean and readable.",
            bg: "bg-[#fafaf9]", // stone
            border: "border-[#78716c]",
            text: "text-[#44403c]",
            icon: <Terminal size={18} strokeWidth={2.5} />,
            doodle: "M 50 20 L 50 60 M 50 40 C 35 40 35 60 35 70 M 50 60 C 65 60 65 80 65 90"
        },
        {
            name: "AWS (Cloud)",
            category: "tools",
            level: 80,
            tagline: "Deploying infrastructure in the sky",
            desc: "Configuring EC2 compute nodes, S3 buckets, cloud networks, and serverless functions. Running applications globally with AWS cloud modules.",
            bg: "bg-[#ffedd5]", // deep orange
            border: "border-[#f97316]",
            text: "text-[#7c2d12]",
            icon: <Cloud size={18} strokeWidth={2.5} />,
            doodle: "M 25 60 C 20 50 30 35 45 40 C 50 30 70 30 75 40 C 85 35 95 45 90 55 C 95 65 85 75 75 75 L 25 75 Z"
        },
        {
            name: "VS Code",
            category: "tools",
            level: 95,
            tagline: "The software engineering command center",
            desc: "Highly optimized extension ecosystem, custom keybindings, themes, and shell configurations. Where ideas translate into lines of code.",
            bg: "bg-[#eff6ff]", // light blue
            border: "border-[#60a5fa]",
            text: "text-[#1e40af]",
            icon: <Code2 size={18} strokeWidth={2.5} />,
            doodle: "M 20 30 L 80 30 L 80 70 L 20 70 Z M 35 30 L 35 70 M 20 45 L 35 45"
        },
        {
            name: "Figma",
            category: "tools",
            level: 85,
            tagline: "Prototyping UX & designing systems",
            desc: "Sketching wireframes, mocking layout proportions, color spacing, and typographic scales before writing a single line of CSS.",
            bg: "bg-[#ffe4e6]", // rose
            border: "border-[#fb7185]",
            text: "text-[#9f1239]",
            icon: <PenTool size={18} strokeWidth={2.5} />,
            doodle: "M 35 30 C 45 30 45 45 35 45 C 25 45 25 30 35 30 Z M 35 45 C 45 45 45 60 35 60 C 25 60 25 45 35 45 Z M 50 30 C 60 30 60 45 50 45 Z M 50 45 C 60 45 60 60 50 60 Z"
        }
    ];

    const softSkillsData: SoftSkillInfo[] = [
        {
            name: "Communication",
            statName: "Meeting Efficiency",
            statValue: "+40%",
            description: "Translates developer jargon into clear, actionable human speak.",
            bg: "bg-[#fef9c3]", // yellow
            border: "border-[#eab308]",
            text: "text-[#854d0e]"
        },
        {
            name: "Problem Solving",
            statName: "Debugging Speed",
            statValue: "+60%",
            description: "Finds missing brackets and logical errors with near-telepathic speed.",
            bg: "bg-[#ccfbf1]", // teal
            border: "border-[#14b8a6]",
            text: "text-[#115e59]"
        },
        {
            name: "Team Collaboration",
            statName: "PR Review Speed",
            statValue: "+35%",
            description: "Improves team sync and accelerates code reviews with positive feedback.",
            bg: "bg-[#dbeafe]", // blue
            border: "border-[#3b82f6]",
            text: "text-[#1e3a8a]"
        },
        {
            name: "Time Management",
            statName: "Deadline Safety",
            statValue: "+50%",
            description: "Effectively juggles features to ship production-ready code on schedule.",
            bg: "bg-[#dcfce7]", // green
            border: "border-[#22c55e]",
            text: "text-[#14532d]"
        },
        {
            name: "Adaptability",
            statName: "Stack Luck",
            statValue: "+45%",
            description: "Transitions between React frontends and Python backends seamlessly.",
            bg: "bg-[#f3e8ff]", // purple
            border: "border-[#a855f7]",
            text: "text-[#581c87]"
        },
        {
            name: "Critical Thinking",
            statName: "Overengineering Block",
            statValue: "+30%",
            description: "Keeps code simple, modular, and optimized instead of writing bloated logic.",
            bg: "bg-[#ffedd5]", // orange
            border: "border-[#f97316]",
            text: "text-[#7c2d12]"
        },
        {
            name: "Attention to Detail",
            statName: "Bug Immunity",
            statValue: "+80%",
            description: "Spots double spaces, typo alerts, and edge cases before QA does.",
            bg: "bg-[#e0f2fe]", // sky blue
            border: "border-[#0ea5e9]",
            text: "text-[#0369a1]"
        },
        {
            name: "Empathy",
            statName: "UX Accessibility",
            statValue: "+50%",
            description: "Views products from a user perspective to build highly intuitive interfaces.",
            bg: "bg-[#fdf2f8]", // pink
            border: "border-[#f472b6]",
            text: "text-[#9d174d]"
        },
        {
            name: "Creativity",
            statName: "UI Wow Factor",
            statValue: "+75%",
            description: "Transforms standard static templates into interactive, delightful web experiences.",
            bg: "bg-[#fef3c7]", // amber
            border: "border-[#f59e0b]",
            text: "text-[#78350f]"
        }
    ];

    const handleTidyUp = () => {
        setResetCounter(prev => prev + 1);
        setActiveSkill(null);
    };

    const handleAssignSkill = (skill: SoftSkillInfo) => {
        setCharacterSheet(prev => {
            // Remove skill from any other slot first to avoid duplicates
            const cleanSheet = { ...prev };
            if (cleanSheet.superpower?.name === skill.name) cleanSheet.superpower = null;
            if (cleanSheet.buff?.name === skill.name) cleanSheet.buff = null;
            if (cleanSheet.trait?.name === skill.name) cleanSheet.trait = null;
            
            // Assign to active slot
            cleanSheet[activeSlot] = skill;
            return cleanSheet;
        });

        // Auto-advance active slot to next empty slot for convenience
        setActiveSlot(current => {
            if (current === 'superpower') return 'buff';
            if (current === 'buff') return 'trait';
            return 'superpower';
        });
    };

    const handleClearSlots = () => {
        setCharacterSheet({
            superpower: null,
            buff: null,
            trait: null
        });
        setActiveSlot('superpower');
    };

    return (
        <section id="skills" className="py-20 relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-20 right-10 opacity-10 pointer-events-none" aria-hidden="true">
                <svg width="200" height="200" viewBox="0 0 200 200" fill="none">
                    <path d="M20,100 Q60,20 100,100 T180,100" stroke="#2d2d2d" strokeWidth="3" fill="none" className="path-draw" />
                </svg>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-center mb-16 gap-6">
                    <div className="text-center md:text-left">
                        <h2 className="text-4xl md:text-6xl font-display font-bold mb-4 text-pencil transform -rotate-1 inline-block relative">
                            Skills & Expertise
                            <svg className="absolute -bottom-4 left-0 w-full h-4" viewBox="0 0 100 20" preserveAspectRatio="none">
                                <path d="M0,10 Q50,20 100,10 M10,15 Q50,5 90,15" stroke="#e85d04" strokeWidth="3" fill="none" className="path-draw" />
                            </svg>
                        </h2>
                    </div>

                    <button 
                        onClick={handleTidyUp}
                        className="inline-flex items-center gap-2 px-6 py-3 font-sans font-bold text-pencil hover:text-paper bg-white hover:bg-pencil border-2 border-pencil border-wobbly shadow-hard hover:shadow-[1px_1px_0_0_#2d2d2d] hover:translate-x-[3px] hover:translate-y-[3px] transition-all"
                    >
                        <RefreshCw size={18} strokeWidth={2.5} className="animate-spin-slow" />
                        Tidy Up Board
                    </button>
                </div>

                {/* Main Interactive Sandbox wrapper */}
                <div ref={sandboxRef} className="relative min-h-[500px] bg-muted/20 border-4 border-double border-pencil rounded-xl p-4 md:p-8 shadow-hard mb-20 select-none overflow-hidden" key={resetCounter}>
                    
                    {/* Corkboard background effect */}
                    <div className="absolute inset-0 opacity-[0.06] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#2d2d2d 2px, transparent 2px)', backgroundSize: '16px 16px' }} />

                    {/* Helper sticky note */}
                    <div className="absolute top-2 right-2 md:top-4 md:right-4 max-w-[200px] bg-post-it border-2 border-pencil border-wobbly p-3 shadow-hard rotate-3 z-30 pointer-events-none hidden sm:block">
                        <div className="flex items-start gap-1.5 text-xs text-pencil font-sans leading-tight">
                            <Info size={14} className="flex-shrink-0" strokeWidth={2.5} />
                            <div>
                                <p className="font-bold mb-0.5">Sticker Sandbox!</p>
                                <p>Toss stickers around or click one to draw details.</p>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 relative z-10 items-start">
                        
                        {/* LEFT: Category Clipboards (8 Columns) */}
                        <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-6">
                            {categories.map((cat, catIdx) => (
                                <Card 
                                    key={cat.id}
                                    decoration={catIdx % 2 === 0 ? 'tape' : 'tack'}
                                    className="bg-white border-2 border-pencil border-wobbly flex flex-col p-6 min-h-[160px]"
                                >
                                    <div className="flex items-center gap-3 mb-6 pb-2 border-b-2 border-dashed border-pencil/20">
                                        {cat.icon}
                                        <h3 className="text-2xl font-display font-bold text-pencil">{cat.title}</h3>
                                    </div>
                                    
                                    {/* Stickers flex area */}
                                    <div className="flex flex-wrap gap-3">
                                        {skills.filter(s => s.category === cat.id).map((skill, skillIdx) => {
                                            const tilt = (skillIdx % 3 === 0) ? -2 : (skillIdx % 3 === 1) ? 3 : -1;
                                            const isActive = activeSkill?.name === skill.name;
                                            return (
                                                <motion.div
                                                    key={skill.name}
                                                    drag
                                                    dragConstraints={sandboxRef}
                                                    dragElastic={0.12}
                                                    dragTransition={{ bounceStiffness: 500, bounceDamping: 20 }}
                                                    whileDrag={{ scale: 1.25, rotate: 6, zIndex: 100, boxShadow: "8px 8px 0px 0px #2d2d2d" }}
                                                    whileHover={{ scale: 1.08, rotate: tilt * 1.5, zIndex: 20 }}
                                                    onTap={() => setActiveSkill(skill)}
                                                    className={`px-4 py-2 border-2 ${skill.bg} ${skill.border} ${skill.text} border-wobbly-sm shadow-hard-sm cursor-grab active:cursor-grabbing text-lg font-sans font-bold flex items-center gap-1.5 select-none transition-shadow ${isActive ? 'ring-4 ring-offset-2 ring-accent' : ''}`}
                                                    style={{ rotate: tilt }}
                                                >
                                                    {skill.icon}
                                                    <span>{skill.name}</span>
                                                </motion.div>
                                            );
                                        })}
                                    </div>
                                </Card>
                            ))}
                        </div>

                        {/* RIGHT: Lab Sketchbook (4 Columns) - Sticky on Desktop */}
                        <div className="lg:col-span-4 lg:sticky lg:top-24 z-20">
                            <AnimatePresence mode="wait">
                                {activeSkill ? (
                                    <motion.div
                                        key={activeSkill.name}
                                        initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
                                        animate={{ opacity: 1, scale: 1, rotate: 1 }}
                                        exit={{ opacity: 0, scale: 0.9, rotate: 2 }}
                                        transition={{ type: "spring", stiffness: 300, damping: 25 }}
                                        className="bg-paper border-2 border-pencil border-wobbly-alt shadow-hard-lg p-6 relative flex flex-col min-h-[380px]"
                                    >
                                        {/* Tape decorator */}
                                        <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-24 h-6 bg-pencil/10 backdrop-blur-sm rotate-1 z-10" />
                                        
                                        {/* Header */}
                                        <div className="text-center mb-4">
                                            <span className="text-xs uppercase font-sans font-extrabold text-accent border border-accent border-dashed px-2 py-0.5 rounded-sm">
                                                {categories.find(c => c.id === activeSkill.category)?.title}
                                            </span>
                                            <h3 className="text-3xl font-display font-bold text-pencil mt-2 mb-1">
                                                {activeSkill.name}
                                            </h3>
                                            <p className="text-sm font-sans font-bold text-pencil/60 italic leading-snug">
                                                "{activeSkill.tagline}"
                                            </p>
                                        </div>

                                        {/* Real-time SVG doodle draw */}
                                        <div className="bg-muted/10 border border-dashed border-pencil/20 rounded-md p-3 mb-6 relative">
                                            <svg viewBox="0 0 100 100" className="w-24 h-24 stroke-pencil stroke-[3] fill-none mx-auto">
                                                <motion.path
                                                    key={`doodle-${activeSkill.name}`}
                                                    d={activeSkill.doodle}
                                                    initial={{ pathLength: 0 }}
                                                    animate={{ pathLength: 1 }}
                                                    transition={{ duration: 1.2, ease: "easeInOut" }}
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </svg>
                                            <div className="absolute bottom-1 right-2 text-[10px] text-pencil/40 font-mono">sketch.svg</div>
                                        </div>

                                        {/* Mastery progress circle */}
                                        <div className="relative w-32 h-32 mx-auto mb-6 flex items-center justify-center">
                                            <svg className="w-full h-full transform -rotate-90">
                                                <circle
                                                    cx="64"
                                                    cy="64"
                                                    r="48"
                                                    className="stroke-pencil/5 fill-none"
                                                    strokeWidth="6"
                                                    strokeDasharray="4 4"
                                                />
                                                <motion.circle
                                                    key={`progress-${activeSkill.name}`}
                                                    cx="64"
                                                    cy="64"
                                                    r="48"
                                                    className="stroke-accent fill-none stroke-[6]"
                                                    strokeLinecap="round"
                                                    initial={{ strokeDasharray: 2 * Math.PI * 48, strokeDashoffset: 2 * Math.PI * 48 }}
                                                    animate={{ strokeDashoffset: 2 * Math.PI * 48 * (1 - activeSkill.level / 100) }}
                                                    transition={{ duration: 1.5, ease: "easeOut", delay: 0.1 }}
                                                />
                                            </svg>
                                            <div className="absolute text-center flex flex-col items-center">
                                                <span className="text-3xl font-display font-bold text-pencil">
                                                    {activeSkill.level}%
                                                </span>
                                                <span className="text-[10px] uppercase font-sans font-bold tracking-wider text-pencil/50">
                                                    {activeSkill.level >= 90 ? "Expert" : activeSkill.level >= 80 ? "Proficient" : "Competent"}
                                                </span>
                                            </div>
                                        </div>

                                        {/* Commentary */}
                                        <div className="mt-auto pt-4 border-t-2 border-dashed border-pencil/20">
                                            <p className="text-pencil font-sans text-base leading-relaxed text-center font-medium">
                                                {activeSkill.desc}
                                            </p>
                                        </div>
                                    </motion.div>
                                ) : (
                                    <div className="bg-[#fff9c4] border-2 border-pencil border-wobbly shadow-hard p-8 text-center rotate-1 min-h-[380px] flex flex-col justify-center items-center">
                                        <Sparkles size={40} className="text-accent mb-4 animate-bounce" strokeWidth={2.5} />
                                        <h4 className="text-2xl font-display font-bold text-pencil mb-3">Inspect My Stats!</h4>
                                        <p className="text-pencil font-sans leading-relaxed text-lg">
                                            ✏️ Grab a skill sticker from the board, drag it around, or tap it to display real-time SVGs, stats, and commentary in this notebook.
                                        </p>
                                    </div>
                                )}
                            </AnimatePresence>
                        </div>

                    </div>
                </div>

                {/* RPG Soft Skills Section */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true, amount: 0.2 }}
                    className="max-w-5xl mx-auto mt-28"
                >
                    <Card decoration="tack" variant="post-it" className="rotate-1 hover:rotate-0 p-6 md:p-10 relative bg-[#fff9c4]">
                        <h3 className="text-3xl md:text-4xl font-display font-bold text-pencil mb-2 text-center">
                            🛡️ Dev Character Status
                        </h3>
                        <p className="text-center text-sm font-sans font-bold text-pencil/60 mb-8 italic">
                            Equip my soft skill superpowers into the status slots to calculate my stats!
                        </p>
                        
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                            {/* Superpowers Pool */}
                            <div className="lg:col-span-7 bg-white border-2 border-pencil border-dashed p-6 rounded-md min-h-[280px] flex flex-wrap gap-3 justify-center items-center content-center relative">
                                <div className="absolute top-1.5 left-2 text-[10px] text-pencil/30 font-mono">superpowers_pool.bin</div>
                                
                                {softSkillsData.map((skill) => {
                                    // Check if this skill is currently slotted
                                    const isSlotted = characterSheet.superpower?.name === skill.name ||
                                                      characterSheet.buff?.name === skill.name ||
                                                      characterSheet.trait?.name === skill.name;
                                    
                                    return (
                                        <motion.button
                                            key={skill.name}
                                            whileHover={{ scale: isSlotted ? 1 : 1.08 }}
                                            whileTap={{ scale: isSlotted ? 1 : 0.95 }}
                                            onClick={() => !isSlotted && handleAssignSkill(skill)}
                                            className={`px-4 py-2 border-2 ${skill.bg} ${skill.border} ${skill.text} border-wobbly-sm shadow-hard-sm cursor-pointer text-lg font-sans font-bold flex items-center gap-1.5 select-none transition-all ${isSlotted ? 'opacity-20 pointer-events-none filter grayscale' : ''}`}
                                        >
                                            <span>{skill.name}</span>
                                        </motion.button>
                                    );
                                })}
                            </div>

                            {/* RPG Character Stats Sheet */}
                            <div className="lg:col-span-5 bg-white border-2 border-pencil border-wobbly p-6 rounded-md shadow-hard-lg relative">
                                <div className="flex items-center gap-4 mb-6">
                                    {/* Cute hand-drawn geek avatar */}
                                    <div className="w-16 h-16 bg-[#e5e0d8] border-2 border-pencil border-wobbly rounded-full flex items-center justify-center relative overflow-hidden flex-shrink-0">
                                        <svg viewBox="0 0 100 100" className="w-12 h-12 stroke-pencil stroke-[4] fill-none">
                                            {/* Hair/cap */}
                                            <path d="M 20 35 C 30 18, 70 18, 80 35" />
                                            {/* Glasses frames */}
                                            <circle cx="35" cy="48" r="8" />
                                            <circle cx="65" cy="48" r="8" />
                                            <line x1="43" y1="48" x2="57" y2="48" />
                                            {/* Eyes inside glasses */}
                                            <circle cx="35" cy="48" r="1.5" fill="currentColor" />
                                            <circle cx="65" cy="48" r="1.5" fill="currentColor" />
                                            {/* Nose */}
                                            <path d="M 50 48 L 50 56 Q 47 58 50 60" />
                                            {/* Smile */}
                                            <path d="M 40 68 Q 50 78 60 68" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-display font-bold text-pencil">Soumya Chakraborty</h4>
                                        <p className="text-xs font-mono text-pencil/50">Level 20 Full Stack Dev</p>
                                    </div>
                                </div>

                                {/* Slot select buttons */}
                                <div className="space-y-4 mb-6">
                                    {/* Superpower Slot */}
                                    <button 
                                        onClick={() => setActiveSlot('superpower')}
                                        className={`w-full p-3 border-2 border-pencil border-dashed rounded-md flex items-center justify-between text-left transition-all ${activeSlot === 'superpower' ? 'border-solid ring-2 ring-accent bg-accent/5' : 'bg-muted/10 hover:bg-muted/20'}`}
                                    >
                                        <div>
                                            <span className="text-[10px] uppercase font-bold text-pencil/40 block">🧠 Active Superpower</span>
                                            <span className="text-base font-sans font-bold text-pencil">
                                                {characterSheet.superpower ? characterSheet.superpower.name : "[ Empty Slot - Tap to Equip ]"}
                                            </span>
                                        </div>
                                        {characterSheet.superpower && (
                                            <span className="text-xs font-mono bg-accent/10 text-accent font-bold px-2 py-0.5 rounded border border-accent border-dashed">
                                                {characterSheet.superpower.statValue} {characterSheet.superpower.statName}
                                            </span>
                                        )}
                                    </button>

                                    {/* Buff Slot */}
                                    <button 
                                        onClick={() => setActiveSlot('buff')}
                                        className={`w-full p-3 border-2 border-pencil border-dashed rounded-md flex items-center justify-between text-left transition-all ${activeSlot === 'buff' ? 'border-solid ring-2 ring-accent bg-accent/5' : 'bg-muted/10 hover:bg-muted/20'}`}
                                    >
                                        <div>
                                            <span className="text-[10px] uppercase font-bold text-pencil/40 block">🤝 Team Synergy Buff</span>
                                            <span className="text-base font-sans font-bold text-pencil">
                                                {characterSheet.buff ? characterSheet.buff.name : "[ Empty Slot - Tap to Equip ]"}
                                            </span>
                                        </div>
                                        {characterSheet.buff && (
                                            <span className="text-xs font-mono bg-secondary/10 text-secondary font-bold px-2 py-0.5 rounded border border-secondary border-dashed">
                                                {characterSheet.buff.statValue} {characterSheet.buff.statName}
                                            </span>
                                        )}
                                    </button>

                                    {/* Trait Slot */}
                                    <button 
                                        onClick={() => setActiveSlot('trait')}
                                        className={`w-full p-3 border-2 border-pencil border-dashed rounded-md flex items-center justify-between text-left transition-all ${activeSlot === 'trait' ? 'border-solid ring-2 ring-accent bg-accent/5' : 'bg-muted/10 hover:bg-muted/20'}`}
                                    >
                                        <div>
                                            <span className="text-[10px] uppercase font-bold text-pencil/40 block">⚡ Passive Trait</span>
                                            <span className="text-base font-sans font-bold text-pencil">
                                                {characterSheet.trait ? characterSheet.trait.name : "[ Empty Slot - Tap to Equip ]"}
                                            </span>
                                        </div>
                                        {characterSheet.trait && (
                                            <span className="text-xs font-mono bg-[#854d0e]/10 text-[#854d0e] font-bold px-2 py-0.5 rounded border border-[#854d0e] border-dashed">
                                                {characterSheet.trait.statValue} {characterSheet.trait.statName}
                                            </span>
                                        )}
                                    </button>
                                </div>

                                {/* Active Stats descriptions */}
                                <div className="p-4 bg-muted/20 border-2 border-pencil border-dashed rounded-md min-h-[120px] flex flex-col justify-center">
                                    {characterSheet.superpower || characterSheet.buff || characterSheet.trait ? (
                                        <div className="space-y-3 font-sans text-sm font-bold text-pencil">
                                            <h5 className="font-display text-base border-b border-pencil/20 pb-1">Slotted Superpower Effects:</h5>
                                            {characterSheet.superpower && (
                                                <p className="leading-snug">🧠 <span className="text-accent">{characterSheet.superpower.name}</span>: {characterSheet.superpower.description}</p>
                                            )}
                                            {characterSheet.buff && (
                                                <p className="leading-snug">🤝 <span className="text-secondary">{characterSheet.buff.name}</span>: {characterSheet.buff.description}</p>
                                            )}
                                            {characterSheet.trait && (
                                                <p className="leading-snug">⚡ <span className="text-[#854d0e]">{characterSheet.trait.name}</span>: {characterSheet.trait.description}</p>
                                            )}
                                        </div>
                                    ) : (
                                        <p className="text-center font-sans text-sm text-pencil/50 italic font-bold">
                                            Select a slot above, then tap a soft skill from the pool to equip it.
                                        </p>
                                    )}
                                </div>

                                {/* Reset Equipped button */}
                                {(characterSheet.superpower || characterSheet.buff || characterSheet.trait) && (
                                    <button 
                                        onClick={handleClearSlots}
                                        className="w-full mt-4 py-2 text-xs font-sans font-bold text-pencil/50 hover:text-accent transition-colors"
                                    >
                                        Reset Equipped Superpowers
                                    </button>
                                )}
                            </div>
                        </div>
                    </Card>
                </motion.div>
            </div>
        </section>
    );
};

export default Skills;
