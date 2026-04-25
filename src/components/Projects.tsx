import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { Card } from './ui/Card';

const Projects = () => {
    const projects = [
        {
            title: "Neeti AI",
            desc: "An advanced AI-powered recruitment platform featuring real-time collaborative coding, automated evaluations, and seamless video integration.",
            tags: ["FastAPI", "React", "LiveKit", "Supabase", "AI"],
            image: "/images/project-neeti-ai.png",
            github: "https://github.com/soumyachk101/Neeti-AI",
            live: "https://neetiai.vercel.app/"
        },
        {
            title: "Phygital Trace",
            desc: "A cutting-edge supply chain solution bridging physical assets with digital twins using blockchain and NFC technology for end-to-end authenticity.",
            tags: ["Blockchain", "IoT", "React", "Node.js", "Solidity"],
            image: "/images/project-phygital-trace.png",
            github: "https://github.com/soumyachk101/Phygital-trace-done",
            live: "#"
        },
        {
            title: "Stream.Tv",
            desc: "A premium video streaming client with a modern UI, real-time category filtering, and a high-performance video player interface.",
            tags: ["React", "Vite", "Tailwind", "RapidAPI"],
            image: "/images/project-streamtv.png",
            github: "https://github.com/soumyachk101/Stream.Tv-Client",
            live: "#"
        },
        {
            title: "HealthTrack+",
            desc: "A comprehensive health monitoring platform for seamless medical record management and real-time biometric tracking.",
            tags: ["React", "Express", "Node.js", "MongoDB"],
            image: "/images/project-healthtrack.png",
            github: "https://github.com/soumyachk101/HealthTrack-Client",
            live: "https://www.healthtrack.store/"
        },
        {
            title: "Country Finder",
            desc: "An interactive geographic explorer allowing users to search and discover detailed country information with a clean, responsive interface.",
            tags: ["React", "REST Countries API", "Tailwind"],
            image: "/images/project-country.png",
            github: "https://github.com/soumyachk101/Country_Finder",
            live: "https://wcountryfinder.netlify.app/"
        },
        {
            title: "Stock Volatility",
            desc: "A financial analysis tool for monitoring market volatility and stock trends using real-time data visualisations.",
            tags: ["React", "Finance API", "Charts.js"],
            image: "/images/project-stock.png",
            github: "https://github.com/soumyachk101/Stock-Volatility",
            live: "#"
        },
        {
            title: "NexusOps",
            desc: "A comprehensive CI/CD orchestration and infrastructure management platform for streamlining DevOps workflows and accelerating delivery.",
            tags: ["DevOps", "Docker", "Kubernetes", "AWS", "Terraform"],
            image: "/images/project-nexusops.png",
            github: "https://github.com/soumyachk101/NexusOps-3.0",
            live: "https://nexusops-sigma.vercel.app"
        }
    ];

    return (
        <section id="projects" className="py-20 relative overflow-hidden">
            {/* Background Doodles */}
            <div className="absolute top-40 left-10 opacity-20 pointer-events-none">
                <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10,60 Q30,10 60,60 T110,60" stroke="#2d2d2d" strokeWidth="3" fill="none" className="path-draw" />
                    <circle cx="60" cy="60" r="40" stroke="#2d2d2d" strokeWidth="2" strokeDasharray="5,5" fill="none" />
                </svg>
            </div>
            
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                    whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                    transition={{ type: "spring", stiffness: 120, damping: 10 }}
                    viewport={{ once: true }}
                    className="text-center mb-20 relative"
                >
                    <h2 className="text-4xl md:text-6xl font-display font-bold mb-4 text-pencil transform rotate-1 inline-block relative">
                        Featured Projects
                        <svg className="absolute -bottom-4 left-0 w-full h-4" viewBox="0 0 100 20" preserveAspectRatio="none">
                            <path d="M0,15 Q50,5 100,15 M10,10 Q50,20 90,10" stroke="#e85d04" strokeWidth="3" fill="none" className="path-draw" />
                        </svg>
                    </h2>
                    <p className="mt-8 text-pencil/80 font-sans text-xl font-bold transform -rotate-1">
                        A selection of things I've built.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50, scale: 0.9, rotate: (index % 2 === 0 ? -8 : 8) }}
                            whileInView={{ opacity: 1, y: 0, scale: 1, rotate: 0 }}
                            transition={{ 
                                type: "spring",
                                stiffness: 100,
                                damping: 12,
                                delay: index * 0.1 
                            }}
                            viewport={{ once: true, amount: 0.2 }}
                        >
                            <Card 
                                decoration={index % 3 === 0 ? 'tack' : index % 2 === 0 ? 'tape' : 'none'}
                                className={`h-full flex flex-col ${index % 2 === 0 ? '-rotate-1' : 'rotate-1'} hover:rotate-0 transition-transform duration-300 p-4`}
                            >
                                <div className="relative h-48 mb-6 border-2 border-pencil border-wobbly overflow-hidden group">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                        onError={(e) => {
                                            (e.target as HTMLImageElement).src = `https://via.placeholder.com/400x300?text=${project.title}`;
                                        }}
                                    />
                                    <div className="absolute inset-0 bg-pencil/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden md:flex items-center justify-center space-x-6 backdrop-blur-[2px]">
                                        <a href={project.github} className="p-3 bg-paper border-2 border-pencil rounded-full hover:bg-accent hover:-translate-y-1 transition-all shadow-hard">
                                            <Github size={24} className="text-pencil" strokeWidth={2.5} />
                                        </a>
                                        <a href={project.live} className="p-3 bg-paper border-2 border-pencil rounded-full hover:bg-secondary hover:-translate-y-1 transition-all shadow-hard">
                                            <ExternalLink size={24} className="text-pencil" strokeWidth={2.5} />
                                        </a>
                                    </div>
                                </div>

                                <div className="flex-1 flex flex-col px-2">
                                    <h3 className="text-2xl font-display font-bold mb-3 text-pencil inline-block border-b-2 border-pencil border-wobbly pb-1 self-start">
                                        {project.title}
                                    </h3>
                                    <p className="text-pencil/80 text-lg font-sans mb-6 flex-1 leading-relaxed">
                                        {project.desc}
                                    </p>
                                    <div className="flex flex-wrap gap-2 mt-auto pt-4">
                                        {project.tags.map((tag, i) => (
                                            <span key={i} className="text-sm px-3 py-1 bg-white border-2 border-pencil border-wobbly shadow-[2px_2px_0px_0px_#2d2d2d] text-pencil font-bold">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Mobile Links - Visible only on small screens */}
                                    <div className="flex gap-4 mt-6 md:hidden">
                                        <a 
                                            href={project.github} 
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                            className="flex-1 py-3 bg-white border-2 border-pencil flex items-center justify-center gap-2 font-sans font-bold text-pencil shadow-[3px_3px_0px_0px_#2d2d2d] active:shadow-none active:translate-x-[2px] active:translate-y-[2px] transition-all"
                                        >
                                            <Github size={18} strokeWidth={2.5} />
                                            <span>GitHub</span>
                                        </a>
                                        {project.live !== "#" && (
                                            <a 
                                                href={project.live} 
                                                target="_blank" 
                                                rel="noopener noreferrer"
                                                className="flex-1 py-3 bg-accent text-white border-2 border-pencil flex items-center justify-center gap-2 font-sans font-bold shadow-[3px_3px_0px_0px_#2d2d2d] active:shadow-none active:translate-x-[2px] active:translate-y-[2px] transition-all"
                                            >
                                                <ExternalLink size={18} strokeWidth={2.5} />
                                                <span>Live</span>
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
