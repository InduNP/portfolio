import { useState } from 'react';
import { Database, Layout, Eye, X, ExternalLink, Code } from 'lucide-react';
import './Projects.css';

export function Projects() {
    const [activeProject, setActiveProject] = useState<number | null>(null);

    const projects = [
        {
            id: 1,
            name: "OCMS System",
            type: "Secure Learning Platform Engine",
            icon: <Database size={24} />,
            problem: "Traditional learning management systems lack robust security, specialized roles, and scalable assessment engines.",
            architecture: "Microservices backend with secure JWT authentication, role-based access control, and a scalable database cluster for handling concurrent exams.",
            techStack: ["Node.js", "Express", "MongoDB", "React", "Docker"],
            impact: "Increased concurrent user handling by 300% and reduced security vulnerabilities to zero in the latest audit.",
            color: "var(--neon-blue)"
        },
        {
            id: 2,
            name: "Alphabet Detection Engine",
            type: "Custom Deep Learning Engine",
            icon: <Eye size={24} />,
            problem: "Standard OCR engines struggle with cursive handwriting and non-standard noisy inputs in real-time.",
            architecture: "Custom CNN architecture optimized for edge deployment using TensorRT, with an asynchronous inference pipeline.",
            techStack: ["Python", "TensorFlow/Keras", "OpenCV", "FastAPI"],
            impact: "Achieved 98.4% accuracy on noisy datasets with sub-50ms inference time.",
            color: "var(--neon-purple)"
        },
        {
            id: 3,
            name: "Attendance + Sentiment System",
            type: "Real-Time AI Monitoring System",
            icon: <Layout size={24} />,
            problem: "Manual attendance is slow and doesn't capture student engagement or class sentiment.",
            architecture: "Real-time video stream processing with face recognition and emotion detection models running in parallel, aggregating data to a centralized dashboard.",
            techStack: ["Python", "PyTorch", "WebSocket", "React", "PostgreSQL"],
            impact: "Automated 100% of attendance logging and provided actionable insights into student engagement trends.",
            color: "var(--neon-green)"
        }
    ];

    return (
        <section id="projects" className="projects-section">
            <h2 className="section-title">
                <span className="hash">#</span> Deployed Systems
            </h2>

            <div className="projects-grid mt-8">
                {projects.map((project, index) => (
                    <div
                        key={project.id}
                        className={`glass-panel project-card ${activeProject === index ? 'active' : ''}`}
                        onClick={() => setActiveProject(activeProject === index ? null : index)}
                        style={{ '--theme-color': project.color } as React.CSSProperties}
                    >
                        <div className="project-header">
                            <div className="project-icon" style={{ color: project.color }}>{project.icon}</div>
                            <div>
                                <h3 className="font-mono text-xl">{project.name}</h3>
                                <span className="text-secondary text-sm">{project.type}</span>
                            </div>
                        </div>

                        <div className={`project-details ${activeProject === index ? 'expanded' : ''}`}>
                            <div className="detail-section mt-6">
                                <h4 className="font-mono text-sm text-theme mb-2">&gt; SYSTEM.PROBLEM</h4>
                                <p className="text-secondary text-sm leading-relaxed">{project.problem}</p>
                            </div>

                            <div className="detail-section mt-4">
                                <h4 className="font-mono text-sm text-theme mb-2">&gt; SYSTEM.ARCHITECTURE</h4>
                                <p className="text-secondary text-sm leading-relaxed">{project.architecture}</p>
                            </div>

                            <div className="detail-section mt-4">
                                <h4 className="font-mono text-sm text-theme mb-2">&gt; SYSTEM.TECH_STACK</h4>
                                <div className="flex flex-wrap gap-2">
                                    {project.techStack.map(tech => (
                                        <span key={tech} className="system-badge">{tech}</span>
                                    ))}
                                </div>
                            </div>

                            <div className="detail-section mt-4 border-t border-glass pt-4 flex justify-between items-center">
                                <div>
                                    <h4 className="font-mono text-xs text-muted mb-1">IMPACT</h4>
                                    <p className="text-sm font-medium">{project.impact}</p>
                                </div>
                                <div className="flex gap-3">
                                    <button className="icon-btn" title="View Source"><Code size={18} /></button>
                                    <button className="icon-btn" title="Live Demo"><ExternalLink size={18} /></button>
                                </div>
                            </div>
                        </div>

                        {activeProject === index && (
                            <button
                                className="close-btn"
                                onClick={(e) => { e.stopPropagation(); setActiveProject(null); }}
                            >
                                <X size={20} />
                            </button>
                        )}

                        <div className="project-glow"></div>
                    </div>
                ))}
            </div>
        </section>
    );
}
