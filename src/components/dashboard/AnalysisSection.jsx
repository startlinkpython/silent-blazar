import React from 'react';

const AnalysisSection = ({ analysis }) => {
    return (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem', marginBottom: '4rem' }}>
            <div style={{ backgroundColor: 'rgba(99, 102, 241, 0.1)', padding: '1.5rem', borderRadius: '1rem', border: '1px solid rgba(99, 102, 241, 0.2)' }}>
                <h4 style={{ color: 'var(--accent-primary)', marginBottom: '0.5rem', fontSize: '0.875rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Posicionamiento</h4>
                <p style={{ fontSize: '1.125rem', fontWeight: '600' }}>{analysis.marketPosition}</p>
            </div>

            <div style={{ backgroundColor: 'var(--bg-secondary)', padding: '1.5rem', borderRadius: '1rem', border: '1px solid rgba(255,255,255,0.05)' }}>
                <h4 style={{ color: 'var(--text-secondary)', marginBottom: '0.5rem', fontSize: '0.875rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Psicología</h4>
                <p style={{ fontSize: '1rem', lineHeight: '1.6' }}>{analysis.psychology}</p>
            </div>

            <div style={{ backgroundColor: 'var(--bg-secondary)', padding: '1.5rem', borderRadius: '1rem', border: '1px solid rgba(255,255,255,0.05)' }}>
                <h4 style={{ color: 'var(--success)', marginBottom: '0.5rem', fontSize: '0.875rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Proyección</h4>
                <p style={{ fontSize: '1rem', lineHeight: '1.6' }}>{analysis.projection}</p>
            </div>
        </div>
    );
};

export default AnalysisSection;
