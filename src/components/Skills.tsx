import { motion } from 'framer-motion';
import { Code2, Database, Layout, Terminal, Cloud, PenTool, Cpu, Globe, Brain } from 'lucide-react';
import { Card } from './ui/Card';

const Skills = () => {
    const skillCategories = [
        {
            title: "Programming Languages",
            icon: <Code2 className="text-pencil" size={28} strokeWidth={2.5} />,
            decoration: "tape" as const,
            skills: [
                { name: "Python", level: 95, icon: <Brain size={18} strokeWidth={2.5} /> },
                { name: "JavaScript (ES6+)", level: 90, icon: <Code2 size={18} strokeWidth={2.5} /> },
                { name: "TypeScript", level: 85, icon: <Code2 size={18} strokeWidth={2.5} /> },
                { name: "SQL", level: 88, icon: <Database size={18} strokeWidth={2.5} /> },
                { name: "C", level: 80, icon: <Cpu size={18} strokeWidth={2.5} /> }
            ]
        },
        {
            title: "Frameworks & Dev",
            icon: <Layout className="text-pencil" size={28} strokeWidth={2.5} />,
            decoration: "tack" as const,
            skills: [
                { name: "React.js", level: 92, icon: <Globe size={18} strokeWidth={2.5} /> },
                { name: "Next.js", level: 85, icon: <Globe size={18} strokeWidth={2.5} /> },
                { name: "Tailwind CSS", level: 95, icon: <PenTool size={18} strokeWidth={2.5} /> },
                { name: "Framer Motion", level: 88, icon: <Layout size={18} strokeWidth={2.5} /> },
                { name: "Three.js (Basics)", level: 75, icon: <Cpu size={18} strokeWidth={2.5} /> }
            ]
        },
        {
            title: "Tools & Platforms",
            icon: <Terminal className="text-pencil" size={28} strokeWidth={2.5} />,
            decoration: "tape" as const,
            skills: [
                { name: "Git & GitHub", level: 90, icon: <Terminal size={18} strokeWidth={2.5} /> },
                { name: "AWS (Cloud)", level: 80, icon: <Cloud size={18} strokeWidth={2.5} /> },
                { name: "VS Code", level: 95, icon: <Code2 size={18} strokeWidth={2.5} /> },
                { name: "Figma", level: 85, icon: <PenTool size={18} strokeWidth={2.5} /> },
            ]
        }
    ];

    const softSkills = [
        "Communication", "Problem Solving", "Team Collaboration",
        "Time Management", "Adaptability", "Critical Thinking",
        "Attention to Detail", "Empathy", "Creativity"
    ];

    return (
        <section id="skills" className="py-20 relative overflow-hidden">
            {/* Scribble background decoration */}
            <div className="absolute top-20 right-10 opacity-20 pointer-events-none">
                <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20,100 Q60,20 100,100 T180,100" stroke="#2d2d2d" strokeWidth="3" fill="none" className="path-draw" />
                    <path d="M20,120 Q60,40 100,120 T180,120" stroke="#2d2d2d" strokeWidth="2" fill="none" className="path-draw" />
                </svg>
            </div>
            
            <div className="absolute bottom-20 left-10 opacity-20 pointer-events-none">
                 <svg width="150" height="150" viewBox="0 0 150 150" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10,10 L140,140 M140,10 L10,140" stroke="#2d2d2d" strokeWidth="4" fill="none" className="path-draw" />
                </svg>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-20 relative"
                >
                    <h2 className="text-4xl md:text-6xl font-display font-bold mb-4 text-pencil transform -rotate-2 inline-block relative">
                        Skills & Expertise
                        <svg className="absolute -bottom-4 left-0 w-full h-4" viewBox="0 0 100 20" preserveAspectRatio="none">
                            <path d="M0,10 Q50,20 100,10 M10,15 Q50,5 90,15" stroke="#e85d04" strokeWidth="3" fill="none" className="path-draw" />
                        </svg>
                    </h2>
                </motion.div>

                {/* Technical Skills Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-24">
                    {skillCategories.map((category, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            viewport={{ once: true, amount: 0.2 }}
                        >
                            <Card 
                                decoration={category.decoration}
                                className={`h-full ${index % 2 === 0 ? 'rotate-1' : '-rotate-1'} hover:rotate-0`}
                            >
                                <div className="flex items-center gap-3 mb-8 pb-4 border-b-2 border-pencil border-wobbly-alt">
                                    {category.icon}
                                    <h3 className="text-2xl font-display font-bold text-pencil">{category.title}</h3>
                                </div>

                                <div className="space-y-6">
                                    {category.skills.map((skill, idx) => (
                                        <div key={idx} className="group">
                                            <div className="flex justify-between items-center mb-2">
                                                <div className="flex items-center gap-2 text-pencil">
                                                    {skill.icon}
                                                    <span className="text-lg font-sans font-bold group-hover:text-accent transition-colors">{skill.name}</span>
                                                </div>
                                                <span className="text-lg text-pencil font-display font-bold">{skill.level}%</span>
                                            </div>
                                            {/* Hand-drawn progress bar container */}
                                            <div className="w-full h-4 border-2 border-pencil border-wobbly rounded-md relative overflow-hidden bg-white">
                                                {/* Scribbled fill effect */}
                                                <motion.div
                                                    className="absolute top-0 left-0 h-full bg-accent border-r-2 border-pencil"
                                                    initial={{ width: 0 }}
                                                    whileInView={{ width: `${skill.level}%` }}
                                                    transition={{ duration: 1, delay: 0.2 + (idx * 0.1), type: 'spring', bounce: 0.2 }}
                                                    viewport={{ once: true }}
                                                >
                                                    {/* Inner scribble lines */}
                                                    <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 2px, #000 2px, #000 4px)' }}></div>
                                                </motion.div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </Card>
                        </motion.div>
                    ))}
                </div>

                {/* Soft Skills Section */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true, amount: 0.4 }}
                    className="max-w-4xl mx-auto"
                >
                    <Card decoration="tack" variant="post-it" className="-rotate-1 hover:rotate-0 p-8 md:p-12 relative">
                        <h3 className="text-3xl font-display font-bold text-pencil mb-10 text-center relative inline-block left-1/2 -translate-x-1/2">
                            Soft Skills
                            <div className="absolute -bottom-2 left-0 w-full h-1 bg-pencil rotate-1"></div>
                        </h3>
                        <div className="flex flex-wrap justify-center gap-4">
                            {softSkills.map((skill, index) => (
                                <motion.span
                                    key={index}
                                    initial={{ opacity: 0, scale: 0.5 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ type: "spring", stiffness: 200, delay: index * 0.05 }}
                                    viewport={{ once: true }}
                                    whileHover={{ scale: 1.05, rotate: index % 2 === 0 ? 3 : -3 }}
                                    className="px-6 py-3 bg-white border-2 border-pencil border-wobbly shadow-hard text-pencil text-lg font-sans font-bold cursor-default hover:bg-secondary hover:text-paper transition-colors"
                                >
                                    {skill}
                                </motion.span>
                            ))}
                        </div>
                    </Card>
                </motion.div>
            </div>
        </section>
    );
};

export default Skills;
