import { motion } from 'framer-motion';

const Preloader = () => {
    return (
        <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-paper"
            style={{
                backgroundImage: 'radial-gradient(#e5e0d8 1px, transparent 1px)',
                backgroundSize: '24px 24px'
            }}
        >
            <div className="relative flex flex-col items-center">
                {/* Background decorative swirl */}
                <motion.svg 
                    width="150" 
                    height="150" 
                    viewBox="0 0 150 150" 
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-accent/20 pointer-events-none"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                >
                    <path d="M75,10 C110,10 140,40 140,75 C140,110 110,140 75,140 C40,140 10,110 10,75 C10,40 40,10 75,10 Z" stroke="currentColor" strokeWidth="4" strokeDasharray="10,15" fill="none" />
                    <path d="M75,25 C102,25 125,48 125,75 C125,102 102,125 75,125 C48,125 25,102 25,75 C25,48 48,25 75,25 Z" stroke="currentColor" strokeWidth="2" strokeDasharray="5,10" fill="none" />
                </motion.svg>

                {/* Bouncing Hand-drawn box */}
                <motion.div
                    className="w-24 h-24 bg-white border-4 border-pencil border-wobbly flex items-center justify-center mb-8 shadow-hard-lg relative z-10"
                    animate={{ 
                        rotate: [-5, 5, -5],
                        y: [0, -15, 0],
                        scale: [1, 1.05, 1]
                    }}
                    transition={{ 
                        duration: 2, 
                        repeat: Infinity, 
                        ease: "easeInOut" 
                    }}
                >
                    <motion.span 
                        className="text-5xl font-heading font-black text-accent transform rotate-[-5deg]"
                        animate={{ opacity: [0.8, 1, 0.8] }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                    >
                        SC.
                    </motion.span>
                </motion.div>

                {/* Animated loading text */}
                <motion.div 
                    className="relative z-10 flex flex-col items-center"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                >
                    <h1 className="text-3xl font-heading font-bold text-pencil tracking-widest flex items-center">
                        <span className="mr-2">Loading</span>
                        <motion.span
                            animate={{ opacity: [0, 1, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity, ease: "linear", times: [0, 0.5, 1] }}
                        >
                            .
                        </motion.span>
                        <motion.span
                            animate={{ opacity: [0, 1, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity, ease: "linear", delay: 0.2, times: [0, 0.5, 1] }}
                        >
                            .
                        </motion.span>
                        <motion.span
                            animate={{ opacity: [0, 1, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity, ease: "linear", delay: 0.4, times: [0, 0.5, 1] }}
                        >
                            .
                        </motion.span>
                    </h1>
                    
                    {/* Wobbly underline */}
                    <svg width="120" height="10" viewBox="0 0 120 10" className="mt-2">
                        <motion.path 
                            d="M0,5 Q30,0 60,5 T120,5" 
                            stroke="#ff4d4d" 
                            strokeWidth="3" 
                            fill="none" 
                            className="path-draw"
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: 1 }}
                            transition={{ 
                                duration: 1.5, 
                                repeat: Infinity,
                                repeatType: "reverse",
                                ease: "easeInOut" 
                            }}
                        />
                    </svg>
                </motion.div>
            </div>
        </motion.div>
    );
};

export default Preloader;
