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

export default function CertificatePageClient({ paramsPromise }: Props) {
    const { id } = use(paramsPromise);
    const cert = certificates.find((c) => c.id === id);

    if (!cert) {
        return (
            <section className="min-h-screen flex items-center justify-center bg-background px-4">
                <div className="text-center max-w-lg">
                    <h1 className="text-8xl font-heading font-black text-pencil mb-4 transform -rotate-2">404</h1>
                    <h2 className="text-3xl font-display font-bold text-pencil mb-6">Certificate Not Found</h2>
                    <p className="text-pencil/80 font-sans text-lg font-bold mb-8">
                        We couldn't locate the certificate you're looking for.
                    </p>
                    <Link
                        href="/#certificates"
                        className="inline-block px-8 py-4 bg-accent text-white font-sans font-bold text-lg border-2 border-pencil border-wobbly shadow-hard hover:-rotate-2 transition-all"
                    >
                        Back to Portfolio
                    </Link>
                </div>
            </section>
        );
    }

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
                <nav aria-label="Breadcrumb" className="mb-8 text-sm font-sans font-bold text-pencil/70">
                    <ol className="flex flex-wrap items-center gap-1">
                        <li><Link href="/" className="hover:text-accent underline decoration-wavy">Home</Link></li>
                        <li aria-hidden="true">›</li>
                        <li><Link href="/#certificates" className="hover:text-accent underline decoration-wavy">Certificates</Link></li>
                        <li aria-hidden="true">›</li>
                        <li><Link href={`/certificates/${cert.category}`} className="hover:text-accent underline decoration-wavy">{categoryLabel(cert.category)}</Link></li>
                        <li aria-hidden="true">›</li>
                        <li className="text-pencil truncate max-w-[14rem] sm:max-w-xs" aria-current="page">{cert.title}</li>
                    </ol>
                </nav>

                {/* Back link */}
                <Link
                    href={`/certificates/${cert.category}`}
                    className="inline-flex items-center text-pencil font-sans font-bold hover:text-accent transition-colors mb-8 group bg-white border-2 border-pencil border-wobbly px-4 py-2 shadow-hard transform -rotate-1 hover:rotate-0"
                >
                    <ArrowLeft size={20} className="mr-2 group-hover:-translate-x-1 transition-transform" strokeWidth={2.5} />
                    Back to {categoryLabel(cert.category)} Certificates
                </Link>

                {/* Main card */}
                <motion.article
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <Card decoration="tape" className="bg-white border-2 border-pencil border-wobbly p-6 md:p-10 shadow-hard-lg">
                        <header className="mb-8">
                            <div className="flex items-center gap-2 mb-4">
                                <div className="p-2 bg-white border-2 border-pencil border-wobbly text-pencil shadow-[2px_2px_0px_0px_#2d2d2d] transform -rotate-3">
                                    <Award size={28} strokeWidth={2.5} />
                                </div>
                                <span className="inline-block px-3 py-1 bg-post-it border-2 border-pencil border-wobbly-sm text-pencil text-xs font-bold tracking-wide uppercase">
                                    Verified Certificate
                                </span>
                            </div>

                            <h1 className="text-3xl sm:text-4xl md:text-5xl font-display font-black text-pencil mb-4 leading-tight">
                                {cert.title}
                            </h1>

                            <p className="text-pencil/80 font-sans text-lg sm:text-xl font-bold">
                                Issued by <span className="text-accent">{cert.issuer}</span> in <span className="text-accent">{cert.date}</span>
                            </p>
                        </header>

                        <div className="prose prose-lg max-w-none text-pencil/90 font-sans text-base sm:text-lg leading-relaxed mb-8 space-y-4">
                            <p>
                                This certificate, <strong>{cert.title}</strong>, was awarded to <strong>Soumya Chakraborty</strong> by <strong>{cert.issuer}</strong> in <strong>{cert.date}</strong>. It is part of a professional development portfolio spanning <strong>41 industry-recognized certificates</strong> from Google, IBM, AWS, NVIDIA, Microsoft, Meta, HackerRank, Duke University, the University of Michigan, and more.
                            </p>
                            <p>
                                The credential validates hands-on competency in the relevant domain and complements Soumya's broader work as a <strong>Full Stack Developer</strong> building production web applications with React, Next.js, Node.js, and Python.
                            </p>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 mb-8">
                            <a
                                href={cert.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-accent hover:bg-pencil text-paper hover:text-paper border-2 border-pencil border-wobbly font-sans font-extrabold text-base shadow-hard active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-all"
                            >
                                <ExternalLink size={18} strokeWidth={2.5} />
                                <span>View Certificate PDF</span>
                            </a>
                            <Link
                                href={`/certificates/${cert.category}`}
                                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white hover:bg-pencil text-pencil hover:text-paper border-2 border-pencil border-wobbly font-sans font-extrabold text-base shadow-hard active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-all"
                            >
                                <Award size={18} strokeWidth={2.5} />
                                <span>More {categoryLabel(cert.category)} Certificates</span>
                            </Link>
                        </div>

                        {/* Trust signals */}
                        <div className="border-t-2 border-dashed border-pencil/20 pt-6 grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm font-sans font-bold text-pencil/70">
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
                {(() => {
                    const related = certificates.filter((c) => c.category === cert.category && c.id !== cert.id).slice(0, 6);
                    if (related.length === 0) return null;
                    return (
                        <section className="mt-16" aria-labelledby="related-heading">
                            <h2 id="related-heading" className="text-2xl sm:text-3xl font-display font-black text-pencil mb-6 inline-block border-b-4 border-accent border-dashed">
                                More {categoryLabel(cert.category)} Certificates
                            </h2>
                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 list-none p-0">
                                {related.map((r) => (
                                    <li key={r.id}>
                                        <Link
                                            href={`/certificates/${r.id}`}
                                            className="block p-4 bg-white border-2 border-pencil border-wobbly hover:-rotate-1 transition-transform shadow-hard-sm hover:shadow-hard"
                                        >
                                            <h3 className="font-display font-bold text-pencil text-lg leading-snug mb-1">{r.title}</h3>
                                            <p className="text-sm text-pencil/70 font-sans">{r.issuer} · {r.date}</p>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </section>
                    );
                })()}

                {/* Footer note */}
                <footer className="mt-16 pt-8 border-t-2 border-dashed border-pencil/20 text-center">
                    <p className="text-pencil/70 font-sans text-sm">
                        See all <Link href="/#certificates" className="text-accent font-bold underline decoration-wavy">46 certificates</Link> on the portfolio, or browse by <Link href="/#projects" className="text-accent font-bold underline decoration-wavy">projects</Link>, <Link href="/#experience" className="text-accent font-bold underline decoration-wavy">experience</Link>, and <Link href="/#hackathons" className="text-accent font-bold underline decoration-wavy">hackathons</Link>.
                    </p>
                </footer>
            </div>
        </section>
    );
}
