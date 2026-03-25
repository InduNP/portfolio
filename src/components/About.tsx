import { Cpu, Server, Zap } from 'lucide-react';
import './About.css';

export function About() {
    const cards = [
        {
            icon: <Cpu size={32} className="neon-text-blue" />,
            title: "AI & ML Systems",
            description: "Designing and deploying intelligent models that learn from data and automate complex decision-making processes."
        },
        {
            icon: <Server size={32} className="neon-text-purple" />,
            title: "Scalable Backend",
            description: "Building robust, high-performance server architectures capable of handling heavy loads with low latency."
        },
        {
            icon: <Zap size={32} className="neon-text-green" />,
            title: "Real-world Impact",
            description: "Translating cutting-edge algorithmic research into practical, production-ready software solutions."
        }
    ];

    return (
        <section id="about" className="about-section">
            <h2 className="section-title">
                <span className="hash">#</span> System Overview
            </h2>

            <div className="about-grid mt-8">
                {cards.map((card, index) => (
                    <div key={index} className="glass-panel about-card">
                        <div className="card-icon mb-6">{card.icon}</div>
                        <h3 className="font-mono text-xl mb-4">{card.title}</h3>
                        <p className="text-secondary leading-relaxed">{card.description}</p>

                        <div className="card-decoration">
                            <div className="corner-tl"></div>
                            <div className="corner-br"></div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="glass-panel mt-16 p-8 border-neon-blue core-directive-panel">
                <div className="directive-content">
                    <h3 className="font-mono text-2xl mb-4">Core Processing Directive</h3>
                    <p className="text-secondary text-lg">
                        My engineering philosophy centers on creating systems that are not just functional, but intelligent and resilient.
                        I bridge the gap between complex machine learning models and scalable backend infrastructure to deliver
                        end-to-end applications that drive value and innovation.
                    </p>
                </div>
                <div className="sys-metrics font-mono text-sm text-muted">
                    <div className="metric-item"><div className="status-indicator bg-green"></div> Focus: AI & Backend Architecture</div>
                    <div className="metric-item"><div className="status-indicator bg-blue"></div> Goal: Scalable Real-World Solutions</div>
                    <div className="metric-item"><div className="status-indicator bg-purple"></div> Status: Ready for New Challenges</div>
                </div>
            </div>
        </section>
    );
}
