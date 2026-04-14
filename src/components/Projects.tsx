import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
    const projects = [
        {
            title: "Neeti AI",
            desc: "An advanced AI-powered recruitment platform featuring real-time collaborative coding, automated evaluations, and seamless video integration.",
            tags: ["FastAPI", "React", "LiveKit", "Supabase", "AI"],
            image: "/images/project-neeti-ai.png",
            github: "https://github.com/soumyachk101/NEETI-AI-Final-Version",
            live: "#"
        },
        {
            title: "Phygital Trace",
            desc: "A cutting-edge supply chain solution bridging physical assets with digital twins using blockchain and NFC technology for end-to-end authenticity.",
            tags: ["Blockchain", "IoT", "React", "Node.js", "Solidity"],
            image: "/images/project-phygital-trace.png",
            github: "https://github.com/soumyachk101/phygital-trace-",
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
            live: "#"
        },
        {
            title: "Country Finder",
            desc: "An interactive geographic explorer allowing users to search and discover detailed country information with a clean, responsive interface.",
            tags: ["React", "REST Countries API", "Tailwind"],
            image: "/images/project-country.png",
            github: "https://github.com/soumyachk101/Country_Finder",
            live: "#"
        },
        {
            title: "Stock Volatility",
            desc: "A financial analysis tool for monitoring market volatility and stock trends using real-time data visualisations.",
            tags: ["React", "Finance API", "Charts.js"],
            image: "/images/project-stock.png",
            github: "https://github.com/soumyachk101/Stock-Volatility",
            live: "#"
        }
    ];

    return (
        <section id="projects" className="py-20 bg-background">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Featured Projects</h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
                    <p className="mt-4 text-muted-foreground font-medium">
                        A selection of things I've built.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -10 }}
                            className="bg-card rounded-2xl overflow-hidden group shadow-lg border border-primary/5 hover:shadow-2xl transition-all"
                        >
                            <div className="relative h-48 overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    onError={(e) => {
                                        (e.target as HTMLImageElement).src = `https://via.placeholder.com/400x300?text=${project.title}`;
                                    }}
                                />
                                <div className="absolute inset-0 bg-primary/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4 backdrop-blur-[2px]">
                                    <a href={project.github} className="p-2 bg-background/90 rounded-full hover:bg-background text-primary transition-colors">
                                        <Github size={20} />
                                    </a>
                                    <a href={project.live} className="p-2 bg-primary rounded-full hover:bg-primary/80 text-primary-foreground transition-colors">
                                        <ExternalLink size={20} />
                                    </a>
                                </div>
                            </div>

                            <div className="p-6">
                                <h3 className="text-xl font-bold mb-2 text-foreground group-hover:text-primary transition-colors">{project.title}</h3>
                                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{project.desc}</p>
                                <div className="flex flex-wrap gap-2">
                                    {project.tags.map((tag, i) => (
                                        <span key={i} className="text-xs px-2 py-1 rounded-md bg-secondary text-primary font-bold border border-primary/10">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
