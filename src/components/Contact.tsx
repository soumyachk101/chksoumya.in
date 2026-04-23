import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Send, Loader2, Linkedin, Github, Instagram } from 'lucide-react';
import { Card } from './ui/Card';
import { Button } from './ui/Button';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500));

        setIsSubmitting(false);
        setSubmitted(true);
        setFormData({ name: '', email: '', message: '' });

        setTimeout(() => setSubmitted(false), 3000);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

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

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <Card decoration="tape" className="transform rotate-1 hover:rotate-0 transition-transform">
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-sans font-bold text-pencil mb-2">Your Name</label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            placeholder="John Doe"
                                            className="w-full bg-paper border-2 border-pencil border-wobbly px-4 py-3 outline-none focus:bg-white transition-all text-pencil font-sans font-bold shadow-[2px_2px_0px_0px_#2d2d2d]"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-sans font-bold text-pencil mb-2">Your Email</label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            placeholder="john@example.com"
                                            className="w-full bg-paper border-2 border-pencil border-wobbly px-4 py-3 outline-none focus:bg-white transition-all text-pencil font-sans font-bold shadow-[2px_2px_0px_0px_#2d2d2d]"
                                            required
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="message" className="block text-sm font-sans font-bold text-pencil mb-2">Your Message</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        rows={4}
                                        placeholder="Tell me about your project..."
                                        className="w-full bg-paper border-2 border-pencil border-wobbly px-4 py-3 outline-none focus:bg-white transition-all resize-none text-pencil font-sans font-bold shadow-[2px_2px_0px_0px_#2d2d2d]"
                                        required
                                    ></textarea>
                                </div>
                                
                                <Button 
                                    type="submit" 
                                    disabled={isSubmitting}
                                    className="w-full flex justify-center items-center gap-2"
                                >
                                    {isSubmitting ? (
                                        <>
                                            <Loader2 size={20} className="animate-spin" strokeWidth={2.5} />
                                            <span>Sending...</span>
                                        </>
                                    ) : submitted ? (
                                        <span>Message Sent!</span>
                                    ) : (
                                        <>
                                            <span>Send Message</span>
                                            <Send size={18} strokeWidth={2.5} />
                                        </>
                                    )}
                                </Button>
                            </form>
                        </Card>
                    </motion.div>

                    {/* Right Column: Info Cards */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        {/* Card 1: Contact Information */}
                        <Card decoration="tack" className="transform -rotate-1 hover:rotate-0 transition-transform">
                            <h3 className="text-2xl font-display font-bold text-pencil mb-6 inline-block border-b-2 border-pencil border-dashed pb-1">Contact Information</h3>
                            <div className="space-y-6">
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
