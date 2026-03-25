import { useEffect, useState } from 'react';
import './index.css';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Signature } from './components/Signature';
import { Experience } from './components/Experience';
import { Contact } from './components/Contact';

function App() {
  const [booting, setBooting] = useState(true);

  useEffect(() => {
    // Simulate system boot
    const timer = setTimeout(() => {
      setBooting(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div className="system-grid-bg"></div>
      <div className="system-gradient-overlay"></div>
      <div className="scanline-effect"></div>

      <div className="app-container">
        {!booting && <Navigation />}

        <main className="main-content">
          {booting ? (
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh', flexDirection: 'column', gap: '1rem' }}>
              <div className="font-mono text-secondary text-sm mb-4">
                Loading resources...
              </div>
              <div className="font-mono" style={{ fontSize: '1.5rem' }}>
                <span className="neon-text-blue">System</span>._init({`<span className="cursor-blink neon-text-purple">|</span>`})
              </div>
              <div className="w-64 h-1 bg-gray-800 mt-8 rounded-full overflow-hidden">
                <div className="h-full bg-neon-blue" style={{ width: '100%', animation: 'load 2s ease-out' }}></div>
              </div>
              <style>{`
                @keyframes load {
                  0% { width: 0%; }
                  50% { width: 70%; }
                  100% { width: 100%; }
                }
              `}</style>
            </div>
          ) : (
            <div style={{ animation: 'fadeIn 1s ease-out' }}>
              <style>{`
                @keyframes fadeIn {
                  from { opacity: 0; transform: translateY(20px); }
                  to { opacity: 1; transform: translateY(0); }
                }
                .section-spacer { height: 10vh; }
              `}</style>

              <Hero />
              <div className="section-spacer"></div>

              <About />
              <div className="section-spacer"></div>

              <Projects />
              <div className="section-spacer"></div>

              <Skills />
              <div className="section-spacer"></div>

              <Signature />
              <div className="section-spacer"></div>

              <Experience />
              <div className="section-spacer"></div>

              <Contact />
              <div className="section-spacer"></div>
            </div>
          )}
        </main>
      </div>
    </>
  );
}

export default App;
