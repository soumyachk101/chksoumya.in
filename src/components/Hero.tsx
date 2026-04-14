import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

const Hero = () => {
    return (
        <section id="home" className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-background">
            {/* Background Decorative Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
                <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-primary/10 rounded-full blur-[120px] animate-pulse"></div>
                <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-secondary/10 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '2s' }}></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className="mb-6 inline-block"
                >
                    <span className="px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-sm font-bold tracking-wider uppercase">
                        Available for Full Stack Opportunities
                    </span>
                </motion.div>

                <motion.h1 
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-5xl md:text-8xl font-black mb-6 tracking-tight"
                >
                    Hi, I'm <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-primary to-secondary">Soumya</span> <br className="hidden md:block" />
                    <span className="text-foreground">Chakraborty</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto font-medium"
                >
                    A 3rd Year B.Tech CSE Student and <span className="text-foreground font-bold border-b-2 border-primary/30">Full Stack Developer</span> creating intuitive, high-performance digital experiences.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4"
                >
                    <a 
                        href="#projects" 
                        className="px-8 py-4 bg-primary text-primary-foreground rounded-full font-bold text-lg hover:shadow-[0_0_20px_rgba(15,139,131,0.4)] transition-all transform hover:-translate-y-1 w-full sm:w-auto"
                    >
                        View My Work
                    </a>
                    <a 
                        href="#contact" 
                        className="px-8 py-4 bg-background border border-primary/20 text-foreground rounded-full font-bold text-lg hover:bg-primary/5 transition-all transform hover:-translate-y-1 w-full sm:w-auto"
                    >
                        Contact Me
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
                <a href="#about" className="text-primary/50 hover:text-primary transition-colors">
                    <ArrowDown size={32} />
                </a>
            </motion.div>
        </section>
    );
};

export default Hero;
