import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { Button } from "./ui/Button";

const Hero = () => {
    return (
        <section id="home" className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-background pt-20">
            {/* Hand-drawn Decorative Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none" aria-hidden="true">
                <svg className="absolute top-20 right-10 w-32 h-32 text-muted hidden md:block" viewBox="0 0 100 100" fill="none">
                    <path d="M10,50 Q50,10 90,50 T50,90 T10,50" stroke="currentColor" strokeWidth="2" strokeDasharray="5,5" />
                </svg>
                <div className="absolute bottom-20 left-20 w-16 h-16 border-4 border-accent border-wobbly rounded-full opacity-50 animate-[bounce_3s_infinite] hidden md:block"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
                    animate={{ opacity: 1, scale: 1, rotate: -2 }}
                    transition={{ duration: 0.8 }}
                    className="mb-8 inline-block"
                >
                    <span className="inline-block px-6 py-2 bg-post-it border-2 border-pencil border-wobbly-sm shadow-hard-sm text-pencil text-lg font-bold tracking-wide transform hover:rotate-2 transition-transform">
                        Available for Full Stack Opportunities
                    </span>
                </motion.div>

                <motion.h1 
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-6xl md:text-8xl font-heading font-black mb-8 tracking-tight text-pencil relative inline-block"
                >
                    Hi, I'm <span className="text-accent inline-block hover:-translate-y-2 transition-transform cursor-pointer">Soumya</span> <br className="hidden md:block" />
                    <span>Chakraborty</span>
                    
                    {/* Scribbled underline */}
                    <svg className="absolute -bottom-4 left-0 w-full h-6 text-secondary hidden md:block" viewBox="0 0 300 20" preserveAspectRatio="none" aria-hidden="true">
                        <path d="M5,10 Q100,20 150,5 T295,15" fill="none" stroke="currentColor" strokeWidth="4" />
                    </svg>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-2xl md:text-3xl text-pencil mb-12 max-w-3xl mx-auto font-sans leading-relaxed"
                >
                    A 3rd Year B.Tech CSE Student and <span className="font-bold border-b-4 border-accent border-dashed">Full Stack Developer</span> creating intuitive, high-performance digital experiences.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-6"
                >
                    <a href="#projects" className="w-full sm:w-auto">
                        <Button variant="primary" className="w-full text-xl py-4 hover:-rotate-2">
                            View My Work
                        </Button>
                    </a>
                    <a href="#contact" className="w-full sm:w-auto">
                        <Button variant="secondary" className="w-full text-xl py-4 bg-white hover:rotate-2">
                            Contact Me
                        </Button>
                    </a>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity, delay: 1 }}
            >
                <a href="#about" className="text-pencil/50 hover:text-accent transition-colors block border-2 border-transparent hover:border-pencil rounded-full p-2 border-wobbly">
                    <ArrowDown size={32} strokeWidth={2.5} />
                </a>
            </motion.div>
        </section>
    );
};

export default Hero;
