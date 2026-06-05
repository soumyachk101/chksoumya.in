"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { ExternalLink, Github, ArrowLeft, ArrowRight, Sparkles } from 'lucide-react';
import { Card } from './ui/Card';

interface Project {
    title: string;
    desc: string;
    tags: string[];
    image: string;
    github: string;
    live: string;
    bg: string;
    border: string;
    text: string;
}

const Projects = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [pageDirection, setPageDirection] = useState(0); // -1 for left, 1 for right

    const projects: Project[] = [
        {
            title: "DRISHTI AI",
            desc: "See every attack path before they do. AI-powered network risk intelligence. Discover attack paths, score financial blast radius, and ship AI-generated remediation — from one scan to a board-ready report in minutes.",
            tags: ["React", "FastAPI", "Tailwind", "Groq", "Spline", "AI"],
            image: "/images/project-drishti.png",
            github: "https://github.com/soumyachk101/Drishti-Security",
            live: "https://drishtisecurity.vercel.app/",
            bg: "bg-[#fef9c3]", // yellow
            border: "border-[#eab308]",
            text: "text-[#854d0e]"
        },
        {
            title: "CORTEX",
            desc: "An AI-powered personal finance & productivity platform featuring natural language transaction tracking, custom Pomodoro focus timers, and a botanical organic design system.",
            tags: ["Next.js", "Supabase", "Gemini API", "Tailwind", "Groq"],
            image: "/images/project-cortex.png",
            github: "https://github.com/soumyachk101/Cortex",
            live: "https://cortexgo.vercel.app",
            bg: "bg-[#dcfce7]", // green
            border: "border-[#22c55e]",
            text: "text-[#14532d]"
        },
        {
            title: "NEETI AI",
            desc: "An advanced AI-powered recruitment platform featuring real-time collaborative coding, automated evaluations, and seamless video integration.",
            tags: ["FastAPI", "React", "LiveKit", "Supabase", "AI"],
            image: "/images/project-neeti-ai.png",
            github: "https://github.com/soumyachk101/Neeti-AI",
            live: "https://neetiai.vercel.app/",
            bg: "bg-[#dbeafe]", // blue
            border: "border-[#3b82f6]",
            text: "text-[#1e3a8a]"
        },
        {
            title: "PHYGITAL TRACE",
            desc: "A cutting-edge supply chain solution bridging physical assets with digital twins using blockchain and NFC technology for end-to-end authenticity.",
            tags: ["Blockchain", "IoT", "React", "Node.js", "Solidity"],
            image: "/images/project-phygital-trace.png",
            github: "https://github.com/soumyachk101/Phygital-trace-done",
            live: "#",
            bg: "bg-[#f3e8ff]", // purple
            border: "border-[#a855f7]",
            text: "text-[#581c87]"
        },
        {
            title: "STREAM.TV",
            desc: "A premium video streaming client with a modern UI, real-time category filtering, and a high-performance video player interface.",
            tags: ["React", "Vite", "Tailwind", "RapidAPI"],
            image: "/images/project-streamtv.png",
            github: "https://github.com/soumyachk101/Stream.Tv-Client",
            live: "#",
            bg: "bg-[#ecfeff]", // cyan
            border: "border-[#06b6d4]",
            text: "text-[#083344]"
        },
        {
            title: "HEALTHTRACK+",
            desc: "A comprehensive health monitoring platform for seamless medical record management and real-time biometric tracking.",
            tags: ["React", "Express", "Node.js", "MongoDB"],
            image: "/images/project-healthtrack.png",
            github: "https://github.com/soumyachk101/HealthTrack-Client",
            live: "https://www.healthtrack.store/",
            bg: "bg-[#ffe4e6]", // rose
            border: "border-[#fb7185]",
            text: "text-[#9f1239]"
        },
        {
            title: "COUNTRY FINDER",
            desc: "An interactive geographic explorer allowing users to search and discover detailed country information with a clean, responsive interface.",
            tags: ["React", "REST Countries API", "Tailwind"],
            image: "/images/project-country.png",
            github: "https://github.com/soumyachk101/Country_Finder",
            live: "https://wcountryfinder.netlify.app/",
            bg: "bg-[#ffedd5]", // orange
            border: "border-[#f97316]",
            text: "text-[#7c2d12]"
        },
        {
            title: "STOCK VOLATILITY",
            desc: "A financial analysis tool for monitoring market volatility and stock trends using real-time data visualisations.",
            tags: ["React", "Finance API", "Charts.js"],
            image: "/images/project-stock.png",
            github: "https://github.com/soumyachk101/Stock-Volatility",
            live: "#",
            bg: "bg-[#fafaf9]", // stone
            border: "border-[#78716c]",
            text: "text-[#44403c]"
        },
        {
            title: "NEXUSOPS",
            desc: "A comprehensive CI/CD orchestration and infrastructure management platform for streamlining DevOps workflows and accelerating delivery.",
            tags: ["DevOps", "Docker", "Kubernetes", "AWS", "Terraform"],
            image: "/images/project-nexusops.png",
            github: "https://github.com/soumyachk101/NexusOps-3.0",
            live: "https://nexusops-sigma.vercel.app",
            bg: "bg-[#ccfbf1]", // teal
            border: "border-[#14b8a6]",
            text: "text-[#115e59]"
        }
    ];

    const handleNext = () => {
        setPageDirection(1);
        setActiveIndex((prev) => (prev + 1) % projects.length);
    };

    const handlePrev = () => {
        setPageDirection(-1);
        setActiveIndex((prev) => (prev - 1 + projects.length) % projects.length);
    };

    const handleSelect = (idx: number) => {
        setPageDirection(idx > activeIndex ? 1 : -1);
        setActiveIndex(idx);
    };

    const currentProject = projects[activeIndex];

    const pageVariants = {
        initial: (direction: number) => ({
            opacity: 0,
            x: direction > 0 ? 50 : -50,
            scale: 0.98
        }),
        animate: {
            opacity: 1,
            x: 0,
            scale: 1,
            transition: { duration: 0.4, type: "spring" as const, stiffness: 200, damping: 20 }
        },
        exit: (direction: number) => ({
            opacity: 0,
            x: direction > 0 ? -50 : 50,
            scale: 0.98,
            transition: { duration: 0.3 }
        })
    };

    return (
        <section id="projects" className="py-20 relative overflow-hidden">
            {/* Background Doodles */}
            <div className="absolute top-40 left-10 opacity-10 pointer-events-none" aria-hidden="true">
                <svg width="120" height="120" viewBox="0 0 120 120" fill="none">
                    <path d="M10,60 Q30,10 60,60 T110,60" stroke="#2d2d2d" strokeWidth="3" fill="none" className="path-draw" />
                    <circle cx="60" cy="60" r="40" stroke="#2d2d2d" strokeWidth="2" strokeDasharray="5,5" fill="none" />
                </svg>
            </div>

            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Header */}
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-6xl font-display font-bold mb-4 text-pencil transform rotate-1 inline-block relative">
                        Featured Projects
                        <svg className="absolute -bottom-4 left-0 w-full h-4" viewBox="0 0 100 20" preserveAspectRatio="none">
                            <path d="M0,15 Q50,5 100,15 M10,10 Q50,20 90,10" stroke="#e85d04" strokeWidth="3" fill="none" className="path-draw" />
                        </svg>
                    </h2>
                    <p className="mt-8 text-pencil/80 font-sans text-xl font-bold transform -rotate-1">
                        👉 Select tabs or turn pages to review my project blueprints
                    </p>
                </div>

                {/* Horizontal bookmark index tabs */}
                <div className="flex overflow-x-auto gap-2 pb-4 scrollbar-none max-w-full select-none justify-start md:justify-center border-b-2 border-dashed border-pencil/20 mb-8 pt-4">
                    {projects.map((project, idx) => {
                        const isActive = idx === activeIndex;
                        return (
                            <button
                                key={idx}
                                onClick={() => handleSelect(idx)}
                                className={`px-4 py-2 border-2 ${isActive ? `${project.bg} ${project.border} ${project.text} translate-y-0.5 shadow-none` : 'bg-white border-pencil text-pencil/50 shadow-hard-sm hover:text-pencil'} border-wobbly-sm font-display font-bold text-base md:text-lg cursor-pointer whitespace-nowrap transition-all flex items-center gap-1.5`}
                            >
                                {isActive && <Sparkles size={16} className="text-accent animate-pulse" />}
                                {project.title}
                            </button>
                        );
                    })}
                </div>

                {/* Large open Sketchbook desk container */}
                <div className="relative bg-[#f5ebe0]/40 border-4 border-pencil border-wobbly rounded-2xl p-4 md:p-8 shadow-hard select-none min-h-[500px]">
                    
                    {/* Ring binder in the center for desktop screens */}
                    <div className="absolute left-1/2 top-0 bottom-0 w-1 border-l-2 border-dashed border-pencil/30 hidden md:block -translate-x-1/2 z-10" />
                    <div className="absolute left-1/2 top-0 bottom-0 w-8 flex flex-col justify-around items-center hidden md:flex -translate-x-1/2 z-20 pointer-events-none">
                        {[...Array(6)].map((_, i) => (
                            <div key={i} className="w-5 h-5 border-4 border-pencil rounded-full bg-paper rotate-45 border-wobbly shadow-hard-sm" />
                        ))}
                    </div>

                    <AnimatePresence mode="wait" custom={pageDirection}>
                        <motion.div
                            key={activeIndex}
                            custom={pageDirection}
                            variants={pageVariants}
                            initial="initial"
                            animate="animate"
                            exit="exit"
                            className="grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch"
                        >
                            
                            {/* LEFT PAGE: Visual Blueprint (Polaroid / Browser Mockup) */}
                            <div className="md:col-span-6 flex flex-col justify-center items-center p-2">
                                <Card 
                                    decoration="tape"
                                    className="bg-white border-2 border-pencil border-wobbly p-4 shadow-hard-lg max-w-sm rotate-2 hover:rotate-0 transition-transform duration-300 w-full"
                                >
                                    <div className="relative h-56 md:h-64 border-2 border-pencil border-wobbly overflow-hidden group mb-4">
                                        <Image
                                            src={currentProject.image}
                                            alt={currentProject.title}
                                            fill
                                            priority
                                            sizes="(max-width: 768px) 100vw, 50vw"
                                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                                        />
                                        {/* Sketch Grid overlay on hover */}
                                        <div className="absolute inset-0 bg-pencil/5 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity" style={{ backgroundImage: 'linear-gradient(rgba(45,45,45,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(45,45,45,0.1) 1px, transparent 1px)', backgroundSize: '10px 10px' }} />
                                    </div>
                                    <div className="text-center font-display font-bold text-lg text-pencil/60 border-t border-dashed border-pencil/20 pt-2 italic">
                                        fig_0{activeIndex + 1}.png
                                    </div>
                                </Card>
                            </div>

                            {/* RIGHT PAGE: Spec Sheet (Description, Tags & Actions) */}
                            <div className="md:col-span-6 flex flex-col justify-between p-2">
                                <div className="space-y-6">
                                    {/* Project Title */}
                                    <div>
                                        <h3 className="text-3xl md:text-4xl font-display font-bold text-pencil mt-2 mb-1 inline-block border-b-2 border-pencil border-wobbly pb-1">
                                            {currentProject.title}
                                        </h3>
                                        <div className="text-xs font-mono text-pencil/40 uppercase tracking-widest mt-1">Project Spec Sheet</div>
                                    </div>

                                    {/* Description */}
                                    <p className="text-pencil font-sans text-lg md:text-xl leading-relaxed font-medium">
                                        {currentProject.desc}
                                    </p>

                                    {/* Tech stamps */}
                                    <div className="space-y-2">
                                        <span className="text-[10px] uppercase font-sans font-extrabold text-pencil/40 block tracking-wider">Tech Stack Stamps</span>
                                        <div className="flex flex-wrap gap-2">
                                            {currentProject.tags.map((tag, idx) => (
                                                <span 
                                                    key={idx} 
                                                    className="px-3 py-1 bg-white border-2 border-pencil border-wobbly shadow-hard-sm text-pencil font-sans font-bold text-sm select-none hover:-translate-y-0.5 transition-transform"
                                                    style={{ rotate: idx % 2 === 0 ? '-1.5deg' : '1.5deg' }}
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                {/* Actions */}
                                <div className="flex flex-col sm:flex-row gap-4 mt-8 pt-6 border-t-2 border-dashed border-pencil/20">
                                    <a 
                                        href={currentProject.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex-1 py-3 bg-white hover:bg-pencil text-pencil hover:text-paper border-2 border-pencil border-wobbly flex items-center justify-center gap-2 font-sans font-extrabold shadow-hard active:shadow-none active:translate-x-[4px] active:translate-y-[4px] transition-all cursor-pointer"
                                    >
                                        <Github size={20} strokeWidth={2.5} />
                                        <span>View Codebase</span>
                                    </a>
                                    
                                    {currentProject.live !== "#" && (
                                        <a 
                                            href={currentProject.live}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex-1 py-3 bg-accent hover:bg-pencil text-paper hover:text-paper border-2 border-pencil border-wobbly flex items-center justify-center gap-2 font-sans font-extrabold shadow-hard hover:shadow-hard active:shadow-none active:translate-x-[4px] active:translate-y-[4px] transition-all cursor-pointer"
                                        >
                                            <ExternalLink size={20} strokeWidth={2.5} />
                                            <span>Run Simulation</span>
                                        </a>
                                    )}
                                </div>
                            </div>

                        </motion.div>
                    </AnimatePresence>

                    {/* Bottom pager navigation controls */}
                    <div className="flex justify-between items-center mt-12 pt-6 border-t border-pencil/25 relative z-10 select-none">
                        <button
                            onClick={handlePrev}
                            className="p-3 bg-white hover:bg-pencil text-pencil hover:text-paper border-2 border-pencil border-wobbly rounded-full shadow-hard active:shadow-none active:translate-x-[4px] active:translate-y-[4px] transition-all cursor-pointer flex items-center justify-center"
                            aria-label="Previous Project"
                        >
                            <ArrowLeft size={20} strokeWidth={2.5} />
                        </button>
                        
                        <div className="font-display font-bold text-pencil text-lg">
                            Page {activeIndex + 1} of {projects.length}
                        </div>

                        <button
                            onClick={handleNext}
                            className="p-3 bg-white hover:bg-pencil text-pencil hover:text-paper border-2 border-pencil border-wobbly rounded-full shadow-hard active:shadow-none active:translate-x-[4px] active:translate-y-[4px] transition-all cursor-pointer flex items-center justify-center"
                            aria-label="Next Project"
                        >
                            <ArrowRight size={20} strokeWidth={2.5} />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Projects;
