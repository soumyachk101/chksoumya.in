import { motion } from 'framer-motion';
import { Laptop } from 'lucide-react';

const Preloader = () => {
    return (
        <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black"
        >
            <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="flex flex-col items-center space-y-4"
            >
                <div className="relative">
                    <Laptop size={64} className="text-cyan-400" strokeWidth={1.5} />
                    <motion.div
                        className="absolute -inset-4 bg-cyan-500/20 rounded-full blur-xl"
                        animate={{ opacity: [0.5, 1, 0.5] }}
                        transition={{ duration: 2, repeat: Infinity }}
                    ></motion.div>
                </div>

                <motion.h1
                    className="text-2xl font-bold tracking-[0.2em] text-cyan-400 font-sans"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                >
                    MY PROFILE
                </motion.h1>
            </motion.div>
        </motion.div>
    );
};

export default Preloader;
