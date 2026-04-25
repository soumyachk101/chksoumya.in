"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Brain, Code2, Database, Cloud, Shield, Award } from 'lucide-react';
import { categories, certificates } from '../data/certificates';
import { Card } from './ui/Card';

const Certificates = () => {
    const getCategoryIcon = (id: string) => {
        switch (id) {
            case 'ai': return <Brain size={28} className="text-pencil" strokeWidth={2.5} />;
            case 'gen-ai': return <Brain size={28} className="text-accent" strokeWidth={2.5} />;
            case 'cyber': return <Shield size={28} className="text-pencil" strokeWidth={2.5} />;
            case 'cloud': return <Cloud size={28} className="text-accent" strokeWidth={2.5} />;
            case 'dev': return <Code2 size={28} className="text-pencil" strokeWidth={2.5} />;
            case 'data': return <Database size={28} className="text-accent" strokeWidth={2.5} />;
            default: return <Award size={28} className="text-pencil" strokeWidth={2.5} />;
        }
    };

    const displayCategories = categories.filter(c => c.id !== 'all');

    return (
        <section id="certificates" className="py-20 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-16 relative"
                >
                    <h2 className="text-4xl md:text-6xl font-display font-bold mb-4 text-pencil transform rotate-1 inline-block relative">
                        Achievements
                        <svg className="absolute -bottom-4 left-0 w-full h-4" viewBox="0 0 100 20" preserveAspectRatio="none">
                            <path d="M0,15 Q50,5 100,15 M10,10 Q50,20 90,10" stroke="#e85d04" strokeWidth="3" fill="none" className="path-draw" />
                        </svg>
                    </h2>
                    <p className="mt-8 text-pencil/80 font-sans text-xl font-bold transform -rotate-1">Explore my certifications by category</p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {displayCategories.map((cat, index) => {
                        const count = certificates.filter(c => c.category === cat.id).length;
                        // Determine random rotation between -2 and 2 degrees
                        const rotClass = index % 3 === 0 ? '-rotate-1' : index % 3 === 1 ? 'rotate-1' : '-rotate-2';

                        return (
                            <Link href={`/certificates/${cat.id}`} key={cat.id} className="block group">
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.4, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    className="h-full"
                                >
                                    <Card 
                                        decoration={index % 2 === 0 ? 'tape' : 'tack'} 
                                        className={`h-full flex flex-col ${rotClass} group-hover:rotate-0 transition-all duration-300 group-hover:scale-[1.02]`}
                                    >
                                        <div className="flex items-start justify-between mb-6">
                                            <div className="p-3 bg-white border-2 border-pencil border-wobbly shadow-hard transform -rotate-3 group-hover:rotate-0 transition-transform">
                                                {getCategoryIcon(cat.id)}
                                            </div>
                                            <span className="text-3xl font-display font-bold text-pencil/30 group-hover:text-accent transition-colors">
                                                {String(index + 1).padStart(2, '0')}
                                            </span>
                                        </div>

                                        <h3 className="text-2xl font-display font-bold text-pencil mb-2 group-hover:text-accent transition-colors">
                                            {cat.label}
                                        </h3>

                                        <div className="flex items-center justify-between mt-auto pt-6 border-t-2 border-dashed border-pencil/20">
                                            <span className="text-sm font-sans font-bold text-pencil bg-white border-2 border-pencil border-wobbly px-4 py-1.5 shadow-[2px_2px_0px_0px_#2d2d2d]">
                                                {count} Certificates
                                            </span>
                                            <ArrowRight size={24} className="text-pencil transform group-hover:translate-x-2 transition-transform" strokeWidth={2.5} />
                                        </div>
                                    </Card>
                                </motion.div>
                            </Link>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Certificates;
