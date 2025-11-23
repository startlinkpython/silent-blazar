import React from 'react';
import Button from '../common/Button';

const PricingTiers = ({ tiers }) => {
    return (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginBottom: '4rem' }}>
            {tiers.map((tier) => (
                <div key={tier.id} style={{
                    backgroundColor: 'var(--bg-secondary)',
                    borderRadius: '1rem',
                    padding: '2rem',
                    position: 'relative',
                    border: tier.recommended ? '2px solid var(--accent-primary)' : '1px solid rgba(255,255,255,0.1)',
                    transform: tier.recommended ? 'scale(1.05)' : 'scale(1)',
                    zIndex: tier.recommended ? 10 : 1,
                    display: 'flex',
                    flexDirection: 'column'
                }}>
                    {tier.recommended && (
                        <div style={{
                            position: 'absolute',
                            top: '-12px',
                            left: '50%',
                            transform: 'translateX(-50%)',
                            backgroundColor: 'var(--accent-primary)',
                            color: 'white',
                            padding: '0.25rem 1rem',
                            borderRadius: '1rem',
                            fontSize: '0.75rem',
                            fontWeight: 'bold'
                        }}>
                            RECOMENDADO
                        </div>
                    )}

                    <h3 style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '0.5rem' }}>{tier.name}</h3>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', marginBottom: '1.5rem', minHeight: '40px' }}>
                        {tier.description}
                    </p>

                    <div style={{ fontSize: '2.5rem', fontWeight: '800', marginBottom: '2rem', color: 'white' }}>
                        ${tier.price.toLocaleString()}
                    </div>

                    <ul style={{ listStyle: 'none', marginBottom: '2rem', flex: 1 }}>
                        {tier.features.map((feature, idx) => (
                            <li key={idx} style={{ marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)' }}>
                                <span style={{ color: 'var(--success)' }}>✓</span> {feature}
                            </li>
                        ))}
                    </ul>

                    <Button variant={tier.recommended ? 'primary' : 'secondary'} style={{ width: '100%' }}>
                        Elegir {tier.name}
                    </Button>
                </div>
            ))}
        </div>
    );
};

export default PricingTiers;
