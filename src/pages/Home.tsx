import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Hackathons from '../components/Hackathons';
import Experience from '../components/Experience';
import Certificates from '../components/Certificates';
import Contact from '../components/Contact';

const Home = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            <Navbar />
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Hackathons />
            <Experience />
            <Certificates />
            <Contact />
        </motion.div>
    );
};

export default Home;
