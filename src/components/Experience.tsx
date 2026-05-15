import { motion } from 'framer-motion';
import { Calendar, ExternalLink, MapPin } from 'lucide-react';
import { Card } from './ui/Card';

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
            company: "Codec Technologies Pvt. Ltd.",
            role: "MERN Stack Developer Intern",
            type: "Internship",
            desc: "Worked on full stack web development using MongoDB, Express.js, React, and Node.js to build scalable applications.",
            date: "2026",
            location: "Remote",
            certificate: "/certificates/MERN Stack Developer Intern.pdf"
        },
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
        <section id="experience" className="py-20 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-20 relative"
                >
                    <h2 className="text-4xl md:text-6xl font-display font-bold mb-4 text-pencil transform rotate-1 inline-block relative">
                        Journey
                        <svg className="absolute -bottom-4 left-0 w-full h-4" viewBox="0 0 100 20" preserveAspectRatio="none">
                            <path d="M0,15 Q50,5 100,15 M10,10 Q50,20 90,10" stroke="#e85d04" strokeWidth="3" fill="none" className="path-draw" />
                        </svg>
                    </h2>
                    <p className="mt-8 text-pencil/80 font-sans text-xl font-bold transform -rotate-1">My professional and academic evolution</p>
                </motion.div>

                <div className="relative">
                    {/* Vertical Line */}
                    <div className="absolute left-1/2 -translate-x-1/2 h-full w-1 border-l-4 border-dashed border-pencil hidden md:block opacity-40"></div>

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
                                <div className="md:w-5/12 w-full relative">
                                    <Card 
                                        decoration={index % 2 === 0 ? 'tape' : 'tack'}
                                        className={`${index % 2 === 0 ? 'rotate-1' : '-rotate-1'} hover:rotate-0 transition-transform`}
                                    >
                                        <span className="inline-block px-3 py-1 bg-white border-2 border-pencil border-wobbly text-pencil text-sm font-bold mb-3 uppercase tracking-wider shadow-[2px_2px_0px_0px_#2d2d2d]">
                                            {exp.type}
                                        </span>
                                        <h3 className="text-2xl font-display font-bold text-pencil mb-1">{exp.role}</h3>
                                        <p className="text-accent font-sans font-bold text-xl mb-2">{exp.company}</p>
                                        
                                        <div className="flex items-center text-lg text-pencil/80 font-sans font-bold mb-4 space-x-4">
                                            <div className="flex items-center">
                                                <Calendar size={18} className="mr-1.5" strokeWidth={2.5} />
                                                {exp.date}
                                            </div>
                                            <div className="flex items-center">
                                                <MapPin size={18} className="mr-1.5" strokeWidth={2.5} />
                                                {exp.location}
                                            </div>
                                        </div>
                                        
                                        <p className="text-pencil/90 font-sans leading-relaxed text-lg mb-6 font-medium">
                                            {exp.desc}
                                        </p>

                                        {exp.certificate && (
                                            <a
                                                href={exp.certificate}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center text-sm font-sans font-bold text-pencil hover:text-paper bg-white border-2 border-pencil border-wobbly px-4 py-2 hover:bg-pencil transition-all shadow-[2px_2px_0px_0px_#2d2d2d]"
                                            >
                                                View Certificate <ExternalLink size={16} className="ml-2" strokeWidth={2.5} />
                                            </a>
                                        )}
                                    </Card>

                                    {/* Mobile/Tablet Arrow Connector - Drawn look */}
                                    <div className={`hidden md:block absolute top-1/2 -translate-y-1/2 ${
                                        index % 2 === 0 ? '-left-8' : '-right-8'
                                    }`}>
                                        <svg width="32" height="12" viewBox="0 0 32 12" fill="none" className={index % 2 === 0 ? "scale-x-[-1]" : ""}>
                                            <path d="M0,6 L30,6 M25,2 L30,6 L25,10" stroke="#2d2d2d" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="path-draw" />
                                        </svg>
                                    </div>
                                </div>

                                {/* Dot on the timeline */}
                                <div className="relative z-10 my-6 md:my-0">
                                    <div className="w-8 h-8 bg-paper border-4 border-pencil border-wobbly flex items-center justify-center shadow-hard transition-transform hover:scale-110 rotate-12">
                                        <div className="w-3 h-3 bg-accent border-2 border-pencil rounded-full"></div>
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
