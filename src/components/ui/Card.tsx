import React from 'react';
import { twMerge } from 'tailwind-merge';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  decoration?: 'tape' | 'tack' | 'none';
  variant?: 'default' | 'post-it' | 'muted';
  className?: string;
}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, decoration = 'none', variant = 'default', children, ...props }, ref) => {
    // We add a subtle rotation on hover for that playful interaction
    const baseStyles = "relative border-2 border-pencil border-wobbly-alt shadow-[3px_3px_0px_0px_rgba(45,45,45,0.1)] p-6 transition-transform duration-300 hover:-rotate-1";
    
    const variants = {
      default: "bg-white",
      'post-it': "bg-post-it",
      muted: "bg-muted"
    };

    return (
      <div
        ref={ref}
        className={twMerge(baseStyles, variants[variant], className)}
        {...props}
      >
        {/* Hand-drawn tape decoration */}
        {decoration === 'tape' && (
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-16 h-6 bg-pencil/10 backdrop-blur-sm -rotate-2 z-10" />
        )}
        {/* Thumbtack decoration */}
        {decoration === 'tack' && (
          <div className="absolute top-2 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-accent border-2 border-pencil shadow-[1px_1px_0px_0px_#2d2d2d] z-10" />
        )}
        <div className="relative z-0">
          {children}
        </div>
      </div>
    );
  }
);

Card.displayName = 'Card';
