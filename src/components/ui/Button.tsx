import React from 'react';
import { twMerge } from 'tailwind-merge';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  className?: string;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', children, ...props }, ref) => {
    const baseStyles = "relative inline-flex items-center justify-center px-8 py-3 text-lg md:text-xl font-sans font-bold transition-all duration-100 border-[3px] border-accent/30 border-wobbly shadow-hard hover:shadow-hard-hover hover:translate-x-[2px] hover:translate-y-[2px] active:shadow-hard-active active:translate-x-[4px] active:translate-y-[4px] focus:outline-none focus:ring-2 focus:ring-secondary/20";
    
    const variants = {
      primary: "bg-paper text-foreground hover:bg-accent hover:text-white",
      secondary: "bg-muted text-foreground hover:bg-secondary hover:text-white"
    };

    return (
      <button
        ref={ref}
        className={twMerge(baseStyles, variants[variant], className)}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';
