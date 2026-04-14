import { motion } from 'framer-motion';
import { Code2, Database, Layout, Terminal, Cloud, PenTool, Cpu, Globe, Brain } from 'lucide-react';

const Skills = () => {
    const skillCategories = [
        {
            title: "Programming Languages",
            icon: <Code2 className="text-primary" size={24} />,
            skills: [
                { name: "Python", level: 95, icon: <Brain size={18} /> },
                { name: "JavaScript (ES6+)", level: 90, icon: <Code2 size={18} /> },
                { name: "TypeScript", level: 85, icon: <Code2 size={18} /> },
                { name: "SQL", level: 88, icon: <Database size={18} /> },
                { name: "C", level: 80, icon: <Cpu size={18} /> }
            ]
        },
        {
            title: "Frameworks & Dev",
            icon: <Layout className="text-[#0D736C]" size={24} />,
            skills: [
                { name: "React.js", level: 92, icon: <Globe size={18} /> },
                { name: "Next.js", level: 85, icon: <Globe size={18} /> },
                { name: "Tailwind CSS", level: 95, icon: <PenTool size={18} /> },
                { name: "Framer Motion", level: 88, icon: <Layout size={18} /> },
                { name: "Three.js (Basics)", level: 75, icon: <Cpu size={18} /> }
            ]
        },
        {
            title: "Tools & Platforms",
            icon: <Terminal className="text-secondary" size={24} />,
            skills: [
                { name: "Git & GitHub", level: 90, icon: <Terminal size={18} /> },
                { name: "AWS (Cloud)", level: 80, icon: <Cloud size={18} /> },
                { name: "VS Code", level: 95, icon: <Code2 size={18} /> },
                { name: "Figma", level: 85, icon: <PenTool size={18} /> },
            ]
        }
    ];

    const softSkills = [
        "Communication", "Problem Solving", "Team Collaboration",
        "Time Management", "Adaptability", "Critical Thinking",
        "Attention to Detail", "Empathy", "Creativity"
    ];

    return (
        <section id="skills" className="py-20 bg-background/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">Skills & Expertise</h2>
                    <div className="w-24 h-1.5 bg-primary mx-auto rounded-full"></div>
                </motion.div>

                {/* Technical Skills Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                    {skillCategories.map((category, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95, y: 30 }}
                            whileInView={{ opacity: 1, scale: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            viewport={{ once: true, amount: 0.2 }}
                            className="bg-card p-8 rounded-2xl border border-primary/5 shadow-lg hover:shadow-xl transition-all"
                        >
                            <div className="flex items-center gap-3 mb-8">
                                {category.icon}
                                <h3 className="text-xl font-bold text-foreground">{category.title}</h3>
                            </div>

                            <div className="space-y-6">
                                {category.skills.map((skill, idx) => (
                                    <div key={idx}>
                                        <div className="flex justify-between items-center mb-2">
                                            <div className="flex items-center gap-2 text-muted-foreground">
                                                {skill.icon}
                                                <span className="text-sm font-semibold">{skill.name}</span>
                                            </div>
                                            <span className="text-sm text-primary font-bold">{skill.level}%</span>
                                        </div>
                                        <div className="w-full bg-secondary/10 rounded-full h-2 overflow-hidden relative shadow-inner">
                                            <motion.div
                                                className="bg-gradient-to-r from-primary to-secondary h-full rounded-full relative"
                                                initial={{ width: 0 }}
                                                whileInView={{ width: `${skill.level}%` }}
                                                transition={{ duration: 1.2, delay: 0.4 + (idx * 0.1) }}
                                                viewport={{ once: true }}
                                            >
                                                <div className="absolute inset-0 bg-white/20 animate-[shimmer_2s_infinite] w-full h-full transform -skew-x-12 origin-left"></div>
                                            </motion.div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Soft Skills Section */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true, amount: 0.4 }}
                    className="p-10 rounded-2xl bg-secondary/30 border border-primary/5 text-center shadow-lg"
                >
                    <h3 className="text-2xl font-bold text-foreground mb-8">Soft Skills</h3>
                    <div className="flex flex-wrap justify-center gap-4">
                        {softSkills.map((skill, index) => (
                            <motion.span
                                key={index}
                                initial={{ opacity: 0, scale: 0.5 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ type: "spring", stiffness: 100, delay: index * 0.05 }}
                                viewport={{ once: true }}
                                whileHover={{ scale: 1.1, backgroundColor: "var(--primary)", color: "white" }}
                                className="px-6 py-3 rounded-full bg-card border border-primary/10 text-primary text-sm font-bold cursor-default transition-all shadow-sm"
                            >
                                {skill}
                            </motion.span>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Skills;
