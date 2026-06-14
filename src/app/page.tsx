import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Hackathons from '../components/Hackathons';
import Experience from '../components/Experience';
import Certificates from '../components/Certificates';
import Contact from '../components/Contact';
import LazyAbout from '../components/LazyAbout';

export default function Home() {
    return (
        <>
            <Navbar />
            <main id="main-content">
                <Hero />
                <Skills />
                <Projects />
                <Hackathons />
                <Experience />
                <Certificates />
                <LazyAbout />
                <Contact />
            </main>
        </>
    );
}
