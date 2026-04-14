import { motion } from 'framer-motion';
import { Briefcase, Calendar, ExternalLink, MapPin } from 'lucide-react';

interface ExperienceItem {
    company: string;
    role: string;
    type: string;
    desc: string;
    date: string;
    location: string;
    certificate?: string;
}

const Experience = () => {
    const experiences: ExperienceItem[] = [
        {
            company: "AWS",
            role: "AWS Media & Entertainment Cloud Engineering",
            type: "Internship",
            desc: "Focused on cloud engineering solutions for media workflows.",
            date: "2025",
            location: "Remote"
        },
        {
            company: "AICTE",
            role: "Data Analytics Process Automation",
            type: "Virtual Internship",
            desc: "Worked on real-world automation challenges using industry tools.",
            date: "2025",
            location: "Remote",
            certificate: "/certificates/Data Analytics Process Automation Virtual Internship By AICTE.pdf"
        },
        {
            company: "IBM SkillsBuild",
            role: "Data Analytics & Business Intelligence",
            type: "Internship",
            desc: "Built solutions for data visualization and business insights.",
            date: "2025",
            location: "Remote",
            certificate: "/certificates/Data Analytics & Business Intelligence Lab_ Explore, Analyze & Build Real-World Solutions By IBM Skill Build.pdf"
        },
        {
            company: "CodeAlpha",
            role: "Python Programming Internship",
            type: "Internship",
            desc: "Developed robust Python applications and solved algorithmic challenges.",
            date: "2024",
            location: "Remote"
        }
    ];

    return (
        <section id="experience" className="py-20 relative bg-background/60">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">Journey</h2>
                    <div className="w-24 h-1.5 bg-primary mx-auto rounded-full"></div>
                    <p className="mt-4 text-muted-foreground font-medium">My professional and academic evolution</p>
                </motion.div>

                <div className="relative">
                    {/* Vertical Line */}
                    <div className="absolute left-1/2 -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-primary via-secondary to-transparent hidden md:block opacity-30"></div>

                    <div className="space-y-12">
                        {experiences.map((exp, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className={`flex flex-col md:flex-row items-center ${
                                    index % 2 === 0 ? 'md:flex-row-reverse' : ''
                                }`}
                            >
                                {/* Content Card */}
                                <div className="md:w-5/12 bg-card p-6 rounded-xl hover:bg-secondary/10 transition-all border-l-4 border-l-primary relative shadow-md">
                                    <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-bold rounded-full mb-3 uppercase tracking-wider">
                                        {exp.type}
                                    </span>
                                    <h3 className="text-xl font-bold text-foreground mb-1">{exp.role}</h3>
                                    <p className="text-primary font-semibold mb-2">{exp.company}</p>
                                    
                                    <div className="flex items-center text-sm text-muted-foreground mb-3 space-x-3">
                                        <div className="flex items-center">
                                            <Calendar size={14} className="mr-1.5" />
                                            {exp.date}
                                        </div>
                                        <div className="flex items-center">
                                            <MapPin size={14} className="mr-1.5" />
                                            {exp.location}
                                        </div>
                                    </div>
                                    
                                    <p className="text-muted-foreground leading-relaxed text-sm mb-4">
                                        {exp.desc}
                                    </p>

                                    {exp.certificate && (
                                        <a
                                            href={exp.certificate}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center text-xs font-bold text-primary hover:text-primary-foreground transition-all border border-primary/30 px-4 py-2 rounded-full hover:bg-primary"
                                        >
                                            View Certificate <ExternalLink size={12} className="ml-1" />
                                        </a>
                                    )}

                                    {/* Mobile/Tablet Arrow Connector */}
                                    <div className={`hidden md:block absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-card border-t border-r border-primary/20 rotate-45 ${
                                        index % 2 === 0 ? '-left-2' : '-right-2'
                                    }`}></div>
                                </div>

                                {/* Dot on the timeline */}
                                <div className="relative z-10 my-4 md:my-0">
                                    <div className="w-10 h-10 bg-background border-4 border-primary rounded-full flex items-center justify-center shadow-lg shadow-primary/20 transition-transform hover:scale-125">
                                        <div className="w-2.5 h-2.5 bg-primary rounded-full"></div>
                                    </div>
                                </div>

                                {/* Spacer for the other side */}
                                <div className="md:w-5/12 hidden md:block"></div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
