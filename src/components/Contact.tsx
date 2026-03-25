import { Mail, Globe, User, Send, Phone } from 'lucide-react';
import './Contact.css';

export function Contact() {
    return (
        <section id="contact" className="contact-section">
            <h2 className="section-title">
                <span className="hash">#</span> Initiate Connection
            </h2>

            <div className="contact-container mt-8 glass-panel">
                <div className="contact-grid">

                    <div className="contact-info">
                        <h3 className="font-mono text-2xl mb-6 text-neon-blue">Awaiting Input...</h3>
                        <p className="text-secondary mb-10 text-lg leading-relaxed">
                            Seeking an engineer to architect intelligent engines and scalable infrastructures?
                            My system is ready to accept new directives and collaboration requests.
                        </p>

                        <div className="social-links flex flex-col gap-4">
                            <a href="mailto:muhammedhafan961@gmail.com" className="social-btn glass-panel">
                                <Mail className="text-neon-blue" size={20} />
                                <span className="font-mono ml-4">muhammedhafan961@gmail.com</span>
                            </a>
                            <a href="https://github.com/hafan-961" target="_blank" rel="noreferrer" className="social-btn glass-panel">
                                <Globe className="text-text-primary" size={20} />
                                <span className="font-mono ml-4">github.com/hafan-961</span>
                            </a>
                            <a href="https://www.linkedin.com/in/muhammed-hafan/" target="_blank" rel="noreferrer" className="social-btn glass-panel">
                                <User className="text-neon-blue" size={20} />
                                <span className="font-mono ml-4">linkedin.com/in/muhammed-hafan</span>
                            </a>
                            <a href="tel:+919745143666" className="social-btn glass-panel">
                                <Phone className="text-neon-green" size={20} />
                                <span className="font-mono ml-4">+91-9745143666</span>
                            </a>
                        </div>
                    </div>

                    <div className="contact-form-container">
                        <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
                            <div className="form-group font-mono">
                                <label>&gt; SENDER.NAME</label>
                                <input type="text" className="glass-input" placeholder="Your name" />
                            </div>
                            <div className="form-group font-mono">
                                <label>&gt; SENDER.EMAIL</label>
                                <input type="email" className="glass-input" placeholder="Your email address" />
                            </div>
                            <div className="form-group font-mono">
                                <label>&gt; PAYLOAD.MESSAGE</label>
                                <textarea className="glass-input" rows={4} placeholder="Enter transmission data..."></textarea>
                            </div>
                            <button className="btn-primary w-full mt-4" type="submit">
                                Transmit Protocol <Send size={18} />
                            </button>
                        </form>
                    </div>

                </div>

                <div className="contact-footer mt-12 pt-6 border-t border-glass text-center font-mono text-sm text-muted">
                    <p>System status: <span className="text-neon-green">Ready for collaboration.</span></p>
                    <p className="mt-2 text-xs opacity-50">&copy; 2026 Muhammed Hafan. All protocols secured.</p>
                </div>
            </div>
        </section>
    );
}
