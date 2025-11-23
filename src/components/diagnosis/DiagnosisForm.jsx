import React, { useState } from 'react';
import Input from '../common/Input';
import Button from '../common/Button';

const DiagnosisForm = ({ onSubmit }) => {
    const [formData, setFormData] = useState({
        profession: '',
        experienceYears: '',
        monthlyGoal: '',
        projectHours: '40'
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({
            ...formData,
            experienceYears: Number(formData.experienceYears),
            monthlyGoal: Number(formData.monthlyGoal),
            projectHours: Number(formData.projectHours)
        });
    };

    return (
        <div style={{ maxWidth: '600px', margin: '0 auto', animation: 'fadeIn 0.5s ease-out' }}>
            <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                <h2 style={{ fontSize: '2.5rem', fontWeight: '800', marginBottom: '1rem', background: 'linear-gradient(to right, #fff, #94a3b8)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                    Descubre cuánto vales realmente
                </h2>
                <p style={{ color: 'var(--text-secondary)', fontSize: '1.125rem' }}>
                    Deja de cobrar "a ojo". Usa inteligencia de mercado para definir tus precios.
                </p>
            </div>

            <form onSubmit={handleSubmit} style={{
                backgroundColor: 'var(--bg-secondary)',
                padding: '2rem',
                borderRadius: '1rem',
                border: '1px solid rgba(255,255,255,0.05)',
                boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
            }}>
                <Input
                    label="¿A qué te dedicas?"
                    name="profession"
                    placeholder="Ej. Diseñador Web, Consultor de Marketing..."
                    value={formData.profession}
                    onChange={handleChange}
                />

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                    <Input
                        label="Años de Experiencia"
                        name="experienceYears"
                        type="number"
                        min="0"
                        placeholder="Ej. 3"
                        value={formData.experienceYears}
                        onChange={handleChange}
                    />
                    <Input
                        label="Meta Mensual ($)"
                        name="monthlyGoal"
                        type="number"
                        min="0"
                        placeholder="Ej. 5000"
                        value={formData.monthlyGoal}
                        onChange={handleChange}
                    />
                </div>

                <Input
                    label="Horas estimadas para un proyecto típico"
                    name="projectHours"
                    type="number"
                    min="1"
                    placeholder="Ej. 40"
                    value={formData.projectHours}
                    onChange={handleChange}
                />

                <div style={{ marginTop: '2rem' }}>
                    <Button type="submit" className="w-full" style={{ width: '100%' }}>
                        Generar Estrategia de Precios
                    </Button>
                </div>
            </form>
        </div>
    );
};

export default DiagnosisForm;
