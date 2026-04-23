import { Component, type ErrorInfo, type ReactNode } from 'react';

interface Props {
    children: ReactNode;
}

interface State {
    hasError: boolean;
    error: Error | null;
}

class ErrorBoundary extends Component<Props, State> {
    public state: State = {
        hasError: false,
        error: null,
    };

    public static getDerivedStateFromError(error: Error): State {
        return { hasError: true, error };
    }

    public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        console.error('Uncaught error:', error, errorInfo);
    }

    public render() {
        if (this.state.hasError) {
            return (
                <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-slate-950 text-white p-4">
                    <div className="max-w-md w-full bg-slate-900 p-6 rounded-lg border border-red-500/50 shadow-xl">
                        <h1 className="text-2xl font-bold text-red-500 mb-4">Something went wrong</h1>
                        <p className="mb-4 text-gray-300">The application encountered an error and could not render.</p>
                        <pre className="bg-slate-950 p-4 rounded overflow-auto text-xs text-red-300 border border-red-900/30 max-h-60">
                            {this.state.error?.toString()}
                        </pre>
                        <button
                            className="mt-6 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded transition-colors w-full"
                            onClick={() => window.location.reload()}
                        >
                            Reload Page
                        </button>
                    </div>
                </div>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
