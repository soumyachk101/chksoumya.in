"use client";

import { useParams } from 'next/navigation';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, Award, ExternalLink } from 'lucide-react';
import { certificates, categories, categoryLabel } from '../../../data/certificates';
import { Card } from '../../../components/ui/Card';

const categoryDescriptions: Record<string, string> = {
 google: 'Google certifications validate expertise in AI-first tools, cloud computing, prompt engineering, and technical support — foundational skills that power modern full-stack development and AI-driven applications.',
 ibm: 'IBM certifications demonstrate enterprise-grade competency in data science, AI workflows, cybersecurity, and Python development — skills directly applied to building production web applications and data pipelines.',
 microsoft: 'Microsoft certifications validate cloud expertise with Azure, .NET development, and IT infrastructure — essential for deploying scalable full-stack applications and DevOps automation.',
 meta: 'Meta certifications demonstrate proficiency in modern programming languages, mobile development, and data analytics — skills used across React-based frontends, backend APIs, and cross-platform applications.',
 nvidia: 'NVIDIA certifications validate deep AI expertise including LLM deployment, ethical AI, and GPU-accelerated computing — core to building cutting-edge AI applications with RAG, computer vision, and multimodal systems.',
 hackerrank: 'HackerRank certifications validate strong programming fundamentals, problem-solving abilities, and algorithmic thinking — the foundation for writing clean, efficient code across any technology stack.',
 aws: 'AWS certifications validate cloud infrastructure expertise including deployment, monitoring, and scaling — essential for hosting production full-stack applications with high availability and performance.',
 universities: 'University certifications validate academic excellence from top institutions including Duke University, University of Michigan, University of Colorado Boulder, and University of London — complementing hands-on project experience with rigorous theoretical foundations.',
};

const CertificateDetailsClient = () => {
 const params = useParams();
 const id = params.id as string;
 const category = categories.find(c => c.id === id);

 const filteredCerts = certificates.filter(c => c.category === id);

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

 const categoryDesc = categoryDescriptions[id] || `Professional certificates in ${category.label} demonstrating validated skills and expertise.`;

 return (
 <section className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
 <div className="max-w-7xl mx-auto relative z-10">
 {/* Header */}
 <div className="mb-16">
 <Link href="/#certificates" className="inline-flex items-center text-pencil font-sans font-bold hover:text-accent transition-colors mb-8 group bg-white border-2 border-pencil border-wobbly px-4 py-2 shadow-hard transform -rotate-1 hover:rotate-0">
 <ArrowLeft size={20} className="mr-2 group-hover:-translate-x-1 transition-transform" strokeWidth={2.5} />
 Back to All Certificates
 </Link>

 <motion.div
 initial={{ opacity: 0, y: 20 }}
 animate={{ opacity: 1, y: 0 }}
 transition={{ duration: 0.6 }}
 className="relative"
 >
 <h1 className="text-4xl md:text-6xl font-display font-bold text-pencil mb-4 inline-block transform rotate-1 relative">
 {category.label} Certificates
 <svg className="absolute -bottom-4 left-0 w-full h-4" viewBox="0 0 100 20" preserveAspectRatio="none" aria-hidden="true">
 <path d="M0,15 Q50,5 100,15 M10,10 Q50,20 90,10" stroke="#e85d04" strokeWidth="3" fill="none" className="path-draw" />
 </svg>
 </h1>
 <p className="mt-8 text-pencil/80 font-sans text-xl font-bold transform -rotate-1 max-w-3xl">
 {categoryDesc}
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

 <Link
 href={`/certificates/${cert.id}`}
 className="block mb-2 hover:text-accent transition-colors"
 >
 <h3 className="text-2xl font-display font-bold text-pencil leading-tight">
 {cert.title}
 </h3>
 </Link>
 <p className="text-pencil/80 font-sans font-bold text-sm mb-6 flex-grow">{cert.issuer}</p>

 <div className="flex flex-wrap gap-2 mt-auto">
 <Link
 href={`/certificates/${cert.id}`}
 className="inline-flex items-center text-sm font-sans font-bold text-pencil hover:text-paper bg-white border-2 border-pencil border-wobbly px-4 py-2 hover:bg-pencil transition-all shadow-[2px_2px_0_0_#2d2d2d] w-fit"
 >
 Details
 </Link>
 <a
 href={cert.link}
 target="_blank"
 rel="noopener noreferrer"
 className="inline-flex items-center text-sm font-sans font-bold text-pencil hover:text-paper bg-white border-2 border-pencil border-wobbly px-4 py-2 hover:bg-pencil transition-all shadow-[2px_2px_0_0_#2d2d2d] w-fit"
 >
 View Certificate <ExternalLink size={16} className="ml-2" strokeWidth={2.5} />
 </a>
 </div>
 </Card>
 </motion.div>
 );
 })}
 </AnimatePresence>
 </div>

 {/* Backlinks section */}
 <div className="mt-20 border-t-2 border-dashed border-pencil/20 pt-12">
 <h2 className="text-2xl sm:text-3xl font-display font-black text-pencil mb-6">
 Explore More of Soumya's Work
 </h2>
 <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
 <Link href="/#projects" className="block p-6 bg-white border-2 border-pencil border-wobbly hover:-rotate-1 transition-transform shadow-hard-sm hover:shadow-hard">
 <h3 className="font-display font-bold text-pencil text-xl mb-2">Featured Projects</h3>
 <p className="text-sm text-pencil/70 font-sans">10+ production web apps built with React, Next.js, Node.js, and Python</p>
 </Link>
 <Link href="/#hackathons" className="block p-6 bg-white border-2 border-pencil border-wobbly hover:-rotate-1 transition-transform shadow-hard-sm hover:shadow-hard">
 <h3 className="font-display font-bold text-pencil text-xl mb-2">Hackathon Wins</h3>
 <p className="text-sm text-pencil/70 font-sans">6 hackathons including 1st Place at Code for Change 2.0</p>
 </Link>
 <Link href="https://github.com/soumyachk101" target="_blank" rel="noopener noreferrer" className="block p-6 bg-white border-2 border-pencil border-wobbly hover:-rotate-1 transition-transform shadow-hard-sm hover:shadow-hard">
 <h3 className="font-display font-bold text-pencil text-xl mb-2">GitHub Profile</h3>
 <p className="text-sm text-pencil/70 font-sans">Open-source projects, code samples, and contributions</p>
 </Link>
 </div>
 </div>
 </div>
 </section>
 );
};

export default CertificateDetailsClient;
