"use client";

import { useState, FormEvent } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, Github, Instagram, MessageCircle, Send, CheckCircle2, AlertTriangle } from 'lucide-react';
import { Forminit } from 'forminit';
import { Card } from './ui/Card';

const forminit = new Forminit();

const Contact = () => {
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
    const [errorMsg, setErrorMsg] = useState<string | null>(null);

    const FORM_ID = process.env.NEXT_PUBLIC_FORMINIT_FORM_ID || "YOUR_FORMINIT_FORM_ID_HERE";

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus('loading');
        setErrorMsg(null);

        const form = e.currentTarget;
        const formData = new FormData(form);

        try {
            const { error } = await forminit.submit(FORM_ID, formData);

            if (error) {
                setStatus('error');
                setErrorMsg(error.message || "An error occurred while sending your message.");
                return;
            }

            setStatus('success');
            form.reset();
        } catch {
            setStatus('error');
            setErrorMsg("Could not connect to submission server. Check network connection.");
        }
    };

    return (
        <section id="contact" className="py-20 relative overflow-hidden bg-background">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                
                {/* Header */}
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
                    <p className="mt-8 text-pencil/80 font-sans text-xl font-bold transform rotate-1">
                        Have a question or want to work together? Let's talk!
                    </p>
                </motion.div>

                {/* Split columns layout */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
                    
                    {/* LEFT COLUMN: Contact Cards (5 Columns) */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="lg:col-span-5 space-y-8"
                    >
                        {/* Info details */}
                        <Card decoration="tack" className="transform -rotate-1 hover:rotate-0 transition-transform bg-white">
                            <h3 className="text-2xl font-display font-bold text-pencil mb-6 inline-block border-b-2 border-pencil border-dashed pb-1">Contact Information</h3>
                            <div className="space-y-6">
                                <div className="flex items-center space-x-4 group">
                                    <div className="p-3 bg-white border-2 border-pencil border-wobbly text-pencil group-hover:bg-pencil group-hover:text-paper transition-all shadow-hard transform -rotate-3 group-hover:rotate-0">
                                        <Phone size={20} strokeWidth={2.5} />
                                    </div>
                                    <div>
                                        <p className="text-xs text-accent uppercase tracking-wide font-bold mb-1">Phone</p>
                                        <a href="tel:+918145850111" className="text-pencil font-display font-bold text-lg hover:text-accent transition-colors underline decoration-wavy">+91 8145850111</a>
                                    </div>
                                </div>

                                <div className="flex items-center space-x-4 group">
                                    <div className="p-3 bg-white border-2 border-pencil border-wobbly text-pencil group-hover:bg-pencil group-hover:text-paper transition-all shadow-hard transform rotate-2 group-hover:rotate-0">
                                        <Mail size={20} strokeWidth={2.5} />
                                    </div>
                                    <div>
                                        <p className="text-xs text-accent uppercase tracking-wide font-bold mb-1">Email</p>
                                        <a href="mailto:soumyachk1@gmail.com" className="text-pencil font-display font-bold text-lg hover:text-accent transition-colors underline decoration-wavy">soumyachk1@gmail.com</a>
                                    </div>
                                </div>

                                <div className="flex items-center space-x-4 group">
                                    <div className="p-3 bg-white border-2 border-pencil border-wobbly text-pencil group-hover:bg-pencil group-hover:text-paper transition-all shadow-hard transform -rotate-2 group-hover:rotate-0">
                                        <MessageCircle size={20} strokeWidth={2.5} />
                                    </div>
                                    <div>
                                        <p className="text-xs text-accent uppercase tracking-wide font-bold mb-1">WhatsApp</p>
                                        <a href="https://wa.me/918145850111" target="_blank" rel="noopener noreferrer" className="text-pencil font-display font-bold text-lg hover:text-accent transition-colors underline decoration-wavy">Chat Now</a>
                                    </div>
                                </div>
                            </div>
                        </Card>

                        {/* Social connections */}
                        <Card className="transform rotate-1 hover:rotate-0 transition-transform flex flex-col justify-between bg-white">
                            <span className="text-pencil text-lg font-display font-bold mb-4">Connect with me</span>
                            <div className="flex space-x-4">
                                <a href="https://wa.me/918145850111" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="p-3 bg-white border-2 border-pencil border-wobbly text-pencil hover:bg-pencil hover:text-paper transition-all shadow-hard transform hover:scale-110 rotate-6">
                                    <MessageCircle size={20} strokeWidth={2.5} />
                                </a>
                                <a href="https://github.com/soumyachk101" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="p-3 bg-white border-2 border-pencil border-wobbly text-pencil hover:bg-pencil hover:text-paper transition-all shadow-hard transform hover:scale-110 rotate-3">
                                    <Github size={20} strokeWidth={2.5} />
                                </a>
                                <a href="https://www.instagram.com/soumya_chk" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="p-3 bg-white border-2 border-pencil border-wobbly text-pencil hover:bg-pencil hover:text-paper transition-all shadow-hard transform hover:scale-110 -rotate-3">
                                    <Instagram size={20} strokeWidth={2.5} />
                                </a>
                            </div>
                        </Card>
                    </motion.div>

                    {/* RIGHT COLUMN: Contact Form (7 Columns) */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="lg:col-span-7"
                    >
                        <Card decoration="tape" className="bg-white border-2 border-pencil border-wobbly p-6 md:p-8 shadow-hard-lg relative">
                            <div className="absolute top-1 right-2 text-[8px] font-mono opacity-30">forminit_contact_channel.sh</div>
                            
                            <h3 className="text-2xl font-display font-black text-pencil mb-6 pb-2 border-b-2 border-dashed border-pencil/20">
                                Send a Message
                            </h3>

                            <form onSubmit={handleSubmit} className="space-y-6 select-text">
                                {/* Name Input */}
                                <div className="space-y-2">
                                    <label htmlFor="contact-fullname" className="text-xs uppercase font-sans font-extrabold text-pencil block tracking-wider">
                                        Your Full Name
                                    </label>
                                    <input 
                                        id="contact-fullname"
                                        type="text" 
                                        name="fi-sender-fullName"
                                        placeholder="Enter your name" 
                                        required 
                                        className="w-full bg-white border-2 border-pencil border-wobbly-sm p-3 font-sans text-pencil text-base placeholder-pencil/30 focus:outline-none focus:ring-2 focus:ring-accent rounded-md shadow-hard-sm transition-transform focus:scale-[1.01]"
                                    />
                                </div>

                                {/* Email Input */}
                                <div className="space-y-2">
                                    <label htmlFor="contact-email" className="text-xs uppercase font-sans font-extrabold text-pencil block tracking-wider">
                                        Your Email Address
                                    </label>
                                    <input 
                                        id="contact-email"
                                        type="email" 
                                        name="fi-sender-email"
                                        placeholder="Enter your email" 
                                        required 
                                        className="w-full bg-white border-2 border-pencil border-wobbly-sm p-3 font-sans text-pencil text-base placeholder-pencil/30 focus:outline-none focus:ring-2 focus:ring-accent rounded-md shadow-hard-sm transition-transform focus:scale-[1.01]"
                                    />
                                </div>

                                {/* Message Input */}
                                <div className="space-y-2">
                                    <label htmlFor="contact-message" className="text-xs uppercase font-sans font-extrabold text-pencil block tracking-wider">
                                        Message
                                    </label>
                                    <textarea 
                                        id="contact-message"
                                        name="fi-text-message"
                                        placeholder="Describe your project ideas, questions, or opportunities..." 
                                        rows={5} 
                                        required 
                                        className="w-full bg-white border-2 border-pencil border-wobbly-sm p-3 font-sans text-pencil text-base placeholder-pencil/30 focus:outline-none focus:ring-2 focus:ring-accent rounded-md shadow-hard-sm transition-transform focus:scale-[1.01]"
                                    />
                                </div>

                                {/* Status Feedback boxes */}
                                <AnimatePresence mode="wait">
                                    {status === 'success' && (
                                        <motion.div 
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -10 }}
                                            className="p-4 bg-green-50 border-2 border-green-500 border-dashed rounded text-green-700 text-sm font-sans font-bold flex items-center gap-2"
                                        >
                                            <CheckCircle2 size={16} className="shrink-0" />
                                            <span>Message sent successfully! I will get back to you shortly.</span>
                                        </motion.div>
                                    )}

                                    {status === 'error' && (
                                        <motion.div 
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -10 }}
                                            className="p-4 bg-red-50 border-2 border-red-500 border-dashed rounded text-red-700 text-sm font-sans font-bold flex items-center gap-2"
                                        >
                                            <AlertTriangle size={16} className="shrink-0" />
                                            <span>Error: {errorMsg}</span>
                                        </motion.div>
                                    )}
                                </AnimatePresence>

                                {/* Submit button */}
                                <button 
                                    type="submit" 
                                    disabled={status === 'loading'}
                                    className="py-3 bg-accent hover:bg-pencil text-paper hover:text-paper border-2 border-pencil border-wobbly font-sans font-extrabold text-base shadow-hard active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-all cursor-pointer w-full flex items-center justify-center gap-2 disabled:opacity-50 disabled:pointer-events-none"
                                >
                                    <Send size={16} />
                                    <span>{status === 'loading' ? 'Sending Message...' : 'Send Message'}</span>
                                </button>
                            </form>
                        </Card>
                    </motion.div>

                </div>

                <footer className="mt-24 pt-8 text-center select-none">
                    <svg className="w-full h-8 mb-8" viewBox="0 0 100 10" preserveAspectRatio="none" aria-hidden="true">
                        <path d="M0,5 Q50,-5 100,5 M0,7 Q50,17 100,7" stroke="#2d2d2d" strokeWidth="1" strokeDasharray="4 4" fill="none" className="path-draw" />
                    </svg>
                    <nav aria-label="Footer sitemap" className="mb-6 flex flex-wrap justify-center gap-x-4 gap-y-2 text-sm font-sans font-bold">
                        <Link href="/#projects" className="text-pencil hover:text-accent underline decoration-wavy">Projects</Link>
                        <span aria-hidden="true">·</span>
                        <Link href="/#hackathons" className="text-pencil hover:text-accent underline decoration-wavy">Hackathons</Link>
                        <span aria-hidden="true">·</span>
                        <Link href="/#experience" className="text-pencil hover:text-accent underline decoration-wavy">Experience</Link>
                        <span aria-hidden="true">·</span>
                        <Link href="/#certificates" className="text-pencil hover:text-accent underline decoration-wavy">Certificates</Link>
                        <span aria-hidden="true">·</span>
                        <Link href="/#contact" className="text-pencil hover:text-accent underline decoration-wavy">Contact</Link>
                    </nav>
                    <nav aria-label="Profiles" className="mb-6 flex flex-wrap justify-center gap-x-4 gap-y-2 text-sm font-sans font-bold">
                        <a href="https://github.com/soumyachk101" target="_blank" rel="noopener noreferrer" className="text-pencil hover:text-accent underline decoration-wavy">
                            GitHub — soumyachk101
                        </a>
                        <span aria-hidden="true">·</span>
                        <a href="https://www.linkedin.com/in/soumya-chakraborty-chk" target="_blank" rel="noopener noreferrer" className="text-pencil hover:text-accent underline decoration-wavy">
                            LinkedIn
                        </a>
                    </nav>
                    <p className="text-pencil font-sans font-bold">&copy; {new Date().getFullYear()} Soumya Chakraborty. Handcrafted with pixels and paper.</p>
                </footer>
            </div>
        </section>
    );
};

export default Contact;
