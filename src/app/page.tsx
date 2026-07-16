import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Hackathons from '../components/Hackathons';
import Experience from '../components/Experience';
import Certificates from '../components/Certificates';
import Contact from '../components/Contact';
import LazyAbout from '../components/LazyAbout';

const SITE_URL = 'https://chksoumya.in';

// SEO copy of the project list rendered in components/Projects.tsx —
// keep in sync when adding/removing a project there.
const projectsSeo = [
    { name: 'ShipOrDie', description: 'Multi-agent platform for validating SaaS ideas and optimizing resumes using CrewAI & LangGraph.', repo: 'https://github.com/soumyachk101/ShipOrDie', live: null },
    { name: 'Drishti AI', description: 'AI network scanner that visualizes attack paths and generates security remediation playbooks.', repo: 'https://github.com/soumyachk101/Drishti-Security', live: 'https://drishtisecurity.vercel.app/' },
    { name: 'Cortex', description: 'AI finance tracker with natural language processing, custom Pomodoro timers, and a botanical UI.', repo: 'https://github.com/soumyachk101/Cortex', live: 'https://cortexgo.vercel.app' },
    { name: 'Neeti AI', description: 'AI recruitment platform with collaborative coding, automated evaluations, and WebRTC video.', repo: 'https://github.com/soumyachk101/Neeti-AI', live: 'https://neetiai.vercel.app/' },
    { name: 'Phygital Trace', description: 'Supply chain validation bridging physical products and digital twins using blockchain and NFC.', repo: 'https://github.com/soumyachk101/Phygital-trace-done', live: null },
    { name: 'Stream.TV', description: 'Premium video streaming client with real-time category filtering and a custom media player.', repo: 'https://github.com/soumyachk101/Stream.Tv-Client', live: null },
    { name: 'HealthTrack+', description: 'Medical record platform with real-time biometric tracking and HIPAA-compliant logs.', repo: 'https://github.com/soumyachk101/HealthTrack-Client', live: 'https://www.healthtrack.store/' },
    { name: 'Country Finder', description: 'Interactive explorer for searching and discovering country information via REST Countries API.', repo: 'https://github.com/soumyachk101/Country_Finder', live: 'https://wcountryfinder.netlify.app/' },
    { name: 'Stock Volatility', description: 'Financial analysis dashboard for visualizing stock market volatility using Chart.js.', repo: 'https://github.com/soumyachk101/Stock-Volatility', live: null },
    { name: 'NexusOps', description: 'CI/CD orchestration platform for automated deployments using Kubernetes, Docker, and Ansible.', repo: 'https://github.com/soumyachk101/NexusOps-3.0', live: 'https://nexusops-sigma.vercel.app' },
];

// Google "Profile page" rich result — marks the homepage as the canonical
// profile of the Person defined in layout.tsx (linked via @id).
const profilePageLd = {
    '@context': 'https://schema.org',
    '@type': 'ProfilePage',
    '@id': `${SITE_URL}/#profilepage`,
    url: SITE_URL + '/',
    name: 'Soumya Chakraborty — Full Stack Developer & Software Engineer',
    mainEntity: { '@id': `${SITE_URL}/#person` },
    isPartOf: { '@id': `${SITE_URL}/#website` },
    inLanguage: 'en-IN',
    // Google ProfilePage rich result recommends these; bump dateModified on content updates.
    dateCreated: '2025-11-01',
    dateModified: '2026-07-16',
};

const projectsLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    '@id': `${SITE_URL}/#projects`,
    name: 'Projects by Soumya Chakraborty',
    itemListOrder: 'https://schema.org/ItemListOrderAscending',
    numberOfItems: projectsSeo.length,
    itemListElement: projectsSeo.map((p, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        item: {
            '@type': 'SoftwareSourceCode',
            name: p.name,
            description: p.description,
            codeRepository: p.repo,
            url: p.live ?? p.repo,
            author: { '@id': `${SITE_URL}/#person` },
            programmingLanguage: 'TypeScript',
        },
    })),
};

export default function Home() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(profilePageLd) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(projectsLd) }}
            />
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
