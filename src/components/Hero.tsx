import { useEffect, useState } from 'react';
import { Terminal, ArrowRight } from 'lucide-react';
import './Hero.css';

export function Hero() {
    const [text, setText] = useState('');
    const fullText = "Building Intelligent Systems That Think, Learn, and Scale";
    const [isTyping, setIsTyping] = useState(true);

    useEffect(() => {
        let i = 0;
        const typingInterval = setInterval(() => {
            if (i < fullText.length) {
                setText(fullText.substring(0, i + 1));
                i++;
            } else {
                clearInterval(typingInterval);
                setIsTyping(false);
            }
        }, 50); // Typing speed

        return () => clearInterval(typingInterval);
    }, []);

    return (
        <section id="hero" className="hero-section">
            <div className="system-identity">
                <div className="identity-header">
                    <Terminal size={20} className="neon-text-blue" />
                    <span className="font-mono text-muted">system_identity.exe</span>
                </div>
                <div className="identity-body pl-4 border-l-2 border-glass mt-4">
                    <h2 className="text-xl font-mono text-secondary mb-2">
                        <span className="neon-text-purple">&gt;</span> User: Muhammed Hafan
                    </h2>
                    <div className="text-sm font-mono text-green-400 blink-slow">
                        [ OK ] System initialized successfully...
                    </div>
                    <div className="text-sm font-mono text-green-400 blink-slow" style={{ animationDelay: '0.2s' }}>
                        [ OK ] Core modules loaded...
                    </div>
                </div>
            </div>

            <div className="hero-content mt-12">
                <h1 className="hero-headline">
                    {text}
                    <span className={`cursor ${isTyping ? 'cursor-blink' : 'cursor-blink'}`}>_</span>
                </h1>

                <p className="hero-subline text-secondary mt-6 max-w-2xl text-lg font-light leading-relaxed">
                    Specializing in AI-driven solutions and scalable backend architectures. I don't just write code; I build robust logical engines that solve real-world problems.
                </p>

                <div className="hero-actions mt-10 flex gap-6">
                    <button className="btn-primary" onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}>
                        Explore System <ArrowRight size={18} />
                    </button>

                    <button className="btn-secondary" onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}>
                        View Profile
                    </button>
                </div>
            </div>

            <div className="scroll-indicator">
                <div className="mouse">
                    <div className="wheel"></div>
                </div>
                <span className="font-mono text-xs mt-2 text-muted">SCROLL_TO_CONTINUE</span>
            </div>
        </section>
    );
}
