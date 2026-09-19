/** @type {import('tailwindcss').Config} */
export default {
 content: [
 "./index.html",
 "./src/**/*.{js,ts,jsx,tsx}",
 ],
 theme: {
 extend: {
 colors: {
 base: "#0a0a0a",
 surface: "#141414",
 elevated: "#1a1a1a",
 border: "#2a2a2a",
 muted: "#666666",
 subtle: "#888888",
 foreground: "#f0f0f0",
 accent: {
 DEFAULT: "#e63946",
 hover: "#ff4757",
 muted: "rgba(230, 57, 70, 0.15)",
 },
 gold: {
 DEFAULT: "#d4a574",
 muted: "rgba(212, 165, 116, 0.15)",
 },
 glass: {
 DEFAULT: "rgba(255, 255, 255, 0.03)",
 hover: "rgba(255, 255, 255, 0.06)",
 border: "rgba(255, 255, 255, 0.08)",
 },
   pencil: "#f0f0f0",
  paper: "#fdfbf7",
  secondary: {
    DEFAULT: "#d4a574",
    hover: "#e0b88a",
  },
  postIt: "#fff9c4",
 },
 fontFamily: {
 display: ['var(--font-instrument-serif)', 'Instrument Serif', 'Georgia', 'serif'],
 sans: ['var(--font-dm-sans)', 'DM Sans', 'system-ui', 'sans-serif'],
 mono: ['var(--font-jetbrains-mono)', 'JetBrains Mono', 'monospace'],
 },
 boxShadow: {
 'glow': '0 0 40px rgba(230, 57, 70, 0.3)',
 'glow-lg': '0 0 80px rgba(230, 57, 70, 0.4)',
 'glass': '0 8px 32px rgba(0, 0, 0, 0.4)',
 'card': '0 4px 24px rgba(0, 0, 0, 0.3)',
 'card-hover': '0 8px 40px rgba(0, 0, 0, 0.5)',
 },
 borderRadius: {
 'sm': '4px',
 'md': '8px',
 'lg': '16px',
 'xl': '24px',
 },
 animation: {
 'float': 'float 6s ease-in-out infinite',
 'glow-pulse': 'glow-pulse 3s ease-in-out infinite',
 'gradient-shift': 'gradient-shift 8s ease infinite',
 'reveal-up': 'reveal-up 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
 'reveal-scale': 'reveal-scale 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards',
 },
 keyframes: {
 float: {
 '0%, 100%': { transform: 'translateY(0px)' },
 '50%': { transform: 'translateY(-20px)' },
 },
 'glow-pulse': {
 '0%, 100%': { opacity: '0.5' },
 '50%': { opacity: '1' },
 },
 'gradient-shift': {
 '0%, 100%': { backgroundPosition: '0% 50%' },
 '50%': { backgroundPosition: '100% 50%' },
 },
 'reveal-up': {
 '0%': { opacity: '0', transform: 'translateY(30px)' },
 '100%': { opacity: '1', transform: 'translateY(0)' },
 },
 'reveal-scale': {
 '0%': { opacity: '0', transform: 'scale(0.95)' },
 '100%': { opacity: '1', transform: 'scale(1)' },
 },
 },
 },
 },
 plugins: [],
}
