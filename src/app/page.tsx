"use client";

import dynamic from 'next/dynamic';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Skills from '../components/Skills';

// Lazy load heavy below-fold components to reduce initial bundle size and TBT
const Projects = dynamic(() => import('../components/Projects'), { ssr: false });
const Hackathons = dynamic(() => import('../components/Hackathons'), { ssr: false });
const Experience = dynamic(() => import('../components/Experience'), { ssr: false });
const Certificates = dynamic(() => import('../components/Certificates'), { ssr: false });
const About = dynamic(() => import('../components/About'), { ssr: false });
const Contact = dynamic(() => import('../components/Contact'), { ssr: false });

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
                <About />
                <Contact />
            </main>
        </>
    );
}
