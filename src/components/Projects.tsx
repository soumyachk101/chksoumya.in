"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { ExternalLink, Github, ChevronLeft, ChevronRight, Play, Pause } from 'lucide-react';
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
    codeFile: string;
    code: string;
    techJson: string;
    terminalLogs: string[];
}

const Projects = () => {



    const projects: Project[] = [
        {
            title: "SHIPORDIE",
            desc: "Multi-agent platform for validating SaaS ideas and optimizing resumes using CrewAI & LangGraph.",
            tags: ["Next.js", "FastAPI", "CrewAI", "LangGraph", "Docker", "AI"],
            image: "/images/project-shipordie.png",
            github: "https://github.com/soumyachk101/ShipOrDie",
            live: "#",
            bg: "bg-[#e0e7ff]", // indigo
            border: "border-[#6366f1]",
            text: "text-[#3730a3]",
            codeFile: "orchestrator.py",
            code: `# ShipOrDie: Multi-Agent Orchestrator (LangGraph)
from langgraph.graph import StateGraph, END
from backend.pipeline.state import PipelineState
from backend.agents.scraper_agent import ScraperAgent
from backend.agents.synthesizer_agent import SynthesizerAgent
from backend.agents.idea_gen_agent import IdeaGenAgent
from backend.agents.monetization_agent import MonetizationAgent

async def scraper_node(state: PipelineState) -> PipelineState:
    signals = await ScraperAgent().run()
    return {**state, "status": "scraping", "signals": signals}

async def synthesizer_node(state: PipelineState) -> PipelineState:
    clusters = await SynthesizerAgent().run(state["signals"])
    return {**state, "status": "synthesizing", "clusters": clusters}

async def idea_gen_node(state: PipelineState) -> PipelineState:
    idea_cards = await IdeaGenAgent().run(state["clusters"])
    return {**state, "status": "generating", "idea_cards": idea_cards}

async def monetization_node(state: PipelineState) -> PipelineState:
    agent = MonetizationAgent()
    reports = [await agent.run(idea) for idea in state["idea_cards"]]
    return {**state, "status": "monetizing", "monetization_reports": reports}

def build_pipeline() -> StateGraph:
    graph = StateGraph(PipelineState)
    
    # Register Nodes
    graph.add_node("scrape", scraper_node)
    graph.add_node("synthesize", synthesizer_node)
    graph.add_node("generate", idea_gen_node)
    graph.add_node("monetize", monetization_node)
    
    # Set Flow Edges
    graph.set_entry_point("scrape")
    graph.add_edge("scrape", "synthesize")
    graph.add_edge("synthesize", "generate")
    graph.add_edge("generate", "monetize")
    graph.add_edge("monetize", END)
    
    return graph.compile()`,
            techJson: `{
  "framework": "Next.js 14, Zustand",
  "backend": "FastAPI, Python",
  "ai_agents": "CrewAI, LangGraph",
  "data_layer": "PostgreSQL, Redis, ChromaDB",
  "infrastructure": "Docker, Cloudflare R2"
}`,
            terminalLogs: [
                "soumya@portfolio:~$ docker-compose up -d",
                "[docker] Spin up Postgres, Redis, and ChromaDB...",
                "[postgres] Database instance is healthy.",
                "[redis] Redis queue connection active.",
                "soumya@portfolio:~$ python3 main.py",
                "[shipordie] Starting up ShipOrDie API server...",
                "[crewai] Agent Trend Scraper initialized.",
                "[crewai] Agent RAG Synthesizer initialized.",
                "[crewai] Agent Idea Architect initialized.",
                "[success] Server bound to port 8000. Pipeline ready."
            ]
        },
        {
            title: "DRISHTI AI",
            desc: "AI network scanner that visualizes attack paths and generates security remediation playbooks.",
            tags: ["React", "FastAPI", "Tailwind", "Groq", "Spline", "AI"],
            image: "/images/project-drishti.png",
            github: "https://github.com/soumyachk101/Drishti-Security",
            live: "https://drishtisecurity.vercel.app/",
            bg: "bg-[#fef9c3]", // yellow
            border: "border-[#eab308]",
            text: "text-[#854d0e]",
            codeFile: "remediation.py",
            code: `# Drishti AI: Risk Intelligence Scan
import security_scanner

class DrishtiAI:
    def __init__(self):
        self.role = "Network Risk Intelligence"
        self.mission = "Visualize blast radius before threat actors do"
    
    def generate_remediation(self):
        paths = security_scanner.analyze()
        report = paths.create_board_report()
        return "Remediation plan compiled and pushed!"`,
            techJson: `{
  "framework": "React, Tailwind",
  "backend": "FastAPI",
  "ai_inference": "Groq LLaMA 3",
  "interactive_mesh": "Spline 3D"
}`,
            terminalLogs: [
                "soumya@portfolio:~$ python3 scan_risk.py",
                "[INFO] Booting Drishti AI Scanner...",
                "[SCAN] Auditing network ports and node paths...",
                "[ALERT] 3 critical attack paths identified!",
                "[FIX] Automatically compiling remediation playbooks...",
                "[SUCCESS] Secured. Board-ready security report active."
            ]
        },
        {
            title: "CORTEX",
            desc: "AI finance tracker with natural language processing, custom Pomodoro timers, and a botanical UI.",
            tags: ["Next.js", "Supabase", "Gemini API", "Tailwind", "Groq"],
            image: "/images/project-cortex.png",
            github: "https://github.com/soumyachk101/Cortex",
            live: "https://cortexgo.vercel.app",
            bg: "bg-[#dcfce7]", // green
            border: "border-[#22c55e]",
            text: "text-[#14532d]",
            codeFile: "dashboard.tsx",
            code: `// Cortex: Personal Finance & Productivity
import { FocusTimer, GeminiAgent } from 'cortex-core';

export default function Dashboard() {
    const tracking = GeminiAgent.parseNaturalLanguage();
    return (
        <main className="organic-botanical-ui p-6">
            <FocusTimer minutes={25} style="pomodoro" />
            <Transactions data={tracking} />
        </main>
    );
}`,
            techJson: `{
  "framework": "Next.js 15 App Router",
  "database": "Supabase PostgreSQL",
  "nlp_model": "Gemini 1.5 Pro API",
  "agent_inference": "Groq Cloud"
}`,
            terminalLogs: [
                "soumya@portfolio:~$ npm run build && npm start",
                "[cortex] Initializing WebAssembly modules...",
                "[supabase] Realtime listener connected to ledger...",
                "[gemini] NLP parser validated.",
                "[timer] Focus timer online.",
                "[server] Cortex application listening on port 3000."
            ]
        },
        {
            title: "NEETI AI",
            desc: "AI recruitment platform with collaborative coding, automated evaluations, and WebRTC video.",
            tags: ["FastAPI", "React", "LiveKit", "Supabase", "AI"],
            image: "/images/project-neeti-ai.png",
            github: "https://github.com/soumyachk101/Neeti-AI",
            live: "https://neetiai.vercel.app/",
            bg: "bg-[#dbeafe]", // blue
            border: "border-[#3b82f6]",
            text: "text-[#1e3a8a]",
            codeFile: "recruiter.py",
            code: `# Neeti AI: Collaborative Recruitment Platform
import livekit_stream

def initialize_room(candidate_id):
    stream = livekit_stream.connect()
    room = stream.create_collaborative_ide()
    evaluator = room.enable_auto_evaluation()
    return room`,
            techJson: `{
  "backend": "FastAPI, Python",
  "frontend": "React",
  "media_stream": "LiveKit WebRTC Video",
  "cloud_db": "Supabase"
}`,
            terminalLogs: [
                "soumya@portfolio:~$ ./start_interview.sh --candidate=41",
                "[livekit] Constructing RTC session...",
                "[ide] Real-time code sharing synchronized.",
                "[evaluator] AI pipelines ready to evaluate compiler logs.",
                "[webrtc] Video connection stabilized."
            ]
        },
        {
            title: "PHYGITAL TRACE",
            desc: "Supply chain validation bridging physical products and digital twins using blockchain and NFC.",
            tags: ["Blockchain", "IoT", "React", "Node.js", "Solidity"],
            image: "/images/project-phygital-trace.png",
            github: "https://github.com/soumyachk101/Phygital-trace-done",
            live: "#",
            bg: "bg-[#f3e8ff]", // purple
            border: "border-[#a855f7]",
            text: "text-[#581c87]",
            codeFile: "Traceability.sol",
            code: `// Phygital Trace: Blockchain Supply Chain Ledger
pragma solidity ^0.8.0;

contract Traceability {
    struct Product { uint id; string physicalTwinNFC; bool authentic; }
    mapping(uint => Product) public registry;
    
    function verifyAuthenticity(uint id) public view returns (bool) {
        return registry[id].authentic;
    }
}`,
            techJson: `{
  "ledger": "Solidity Smart Contract",
  "network": "Ethereum / Hardhat",
  "hardware": "NFC Tags & IoT Twins",
  "app_client": "React (Web3)"
}`,
            terminalLogs: [
                "soumya@portfolio:~$ npx hardhat deploy --network mainnet",
                "[hardhat] Compiling 2 Solidity source files...",
                "[NFC] Syncing physical hardware identifiers...",
                "[blockchain] Deploying Traceability contract on ledger...",
                "[success] Contract active at: 0x4f3ea2d...7ff"
            ]
        },
        {
            title: "STREAM.TV",
            desc: "Premium video streaming client with real-time category filtering and a custom media player.",
            tags: ["React", "Vite", "Tailwind", "RapidAPI"],
            image: "/images/project-streamtv.png",
            github: "https://github.com/soumyachk101/Stream.Tv-Client",
            live: "#",
            bg: "bg-[#ecfeff]", // cyan
            border: "border-[#06b6d4]",
            text: "text-[#083344]",
            codeFile: "VideoPlayer.tsx",
            code: `// Stream.Tv: Video Streaming client
import { RapidAPI } from 'stream-apis';

export const VideoPlayer = ({ videoId }) => {
    const videoDetails = RapidAPI.fetchFeed(videoId);
    return (
        <div className="netflix-dark-theme font-sans">
            <Player src={videoDetails.streamUrl} autoPlay />
            <Categories filter={videoDetails.tags} />
        </div>
    );
};`,
            techJson: `{
  "client": "React SPA (Vite)",
  "source": "RapidAPI Video Feeds",
  "style": "Tailwind (Dark Mode Theme)",
  "player": "Custom HTML5 Media Player"
}`,
            terminalLogs: [
                "soumya@portfolio:~$ npm run dev --host",
                "[vite] Dev server running on port 5173.",
                "[feed] RapidAPI credential validation success.",
                "[player] Pre-buffering chunk data...",
                "[app] Stream.tv dashboard populated."
            ]
        },
        {
            title: "HEALTHTRACK+",
            desc: "Medical record platform with real-time biometric tracking and HIPAA-compliant logs.",
            tags: ["React", "Express", "Node.js", "MongoDB"],
            image: "/images/project-healthtrack.png",
            github: "https://github.com/soumyachk101/HealthTrack-Client",
            live: "https://www.healthtrack.store/",
            bg: "bg-[#ffe4e6]", // rose
            border: "border-[#fb7185]",
            text: "text-[#9f1239]",
            codeFile: "patient_server.js",
            code: `// HealthTrack+: Patient record server
const express = require('express');
const mongoose = require('mongoose');

const patientSchema = new mongoose.Schema({
    name: String,
    biometrics: { heartRate: Number, oxygen: Number }
});

const Patient = mongoose.model('Patient', patientSchema);`,
            techJson: `{
  "frontend": "React",
  "server": "Express.js Node.js",
  "database": "MongoDB Atlas",
  "security": "HIPAA-compliant logs"
}`,
            terminalLogs: [
                "soumya@portfolio:~$ node server.js",
                "[mongodb] Connected to cluster-health-db...",
                "[express] Server bound to port 8080.",
                "[biometrics] Telemetry feed online.",
                "[security] HIPAA log rotation initialized."
            ]
        },
        {
            title: "COUNTRY FINDER",
            desc: "Interactive explorer for searching and discovering country information via REST Countries API.",
            tags: ["React", "REST Countries API", "Tailwind"],
            image: "/images/project-country.png",
            github: "https://github.com/soumyachk101/Country_Finder",
            live: "https://wcountryfinder.netlify.app/",
            bg: "bg-[#ffedd5]", // orange
            border: "border-[#f97316]",
            text: "text-[#7c2d12]",
            codeFile: "explorer.js",
            code: `// Country Finder: Geographic explorer
async function fetchCountryData(name) {
    const res = await fetch(\`https://restcountries.com/v3.1/name/\${name}\`);
    const [data] = await res.json();
    return {
        capital: data.capital[0],
        population: data.population
    };
}`,
            techJson: `{
  "runtime": "React Hooks SPA",
  "style": "Tailwind Grid",
  "source": "REST Countries API"
}`,
            terminalLogs: [
                "soumya@portfolio:~$ yarn start",
                "[country-finder] Fetching API index...",
                "[api] restcountries.com responding successfully.",
                "[app] Search indices ready for query parsing."
            ]
        },
        {
            title: "STOCK VOLATILITY",
            desc: "Financial analysis dashboard for visualizing stock market volatility using Chart.js.",
            tags: ["React", "Finance API", "Charts.js"],
            image: "/images/project-stock.png",
            github: "https://github.com/soumyachk101/Stock-Volatility",
            live: "#",
            bg: "bg-[#fafaf9]", // stone
            border: "border-[#78716c]",
            text: "text-[#44403c]",
            codeFile: "VolatilityTracker.tsx",
            code: `// Stock Volatility: Chart.js visualization
import { Chart } from 'chart.js';

export function VolatilityChart({ ticker }) {
    const marketFeed = fetchFinanceFeed(ticker);
    return (
        <div className="financial-analytics">
            <Chart data={marketFeed} type="line" />
        </div>
    );
}`,
            techJson: `{
  "frontend": "React SPA",
  "visuals": "Chart.js / React-Chartjs-2",
  "feed_source": "Finance Market API"
}`,
            terminalLogs: [
                "soumya@portfolio:~$ yarn start",
                "[stock-volatility] Subscribing to stock tickers...",
                "[chart] Compiling line rendering paths...",
                "[ticker] Feed connected successfully."
            ]
        },
        {
            title: "NEXUSOPS",
            desc: "CI/CD orchestration platform for automated deployments using Kubernetes, Docker, and Ansible.",
            tags: ["DevOps", "Docker", "Kubernetes", "AWS", "Terraform"],
            image: "/images/project-nexusops.png",
            github: "https://github.com/soumyachk101/NexusOps-3.0",
            live: "https://nexusops-sigma.vercel.app",
            bg: "bg-[#ccfbf1]", // teal
            border: "border-[#14b8a6]",
            text: "text-[#115e59]",
            codeFile: "playbook.yaml",
            code: `# NexusOps: Infrastructure Playbook
- name: Setup CI/CD Orchestration
  hosts: all
  tasks:
    - name: Ensure Docker runs
      service: name=docker state=started
    - name: Spin up Kubernetes cluster
      k8s: definition="{{ lookup('file', 'k8s.yaml') }}"`,
            techJson: `{
  "orchestration": "Kubernetes & Docker",
  "infrastructure": "Terraform, Ansible",
  "hosting": "AWS EC2/S3",
  "workflow": "DevOps Pipelines"
}`,
            terminalLogs: [
                "soumya@portfolio:~$ ansible-playbook playbook.yaml",
                "[nexusops] Running deployment playbook...",
                "[k8s] Provisioning cluster nodes...",
                "[docker] Initializing containers...",
                "[success] Infrastructure active at: nexusops.io"
            ]
        }
    ];



    // Carousel State
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(0); // 1 for right, -1 for left
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        if (!isAutoPlaying || isHovered) return;
        const timer = setInterval(() => {
            handleNext();
        }, 5000); // 5 seconds per slide
        return () => clearInterval(timer);
    }, [currentIndex, isAutoPlaying, isHovered]);

    const handleNext = () => {
        setDirection(1);
        setCurrentIndex((prev) => (prev + 1) % projects.length);
    };

    const handlePrev = () => {
        setDirection(-1);
        setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
    };

    // Animation Variants
    const slideVariants = {
        enter: (dir: number) => ({
            x: dir > 0 ? 1000 : -1000,
            opacity: 0,
            scale: 0.95,
            rotateY: dir > 0 ? 15 : -15,
        }),
        center: {
            zIndex: 1,
            x: 0,
            opacity: 1,
            scale: 1,
            rotateY: 0,
            transition: {
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 },
                rotateY: { duration: 0.4 }
            }
        },
        exit: (dir: number) => ({
            zIndex: 0,
            x: dir < 0 ? 1000 : -1000,
            opacity: 0,
            scale: 0.95,
            rotateY: dir < 0 ? 15 : -15,
            transition: {
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 },
                rotateY: { duration: 0.4 }
            }
        })
    };

    const currentProject = projects[currentIndex];

    return (
        <section id="projects" className="py-24 relative overflow-hidden bg-background">
            <div className="max-w-[95vw] md:max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
                
                {/* Section Header */}
                <div className="text-center mb-16 relative">
                    <h2 className="text-4xl md:text-6xl font-heading font-bold mb-4 text-pencil transform rotate-1 inline-block relative z-10">
                        Featured Projects
                        <svg className="absolute -bottom-4 left-0 w-full h-4" viewBox="0 0 100 20" preserveAspectRatio="none">
                            <path d="M0,15 Q50,5 100,15 M10,10 Q50,20 90,10" stroke="#e85d04" strokeWidth="3" fill="none" className="path-draw" />
                        </svg>
                    </h2>
                    <p className="mt-8 text-pencil/80 font-sans text-xl font-bold transform -rotate-1">
                        🎨 Slide through my interactive works!
                    </p>
                    
                    {/* Decorative Background Scribbles */}
                    <div className="absolute top-0 right-10 opacity-20 pointer-events-none transform -rotate-12 hidden md:block">
                        <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10,50 Q30,20 50,50 T90,50" stroke="#2d2d2d" strokeWidth="4" strokeLinecap="round" fill="none" />
                            <path d="M20,60 Q40,30 60,60 T100,60" stroke="#2d2d2d" strokeWidth="4" strokeLinecap="round" fill="none" />
                        </svg>
                    </div>
                </div>

                {/* Carousel Container */}
                <div 
                    className="relative w-full max-w-6xl mx-auto min-h-[600px] md:min-h-[500px] flex items-center justify-center perspective-[1000px]"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
                    <AnimatePresence initial={false} custom={direction} mode="popLayout">
                        <motion.div
                            key={currentIndex}
                            custom={direction}
                            variants={slideVariants as any}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            className="w-full flex justify-center"
                        >
                            <div className={`w-full flex flex-col md:flex-row gap-0 md:gap-8 bg-white border-4 border-pencil border-wobbly rounded-3xl shadow-[8px_8px_0px_0px_rgba(45,45,45,1)] hover:shadow-[12px_12px_0px_0px_rgba(45,45,45,1)] transition-all duration-300 relative overflow-hidden group`}>
                                
                                {/* Decorative Tag */}
                                <div className={`absolute top-4 right-4 md:right-8 z-20 px-4 py-1.5 font-bold text-sm uppercase border-2 border-pencil border-wobbly transform rotate-3 shadow-hard-sm ${currentProject.bg} ${currentProject.text} ${currentProject.border}`}>
                                    {currentIndex + 1} / {projects.length}
                                </div>

                                {/* Project Image Area */}
                                <div className="w-full md:w-1/2 aspect-video md:aspect-auto md:min-h-[450px] relative border-b-4 md:border-b-0 md:border-r-4 border-pencil overflow-hidden bg-muted flex items-center justify-center">
                                    <div className="absolute inset-0 bg-gradient-to-tr from-black/20 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                    <Image
                                        src={currentProject.image}
                                        alt={currentProject.title}
                                        fill
                                        sizes="(max-width: 768px) 100vw, 50vw"
                                        className="object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                                        priority
                                    />
                                </div>

                                {/* Project Details Area */}
                                <div className="w-full md:w-1/2 p-6 md:p-8 flex flex-col justify-between bg-gradient-to-br from-white to-[#fdfbf7]">
                                    <div>
                                        <h3 className={`text-3xl sm:text-4xl font-heading font-black mb-3 transform -rotate-1 ${currentProject.text}`}>
                                            {currentProject.title}
                                        </h3>
                                        <p className="text-pencil/80 font-sans text-lg leading-relaxed mb-6">
                                            {currentProject.desc}
                                        </p>
                                        
                                        {/* Tags */}
                                        <div className="flex flex-wrap gap-2.5 mb-8">
                                            {currentProject.tags.map((tag, tagIdx) => (
                                                <span 
                                                    key={tagIdx}
                                                    className="px-3 py-1 text-sm font-bold font-mono bg-muted text-pencil border-2 border-pencil rounded-md shadow-hard-sm hover:-translate-y-1 hover:shadow-hard transition-all cursor-default"
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Action Buttons */}
                                    <div className="flex flex-wrap gap-4 mt-auto pt-4 border-t-2 border-dashed border-pencil/20">
                                        <a 
                                            href={currentProject.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex-1 min-w-[140px] px-5 py-3 bg-white hover:bg-pencil text-pencil hover:text-white border-2 border-pencil border-wobbly-alt flex items-center justify-center gap-2 font-sans font-bold text-base shadow-hard-sm active:shadow-none active:translate-x-[2px] active:translate-y-[2px] transition-all"
                                        >
                                            <Github size={18} strokeWidth={2.5} />
                                            <span>Repository</span>
                                        </a>
                                        {currentProject.live !== "#" && (
                                            <a 
                                                href={currentProject.live}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className={`flex-1 min-w-[140px] px-5 py-3 ${currentProject.bg} hover:bg-pencil ${currentProject.text} hover:text-white border-2 border-pencil border-wobbly flex items-center justify-center gap-2 font-sans font-bold text-base shadow-hard-sm active:shadow-none active:translate-x-[2px] active:translate-y-[2px] transition-all`}
                                            >
                                                <ExternalLink size={18} strokeWidth={2.5} />
                                                <span>Live Demo</span>
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* Carousel Navigation Controls */}
                <div className="flex flex-col sm:flex-row items-center justify-between max-w-6xl mx-auto mt-8 px-4 gap-6">
                    {/* Progress / Auto-play Toggle */}
                    <div className="flex items-center gap-4">
                        <button 
                            onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                            className="p-2 border-2 border-pencil rounded-full bg-white text-pencil shadow-hard-sm hover:-translate-y-0.5 active:translate-y-0.5 active:shadow-none transition-all"
                            title={isAutoPlaying ? "Pause Auto-play" : "Start Auto-play"}
                        >
                            {isAutoPlaying ? <Pause size={18} fill="currentColor" /> : <Play size={18} fill="currentColor" />}
                        </button>
                        <div className="font-mono text-sm font-bold text-pencil/60">
                            {isAutoPlaying ? "Auto-play: ON" : "Auto-play: OFF"}
                        </div>
                    </div>

                    {/* Dots indicator */}
                    <div className="flex items-center gap-2">
                        {projects.map((_, idx) => (
                            <button
                                key={idx}
                                onClick={() => {
                                    setDirection(idx > currentIndex ? 1 : -1);
                                    setCurrentIndex(idx);
                                }}
                                className={`w-3 h-3 rounded-full border-2 border-pencil transition-all duration-300 ${idx === currentIndex ? 'bg-accent w-6 border-wobbly' : 'bg-white hover:bg-pencil/20'}`}
                            />
                        ))}
                    </div>

                    {/* Next/Prev Arrows */}
                    <div className="flex items-center gap-3">
                        <button 
                            onClick={handlePrev}
                            className="p-3 bg-white border-2 border-pencil border-wobbly rounded-xl shadow-hard-sm hover:bg-pencil hover:text-white active:translate-y-1 active:shadow-none transition-all text-pencil"
                        >
                            <ChevronLeft size={24} strokeWidth={3} />
                        </button>
                        <button 
                            onClick={handleNext}
                            className="p-3 bg-accent border-2 border-pencil border-wobbly rounded-xl shadow-hard-sm hover:bg-pencil hover:text-white active:translate-y-1 active:shadow-none transition-all text-pencil"
                        >
                            <ChevronRight size={24} strokeWidth={3} />
                        </button>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Projects;
