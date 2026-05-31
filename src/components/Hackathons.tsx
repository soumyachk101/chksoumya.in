import { motion } from 'framer-motion';
import { Trophy, Calendar, MapPin, Zap, Github, ExternalLink } from 'lucide-react';
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
}

const Hackathons = () => {
    const hackathons: HackathonItem[] = [
        {
            name: "HACKTROPICA 2K26",
            organizer: "Asansol Engineering College",
            role: "Full Stack Developer",
            date: "2026",
            location: "On-site",
            desc: "Developed 'Phygital Trace', a blockchain-powered supply chain solution, during a high-intensity 36-hour coding marathon focused on innovation and scalability.",
            tags: ["Next.js", "Solidity", "Base L2", "FastAPI", "Gemini AI", "IPFS", "React Native"],
            github: "https://github.com/soumyachk101/Phygital-trace-done"
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
            live: "https://neetiai.vercel.app/"
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
            live: "https://rusk-web.vercel.app/"
        }
    ];

    return (
        <section id="hackathons" className="py-24 relative overflow-hidden">
            {/* Background Accents */}
            <div className="absolute top-20 left-10 opacity-20 pointer-events-none" aria-hidden="true">
                <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M50,10 L90,90 L10,90 Z" stroke="#2d2d2d" strokeWidth="3" fill="none" strokeLinejoin="round" className="path-draw" />
                </svg>
            </div>

            <div className="absolute bottom-20 right-10 opacity-20 pointer-events-none" aria-hidden="true">
                <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10,60 Q30,10 60,60 T110,60" stroke="#2d2d2d" strokeWidth="3" fill="none" className="path-draw" />
                </svg>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-20 relative"
                >
                    <div className="inline-flex items-center justify-center p-2 mb-4 border-2 border-pencil border-wobbly text-pencil mb-6 transform -rotate-2">
                        <Trophy size={24} className="mr-2" strokeWidth={2.5} />
                        <span className="text-lg font-sans font-bold tracking-widest uppercase">Competitions</span>
                    </div>
                    <h2 className="text-4xl md:text-6xl font-display font-bold mb-4 text-pencil tracking-tight transform rotate-1 inline-block relative block">
                        Hackathons
                        <svg className="absolute -bottom-4 left-0 w-full h-4" viewBox="0 0 100 20" preserveAspectRatio="none">
                            <path d="M0,10 Q50,20 100,10 M10,15 Q50,5 90,15" stroke="#e85d04" strokeWidth="3" fill="none" className="path-draw" />
                        </svg>
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                    {hackathons.map((hack, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="group relative z-10"
                        >
                            <Card 
                                decoration={index % 2 === 0 ? 'tape' : 'tack'}
                                className={`h-full flex flex-col ${index % 2 === 0 ? '-rotate-1' : 'rotate-1'} hover:rotate-0 transition-all duration-300 p-8 md:p-10`}
                            >
                                <div className="flex flex-col md:flex-row md:items-start justify-between mb-8 gap-6">
                                    <div className="space-y-4">
                                        <div className="flex items-center gap-2">
                                            <Zap size={20} className="text-accent" strokeWidth={2.5} />
                                            <span className="text-pencil font-sans font-bold text-lg tracking-widest uppercase">{hack.organizer}</span>
                                        </div>
                                        <h3 className="text-3xl md:text-4xl font-display font-bold text-pencil inline-block border-b-2 border-pencil border-wobbly pb-1">{hack.name}</h3>
                                        <div className="text-pencil/80 flex flex-wrap items-center gap-4 text-lg font-sans font-bold mt-2">
                                            <div className="flex items-center gap-1.5 font-bold">
                                                <Calendar size={18} className="text-pencil" strokeWidth={2.5} />
                                                {hack.date}
                                            </div>
                                            <div className="flex items-center gap-1.5 uppercase tracking-wider">
                                                <MapPin size={18} className="text-pencil" strokeWidth={2.5} />
                                                {hack.location}
                                            </div>
                                        </div>
                                    </div>

                                    {hack.achievement && (
                                        <div className="px-5 py-2.5 bg-accent text-white rounded-md font-sans font-bold text-sm tracking-widest uppercase border-2 border-pencil border-wobbly shadow-hard rotate-3 group-hover:rotate-0 transition-transform">
                                            {hack.achievement}
                                        </div>
                                    )}
                                </div>

                                <p className="text-pencil/90 font-sans leading-relaxed text-xl mb-8 font-medium flex-1">
                                    {hack.desc}
                                </p>

                                <div className="flex flex-wrap gap-2 mb-8 mt-auto">
                                    {hack.tags.map((tag, i) => (
                                        <span key={i} className="px-4 py-1.5 bg-white text-pencil border-2 border-pencil border-wobbly shadow-[2px_2px_0px_0px_#2d2d2d] font-sans font-bold hover:bg-secondary hover:text-paper transition-colors cursor-default">
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex flex-wrap gap-4 mb-8">
                                    {hack.github && (
                                        <a 
                                            href={hack.github} 
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                            className="px-4 py-2 bg-white text-pencil border-2 border-pencil border-wobbly flex items-center gap-2 font-sans font-bold shadow-[3px_3px_0px_0px_#2d2d2d] hover:bg-pencil hover:text-paper transition-all"
                                        >
                                            <Github size={18} strokeWidth={2.5} />
                                            <span>GitHub</span>
                                        </a>
                                    )}
                                    {hack.live && (
                                        <a 
                                            href={hack.live} 
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                            className="px-4 py-2 bg-accent text-white border-2 border-pencil border-wobbly flex items-center gap-2 font-sans font-bold shadow-[3px_3px_0px_0px_#2d2d2d] hover:rotate-2 transition-all"
                                        >
                                            <ExternalLink size={18} strokeWidth={2.5} />
                                            <span>Live Demo</span>
                                        </a>
                                    )}
                                </div>

                                <motion.div 
                                    className="pt-6 border-t-2 border-pencil border-wobbly-alt flex items-center justify-between"
                                    whileHover={{ x: 5 }}
                                >
                                    <span className="text-pencil font-sans font-bold text-lg uppercase tracking-widest">{hack.role}</span>
                                    <Trophy size={24} className="text-pencil" strokeWidth={2.5} />
                                </motion.div>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Hackathons;
