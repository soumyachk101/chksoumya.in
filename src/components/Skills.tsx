"use client";

import { useRef } from 'react';
import { motion } from 'framer-motion';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
	Code2, Database, Layout, Terminal, Cloud, PenTool, Cpu, Globe, Brain,
	MessageSquare, Puzzle, Users, Clock, Shuffle, Scale, Eye, Heart, Sparkles,
} from 'lucide-react';
import { Card } from './ui/Card';
import { useReveal } from '../hooks/useReveal';

gsap.registerPlugin(ScrollTrigger);

interface Skill {
	name: string;
	category: string;
	tagline: string;
	bg: string;
	border: string;
	text: string;
	icon: React.ReactNode;
}

const categories = [
	{ id: 'languages', title: 'Languages', icon: <Code2 className="text-accent" size={26} strokeWidth={2.5} /> },
	{ id: 'frameworks', title: 'Frameworks & Libraries', icon: <Layout className="text-accent" size={26} strokeWidth={2.5} /> },
	{ id: 'tools', title: 'Tools & Platforms', icon: <Terminal className="text-accent" size={26} strokeWidth={2.5} /> },
];

const skills: Skill[] = [
	{ name: "Python", category: "languages", tagline: "Backend APIs, automation & ML with Django and FastAPI", bg: "bg-accent/10", border: "border-accent/30", text: "text-accent", icon: <Brain size={18} strokeWidth={2.5} /> },
	{ name: "JavaScript", category: "languages", tagline: "ES6+, async patterns & the core of my frontend work", bg: "bg-gold/10", border: "border-gold/30", text: "text-gold", icon: <Code2 size={18} strokeWidth={2.5} /> },
	{ name: "TypeScript", category: "languages", tagline: "Strict typing for scalable, refactorable codebases", bg: "bg-accent/10", border: "border-accent/30", text: "text-accent", icon: <Code2 size={18} strokeWidth={2.5} /> },
	{ name: "SQL", category: "languages", tagline: "Schema design, complex joins & query optimization", bg: "bg-elevated", border: "border-border", text: "text-foreground", icon: <Database size={18} strokeWidth={2.5} /> },
	{ name: "C", category: "languages", tagline: "Memory management & systems programming fundamentals", bg: "bg-gold/10", border: "border-gold/30", text: "text-gold", icon: <Cpu size={18} strokeWidth={2.5} /> },
	{ name: "React.js", category: "frameworks", tagline: "Component architecture & state for production UIs", bg: "bg-accent/10", border: "border-accent/30", text: "text-accent", icon: <Globe size={18} strokeWidth={2.5} /> },
	{ name: "Next.js", category: "frameworks", tagline: "SSR, static generation & SEO-first apps — this site included", bg: "bg-elevated", border: "border-border", text: "text-foreground", icon: <Globe size={18} strokeWidth={2.5} /> },
	{ name: "Node.js", category: "frameworks", tagline: "REST APIs, middleware & scalable backend services", bg: "bg-gold/10", border: "border-gold/30", text: "text-gold", icon: <Terminal size={18} strokeWidth={2.5} /> },
	{ name: "Tailwind CSS", category: "frameworks", tagline: "Utility-first styling for fast, consistent interfaces", bg: "bg-accent/10", border: "border-accent/30", text: "text-accent", icon: <PenTool size={18} strokeWidth={2.5} /> },
	{ name: "Framer Motion", category: "frameworks", tagline: "Production-grade animation & micro-interactions", bg: "bg-elevated", border: "border-border", text: "text-foreground", icon: <Layout size={18} strokeWidth={2.5} /> },
	{ name: "Three.js", category: "frameworks", tagline: "Interactive 3D scenes & WebGL in the browser", bg: "bg-gold/10", border: "border-gold/30", text: "text-gold", icon: <Cpu size={18} strokeWidth={2.5} /> },
	{ name: "Git & GitHub", category: "tools", tagline: "Branching workflows, clean history & code review", bg: "bg-elevated", border: "border-border", text: "text-foreground", icon: <Terminal size={18} strokeWidth={2.5} /> },
	{ name: "AWS", category: "tools", tagline: "EC2, S3 & serverless deployment", bg: "bg-accent/10", border: "border-accent/30", text: "text-accent", icon: <Cloud size={18} strokeWidth={2.5} /> },
	{ name: "VS Code", category: "tools", tagline: "Tuned editor & repeatable dev workflow", bg: "bg-elevated", border: "border-border", text: "text-foreground", icon: <Code2 size={18} strokeWidth={2.5} /> },
	{ name: "Figma", category: "tools", tagline: "Wireframes, spacing & type scales before code", bg: "bg-gold/10", border: "border-gold/30", text: "text-gold", icon: <PenTool size={18} strokeWidth={2.5} /> },
];

const strengths = [
	{ name: "Communication", icon: <MessageSquare size={20} strokeWidth={2.5} />, desc: "Explaining complex technical decisions clearly to both engineers and non-technical stakeholders." },
	{ name: "Problem Solving", icon: <Puzzle size={20} strokeWidth={2.5} />, desc: "Structured debugging and root-cause analysis instead of quick patches." },
	{ name: "Collaboration", icon: <Users size={20} strokeWidth={2.5} />, desc: "Constructive code reviews and dependable async teamwork across hackathons and client projects." },
	{ name: "Time Management", icon: <Clock size={20} strokeWidth={2.5} />, desc: "Scoping realistically and prioritizing ruthlessly to ship on schedule." },
	{ name: "Adaptability", icon: <Shuffle size={20} strokeWidth={2.5} />, desc: "Moving comfortably across the stack and picking up new tools as projects demand." },
	{ name: "Critical Thinking", icon: <Scale size={20} strokeWidth={2.5} />, desc: "Weighing trade-offs to keep solutions simple, maintainable, and right-sized." },
	{ name: "Attention to Detail", icon: <Eye size={20} strokeWidth={2.5} />, desc: "Catching edge cases, inconsistencies, and accessibility gaps before they reach production." },
	{ name: "User Empathy", icon: <Heart size={20} strokeWidth={2.5} />, desc: "User-first thinking that shapes intuitive, accessible interfaces." },
	{ name: "Creativity", icon: <Sparkles size={20} strokeWidth={2.5} />, desc: "Turning standard layouts into distinctive, memorable experiences — like this site." },
];

const Skills = () => {
	const sectionRef = useRef<HTMLElement>(null);
	const techRef = useRef<HTMLDivElement>(null);
	const strengthsRef = useRef<HTMLDivElement>(null);
	const headingRef = useRef<HTMLHeadingElement>(null);
	const revealRef = useReveal();

	useGSAP(() => {
		if (headingRef.current) {
			gsap.fromTo(headingRef.current, { opacity: 0, y: 30 }, {
				opacity: 1,
				y: 0,
				duration: 0.8,
				ease: 'power3.out',
				scrollTrigger: {
					trigger: headingRef.current,
					start: 'top 85%',
				},
			});
		}

		if (techRef.current) {
			gsap.fromTo(
				techRef.current.children,
				{ opacity: 0, y: 24, scale: 0.96 },
				{
					opacity: 1,
					y: 0,
					scale: 1,
					duration: 0.55,
					stagger: 0.04,
					ease: 'power2.out',
					scrollTrigger: {
						trigger: techRef.current,
						start: 'top 82%',
					},
				}
			);
		}

		if (strengthsRef.current) {
			gsap.fromTo(
				strengthsRef.current.children,
				{ opacity: 0, y: 20 },
				{
					opacity: 1,
					y: 0,
					duration: 0.45,
					stagger: 0.05,
					ease: 'power2.out',
					scrollTrigger: {
						trigger: strengthsRef.current,
						start: 'top 85%',
					},
				}
			);
		}
	}, { scope: sectionRef });

	return (
		<section id="skills" ref={sectionRef} className="py-20 relative overflow-hidden">
			{/* Background elements */}
			<div className="absolute top-20 right-10 opacity-10 pointer-events-none" aria-hidden="true">
				<svg width="200" height="200" viewBox="0 0 200 200" fill="none">
					<path d="M20,100 Q60,20 100,100 T180,100" stroke="#2d2d2d" strokeWidth="3" fill="none" className="path-draw" />
				</svg>
			</div>

			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
				<div className="text-center md:text-left mb-16">
					<h2 ref={headingRef} className="text-4xl md:text-6xl font-display font-bold mb-4 text-foreground transform -rotate-1 inline-block relative">
						Skills & Expertise
						<svg className="absolute -bottom-4 left-0 w-full h-4" viewBox="0 0 100 20" preserveAspectRatio="none">
							<path d="M0,10 Q50,20 100,10 M10,15 Q50,5 90,15" stroke="#e85d04" strokeWidth="3" fill="none" className="path-draw" />
						</svg>
					</h2>
					<p className="text-foreground/70 font-sans font-bold text-lg mt-4 max-w-2xl">
						The stack I work with daily, and how each piece fits into what I build.
					</p>
				</div>

				{/* Technical skills — three category columns, everything readable at a glance */}
				<div ref={techRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24 items-start">
					{categories.map((cat, catIdx) => (
						<Card
							key={cat.id}
							decoration={catIdx % 2 === 0 ? 'tape' : 'tack'}
							className={`bg-surface border-2 border-accent/30 border-wobbly p-6 ${catIdx % 2 === 1 ? 'rotate-[0.4deg]' : '-rotate-[0.4deg]'}`}
						>
							<div className="flex items-center gap-3 mb-5 pb-3 border-b-2 border-dashed border-accent/20">
								{cat.icon}
								<h3 className="text-2xl font-display font-bold text-foreground">{cat.title}</h3>
							</div>

							<ul className="space-y-4">
								{skills.filter(s => s.category === cat.id).map((skill, i) => (
									<motion.li
										key={skill.name}
										initial={{ opacity: 0, x: -12 }}
										whileInView={{ opacity: 1, x: 0 }}
										viewport={{ once: true }}
										transition={{ duration: 0.35, delay: i * 0.05 }}
										className="flex items-start gap-3 group"
									>
										<span className={`p-2 border-2 ${skill.bg} ${skill.border} ${skill.text} border-wobbly-sm shadow-hard-sm flex-shrink-0 transition-transform group-hover:-rotate-6 group-hover:scale-110`}>
											{skill.icon}
										</span>
										<div className="min-w-0">
											<h4 className="text-lg font-sans font-bold text-foreground leading-tight">{skill.name}</h4>
											<p className="text-sm font-sans font-medium text-foreground/70 leading-snug">{skill.tagline}</p>
										</div>
									</motion.li>
								))}
							</ul>
						</Card>
					))}
				</div>

				{/* Core Strengths */}
				<div ref={strengthsRef} className="max-w-6xl mx-auto">
					<div className="text-center mb-10">
						<h3 className="text-3xl md:text-4xl font-display font-bold text-foreground inline-block relative -rotate-1">
							Beyond the Code
							<svg className="absolute -bottom-3 left-0 w-full h-3" viewBox="0 0 100 10" preserveAspectRatio="none">
								<path d="M0,5 Q50,12 100,5" stroke="#dd2c38" strokeWidth="3" fill="none" className="path-draw" />
							</svg>
						</h3>
						<p className="text-foreground/70 font-sans font-bold text-lg mt-4">
							The working habits behind the commits.
						</p>
					</div>

					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
						{strengths.map((s, i) => (
							<motion.div
								key={s.name}
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.4, delay: (i % 3) * 0.08 }}
								className={`bg-surface border-2 border-border border-wobbly-sm shadow-hard p-5 hover:-translate-y-1 hover:shadow-hard-lg transition-all ${i % 3 === 1 ? 'rotate-[0.5deg]' : i % 3 === 2 ? '-rotate-[0.5deg]' : ''}`}
							>
								<div className="flex items-center gap-3 mb-2">
									<span className="p-2 border-2 border-accent/30 rounded-full text-accent bg-elevated shadow-hard-sm flex-shrink-0">
										{s.icon}
									</span>
									<h4 className="text-xl font-display font-bold text-foreground">{s.name}</h4>
								</div>
								<p className="text-foreground/70 font-sans font-medium leading-snug">
									{s.desc}
								</p>
							</motion.div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

export default Skills;
