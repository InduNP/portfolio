import { Cpu, Database, Network, Wrench } from 'lucide-react';
import './Skills.css';

export function Skills() {
    const skillCategories = [
        {
            id: 'ai-ml',
            title: 'AI / ML',
            icon: <Cpu size={20} />,
            color: 'var(--neon-blue)',
            skills: ['Python', 'TensorFlow', 'PyTorch', 'OpenCV', 'Scikit-Learn', 'Generative AI', 'NLP']
        },
        {
            id: 'backend',
            title: 'Backend Systems',
            icon: <Network size={20} />,
            color: 'var(--neon-purple)',
            skills: ['Node.js', 'Express', 'FastAPI', 'C++', 'Microservices', 'RESTful APIs', 'WebSockets']
        },
        {
            id: 'database',
            title: 'Databases & Cloud',
            icon: <Database size={20} />,
            color: 'var(--neon-green)',
            skills: ['MongoDB', 'PostgreSQL', 'Redis', 'Docker', 'AWS', 'GCP', 'Firebase']
        },
        {
            id: 'tools',
            title: 'Tools & Workflows',
            icon: <Wrench size={20} />,
            color: 'var(--text-primary)',
            skills: ['Git', 'Linux', 'CI/CD', 'Jest', 'Postman', 'Figma']
        }
    ];

    return (
        <section id="skills" className="skills-section">
            <h2 className="section-title">
                <span className="hash">#</span> Core Capabilities
            </h2>

            <div className="skills-container mt-8">
                {skillCategories.map((category) => (
                    <div key={category.id} className="skill-category glass-panel">
                        <div className="category-header">
                            <div className="category-icon" style={{ color: category.color }}>
                                {category.icon}
                            </div>
                            <h3 className="font-mono text-lg">{category.title}</h3>
                        </div>

                        <div className="skills-grid mt-6">
                            {category.skills.map((skill) => (
                                <div key={skill} className="skill-node">
                                    <span className="node-dot" style={{ backgroundColor: category.color }}></span>
                                    {skill}
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
