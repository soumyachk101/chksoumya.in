import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: '404 — Page Not Found | Soumya Chakraborty',
    description: 'The page you are looking for does not exist or has been moved.',
    robots: { index: false, follow: true },
};

export default function NotFound() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-background px-4">
            <div className="text-center max-w-lg">
                <h1 className="text-8xl font-heading font-black text-pencil mb-4 transform -rotate-2">404</h1>
                <div className="relative inline-block mb-8">
                    <h2 className="text-3xl font-display font-bold text-pencil">Page Not Found</h2>
                    <svg className="absolute -bottom-2 left-0 w-full h-3" viewBox="0 0 100 10" preserveAspectRatio="none" aria-hidden="true">
                        <path d="M0,5 Q25,10 50,5 T100,5" stroke="#e85d04" strokeWidth="3" fill="none" />
                    </svg>
                </div>
                <p className="text-pencil/80 font-sans text-lg font-bold mb-8">
                    The page you are looking for does not exist or has been moved.
                </p>
                <Link
                    href="/"
                    className="inline-block px-8 py-4 bg-accent text-white font-sans font-bold text-lg border-2 border-pencil border-wobbly shadow-hard hover:-rotate-2 hover:shadow-[1px_1px_0_0_#2d2d2d] hover:translate-x-[1px] hover:translate-y-[1px] transition-all"
                >
                    Back to Home
                </Link>
            </div>
        </div>
    );
}
