import { useState, useEffect } from 'react';
import { Menu, X, Github, Instagram, MessageCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState('home');

    const navLinks = [
        { name: 'Home', href: '#home' },
        { name: 'Skills', href: '#skills' },
        { name: 'Projects', href: '#projects' },
        { name: 'Hackathons', href: '#hackathons' },
        { name: 'Experience', href: '#experience' },
        { name: 'Certificates', href: '#certificates' },
        { name: 'Playground', href: '#about' },
        { name: 'Contact', href: '#contact' },
    ];

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
            
            // Active section detection
            const sections = navLinks.map(link => link.href.substring(1));
            for (const section of sections.reverse()) {
                const element = document.getElementById(section);
                if (element && window.scrollY >= element.offsetTop - 120) {
                    setActiveSection(section);
                    break;
                }
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'bg-paper py-3 border-b-4 border-pencil shadow-[0_4px_0_0_#2d2d2d]' : 'bg-transparent py-5'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center">
                    <a href="#home" className="text-4xl font-heading font-black tracking-tighter hover:-rotate-2 transition-transform text-pencil">
                        SC.
                    </a>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-2">
                        {navLinks.map((link) => {
                            const isActive = activeSection === link.href.substring(1);
                            return (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className={`px-3 py-1 text-xl font-bold transition-all duration-300 relative group ${
                                        isActive ? 'text-accent' : 'text-pencil hover:text-accent hover:-translate-y-1'
                                    }`}
                                >
                                    {link.name}
                                    {/* Hand-drawn underline for active state */}
                                    {isActive && (
                                        <svg className="absolute -bottom-1 left-0 w-full h-2 text-accent" viewBox="0 0 100 10" preserveAspectRatio="none">
                                            <path d="M0,5 Q20,10 40,5 T80,5 T100,5" stroke="currentColor" strokeWidth="3" fill="none" className="path-draw" />
                                        </svg>
                                    )}
                                </a>
                            );
                        })}
                        
                        <div className="flex items-center gap-4 ml-4 pl-4 border-l-4 border-dashed border-muted">
                            <div className="flex items-center space-x-2">
                                <a href="https://github.com/soumyachk101" target="_blank" rel="noreferrer" aria-label="GitHub" className="p-2 border-2 border-pencil rounded-full text-pencil hover:bg-accent hover:text-white transition-all hover:rotate-6 shadow-[2px_2px_0_0_#2d2d2d] hover:shadow-[1px_1px_0_0_#2d2d2d] hover:translate-x-[1px] hover:translate-y-[1px]">
                                    <Github size={20} strokeWidth={2.5} />
                                </a>
                                <a href="https://wa.me/qr/PAVVG4QPZUJXF1" target="_blank" rel="noreferrer" aria-label="WhatsApp" className="p-2 border-2 border-pencil rounded-full text-pencil hover:bg-secondary hover:text-white transition-all hover:-rotate-6 shadow-[2px_2px_0_0_#2d2d2d] hover:shadow-[1px_1px_0_0_#2d2d2d] hover:translate-x-[1px] hover:translate-y-[1px]">
                                    <MessageCircle size={20} strokeWidth={2.5} />
                                </a>
                                <a href="https://www.instagram.com/soumya_chk" target="_blank" rel="noreferrer" aria-label="Instagram" className="p-2 border-2 border-pencil rounded-full text-pencil hover:bg-accent hover:text-white transition-all hover:rotate-6 shadow-[2px_2px_0_0_#2d2d2d] hover:shadow-[1px_1px_0_0_#2d2d2d] hover:translate-x-[1px] hover:translate-y-[1px]">
                                    <Instagram size={20} strokeWidth={2.5} />
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center gap-2">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="p-2 border-2 border-pencil bg-white shadow-[2px_2px_0_0_#2d2d2d] text-pencil hover:bg-accent hover:text-white transition-all active:translate-x-[2px] active:translate-y-[2px] active:shadow-none"
                        >
                            {isOpen ? <X size={24} strokeWidth={3} /> : <Menu size={24} strokeWidth={3} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div 
                        initial={{ opacity: 0, y: -20, rotate: -2 }}
                        animate={{ opacity: 1, y: 0, rotate: 0 }}
                        exit={{ opacity: 0, y: -20, rotate: 2 }}
                        className="md:hidden absolute w-[calc(100%-2rem)] left-4 top-full mt-4 bg-post-it border-4 border-pencil border-wobbly-md shadow-[6px_6px_0_0_#2d2d2d] z-[100] p-6"
                    >
                        <div className="space-y-4">
                            {navLinks.map((link) => {
                                const isActive = activeSection === link.href.substring(1);
                                return (
                                    <a
                                        key={link.name}
                                        href={link.href}
                                        className={`block text-2xl font-bold transition-all border-b-2 border-dashed pb-2 ${
                                            isActive ? 'text-accent border-accent' : 'text-pencil border-pencil/30 hover:pl-4 hover:text-secondary'
                                        }`}
                                        onClick={() => setIsOpen(false)}
                                    >
                                        {link.name}
                                    </a>
                                );
                            })}
                            <div className="pt-4 flex gap-4">
                                <a href="https://github.com/soumyachk101" aria-label="GitHub" className="p-3 border-2 border-pencil bg-white text-pencil hover:bg-accent hover:text-white shadow-[2px_2px_0_0_#2d2d2d]"><Github size={24} strokeWidth={2.5} /></a>
                                <a href="https://wa.me/qr/PAVVG4QPZUJXF1" aria-label="WhatsApp" className="p-3 border-2 border-pencil bg-white text-pencil hover:bg-secondary hover:text-white shadow-[2px_2px_0_0_#2d2d2d]"><MessageCircle size={24} strokeWidth={2.5} /></a>

                                <a href="https://www.instagram.com/soumya_chk" aria-label="Instagram" className="p-3 border-2 border-pencil bg-white text-pencil hover:bg-accent hover:text-white shadow-[2px_2px_0_0_#2d2d2d]"><Instagram size={24} strokeWidth={2.5} /></a>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
