import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Send, Loader2, Linkedin, Github, Instagram } from 'lucide-react';

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
        <section id="contact" className="py-20 relative bg-background overflow-hidden">
            {/* Background Decorations */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -z-10 translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[120px] -z-10 -translate-x-1/2 translate-y-1/2"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">Get In Touch</h2>
                    <div className="w-24 h-1.5 bg-primary mx-auto rounded-full"></div>
                    <p className="mt-4 text-muted-foreground font-medium">Have a question or want to work together?</p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <form onSubmit={handleSubmit} className="bg-card p-8 rounded-2xl border border-primary/5 shadow-xl space-y-6">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-bold text-muted-foreground mb-2">Your Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        placeholder="John Doe"
                                        className="w-full bg-secondary/20 border border-transparent focus:border-primary/50 rounded-xl px-4 py-3 outline-none transition-all text-foreground"
                                        required
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-bold text-muted-foreground mb-2">Your Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="john@example.com"
                                        className="w-full bg-secondary/20 border border-transparent focus:border-primary/50 rounded-xl px-4 py-3 outline-none transition-all text-foreground"
                                        required
                                    />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-bold text-muted-foreground mb-2">Your Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows={4}
                                    placeholder="Tell me about your project..."
                                    className="w-full bg-secondary/20 border border-transparent focus:border-primary/50 rounded-xl px-4 py-3 outline-none transition-all resize-none text-foreground"
                                    required
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full py-4 bg-primary text-primary-foreground rounded-xl font-bold flex items-center justify-center space-x-2 transition-all hover:bg-primary/90 hover:scale-[1.02] active:scale-95 disabled:opacity-70"
                            >
                                {isSubmitting ? (
                                    <>
                                        <Loader2 size={20} className="animate-spin" />
                                        <span>Sending...</span>
                                    </>
                                ) : submitted ? (
                                    <span>Message Sent!</span>
                                ) : (
                                    <>
                                        <span>Send Message</span>
                                        <Send size={18} />
                                    </>
                                )}
                            </button>
                        </form>
                    </motion.div>

                    {/* Right Column: Info Cards */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="space-y-6"
                    >
                        {/* Card 1: Contact Information */}
                        <div className="p-8 rounded-2xl bg-[#FEEAF0]/40 border border-primary/5 shadow-lg shadow-[#FEEAF0]/50">
                            <h3 className="text-xl font-bold text-primary mb-6">Contact Information</h3>
                            <div className="space-y-6">
                                <div className="flex items-center space-x-4 group">
                                    <div className="p-3 bg-white rounded-full text-primary group-hover:bg-primary group-hover:text-white transition-all shadow-sm">
                                        <Phone size={20} />
                                    </div>
                                    <div>
                                        <p className="text-xs text-slate-500 uppercase tracking-wide font-bold">Phone</p>
                                        <p className="text-slate-800 font-bold">+91 9332880661</p>
                                    </div>
                                </div>

                                <div className="flex items-center space-x-4 group">
                                    <div className="p-3 bg-white rounded-full text-primary group-hover:bg-primary group-hover:text-white transition-all shadow-sm">
                                        <Mail size={20} />
                                    </div>
                                    <div>
                                        <p className="text-xs text-slate-500 uppercase tracking-wide font-bold">Email</p>
                                        <p className="text-slate-800 font-bold">soumyachk1@gmail.com</p>
                                    </div>
                                </div>

                                <div className="flex items-center space-x-4 group">
                                    <div className="p-3 bg-white rounded-full text-primary group-hover:bg-primary group-hover:text-white transition-all shadow-sm">
                                        <Linkedin size={20} />
                                    </div>
                                    <div>
                                        <p className="text-xs text-slate-500 uppercase tracking-wide font-bold">LinkedIn</p>
                                        <a href="https://www.linkedin.com/in/soumya-chakraborty-102b24399" target="_blank" rel="noreferrer" className="text-primary font-bold hover:text-dark transition-colors">View Profile</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Card 2: Promo */}
                        <div className="p-8 rounded-2xl bg-white border border-primary/10 shadow-lg">
                            <h3 className="text-lg font-bold text-slate-800 mb-2">Let's Create Something Amazing</h3>
                            <p className="text-slate-600 text-sm leading-relaxed font-medium">
                                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
                            </p>
                        </div>

                        {/* Card 3: Socials */}
                        <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-between shadow-sm">
                            <span className="text-slate-500 text-sm font-bold">Connect with me</span>
                            <div className="flex space-x-3">
                                <a href="https://www.linkedin.com/in/soumya-chakraborty-102b24399" target="_blank" rel="noreferrer" className="p-2 bg-white rounded-full text-primary hover:bg-primary hover:text-white transition-all shadow-sm">
                                    <Linkedin size={18} />
                                </a>
                                <a href="https://github.com/soumyachk101" target="_blank" rel="noreferrer" className="p-2 bg-white rounded-full text-primary hover:bg-primary hover:text-white transition-all shadow-sm">
                                    <Github size={18} />
                                </a>
                                <a href="https://www.instagram.com/soumya_chk" target="_blank" rel="noreferrer" className="p-2 bg-white rounded-full text-primary hover:bg-primary hover:text-white transition-all shadow-sm">
                                    <Instagram size={18} />
                                </a>
                            </div>
                        </div>

                    </motion.div>
                </div>

                <footer className="mt-20 pt-8 border-t border-slate-200 text-center text-slate-500 text-sm font-bold">
                    <p>&copy; {new Date().getFullYear()} Soumya Chakraborty. All rights reserved.</p>
                </footer>
            </div>
        </section>
    );
};

export default Contact;
