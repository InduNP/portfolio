import { Terminal, Award, Briefcase } from 'lucide-react';
import './Experience.css';

export function Experience() {
    const logs = [
        { year: '2025', tag: 'TRAINING', text: 'Completed rigorous DSA & C++ Training module. Optimization parameters updated.', color: 'var(--neon-blue)' },
        { year: '2026', tag: 'IMPLEMENTATION', text: 'Architected and deployed Custom Deep Learning models. Accuracy vectors improved.', color: 'var(--neon-purple)' },
        { year: '2026', tag: 'DEVELOPMENT', text: 'Developed scalable backend server architectures. Throughput capacity maximized.', color: 'var(--neon-green)' },
    ];

    const badges = [
        { name: 'Machine Learning Specialist', issuer: 'IBM', icon: <Award size={20} /> },
        { name: 'Backend Architecture', issuer: 'Coursera', icon: <Briefcase size={20} /> },
        { name: 'Cloud Computing', issuer: 'Google', icon: <Award size={20} /> },
    ];

    return (
        <section id="experience" className="experience-section">
            <h2 className="section-title">
                <span className="hash">#</span> System Logs & Updates
            </h2>

            <div className="experience-container mt-8 grid grid-cols-1 lg:grid-cols-2 gap-12">
                <div className="terminal-window glass-panel">
                    <div className="terminal-header">
                        <div className="mac-buttons">
                            <span className="close"></span>
                            <span className="minimize"></span>
                            <span className="maximize"></span>
                        </div>
                        <div className="terminal-title">~/hafan/system_logs.sh</div>
                    </div>
                    <div className="terminal-body font-mono text-sm leading-8">
                        <div className="text-secondary mb-4">Initializing log sequence...</div>
                        {logs.map((log, index) => (
                            <div key={index} className="log-entry">
                                <span className="text-muted">[{log.year}]</span>
                                <span className="log-tag ml-2 font-bold" style={{ color: log.color }}>_{log.tag}</span>
                                <span className="text-primary ml-4">{log.text}</span>
                            </div>
                        ))}
                        <div className="mt-4 flex items-center">
                            <span className="text-neon-green">hafan@system</span>
                            <span className="text-primary ml-1">~ $</span>
                            <span className="cursor-blink ml-2 block w-2 h-4 bg-primary text-primary">_</span>
                        </div>
                    </div>
                </div>

                <div className="certifications-panel">
                    <h3 className="font-mono text-xl mb-6 flex items-center gap-2">
                        <Terminal size={20} className="text-neon-blue" /> Unlocked Modules
                    </h3>
                    <div className="badges-grid">
                        {badges.map((badge, index) => (
                            <div key={index} className="badge-card glass-panel">
                                <div className="badge-icon text-neon-purple">{badge.icon}</div>
                                <div>
                                    <div className="font-mono text-sm">{badge.name}</div>
                                    <div className="text-xs text-secondary mt-1 issuer">Issued by: {badge.issuer}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
