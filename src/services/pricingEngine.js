/**
 * Calculates pricing tiers based on user profile and financial goals.
 * 
 * @param {Object} data
 * @param {number} data.monthlyGoal - Target monthly income (e.g., 5000)
 * @param {number} data.experienceYears - Years of experience
 * @param {string} data.profession - e.g., "Designer", "Developer"
 * @param {number} data.projectHours - Estimated hours for the project (optional, default 40)
 * @returns {Object} Tiers and analysis
 */
export const calculatePricing = ({ monthlyGoal, experienceYears, profession, projectHours = 40 }) => {
    // 1. Base Rate Calculation
    // Assuming 100 billable hours per month is a healthy standard for freelancers
    // (allows time for admin, sales, etc.)
    const baseHourlyRate = monthlyGoal / 100;

    // 2. Experience Multiplier
    let multiplier = 1;
    if (experienceYears < 2) multiplier = 1;
    else if (experienceYears < 5) multiplier = 1.2;
    else if (experienceYears < 10) multiplier = 1.5;
    else multiplier = 2.0; // Expert status

    const adjustedHourlyRate = baseHourlyRate * multiplier;

    // 3. Tier Calculation
    // We structure 3 packages: Basic (Essentials), Standard (Complete), Premium (VIP)

    // Basic: The bare minimum. High margin, low effort.
    const basicPrice = Math.round(adjustedHourlyRate * projectHours * 0.8);

    // Standard: The target package. Fair value.
    const standardPrice = Math.round(adjustedHourlyRate * projectHours);

    // Premium: The anchor. High value, high price.
    const premiumPrice = Math.round(adjustedHourlyRate * projectHours * 1.5);

    return {
        hourlyRate: Math.round(adjustedHourlyRate),
        tiers: [
            {
                id: 'basic',
                name: 'Esencial',
                price: basicPrice,
                description: 'La solución ágil para necesidades puntuales.',
                features: ['Entregables básicos', 'Sin revisiones extra', 'Soporte por email']
            },
            {
                id: 'standard',
                name: 'Profesional',
                price: standardPrice,
                recommended: true,
                description: 'El equilibrio perfecto entre valor e inversión.',
                features: ['Entregables completos', '2 Rondas de revisión', 'Soporte prioritario', 'Estrategia base']
            },
            {
                id: 'premium',
                name: 'Elite / Partner',
                price: premiumPrice,
                description: 'La experiencia definitiva con resultados garantizados.',
                features: ['Todo lo incluido en Profesional', 'Revisiones ilimitadas', 'Consultoría estratégica', 'Soporte VIP 24/7', 'Acceso a red de contactos']
            }
        ],
        analysis: {
            marketPosition: experienceYears > 5 ? 'Experto / Premium' : 'Competitivo / En crecimiento',
            psychology: 'Estos precios utilizan el anclaje del paquete Premium para hacer que el Estándar parezca una opción lógica y segura.',
            projection: `Con solo ${Math.ceil(monthlyGoal / standardPrice)} proyectos de nivel Profesional al mes, alcanzas tu meta de $${monthlyGoal}.`
        }
    };
};
