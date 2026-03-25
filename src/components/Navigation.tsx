import { useState, useEffect } from 'react';
import { Terminal, Cpu, Database, Network, Mail } from 'lucide-react';
import './Navigation.css';

export function Navigation() {
    const [activeSection, setActiveSection] = useState('hero');

    const navItems = [
        { id: 'hero', icon: <Terminal size={24} />, label: 'System Boot' },
        { id: 'about', icon: <Cpu size={24} />, label: 'Overview' },
        { id: 'projects', icon: <Database size={24} />, label: 'Modules' },
        { id: 'skills', icon: <Network size={24} />, label: 'Capabilities' },
        { id: 'contact', icon: <Mail size={24} />, label: 'Connect' },
    ];

    useEffect(() => {
        const handleScroll = () => {
            const sections = navItems.map(item => document.getElementById(item.id));
            const scrollPosition = window.scrollY + window.innerHeight / 2;

            for (let i = sections.length - 1; i >= 0; i--) {
                const section = sections[i];
                if (section && section.offsetTop <= scrollPosition) {
                    setActiveSection(navItems[i].id);
                    break;
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollTo = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            window.scrollTo({
                top: element.offsetTop,
                behavior: 'smooth'
            });
        }
    };

    return (
        <nav className="system-nav glass-panel">
            <div className="nav-logo">
                <span className="neon-text-blue">MH</span>
                <span className="nav-dot">.</span>
            </div>

            <div className="nav-links">
                {navItems.map((item) => (
                    <button
                        key={item.id}
                        className={`nav-btn ${activeSection === item.id ? 'active' : ''}`}
                        onClick={() => scrollTo(item.id)}
                        title={item.label}
                    >
                        <div className="nav-icon">{item.icon}</div>
                        <span className="nav-label">{item.label}</span>
                    </button>
                ))}
            </div>

            <div className="nav-status">
                <div className="status-dot"></div>
            </div>
        </nav>
    );
}
