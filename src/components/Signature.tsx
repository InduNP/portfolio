import { Database, Filter, BrainCircuit, Activity, ServerCog } from 'lucide-react';
import './Signature.css';

export function Signature() {
    const steps = [
        { id: 1, name: 'Data Ingestion', icon: <Database size={24} />, desc: 'Raw data collection & streaming' },
        { id: 2, name: 'Preprocessing', icon: <Filter size={24} />, desc: 'Cleaning & feature engineering' },
        { id: 3, name: 'Intelligence Core', icon: <BrainCircuit size={24} />, desc: 'Model inference & learning' },
        { id: 4, name: 'API Layer', icon: <Activity size={24} />, desc: 'REST/WebSocket endpoints' },
        { id: 5, name: 'Scalable Output', icon: <ServerCog size={24} />, desc: 'Production-ready execution' },
    ];

    return (
        <section id="signature" className="signature-section">
            <h2 className="section-title">
                <span className="hash">#</span> How My System Thinks
            </h2>

            <div className="pipeline-container mt-12 overflow-x-auto pb-8">
                <div className="pipeline-track">
                    {steps.map((step, index) => (
                        <div key={step.id} className="pipeline-node-wrapper">
                            <div className="pipeline-node glass-panel">
                                <div className="node-icon">{step.icon}</div>
                                <div className="node-content mt-4">
                                    <h3 className="font-mono text-sm text-neon-blue">{`0${step.id}_${step.name.toUpperCase().replace(' ', '_')}`}</h3>
                                    <p className="text-secondary text-xs mt-2">{step.desc}</p>
                                </div>
                            </div>

                            {index < steps.length - 1 && (
                                <div className="pipeline-connection">
                                    <div className="data-packet"></div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>

            <div className="glass-panel mt-8 p-6 border-neon-purple text-center">
                <p className="font-mono text-secondary">
                    <span className="neon-text-purple">System Architecture Note:</span> Every project follows a strict pipeline from messy real-world data to clean, scalable, and intelligent outputs.
                </p>
            </div>
        </section>
    );
}
