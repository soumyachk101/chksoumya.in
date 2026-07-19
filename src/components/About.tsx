"use client";

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Sparkles, RefreshCw, Send } from 'lucide-react';
import { Card } from './ui/Card';

interface Particle {
    id: number;
    angle: number;
    distance: number;
}

interface ChatMessage {
    sender: 'user' | 'soumya';
    text: string;
}

const About = () => {
    const [level, setLevel] = useState(20);
    const [focusStat, setFocusStat] = useState(94);
    const [speedStat, setSpeedStat] = useState(88);
    const [coffeeCups, setCoffeeCups] = useState(0);
    const [sparkles, setSparkles] = useState<Particle[]>([]);
    
    // Canvas state
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const [isDrawing, setIsDrawing] = useState(false);
    const [canvasColor, setCanvasColor] = useState('#2d2d2d');
    const [brushSize, setBrushSize] = useState(3);
    const lastPos = useRef({ x: 0, y: 0 });

    // Compass state
    const [compassRotation, setCompassRotation] = useState(0);
    const [timeStr, setTimeStr] = useState('');

    // Chatbot state
    const [chatLogs, setChatLogs] = useState<ChatMessage[]>([
        { sender: 'soumya', text: "Hey there! Tap a option below to send me a text!" }
    ]);
    const [isTyping, setIsTyping] = useState(false);
    const chatEndRef = useRef<HTMLDivElement | null>(null);

    // Live Kolkata Time Sync
    useEffect(() => {
        const updateKolkataTime = () => {
            const options = {
                timeZone: 'Asia/Kolkata',
                hour12: true,
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit'
            } as const;
            setTimeStr(new Date().toLocaleTimeString('en-US', options));
        };
        
        updateKolkataTime();
        const interval = setInterval(updateKolkataTime, 1000);
        return () => clearInterval(interval);
    }, []);

    // Auto scroll chat
    useEffect(() => {
        if (chatLogs.length > 1 || isTyping) {
            chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
        }
    }, [chatLogs, isTyping]);

    // Level up animations
    const triggerLevelUp = () => {
        setLevel(prev => prev + 1);
        setFocusStat(prev => Math.min(100, prev + 1));
        setSpeedStat(prev => Math.min(100, prev + 1));
        
        // Spawn 16 circular particles
        const newSparkles = Array.from({ length: 16 }).map((_, idx) => ({
            id: Math.random(),
            angle: (idx * 360) / 16 + (Math.random() * 10 - 5),
            distance: Math.random() * 80 + 50
        }));
        
        setSparkles(newSparkles);
        setTimeout(() => setSparkles([]), 800);
    };

    // Coffee booster
    const drinkCoffee = () => {
        setCoffeeCups(prev => prev + 1);
        setFocusStat(prev => Math.min(100, prev + 3));
        setSpeedStat(prev => Math.min(100, prev + 4));
    };

    // Spin compass
    const spinCompass = () => {
        setCompassRotation(prev => prev + 360 + Math.random() * 360);
    };

    // Canvas drawing helpers
    const getCoordinates = (e: any) => {
        if (!canvasRef.current) return null;
        const rect = canvasRef.current.getBoundingClientRect();
        
        if (e.touches && e.touches.length > 0) {
            return {
                x: e.touches[0].clientX - rect.left,
                y: e.touches[0].clientY - rect.top
            };
        }
        
        return {
            x: e.clientX - rect.left,
            y: e.clientY - rect.top
        };
    };

    const startDrawing = (e: any) => {
        const coords = getCoordinates(e);
        if (!coords) return;
        setIsDrawing(true);
        lastPos.current = coords;
    };

    const draw = (e: any) => {
        if (!isDrawing || !canvasRef.current) return;
        const coords = getCoordinates(e);
        if (!coords) return;

        const ctx = canvasRef.current.getContext('2d');
        if (!ctx) return;

        ctx.beginPath();
        ctx.strokeStyle = canvasColor;
        ctx.lineWidth = brushSize;
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';
        ctx.moveTo(lastPos.current.x, lastPos.current.y);
        ctx.lineTo(coords.x, coords.y);
        ctx.stroke();

        lastPos.current = coords;
    };

    const stopDrawing = () => {
        setIsDrawing(false);
    };

    const clearCanvas = () => {
        if (!canvasRef.current) return;
        const ctx = canvasRef.current.getContext('2d');
        if (!ctx) return;
        ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
    };

    // Chatbot responses
    const handleChatAction = (action: 'hire' | 'joke' | 'highfive') => {
        let userText = "";
        let botText = "";

        if (action === 'hire') {
            userText = "Let's collaborate! Can we hire you?";
            botText = "Access granted! 🚀 Initializing project sync... Feel free to drop a mail at soumyachk1@gmail.com, or drop a text on WhatsApp to chat details!";
        } else if (action === 'joke') {
            userText = "Tell me a programming joke!";
            const jokes = [
                "Why do programmers prefer dark mode? Because light attracts bugs! 🐜",
                "Why do programmers wear glasses? Because they can't C#! 👓",
                "There are 10 types of people in this world: those who understand binary, and those who don't! 💻"
            ];
            botText = jokes[Math.floor(Math.random() * jokes.length)];
        } else {
            userText = "Sending you a digital High Five! 🖐️";
            botText = "High five back! 🖐️ Dev focus synergy level has increased by +25%! Keep exploring the sketchbook!";
        }

        setChatLogs(prev => [...prev, { sender: 'user', text: userText }]);
        setIsTyping(true);

        setTimeout(() => {
            setIsTyping(false);
            setChatLogs(prev => [...prev, { sender: 'soumya', text: botText }]);
        }, 1200);
    };

    return (
        <section id="about" className="py-24 relative bg-background overflow-hidden">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Section Header */}
                <div className="text-center mb-20">
                    <h2 className="text-4xl md:text-6xl font-display font-bold mb-4 text-pencil transform -rotate-1 inline-block relative">
                        Developer's Sketchbook Desk
                        <svg className="absolute -bottom-4 left-0 w-full h-4" viewBox="0 0 100 20" preserveAspectRatio="none">
                            <path d="M0,15 Q50,5 100,15 M10,10 Q50,20 90,10" stroke="#e85d04" strokeWidth="3" fill="none" className="path-draw" />
                        </svg>
                    </h2>
                    <p className="mt-8 text-pencil/80 font-sans text-xl font-bold transform rotate-1">
                        🛠️ Interact with the objects on my desk to inspect stats, text my chatbot, or doodle!
                    </p>
                </div>

                {/* Desk grid */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
                    
                    {/* WIDGET 1: RPG Stats sheet (5 Columns) */}
                    <div className="md:col-span-5 h-[480px] select-none">
                        <Card 
                            decoration="tack" 
                            className="bg-amber-50 border-2 border-pencil border-wobbly p-6 shadow-hard-lg h-full flex flex-col justify-between text-pencil relative"
                        >
                            <div className="absolute top-1 right-2 text-[8px] font-mono opacity-70">dev_status_inspector.sh</div>
                            
                            {/* Level Up Particle Burst */}
                            <AnimatePresence>
                                {sparkles.map((sparkle) => (
                                    <motion.div
                                        key={sparkle.id}
                                        initial={{ x: 0, y: 0, scale: 0, opacity: 1 }}
                                        animate={{ 
                                            x: Math.cos((sparkle.angle * Math.PI) / 180) * sparkle.distance,
                                            y: Math.sin((sparkle.angle * Math.PI) / 180) * sparkle.distance,
                                            scale: [1, 1.2, 0.5],
                                            opacity: 0
                                        }}
                                        exit={{ opacity: 0 }}
                                        transition={{ duration: 0.8, ease: "easeOut" }}
                                        className="absolute left-1/2 top-[120px] text-lg pointer-events-none z-30"
                                    >
                                        ⭐
                                    </motion.div>
                                ))}
                            </AnimatePresence>

                            {/* Stats Header */}
                            <div className="border-b-2 border-dashed border-pencil/20 pb-4">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <h3 className="text-2xl font-display font-black leading-none">Soumya Chakraborty</h3>
                                        <span className="text-xs font-mono text-pencil/70 uppercase tracking-widest mt-1.5 block">Class: Fullstack Wizard</span>
                                    </div>
                                    <button 
                                        onClick={triggerLevelUp}
                                        className="px-3 py-1.5 bg-accent hover:bg-pencil text-paper font-sans font-black text-xs uppercase border-2 border-pencil shadow-hard-sm active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-all cursor-pointer flex items-center gap-1 shrink-0"
                                    >
                                        <span>Level Up</span>
                                        <span className="inline-flex pulse-opacity">
                                            <Sparkles size={12} />
                                        </span>
                                    </button>
                                </div>
                            </div>

                            {/* Core Stats */}
                            <div className="space-y-4 my-4">
                                <div className="flex justify-between items-center text-sm font-sans font-bold">
                                    <span className="uppercase tracking-wide">Wizard Level:</span>
                                    <span className="font-mono text-base text-accent">Lvl {level}</span>
                                </div>
                                <div className="flex justify-between items-center text-sm font-sans font-bold">
                                    <span className="uppercase tracking-wide">Mana Points:</span>
                                    <span className="font-mono text-base text-secondary">95 / 100</span>
                                </div>

                                {/* Focus Slider */}
                                <div className="space-y-1">
                                    <div className="flex justify-between items-baseline text-xs font-sans font-bold">
                                        <span>FOCUS CAPABILITY</span>
                                        <span className="font-mono">{focusStat}%</span>
                                    </div>
                                    <div className="h-3 bg-white border border-pencil rounded overflow-hidden p-0.5">
                                        <div className="h-full bg-accent rounded" style={{ width: `${focusStat}%` }} />
                                    </div>
                                </div>

                                {/* Speed Slider */}
                                <div className="space-y-1">
                                    <div className="flex justify-between items-baseline text-xs font-sans font-bold">
                                        <span>CODING SPEED BUFF</span>
                                        <span className="font-mono">{speedStat}%</span>
                                    </div>
                                    <div className="h-3 bg-white border border-pencil rounded overflow-hidden p-0.5">
                                        <div className="h-full bg-green-500 rounded" style={{ width: `${speedStat}%` }} />
                                    </div>
                                </div>
                            </div>

                            {/* Equipped Items list */}
                            <div className="bg-white/50 border border-pencil border-dashed rounded p-3 text-xs space-y-1">
                                <div className="font-bold border-b border-pencil/20 pb-1 mb-1 uppercase tracking-widest text-[10px] text-pencil/70">Equipped Inventory</div>
                                <div>🛡️ Mechanical Blue-Switch Keyboard (+15% WPM)</div>
                                <div>🎧 Synthwave/Lofi Beats (+10% Focus Duration)</div>
                                <div>🛡️ VS Code Dark Mode (+20% Bug Immunity)</div>
                            </div>
                        </Card>
                    </div>

                    {/* WIDGET 2: Mini Canvas Scrapbook & Coffee Mug (7 Columns) */}
                    <div className="md:col-span-7 space-y-8 select-none">
                        
                        {/* Interactive Scribble Canvas */}
                        <Card decoration="tape" className="bg-white border-2 border-pencil border-wobbly p-6 shadow-hard-lg flex flex-col relative h-[280px] justify-between">
                            <div className="absolute top-1 right-2 text-[8px] font-mono opacity-70">scribble_scratch.canvas</div>
                            
                            <div className="flex justify-between items-center mb-3">
                                <h3 className="text-xl font-display font-black text-pencil border-b border-dashed border-pencil">📝 Mini Doodling Canvas</h3>
                                <button 
                                    onClick={clearCanvas}
                                    className="p-1.5 border border-pencil hover:bg-accent hover:text-white rounded shadow-hard-sm active:translate-x-[1px] active:translate-y-[1px] active:shadow-none transition-all flex items-center justify-center cursor-pointer"
                                    title="Wipe canvas clean"
                                    aria-label="Clear canvas"
                                >
                                    <RefreshCw size={14} />
                                </button>
                            </div>

                            {/* Canvas Element Wrapper */}
                            <div className="border border-dashed border-pencil/40 rounded-lg overflow-hidden bg-slate-50 relative flex-1 cursor-crosshair">
                                <canvas
                                    ref={(canvas) => {
                                        if (canvas) {
                                            canvasRef.current = canvas;
                                            // Handle resizing canvas dynamically without clearing
                                            const dpr = window.devicePixelRatio || 1;
                                            const rect = canvas.getBoundingClientRect();
                                            if (canvas.width !== rect.width * dpr || canvas.height !== rect.height * dpr) {
                                                canvas.width = rect.width;
                                                canvas.height = rect.height;
                                            }
                                        }
                                    }}
                                    onMouseDown={startDrawing}
                                    onMouseMove={draw}
                                    onMouseUp={stopDrawing}
                                    onMouseLeave={stopDrawing}
                                    onTouchStart={startDrawing}
                                    onTouchMove={draw}
                                    onTouchEnd={stopDrawing}
                                    className="absolute inset-0 w-full h-full"
                                />
                            </div>

                            {/* Color Selector & Controls */}
                            <div className="flex justify-between items-center mt-3 pt-3 border-t border-dashed border-pencil/20">
                                <div className="flex gap-2">
                                    <button 
                                        onClick={() => setCanvasColor('#2d2d2d')}
                                        className={`w-6 h-6 rounded-full border border-pencil bg-pencil cursor-pointer transition-transform ${canvasColor === '#2d2d2d' ? 'scale-125 ring-2 ring-accent' : ''}`}
                                        aria-label="Select black pencil color"
                                    />
                                    <button 
                                        onClick={() => setCanvasColor('#e85d04')}
                                        className={`w-6 h-6 rounded-full border border-pencil bg-accent cursor-pointer transition-transform ${canvasColor === '#e85d04' ? 'scale-125 ring-2 ring-accent' : ''}`}
                                        aria-label="Select orange accent color"
                                    />
                                    <button 
                                        onClick={() => setCanvasColor('#22c55e')}
                                        className={`w-6 h-6 rounded-full border border-pencil bg-green-500 cursor-pointer transition-transform ${canvasColor === '#22c55e' ? 'scale-125 ring-2 ring-accent' : ''}`}
                                        aria-label="Select green stabilizer color"
                                    />
                                </div>
                                <div className="flex items-center gap-2 text-xs font-sans font-bold">
                                    <span>Brush size:</span>
                                    <input 
                                        type="range" 
                                        min="1" 
                                        max="10" 
                                        value={brushSize} 
                                        onChange={(e) => setBrushSize(Number(e.target.value))}
                                        className="w-16 accent-accent h-1"
                                        aria-label="Brush size"
                                    />
                                </div>
                            </div>
                        </Card>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 items-start">
                            
                            {/* Coffee Mug widget */}
                            <Card className="bg-[#fff9c4] border-2 border-pencil border-wobbly p-6 shadow-hard flex flex-col justify-between items-center text-center h-[170px]">
                                <div className="absolute top-1 left-2 text-[8px] font-mono opacity-70">caffeine_buffer.bin</div>
                                
                                <div className="relative select-none flex flex-col items-center">
                                    {/* Floating Steam lines */}
                                    <div className="flex gap-1 mb-1.5 opacity-40">
                                        <div className="w-1 h-3 bg-accent rounded-full animate-[bounce_1.5s_infinite]" />
                                        <div className="w-1 h-4 bg-accent rounded-full animate-[bounce_1.2s_infinite_delay-150]" />
                                        <div className="w-1 h-3 bg-accent rounded-full animate-[bounce_1.7s_infinite_delay-300]" />
                                    </div>
                                    <div className="text-3xl filter drop-shadow">☕</div>
                                </div>

                                <div>
                                    <span className="text-xs font-sans font-bold uppercase block text-pencil/70 mb-1">Caffeine intake</span>
                                    <span className="text-sm font-sans font-black block mb-3 text-pencil">{coffeeCups} Cups Consumed</span>
                                </div>

                                <button 
                                    onClick={drinkCoffee}
                                    className="w-full py-1.5 bg-white hover:bg-pencil text-pencil hover:text-paper font-sans font-black text-xs uppercase border-2 border-pencil shadow-hard-sm active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-all cursor-pointer"
                                >
                                    Brew & Drink
                                </button>
                            </Card>

                            {/* Compass & Location Watch */}
                            <Card className="bg-white border-2 border-pencil border-wobbly p-6 shadow-hard flex flex-col justify-between items-center text-center h-[170px] relative">
                                <div className="absolute top-1 right-2 text-[8px] font-mono opacity-70">kolkata_compass.db</div>
                                
                                {/* Compass Needle Box */}
                                <button 
                                    onClick={spinCompass}
                                    className="w-12 h-12 rounded-full border-2 border-pencil bg-slate-50 shadow-inner flex items-center justify-center cursor-pointer relative"
                                    title="Spin compass!"
                                    aria-label="NS compass — spin the needle"
                                >
                                    {/* Compass Directions */}
                                    <span className="absolute top-0.5 text-[6px] font-bold">N</span>
                                    <span className="absolute bottom-0.5 text-[6px] font-bold">S</span>
                                    {/* Compass Needle */}
                                    <motion.div 
                                        animate={{ rotate: compassRotation }}
                                        transition={{ type: "spring", stiffness: 80, damping: 10 }}
                                        className="w-1 h-10 bg-red-500 rounded relative"
                                    >
                                        <div className="absolute top-0 left-0 right-0 h-5 bg-slate-900 rounded-t" />
                                    </motion.div>
                                    <div className="absolute w-2 h-2 rounded-full bg-pencil border border-white" />
                                </button>

                                <div className="space-y-1">
                                    <div className="flex items-center justify-center text-pencil gap-1">
                                        <MapPin size={14} className="text-accent shrink-0" />
                                        <span className="text-xs font-sans font-black uppercase">Kolkata, India</span>
                                    </div>
                                    <div className="text-sm font-mono font-bold text-[#b02330] whitespace-nowrap bg-muted border border-pencil/20 rounded px-2 py-0.5">
                                        {timeStr || "00:00:00 AM"}
                                    </div>
                                </div>
                            </Card>
                        </div>
                    </div>
                </div>

                {/* Recruiter texting chat console (Centered Bottom Sticky Note) */}
                <div className="max-w-xl mx-auto mt-12">
                    <Card variant="post-it" className="rotate-1 hover:rotate-0 p-6 md:p-8 bg-[#fff9c4] border-2 border-pencil shadow-hard-lg flex flex-col relative h-[360px] justify-between">
                        <div className="absolute top-1.5 left-2 text-[10px] text-pencil/70 font-mono">recruiter_hotline.sh</div>
                        
                        <div className="border-b border-dashed border-pencil/30 pb-3 mb-3 flex items-center justify-between">
                            <span className="text-base font-display font-black text-pencil">💬 Yellow Sticky Messenger</span>
                            <div className="flex items-center gap-1.5 text-xs text-pencil/70 font-sans font-bold">
                                <span className="w-2.5 h-2.5 rounded-full bg-green-500 pulse-opacity" />
                                <span>Online</span>
                            </div>
                        </div>

                        {/* Messages Area */}
                        <div className="flex-1 bg-white/40 border border-pencil/20 rounded p-3 text-sm font-sans font-medium overflow-y-auto mb-4 space-y-3 max-h-[170px] select-text">
                            {chatLogs.map((msg, idx) => (
                                <div 
                                    key={idx} 
                                    className={`flex flex-col max-w-[85%] ${msg.sender === 'user' ? 'ml-auto items-end' : 'mr-auto items-start'}`}
                                >
                                    <span className="text-[9px] uppercase font-bold text-pencil/70 mb-0.5">
                                        {msg.sender === 'user' ? 'Visitor' : 'Soumya'}
                                    </span>
                                    <span 
                                        className={`px-3 py-1.5 border border-pencil rounded-lg shadow-hard-sm ${msg.sender === 'user' ? 'bg-accent text-white rounded-tr-none' : 'bg-white text-pencil rounded-tl-none'}`}
                                    >
                                        {msg.text}
                                    </span>
                                </div>
                            ))}
                            {isTyping && (
                                <div className="flex flex-col items-start max-w-[80%]">
                                    <span className="text-[9px] uppercase font-bold text-pencil/70 mb-0.5">Soumya</span>
                                    <span className="px-3 py-1.5 border border-pencil bg-white text-pencil rounded-lg rounded-tl-none italic text-xs flex gap-1 items-center">
                                        typing<span className="pulse-opacity">...</span>
                                    </span>
                                </div>
                            )}
                            <div ref={chatEndRef} />
                        </div>

                        {/* Interactive Chat Actions */}
                        <div className="flex flex-wrap gap-2 pt-3 border-t border-dashed border-pencil/20 select-none">
                            <button 
                                onClick={() => handleChatAction('hire')}
                                className="flex-1 py-1.5 px-2.5 bg-white hover:bg-pencil text-pencil hover:text-paper font-sans font-black text-[11px] uppercase border-2 border-pencil shadow-hard-sm active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-all cursor-pointer flex items-center justify-center gap-1 shrink-0"
                            >
                                <Send size={10} />
                                <span>Can we hire you?</span>
                            </button>
                            <button 
                                onClick={() => handleChatAction('joke')}
                                className="flex-1 py-1.5 px-2.5 bg-white hover:bg-pencil text-pencil hover:text-paper font-sans font-black text-[11px] uppercase border-2 border-pencil shadow-hard-sm active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-all cursor-pointer flex items-center justify-center gap-1 shrink-0"
                            >
                                <span>Joke, please!</span>
                            </button>
                            <button 
                                onClick={() => handleChatAction('highfive')}
                                className="flex-1 py-1.5 px-2.5 bg-white hover:bg-pencil text-pencil hover:text-paper font-sans font-black text-[11px] uppercase border-2 border-pencil shadow-hard-sm active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-all cursor-pointer flex items-center justify-center gap-1 shrink-0"
                            >
                                <span>High Five! 🖐️</span>
                            </button>
                        </div>
                    </Card>
                </div>
            </div>
        </section>
    );
};

export default About;
