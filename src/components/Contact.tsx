import { motion } from 'framer-motion';
import { Mail, Phone, Linkedin, Github, Instagram } from 'lucide-react';
import { Card } from './ui/Card';

const Contact = () => {
    return (
        <section id="contact" className="py-20 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-16 relative"
                >
                    <h2 className="text-4xl md:text-6xl font-display font-bold mb-4 text-pencil transform -rotate-1 inline-block relative">
                        Get In Touch
                        <svg className="absolute -bottom-4 left-0 w-full h-4" viewBox="0 0 100 20" preserveAspectRatio="none">
                            <path d="M0,15 Q50,5 100,15 M10,10 Q50,20 90,10" stroke="#e85d04" strokeWidth="3" fill="none" className="path-draw" />
                        </svg>
                    </h2>
                    <p className="mt-8 text-pencil/80 font-sans text-xl font-bold transform rotate-1">Have a question or want to work together?</p>
                </motion.div>

                <div className="max-w-4xl mx-auto">
                    {/* Info Cards */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        {/* Card 1: Contact Information */}
                        <Card decoration="tack" className="transform -rotate-1 hover:rotate-0 transition-transform">
                            <h3 className="text-2xl font-display font-bold text-pencil mb-6 inline-block border-b-2 border-pencil border-dashed pb-1">Contact Information</h3>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                <div className="flex items-center space-x-4 group">
                                    <div className="p-3 bg-white border-2 border-pencil border-wobbly text-pencil group-hover:bg-pencil group-hover:text-paper transition-all shadow-hard transform -rotate-3 group-hover:rotate-0">
                                        <Phone size={20} strokeWidth={2.5} />
                                    </div>
                                    <div>
                                        <p className="text-xs text-accent uppercase tracking-wide font-bold mb-1">Phone</p>
                                        <p className="text-pencil font-display font-bold text-lg">+91 9332880661</p>
                                    </div>
                                </div>

                                <div className="flex items-center space-x-4 group">
                                    <div className="p-3 bg-white border-2 border-pencil border-wobbly text-pencil group-hover:bg-pencil group-hover:text-paper transition-all shadow-hard transform rotate-2 group-hover:rotate-0">
                                        <Mail size={20} strokeWidth={2.5} />
                                    </div>
                                    <div>
                                        <p className="text-xs text-accent uppercase tracking-wide font-bold mb-1">Email</p>
                                        <p className="text-pencil font-display font-bold text-lg">soumyachk1@gmail.com</p>
                                    </div>
                                </div>

                                <div className="flex items-center space-x-4 group">
                                    <div className="p-3 bg-white border-2 border-pencil border-wobbly text-pencil group-hover:bg-pencil group-hover:text-paper transition-all shadow-hard transform -rotate-2 group-hover:rotate-0">
                                        <Linkedin size={20} strokeWidth={2.5} />
                                    </div>
                                    <div>
                                        <p className="text-xs text-accent uppercase tracking-wide font-bold mb-1">LinkedIn</p>
                                        <a href="https://www.linkedin.com/in/soumya-chakraborty-102b24399" target="_blank" rel="noreferrer" className="text-pencil font-display font-bold text-lg hover:text-accent transition-colors underline decoration-wavy">View Profile</a>
                                    </div>
                                </div>
                            </div>
                        </Card>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {/* Card 2: Promo */}
                            <Card className="transform rotate-2 hover:rotate-0 transition-transform bg-accent/10 border-accent">
                                <h3 className="text-xl font-display font-bold text-pencil mb-2">Let's Create Something Amazing</h3>
                                <p className="text-pencil/80 text-sm font-sans font-medium">
                                    I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
                                </p>
                            </Card>

                            {/* Card 3: Socials */}
                            <Card className="transform -rotate-2 hover:rotate-0 transition-transform flex flex-col justify-between">
                                <span className="text-pencil text-lg font-display font-bold mb-4">Connect with me</span>
                                <div className="flex space-x-4">
                                    <a href="https://www.linkedin.com/in/soumya-chakraborty-102b24399" target="_blank" rel="noreferrer" className="p-3 bg-white border-2 border-pencil border-wobbly text-pencil hover:bg-pencil hover:text-paper transition-all shadow-hard transform hover:scale-110">
                                        <Linkedin size={20} strokeWidth={2.5} />
                                    </a>
                                    <a href="https://github.com/soumyachk101" target="_blank" rel="noreferrer" className="p-3 bg-white border-2 border-pencil border-wobbly text-pencil hover:bg-pencil hover:text-paper transition-all shadow-hard transform hover:scale-110 rotate-3">
                                        <Github size={20} strokeWidth={2.5} />
                                    </a>
                                    <a href="https://www.instagram.com/soumya_chk" target="_blank" rel="noreferrer" className="p-3 bg-white border-2 border-pencil border-wobbly text-pencil hover:bg-pencil hover:text-paper transition-all shadow-hard transform hover:scale-110 -rotate-3">
                                        <Instagram size={20} strokeWidth={2.5} />
                                    </a>
                                </div>
                            </Card>
                        </div>
                    </motion.div>
                </div>

                <footer className="mt-24 pt-8 text-center">
                    <svg className="w-full h-8 mb-8" viewBox="0 0 100 10" preserveAspectRatio="none">
                        <path d="M0,5 Q50,-5 100,5 M0,7 Q50,17 100,7" stroke="#2d2d2d" strokeWidth="1" strokeDasharray="4 4" fill="none" className="path-draw" />
                    </svg>
                    <p className="text-pencil font-sans font-bold">&copy; {new Date().getFullYear()} Soumya Chakraborty. Handcrafted with pixels and paper.</p>
                </footer>
            </div>
        </section>
    );
};

export default Contact;
