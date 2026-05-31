"use client";

import { useParams } from 'next/navigation';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, Award, ExternalLink } from 'lucide-react';
import { certificates, categories } from '../../../data/certificates';
import { Card } from '../../../components/ui/Card';

const CertificateDetailsClient = () => {
    const params = useParams();
    const categoryId = params.categoryId as string;
    const category = categories.find(c => c.id === categoryId);

    const filteredCerts = certificates.filter(c => c.category === categoryId);

    if (!category) {
        return (
            <div className="min-h-screen flex items-center justify-center text-pencil">
                <div className="text-center">
                    <h2 className="text-3xl font-display font-bold mb-4 transform -rotate-2">Category not found</h2>
                    <Link href="/#certificates" className="text-accent font-sans font-bold hover:underline">Back to Portfolio</Link>
                </div>
            </div>
        );
    }

    return (
        <section className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
            <div className="max-w-7xl mx-auto relative z-10">
                {/* Header */}
                <div className="mb-16">
                    <Link href="/#certificates" className="inline-flex items-center text-pencil font-sans font-bold hover:text-accent transition-colors mb-8 group bg-white border-2 border-pencil border-wobbly px-4 py-2 shadow-hard transform -rotate-1 hover:rotate-0">
                        <ArrowLeft size={20} className="mr-2 group-hover:-translate-x-1 transition-transform" strokeWidth={2.5} />
                        Back to Portfolio
                    </Link>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="relative"
                    >
                        <h1 className="text-4xl md:text-6xl font-display font-bold text-pencil mb-4 inline-block transform rotate-1 relative">
                            {category.label}
                            <svg className="absolute -bottom-4 left-0 w-full h-4" viewBox="0 0 100 20" preserveAspectRatio="none" aria-hidden="true">
                                <path d="M0,15 Q50,5 100,15 M10,10 Q50,20 90,10" stroke="#e85d04" strokeWidth="3" fill="none" className="path-draw" />
                            </svg>
                        </h1>
                        <p className="mt-8 text-pencil/80 font-sans text-xl font-bold transform -rotate-1">
                            {filteredCerts.length} Certificates in this collection
                        </p>
                    </motion.div>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <AnimatePresence mode='popLayout'>
                        {filteredCerts.map((cert, index) => {
                            const rotClass = index % 3 === 0 ? '-rotate-1' : index % 3 === 1 ? 'rotate-1' : '-rotate-2';

                            return (
                                <motion.div
                                    key={cert.title}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.4, delay: index * 0.05 }}
                                    className="h-full"
                                >
                                    <Card
                                        decoration={index % 2 === 0 ? 'tape' : 'tack'}
                                        className={`h-full flex flex-col ${rotClass} hover:rotate-0 transition-transform`}
                                    >
                                        <div className="flex justify-between items-start mb-6">
                                            <div className="p-2 bg-white border-2 border-pencil border-wobbly text-pencil shadow-[2px_2px_0px_0px_#2d2d2d] transform -rotate-3">
                                                <Award size={24} strokeWidth={2.5} />
                                            </div>
                                        </div>

                                        <h3 className="text-2xl font-display font-bold text-pencil mb-2 leading-tight">
                                            {cert.title}
                                        </h3>
                                        <p className="text-pencil/80 font-sans font-bold text-sm mb-6 flex-grow">{cert.issuer}</p>

                                        <a
                                            href={cert.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center text-sm font-sans font-bold text-pencil hover:text-paper bg-white border-2 border-pencil border-wobbly px-4 py-2 hover:bg-pencil transition-all shadow-[2px_2px_0_0_#2d2d2d] w-fit mt-auto"
                                        >
                                            View Certificate <ExternalLink size={16} className="ml-2" strokeWidth={2.5} />
                                        </a>
                                    </Card>
                                </motion.div>
                            );
                        })}
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
};

export default CertificateDetailsClient;
