import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Brain, Code2, Database, Cloud, Shield, Award } from 'lucide-react';
import { categories, certificates } from '../data/certificates';

const Certificates = () => {
    const getCategoryIcon = (id: string) => {
        switch (id) {
            case 'ai': return <Brain size={24} className="text-primary" />;
            case 'gen-ai': return <Brain size={24} className="text-secondary" />;
            case 'cyber': return <Shield size={24} className="text-primary" />;
            case 'cloud': return <Cloud size={24} className="text-secondary" />;
            case 'dev': return <Code2 size={24} className="text-primary" />;
            case 'data': return <Database size={24} className="text-secondary" />;
            default: return <Award size={24} className="text-primary" />;
        }
    };

    const displayCategories = categories.filter(c => c.id !== 'all');

    return (
        <section id="certificates" className="py-20 bg-background/20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">Certificates & Achievements</h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
                    <p className="mt-4 text-muted-foreground font-medium">Explore my certifications by category</p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {displayCategories.map((cat, index) => {
                        const count = certificates.filter(c => c.category === cat.id).length;

                        return (
                            <Link to={`/certificates/${cat.id}`} key={cat.id}>
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.4, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    whileHover={{ y: -5 }}
                                    className="bg-card p-8 rounded-2xl border border-primary/5 hover:bg-card/80 transition-all group cursor-pointer h-full shadow-lg hover:shadow-2xl"
                                >
                                    <div className="flex items-start justify-between mb-6">
                                        <div className="p-3 bg-primary/10 rounded-xl text-primary group-hover:bg-primary group-hover:text-white transition-all">
                                            {getCategoryIcon(cat.id)}
                                        </div>
                                        <span className="text-2xl font-bold text-muted-foreground group-hover:text-primary transition-colors">
                                            {String(index + 1).padStart(2, '0')}
                                        </span>
                                    </div>

                                    <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                                        {cat.label}
                                    </h3>

                                    <div className="flex items-center justify-between mt-6">
                                        <span className="text-sm font-bold text-primary bg-primary/5 px-4 py-1.5 rounded-full">
                                            {count} Certificates
                                        </span>
                                        <ArrowRight size={20} className="text-primary transform group-hover:translate-x-2 transition-transform" />
                                    </div>
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
