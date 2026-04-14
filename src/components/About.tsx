import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';

const About = () => {
    return (
        <section id="about" className="py-20 relative bg-background overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-primary/5 rounded-full blur-[100px] pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">About Me</h2>
                    <div className="w-24 h-1.5 bg-primary mx-auto rounded-full"></div>
                </motion.div>

                    <div className="lg:col-span-2 max-w-3xl mx-auto space-y-8">
                        {/* Bio Card */}
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                            className="p-10 rounded-2xl border border-primary/10 bg-card/60 backdrop-blur-md hover:bg-card/80 transition-all shadow-xl"
                        >
                            <h3 className="text-2xl font-bold text-primary mb-6 flex items-center">
                                <span className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center mr-3 text-sm text-primary">01</span>
                                Creative & Detail-Oriented
                            </h3>
                            <p className="text-muted-foreground leading-relaxed text-lg">
                                I'm a passionate 3rd Year B.Tech CSE Student. I love exploring the intersection of design and technology, creating user-centric web applications that not only look great but function seamlessly. My journey is driven by curiosity and a constant desire to learn new technologies.
                            </p>
                        </motion.div>
    
                        {/* Location Card */}
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            viewport={{ once: true }}
                            className="p-8 rounded-2xl border border-secondary/20 bg-secondary/40 backdrop-blur-md hover:bg-secondary/60 transition-all shadow-lg"
                        >
                            <h3 className="text-xl font-bold text-foreground mb-4 flex items-center">
                                <span className="w-8 h-8 rounded-lg bg-secondary/20 flex items-center justify-center mr-3 text-sm text-primary">02</span>
                                Location
                            </h3>
                            <div className="flex items-center text-muted-foreground">
                                <MapPin className="text-primary mr-3" size={24} />
                                <span className="text-lg font-medium">Kolkata, India</span>
                            </div>
                        </motion.div>
                    </div>
            </div>
        </section>
    );
};

export default About;
