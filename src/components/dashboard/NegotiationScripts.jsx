import React, { useState } from 'react';
import Button from '../common/Button';

const NegotiationScripts = ({ copy }) => {
    const [activeTab, setActiveTab] = useState('email');

    const tabs = [
        { id: 'email', label: 'Email de Propuesta' },
        { id: 'script', label: 'Guion de Ventas' },
        { id: 'objections', label: 'Manejo de Objeciones' }
    ];

    return (
        <div style={{ backgroundColor: 'var(--bg-secondary)', borderRadius: '1rem', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.05)' }}>
            <div style={{ display: 'flex', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                {tabs.map(tab => (
                    <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        style={{
                            flex: 1,
                            padding: '1rem',
                            backgroundColor: activeTab === tab.id ? 'rgba(255,255,255,0.05)' : 'transparent',
                            color: activeTab === tab.id ? 'white' : 'var(--text-secondary)',
                            border: 'none',
                            borderBottom: activeTab === tab.id ? '2px solid var(--accent-primary)' : '2px solid transparent',
                            cursor: 'pointer',
                            fontWeight: '600',
                            transition: 'all 0.2s'
                        }}
                    >
                        {tab.label}
                    </button>
                ))}
            </div>

            <div style={{ padding: '2rem' }}>
                {activeTab === 'email' && (
                    <div>
                        <div style={{ marginBottom: '1rem', padding: '1rem', backgroundColor: 'rgba(0,0,0,0.2)', borderRadius: '0.5rem' }}>
                            <strong style={{ color: 'var(--text-secondary)' }}>Asunto:</strong> {copy.emailTemplate.subject}
                        </div>
                        <pre style={{ whiteSpace: 'pre-wrap', fontFamily: 'inherit', lineHeight: '1.6', color: 'var(--text-primary)' }}>
                            {copy.emailTemplate.body}
                        </pre>
                    </div>
                )}

                {activeTab === 'script' && (
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                        <div>
                            <h4 style={{ color: 'var(--accent-primary)', marginBottom: '0.5rem' }}>Apertura</h4>
                            <p style={{ padding: '1rem', backgroundColor: 'rgba(0,0,0,0.2)', borderRadius: '0.5rem', borderLeft: '4px solid var(--accent-primary)' }}>
                                {copy.salesScript.opening}
                            </p>
                        </div>
                        <div>
                            <h4 style={{ color: 'var(--accent-primary)', marginBottom: '0.5rem' }}>Presentación del Precio</h4>
                            <p style={{ padding: '1rem', backgroundColor: 'rgba(0,0,0,0.2)', borderRadius: '0.5rem', borderLeft: '4px solid var(--accent-primary)' }}>
                                {copy.salesScript.presentation}
                            </p>
                        </div>
                        <div>
                            <h4 style={{ color: 'var(--accent-primary)', marginBottom: '0.5rem' }}>Cierre</h4>
                            <p style={{ padding: '1rem', backgroundColor: 'rgba(0,0,0,0.2)', borderRadius: '0.5rem', borderLeft: '4px solid var(--accent-primary)' }}>
                                {copy.salesScript.closing}
                            </p>
                        </div>
                    </div>
                )}

                {activeTab === 'objections' && (
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                        {copy.objectionHandling.map((item, idx) => (
                            <div key={idx}>
                                <h4 style={{ color: 'var(--error)', marginBottom: '0.5rem' }}>"{item.objection}"</h4>
                                <p style={{ padding: '1rem', backgroundColor: 'rgba(0,0,0,0.2)', borderRadius: '0.5rem', borderLeft: '4px solid var(--success)' }}>
                                    {item.response}
                                </p>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default NegotiationScripts;
