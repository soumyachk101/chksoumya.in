import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';
import { Card } from './ui/Card';

const About = () => {
    return (
        <section id="about" className="py-24 relative bg-background overflow-hidden">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20, rotate: -2 }}
                    whileInView={{ opacity: 1, y: 0, rotate: -2 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-16 inline-block w-full"
                >
                    <h2 className="text-5xl md:text-6xl font-heading font-black mb-4 text-pencil relative inline-block">
                        About Me
                        <svg className="absolute -bottom-2 left-0 w-full h-4 text-secondary" viewBox="0 0 100 10" preserveAspectRatio="none">
                            <path d="M0,5 Q50,10 100,5" stroke="currentColor" strokeWidth="4" fill="none" strokeDasharray="5,5" />
                        </svg>
                    </h2>
                </motion.div>

                <div className="space-y-12">
                    {/* Bio Card */}
                    <motion.div 
                        initial={{ opacity: 0, x: -20, rotate: 2 }}
                        whileInView={{ opacity: 1, x: 0, rotate: 1 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        viewport={{ once: true, amount: 0.3 }}
                    >
                        <Card decoration="tape" className="bg-white">
                            <h3 className="text-3xl font-heading font-bold text-accent mb-6 flex items-center">
                                <span className="w-10 h-10 rounded-full border-2 border-pencil flex items-center justify-center mr-4 text-xl text-pencil bg-post-it border-wobbly shadow-hard-sm transform -rotate-6">1</span>
                                Creative & Detail-Oriented
                            </h3>
                            <p className="text-pencil leading-relaxed text-xl md:text-2xl font-sans">
                                I'm a passionate 3rd Year B.Tech CSE Student. I love exploring the intersection of design and technology, creating user-centric web applications that not only look great but function seamlessly. My journey is driven by curiosity and a constant desire to learn new technologies.
                            </p>
                        </Card>
                    </motion.div>

                    {/* Location Card */}
                    <motion.div 
                        initial={{ opacity: 0, x: 20, rotate: -2 }}
                        whileInView={{ opacity: 1, x: 0, rotate: -1 }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                        viewport={{ once: true, amount: 0.3 }}
                    >
                        <Card decoration="tack" variant="post-it" className="ml-0 md:ml-12 border-wobbly-md">
                            <h3 className="text-3xl font-heading font-bold text-pencil mb-4 flex items-center">
                                <span className="w-10 h-10 rounded-full border-2 border-pencil flex items-center justify-center mr-4 text-xl text-pencil bg-white border-wobbly-alt shadow-hard-sm transform rotate-6">2</span>
                                Location
                            </h3>
                            <div className="flex items-center text-pencil">
                                <div className="p-2 border-2 border-pencil rounded-full border-wobbly bg-white mr-4 shadow-hard-sm">
                                    <MapPin className="text-accent" size={28} strokeWidth={2.5} />
                                </div>
                                <span className="text-2xl font-bold font-sans">Kolkata, India</span>
                            </div>
                        </Card>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
