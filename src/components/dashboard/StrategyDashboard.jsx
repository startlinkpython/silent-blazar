import React from 'react';
import PricingTiers from './PricingTiers';
import AnalysisSection from './AnalysisSection';
import NegotiationScripts from './NegotiationScripts';
import Button from '../common/Button';

const StrategyDashboard = ({ pricingData, copyData, onReset }) => {
    return (
        <div style={{ animation: 'fadeIn 0.5s ease-out' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '3rem' }}>
                <div>
                    <h2 style={{ fontSize: '2rem', fontWeight: '800', marginBottom: '0.5rem' }}>Tu Estrategia de Precios</h2>
                    <p style={{ color: 'var(--text-secondary)' }}>
                        Tarifa Base Calculada: <strong style={{ color: 'white' }}>${pricingData.hourlyRate}/hora</strong>
                    </p>
                </div>
                <Button variant="outline" onClick={onReset}>
                    Nueva Estrategia
                </Button>
            </div>

            <PricingTiers tiers={pricingData.tiers} />

            <h3 style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '1.5rem' }}>Análisis Estratégico</h3>
            <AnalysisSection analysis={pricingData.analysis} />

            <h3 style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '1.5rem' }}>Herramientas de Negociación</h3>
            <NegotiationScripts copy={copyData} />
        </div>
    );
};

export default StrategyDashboard;
