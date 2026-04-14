import { motion } from 'framer-motion';
import { Trophy, Calendar, MapPin, Zap } from 'lucide-react';

interface HackathonItem {
    name: string;
    organizer: string;
    role: string;
    achievement?: string;
    date: string;
    location: string;
    desc: string;
    tags: string[];
}

const Hackathons = () => {
    const hackathons: HackathonItem[] = [
        {
            name: "HACKTROPICA 2K26",
            organizer: "University Level Hackathon",
            role: "Full Stack Developer",
            achievement: "Finalist / Participant",
            date: "2026",
            location: "On-site",
            desc: "Developed an innovative solution during a high-intensity 24-hour coding marathon, focusing on scalability and user impact.",
            tags: ["React", "Node.js", "Innovation", "Problem Solving"]
        },
        {
            name: "CODE FOR CHANGE 2.0",
            organizer: "Social Impact Hackathon",
            role: "Backend & Lead",
            achievement: "Winner / Honorable Mention",
            date: "2025",
            location: "Kolkata, India",
            desc: "Collaborated with a dynamic team to build a digital platform aimed at driving social change through technology.",
            tags: ["Python", "Sustainability", "Community", "Leadership"]
        }
    ];

    return (
        <section id="hackathons" className="py-24 relative bg-background overflow-hidden">
            {/* Background Accents */}
            <div className="absolute top-0 left-1/4 w-72 h-72 bg-primary/5 rounded-full blur-[100px] pointer-events-none"></div>
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-[120px] pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <div className="inline-flex items-center justify-center p-2 mb-4 bg-primary/10 rounded-xl text-primary mb-6">
                        <Trophy size={24} className="mr-2" />
                        <span className="text-sm font-black tracking-widest uppercase">Competitions</span>
                    </div>
                    <h2 className="text-4xl md:text-6xl font-black mb-4 text-foreground tracking-tight">Hackathons</h2>
                    <div className="w-24 h-2 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                    {hackathons.map((hack, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50, rotateX: 15 }}
                            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                            transition={{ duration: 0.8, delay: index * 0.2 }}
                            viewport={{ once: true, amount: 0.3 }}
                            className="group relative"
                        >
                            {/* Card Background with Tilt effect and Glow */}
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
                            
                            <div className="h-full bg-card/60 backdrop-blur-xl border border-primary/10 rounded-3xl p-8 md:p-10 shadow-lg hover:shadow-2xl hover:border-primary/30 transition-all duration-300">
                                <div className="flex flex-col md:flex-row md:items-start justify-between mb-8 gap-6">
                                    <div className="space-y-2">
                                        <div className="flex items-center gap-2">
                                            <Zap size={20} className="text-secondary fill-secondary/20" />
                                            <span className="text-primary font-black text-sm tracking-widest uppercase">{hack.organizer}</span>
                                        </div>
                                        <h3 className="text-2xl md:text-3xl font-black text-foreground group-hover:text-primary transition-colors">{hack.name}</h3>
                                        <div className="text-muted-foreground flex items-center gap-4 text-sm font-bold">
                                            <div className="flex items-center gap-1.5 font-bold">
                                                <Calendar size={14} className="text-primary" />
                                                {hack.date}
                                            </div>
                                            <div className="flex items-center gap-1.5 uppercase tracking-wider">
                                                <MapPin size={14} className="text-primary" />
                                                {hack.location}
                                            </div>
                                        </div>
                                    </div>

                                    {hack.achievement && (
                                        <div className="px-5 py-2.5 bg-primary text-primary-foreground rounded-2xl font-black text-xs tracking-tighter shadow-lg shadow-primary/20 rotate-3 group-hover:rotate-0 transition-transform">
                                            {hack.achievement}
                                        </div>
                                    )}
                                </div>

                                <p className="text-muted-foreground leading-relaxed text-lg mb-8 font-medium">
                                    {hack.desc}
                                </p>

                                <div className="flex flex-wrap gap-2 mb-8">
                                    {hack.tags.map((tag, i) => (
                                        <span key={i} className="px-4 py-1.5 bg-secondary/20 text-primary rounded-full text-xs font-black border border-primary/5 hover:bg-primary hover:text-white transition-colors cursor-default">
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <motion.div 
                                    className="pt-6 border-t border-primary/5 flex items-center justify-between"
                                    whileHover={{ x: 5 }}
                                >
                                    <span className="text-foreground font-black text-sm uppercase tracking-widest">{hack.role}</span>
                                    <Trophy size={20} className="text-primary opacity-50 group-hover:opacity-100 transition-opacity" />
                                </motion.div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Hackathons;
