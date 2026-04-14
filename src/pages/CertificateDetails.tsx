import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, Award, ExternalLink } from 'lucide-react';
import { certificates, categories } from '../data/certificates';

const CertificateDetails = () => {
    const { categoryId } = useParams();
    const category = categories.find(c => c.id === categoryId);

    const filteredCerts = certificates.filter(c => c.category === categoryId);

    if (!category) {
        return (
            <div className="min-h-screen bg-slate-950 flex items-center justify-center text-white">
                <div className="text-center">
                    <h2 className="text-2xl font-bold mb-4">Category not found</h2>
                    <Link to="/" className="text-indigo-400 hover:text-indigo-300">Back to Home</Link>
                </div>
            </div>
        );
    }

    return (
        <section className="min-h-screen bg-background py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="mb-12">
                    <Link to="/" className="inline-flex items-center text-muted-foreground hover:text-foreground transition-colors mb-6 group">
                        <ArrowLeft size={20} className="mr-2 group-hover:-translate-x-1 transition-transform" />
                        Back to Portfolio
                    </Link>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                            {category.label}
                        </h1>
                        <div className="w-20 h-1.5 bg-gradient-to-r from-primary to-secondary rounded-full"></div>
                        <p className="mt-4 text-muted-foreground text-lg">
                            {filteredCerts.length} Certificates in this collection
                        </p>
                    </motion.div>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <AnimatePresence mode='popLayout'>
                        {filteredCerts.map((cert, index) => (
                            <motion.div
                                key={cert.title}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4, delay: index * 0.05 }}
                                className="glass p-6 rounded-xl hover:bg-card/50 transition-all group border-l-4 border-l-transparent hover:border-l-primary flex flex-col h-full"
                            >
                                <div className="flex justify-between items-start mb-4">
                                    <div className="p-2 bg-primary/10 rounded-lg text-primary group-hover:text-secondary transition-colors">
                                        <Award size={24} />
                                    </div>
                                </div>

                                <h3 className="text-lg font-bold text-foreground mb-1 group-hover:text-primary transition-colors leading-tight">
                                    {cert.title}
                                </h3>
                                <p className="text-muted-foreground text-sm mb-4 flex-grow">{cert.issuer}</p>

                                <a
                                    href={cert.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center text-sm font-medium text-primary hover:text-secondary transition-colors mt-auto"
                                >
                                    View Certificate <ExternalLink size={14} className="ml-1" />
                                </a>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
};

export default CertificateDetails;
