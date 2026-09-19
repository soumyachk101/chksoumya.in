"use client";

import { use } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeft, Award, ExternalLink, CheckCircle2 } from 'lucide-react';
import { certificates, categories, categoryLabel } from '../../../data/certificates';
import { Card } from '../../../components/ui/Card';

type Props = {
	paramsPromise: Promise<{ id: string }>;
};

// Generate unique descriptive text for each certificate based on its issuer and category
const generateCertDescription = (cert: typeof certificates[0]): string => {
	const issuerContext: Record<string, string> = {
	google: 'demonstrating proficiency in Google\'s ecosystem and AI-first tools, prompt engineering, and cloud fundamentals',
	ibm: 'validating skills in IBM\'s enterprise-grade technologies, data science stack, and AI workflow methodologies',
	microsoft: 'demonstrating competency in Microsoft\'s cloud ecosystem, Azure solutions, and developer tools',
	meta: 'validating proficiency in Meta\'s programming languages, mobile development frameworks, and data analytics',
	nvidia: 'demonstrating expertise in NVIDIA\'s AI infrastructure, LLM deployment, deep learning, and ethical AI principles',
	hackerrank: 'validating strong programming fundamentals, problem-solving skills, and algorithmic thinking',
	aws: 'demonstrating competency in AWS cloud services, IT infrastructure, and cloud deployment strategies',
	universities: 'validating academic excellence and structured learning from top-tier institutions like Duke University, University of Michigan, University of Colorado Boulder, and University of London',
	};

	const categoryContext = issuerContext[cert.category] || 'demonstrating professional competency in a specialized domain';

	const specificSkills: Record<string, string> = {
	'Machine Learning with Python': 'supervised and unsupervised learning, regression, classification, clustering, and model evaluation using scikit-learn and Python data science libraries',
	'Prompt Engineering': 'crafting effective prompts for large language models, chain-of-thought reasoning, few-shot learning, and prompt optimization techniques',
	'Google Prompting Essentials': 'foundational prompt engineering techniques using Google\'s AI tools, context engineering, and iterative prompt refinement',
	'Design Prompts for Tasks': 'structured prompt design for workplace automation, productivity enhancement, and task-specific generative AI applications',
	'Use AI as Creative Partner': 'leveraging AI as a creative collaborator for ideation, content generation, design thinking, and innovative problem-solving',
	'Speed Up Data Analysis': 'accelerating data analysis workflows using AI-powered tools, automated insights, and presentation building techniques',
	'Intro to Cybersecurity': 'fundamentals of cybersecurity including common threats, vulnerabilities, defense strategies, and security best practices',
	'Cyber Security Fundamentals': 'core security principles, risk management frameworks, security architecture, and incident response fundamentals',
	'Cybersecurity Essentials': 'essential cybersecurity concepts including network security, cryptography, access control, and security operations',
	'Tools & Cyberattacks': 'cybersecurity tools and technologies, common attack vectors, malware analysis, and defensive countermeasures',
	'Developing Solutions AZ-204': 'developing Azure solutions using compute, storage, messaging, and monitoring services with .NET and Azure SDK',
	'IT & AWS Cloud': 'IT fundamentals combined with AWS cloud services, deployment strategies, and cloud infrastructure management',
	'Intro to IT & AWS': 'introduction to information technology concepts, computer systems, and AWS cloud platform fundamentals',
	'Technical Support Fundamentals': 'IT support methodologies, computer systems, networking basics, and troubleshooting techniques',
	'Technical Support Fundamentals II': 'advanced IT support concepts, system administration, technical diagnostics, and customer service skills',
	'Git and GitHub': 'version control with Git, collaborative development workflows, branching strategies, and GitHub best practices',
	'Programming in Python': 'Python programming fundamentals including data types, control flow, functions, and practical programming patterns',
	'Programming with JavaScript': 'JavaScript programming including ES6+ syntax, DOM manipulation, async patterns, and modern frameworks',
	'Android Mobile App Dev': 'Android app development using modern tools, UI/UX design principles, and app architecture patterns',
	'JavaScript Intermediate': 'intermediate JavaScript concepts including closures, prototypes, async/await, and advanced DOM manipulation',
	'JavaScript Basic': 'JavaScript fundamentals including variables, functions, loops, conditionals, and basic DOM interaction',
	'Python Basic': 'Python programming basics including syntax, data structures, control flow, and introductory algorithms',
	'CSS': 'CSS fundamentals including selectors, box model, flexbox, grid, responsive design, and modern layout techniques',
	'SQL Basic': 'SQL fundamentals including SELECT queries, JOINs, aggregations, filtering, and database design basics',
	'Programming in C': 'C programming fundamentals including pointers, memory management, data structures, and low-level programming concepts',
	'Programming for Everybody': 'universal programming concepts using Python, designed for beginners with no prior coding experience',
	'Crash Course On Python': 'Python fundamentals, data types, functions, file handling, and practical programming techniques for beginners',
	'Python for Data Science': 'data science workflows using Python, pandas, NumPy, data visualization, and statistical analysis',
	'Python Development': 'advanced Python development including frameworks, REST APIs, database integration, and production deployment',
	'Programming Fundamental In C': 'C programming basics including syntax, control structures, functions, and foundational computer science concepts',
	'Intro to Data Analytics': 'data analytics fundamentals including data collection, cleaning, analysis, and visualization techniques',
	'Data Analytics Automation': 'automating data analytics workflows, ETL processes, and business intelligence pipeline development',
	'Data Analytics Lab': 'hands-on data analytics and business intelligence using real-world datasets, visualization tools, and analytical frameworks',
	'AI Python for Beginners': 'AI concepts using Python for beginners, including basic machine learning, data handling, and model training',
	'AI Infrastructure & Operations': 'AI infrastructure management, MLOps principles, model deployment, and production AI system operations',
	'LLM Deployment & Ethical AI': 'large language model deployment strategies, inference optimization, and ethical AI considerations',
	'AI Workflow: Model Deployment': 'end-to-end AI workflow focusing on model deployment, monitoring, and maintenance in production environments',
	'AI Workflow: Business Priorities': 'aligning AI initiatives with business priorities, stakeholder management, and ROI measurement for AI projects',
	'AI Workflow: Data Analysis': 'data analysis in AI workflows including exploratory data analysis, feature engineering, and hypothesis testing',
	'AI Workflow: Feature Engineering': 'feature engineering techniques, bias detection, data preprocessing, and model improvement strategies',
	'AI Workflow: ML & NLP': 'machine learning and natural language processing workflows, text analysis, and NLP model development',
	'Computer Vision Intro': 'computer vision fundamentals including image processing, object detection, and basic CNN architectures',
	'Deep Learning for CV': 'deep learning for computer vision including convolutional neural networks, transfer learning, and advanced CV techniques',
	'AI & ML Engineering': 'AI and machine learning engineering including model development, training pipelines, and production ML systems',
	};

	const specificSkill = specificSkills[cert.title];
	const skillSection = specificSkill ? ` Specifically, this credential covers ${specificSkill}.` : '';

	const uniqueContent = `${categoryContext}.${skillSection} Soumya applied these validated skills across production web applications, full-stack development projects, and AI/ML initiatives built with React, Next.js, Node.js, and Python. This credential is part of a comprehensive portfolio of 46+ professional certifications spanning cloud computing, cybersecurity, data science, and software development from industry leaders like Google, IBM, AWS, NVIDIA, Microsoft, Meta, HackerRank, Duke University, the University of Michigan, and more.`;

	return `${uniqueContent} As a Full Stack Developer based in Kolkata, India, Soumya integrates these certified competencies into modern web applications — delivering production-grade solutions that combine cutting-edge technology with practical business value.`;
};

export default function CertificatePageClient({ paramsPromise }: Props) {
	const { id } = use(paramsPromise);
	const cert = certificates.find((c) => c.id === id);

	if (!cert) {
	return (
		<section className="min-h-screen flex items-center justify-center bg-background px-4">
		<div className="text-center max-w-lg">
			<h1 className="text-8xl font-heading font-black text-foreground mb-4 transform -rotate-2">404</h1>
			<h2 className="text-3xl font-display font-bold text-foreground mb-6">Certificate Not Found</h2>
			<p className="text-foreground/80 font-sans text-lg font-bold mb-8">
			We couldn't locate the certificate you're looking for.
			</p>
			<Link
			href="/#certificates"
			className="inline-block px-8 py-4 bg-accent text-white font-sans font-bold text-lg border-2 border-accent/30 border-wobbly shadow-hard hover:-rotate-2 transition-all"
			>
			Back to Portfolio
			</Link>
		</div>
		</section>
	);
	}

	const uniqueDescription = generateCertDescription(cert);

	const relatedCerts = certificates
	.filter((c) => c.category === cert.category && c.id !== cert.id)
	.slice(0, 6);

	const relatedProjectNames: Record<string, string[]> = {
	google: ['CORTEX', 'NEXUSOPS'],
	ibm: ['CORTEX', 'NEETI AI'],
	microsoft: ['NEXUSOPS', 'CORTEX'],
	meta: ['CORTEX', 'NEETI AI'],
	nvidia: ['DRISHTI AI', 'NEETI AI'],
	hackerrank: ['SHIPORDIE', 'CORTEX'],
	aws: ['NEXUSOPS', 'HEALTHTRACK+'],
	universities: ['SHIPORDIE', 'CORTEX'],
	};

	const projectNames = relatedProjectNames[cert.category] || ['SHIPORDIE', 'DRISHTI AI'];

	const projectMap: Record<string, { desc: string; href: string }> = {
	'SHIPORDIE': { desc: 'Multi-agent SaaS validation platform using CrewAI & LangGraph', href: '/#projects' },
	'DRISHTI AI': { desc: 'AI network security scanner with attack path visualization', href: '/#projects' },
	'CORTEX': { desc: 'AI finance tracker with NLP, Pomodoro timers, and botanical UI', href: '/#projects' },
	'NEETI AI': { desc: 'AI recruitment platform with WebRTC video and collaborative IDE', href: '/#projects' },
	'PHYGITAL TRACE': { desc: 'Blockchain supply chain ledger with NFC verification', href: '/#projects' },
	'NEXUSOPS': { desc: 'CI/CD orchestration platform with Kubernetes, Docker, and Ansible', href: '/#projects' },
	'HEALTHTRACK+': { desc: 'Medical record platform with biometric tracking and HIPAA compliance', href: '/#projects' },
	};

	const jsonLd = {
	'@context': 'https://schema.org',
	'@type': 'EducationalOccupationalCredential',
	name: cert.title,
	credentialCategory: 'certificate',
	recognizedBy: {
		'@type': 'Organization',
		name: cert.issuer,
	},
	dateCreated: cert.date,
	url: `https://chksoumya.in/certificates/${cert.id}`,
	identifier: cert.link,
	description: uniqueDescription,
	validIn: {
		'@type': 'Country',
		name: 'India',
	},
	about: {
		'@type': 'Person',
		name: 'Soumya Chakraborty',
		url: 'https://chksoumya.in/',
	},
	};

	const breadcrumbLd = {
	'@context': 'https://schema.org',
	'@type': 'BreadcrumbList',
	itemListElement: [
		{ '@type': 'ListItem', position: 1, name: 'Home', item: 'https://chksoumya.in/' },
		{ '@type': 'ListItem', position: 2, name: 'Certificates', item: 'https://chksoumya.in/#certificates' },
		{ '@type': 'ListItem', position: 3, name: categoryLabel(cert.category), item: `https://chksoumya.in/certificates/${cert.category}` },
		{ '@type': 'ListItem', position: 4, name: cert.title, item: `https://chksoumya.in/certificates/${cert.id}` },
	],
	};

	return (
		<section className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-background">
		<script
			type="application/ld+json"
			dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
		/>
		<script
			type="application/ld+json"
			dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
		/>

		<div className="max-w-4xl mx-auto relative z-10">
		{/* Breadcrumb */}
		<nav aria-label="Breadcrumb" className="mb-8 text-sm font-sans font-bold text-foreground/70">
			<ol className="flex flex-wrap items-center gap-1">
			<li><Link href="/" className="hover:text-accent underline decoration-wavy">Home</Link></li>
			<li aria-hidden="true">›</li>
			<li><Link href="/#certificates" className="hover:text-accent underline decoration-wavy">Certificates</Link></li>
			<li aria-hidden="true">›</li>
			<li><Link href={`/certificates/${cert.category}`} className="hover:text-accent underline decoration-wavy">{categoryLabel(cert.category)}</Link></li>
			<li aria-hidden="true">›</li>
			<li className="text-foreground truncate max-w-[14rem] sm:max-w-xs" aria-current="page">{cert.title}</li>
			</ol>
		</nav>

		{/* Back links */}
		<Link
		href="/"
		className="inline-flex items-center text-foreground font-sans font-bold hover:text-accent transition-colors mb-4 group bg-elevated border-2 border-accent/30 border-wobbly px-4 py-2 shadow-hard transform -rotate-1 hover:rotate-0"
		>
		<ArrowLeft size={20} className="mr-2 group-hover:-translate-x-1 transition-transform" strokeWidth={2.5} />
		Back to Portfolio Homepage
		</Link>
		<Link
		href={`/certificates/${cert.category}`}
		className="inline-flex items-center text-foreground font-sans font-bold hover:text-accent transition-colors mb-8 ml-4 group"
		>
		<ArrowLeft size={16} className="mr-1 group-hover:-translate-x-1 transition-transform" strokeWidth={2.5} />
		All {categoryLabel(cert.category)} Certificates
		</Link>

		{/* Main card */}
		<motion.article
		initial={{ opacity: 0, y: 20 }}
		animate={{ opacity: 1, y: 0 }}
		transition={{ duration: 0.6 }}
		>
		<Card decoration="tape" className="bg-elevated border-2 border-accent/30 border-wobbly p-6 md:p-10 shadow-hard-lg">
		<header className="mb-8">
			<div className="flex items-center gap-2 mb-4">
			<div className="p-2 bg-elevated border-2 border-accent/30 border-wobbly text-foreground shadow-hard transform -rotate-3">
				<Award size={28} strokeWidth={2.5} />
			</div>
			<span className="inline-block px-3 py-1 bg-accent/10 border-2 border-accent/30 border-wobbly-sm text-foreground text-xs font-bold tracking-wide uppercase">
				Verified Certificate
			</span>
			</div>

			<h1 className="text-3xl sm:text-4xl md:text-5xl font-display font-black text-foreground mb-4 leading-tight">
			{cert.title}
			</h1>

			<p className="text-foreground/80 font-sans text-lg sm:text-xl font-bold">
			Issued by <span className="text-accent">{cert.issuer}</span> in <span className="text-accent">{cert.date}</span>
			</p>
		</header>

		<div className="prose prose-lg max-w-none text-foreground/90 font-sans text-base sm:text-lg leading-relaxed mb-8 space-y-4">
			<p>{uniqueDescription}</p>
		</div>

		<div className="flex flex-col sm:flex-row gap-4 mb-8">
			<a
			href={cert.link}
			target="_blank"
			rel="noopener noreferrer"
			className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-accent hover:bg-accent text-white hover:text-white border-2 border-accent/30 border-wobbly font-sans font-extrabold text-base shadow-hard active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-all"
			>
			<ExternalLink size={18} strokeWidth={2.5} />
			<span>View Certificate PDF</span>
			</a>
			<Link
			href={`/certificates/${cert.category}`}
			className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-elevated hover:bg-accent text-foreground hover:text-white border-2 border-accent/30 border-wobbly font-sans font-extrabold text-base shadow-hard active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-all"
			>
			<Award size={18} strokeWidth={2.5} />
			<span>More {categoryLabel(cert.category)} Certificates</span>
			</Link>
		</div>

		{/* Trust signals */}
		<div className="border-t-2 border-dashed border-accent/20 pt-6 grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm font-sans font-bold text-foreground/70">
			<div className="flex items-center gap-2">
			<CheckCircle2 size={18} className="text-green-600 shrink-0" />
			<span>Issued by {cert.issuer}</span>
			</div>
			<div className="flex items-center gap-2">
			<CheckCircle2 size={18} className="text-green-600 shrink-0" />
			<span>Year: {cert.date}</span>
			</div>
			<div className="flex items-center gap-2">
			<CheckCircle2 size={18} className="text-green-600 shrink-0" />
			<span>Verified PDF available</span>
			</div>
		</div>
		</Card>
		</motion.article>

		{/* Related certificates in same category */}
		{relatedCerts.length > 0 && (
		<section className="mt-16" aria-labelledby="related-heading">
			<h2 id="related-heading" className="text-2xl sm:text-3xl font-display font-black text-foreground mb-6 inline-block border-b-4 border-accent border-dashed">
			More {categoryLabel(cert.category)} Certificates
			</h2>
			<ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 list-none p-0">
			{relatedCerts.map((r) => (
				<li key={r.id}>
				<Link
					href={`/certificates/${r.id}`}
					className="block p-4 bg-elevated border-2 border-accent/30 border-wobbly hover:-rotate-1 transition-transform shadow-hard-sm hover:shadow-hard"
				>
					<h3 className="font-display font-bold text-foreground text-lg leading-snug mb-1">{r.title}</h3>
					<p className="text-sm text-foreground/70 font-sans">{r.issuer} · {r.date}</p>
				</Link>
				</li>
			))}
			</ul>
		</section>
		)}

		{/* Related projects section for internal linking */}
		<section className="mt-16" aria-labelledby="related-projects-heading">
		<h2 id="related-projects-heading" className="text-2xl sm:text-3xl font-display font-black text-foreground mb-6 inline-block border-b-4 border-accent border-dashed">
			Related Portfolio Projects
		</h2>
		<p className="text-foreground/80 font-sans text-lg mb-6">
			These projects demonstrate practical application of the skills validated by this {cert.issuer} certificate:
		</p>
		<ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 list-none p-0">
			{projectNames.map((projectName) => {
			const project = projectMap[projectName];
			if (!project) return null;
			return (
				<li key={projectName}>
				<Link
					href={project.href}
					className="block p-4 bg-elevated border-2 border-accent/30 border-wobbly hover:-rotate-1 transition-transform shadow-hard-sm hover:shadow-hard"
				>
					<h3 className="font-display font-bold text-foreground text-lg leading-snug mb-1">{projectName}</h3>
					<p className="text-sm text-foreground/70 font-sans">{project.desc}</p>
				</Link>
				</li>
			);
			})}
		</ul>
		</section>

		{/* Footer note */}
		<footer className="mt-16 pt-8 border-t-2 border-dashed border-accent/20 text-center">
		<p className="text-foreground/70 font-sans text-sm mb-4">
			Soumya Chakraborty is a Full Stack Developer and AI/ML Engineer from Kolkata, India, with 46+ professional certifications from Google, IBM, AWS, NVIDIA, Microsoft, Meta, HackerRank, and top universities. His work spans cloud-native full-stack applications, AI/ML systems, cybersecurity tools, and data platforms. Explore{' '}
			<Link href="/#projects" className="text-accent font-bold underline decoration-wavy">featured projects</Link>,{' '}
			<Link href="/#experience" className="text-accent font-bold underline decoration-wavy">work experience</Link>,{' '}
			<Link href="/#hackathons" className="text-accent font-bold underline decoration-wavy">hackathons</Link>, and{' '}
			<Link href="/#skills" className="text-accent font-bold underline decoration-wavy">technical skills</Link> on the portfolio.
		</p>
		<p className="text-foreground/70 font-sans text-sm">
			Built with React, Next.js, Node.js, Python, and modern cloud tools. View the{' '}
			<Link href="https://github.com/soumyachk101" className="text-accent font-bold underline decoration-wavy" target="_blank" rel="noopener noreferrer">GitHub profile</Link>{' '}
			for source code repositories and open-source contributions.
		</p>
		</footer>
		</div>
		</section>
	);
}
