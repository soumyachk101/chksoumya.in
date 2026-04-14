import { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Instagram, Sun, Moon } from 'lucide-react';
import { useTheme } from 'next-themes';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState('home');
    const { theme, setTheme } = useTheme();

    const navLinks = [
        { name: 'Home', href: '#home' },
        { name: 'About', href: '#about' },
        { name: 'Skills', href: '#skills' },
        { name: 'Projects', href: '#projects' },
        { name: 'Experience', href: '#experience' },
        { name: 'Certificates', href: '#certificates' },
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
        <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'glass-nav py-3 shadow-md' : 'bg-transparent py-5'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center">
                    <a href="#home" className="text-2xl font-black tracking-tighter hover:scale-105 transition-transform">
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">SC.</span>
                    </a>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-1">
                        {navLinks.map((link) => {
                            const isActive = activeSection === link.href.substring(1);
                            return (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className={`px-4 py-2 rounded-full text-sm font-bold tracking-wide transition-all duration-300 relative group ${
                                        isActive ? 'text-primary' : 'text-foreground/70 hover:text-foreground'
                                    }`}
                                >
                                    {link.name}
                                    {isActive && (
                                        <motion.div 
                                            layoutId="activeNav"
                                            className="absolute inset-0 bg-primary/10 rounded-full -z-10"
                                            transition={{ type: "spring", stiffness: 380, damping: 30 }}
                                        />
                                    )}
                                    <span className={`absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-primary rounded-full transition-all duration-300 ${isActive ? 'opacity-100' : 'opacity-0 scale-0 group-hover:opacity-100 group-hover:scale-100'}`} />
                                </a>
                            );
                        })}
                        
                        <div className="flex items-center gap-2 ml-4 border-l border-primary/20 pl-4">
                            <button
                                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                                className="p-2.5 rounded-full hover:bg-primary/10 transition-all text-foreground hover:rotate-12"
                                aria-label="Toggle theme"
                            >
                                <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                                <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                            </button>

                            <div className="flex items-center space-x-2 ml-2">
                                <a href="https://github.com/soumyachk101" target="_blank" rel="noreferrer" className="p-2 text-muted-foreground hover:text-primary transition-colors hover:scale-110">
                                    <Github size={18} />
                                </a>
                                <a href="https://www.linkedin.com/in/soumya-chakraborty-102b24399" target="_blank" rel="noreferrer" className="p-2 text-muted-foreground hover:text-primary transition-colors hover:scale-110">
                                    <Linkedin size={18} />
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center gap-2">
                        <button
                            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                            className="p-2.5 rounded-full hover:bg-primary/10 transition-colors text-foreground"
                        >
                            <Sun className="h-5 w-5 dark:hidden" />
                            <Moon className="h-5 w-5 hidden dark:block" />
                        </button>
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="p-2 rounded-xl text-foreground hover:bg-primary/10 transition-all"
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div 
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="md:hidden glass absolute w-[calc(100%-2rem)] left-4 top-full mt-2 rounded-2xl overflow-hidden border border-primary/10 shadow-2xl z-[100]"
                    >
                        <div className="p-4 space-y-1">
                            {navLinks.map((link) => {
                                const isActive = activeSection === link.href.substring(1);
                                return (
                                    <a
                                        key={link.name}
                                        href={link.href}
                                        className={`flex items-center justify-between px-4 py-3 rounded-xl text-base font-bold transition-all ${
                                            isActive ? 'bg-primary text-primary-foreground' : 'text-foreground/80 hover:bg-primary/10'
                                        }`}
                                        onClick={() => setIsOpen(false)}
                                    >
                                        {link.name}
                                        {isActive && <div className="w-1.5 h-1.5 bg-primary-foreground rounded-full" />}
                                    </a>
                                );
                            })}
                            <div className="pt-4 mt-2 border-t border-primary/10 flex justify-center gap-6 pb-2">
                                <a href="https://github.com/soumyachk101" className="text-muted-foreground hover:text-primary"><Github size={20} /></a>
                                <a href="https://www.linkedin.com/in/soumya-chakraborty-102b24399" className="text-muted-foreground hover:text-primary"><Linkedin size={20} /></a>
                                <a href="https://www.instagram.com/soumya_chk" className="text-muted-foreground hover:text-primary"><Instagram size={20} /></a>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
