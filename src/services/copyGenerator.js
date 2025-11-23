/**
 * Generates copy and scripts based on the pricing strategy.
 * 
 * @param {Object} pricingData - The output from calculatePricing
 * @param {string} clientName - Name of the potential client (optional)
 * @returns {Object} Scripts and templates
 */
export const generateCopy = (pricingData, clientName = "[Nombre del Cliente]") => {
    const { tiers } = pricingData;
    const standard = tiers.find(t => t.id === 'standard');
    const premium = tiers.find(t => t.id === 'premium');

    return {
        emailTemplate: {
            subject: `Propuesta de Colaboración: Estrategia para ${clientName}`,
            body: `Hola ${clientName},

Ha sido un placer conocer más sobre sus objetivos. Basado en lo que discutimos, he diseñado tres opciones para trabajar juntos, asegurándonos de que obtengan el mejor retorno de inversión.

1. ${tiers[0].name} ($${tiers[0].price}): Ideal para comenzar rápido y cubrir lo esencial.
2. ${standard.name} ($${standard.price}): La opción recomendada para maximizar resultados sin complicaciones.
3. ${premium.name} ($${premium.price}): Para quienes buscan una transformación total y soporte dedicado.

Adjunto encontrarás los detalles completos. ¿Tienes disponibilidad el martes para revisarlo en 5 minutos?

Saludos,`
        },
        salesScript: {
            opening: "No hables de precio todavía. Pregunta: '¿Qué pasaría si no resuelven este problema en los próximos 3 meses?' (Haz que sientan el costo de no actuar).",
            presentation: `Cuando presentes el precio, empieza por el más alto (${premium.name}). Di: 'Para empresas que buscan el máximo impacto, tenemos la opción Elite por $${premium.price}...'. Luego haz una pausa. Si no se asustan, sigue. Si dudas, presenta el Estándar como la 'opción inteligente'.`,
            closing: "¿Cuál de estas opciones encaja mejor con el presupuesto que tenían en mente para solucionar esto?"
        },
        objectionHandling: [
            {
                objection: "Es muy caro",
                response: "Entiendo que es una inversión. Sin embargo, no estamos comprando 'horas', estamos comprando [Resultado]. Si este proyecto les genera X, ¿no vale la pena asegurar que se haga bien a la primera?"
            },
            {
                objection: "Tenemos presupuestos más bajos de otros",
                response: "Es posible. Mi tarifa refleja no solo la ejecución, sino la garantía de que no tendrás que micro-gestionar el proceso ni arreglar errores después. ¿Prefieren ahorrar dinero ahora o ahorrar tiempo y dolores de cabeza después?"
            },
            {
                objection: "No tenemos tanto presupuesto",
                response: "Comprendo. Podemos ajustar el alcance para encajar en el presupuesto. ¿Qué partes del paquete 'Esencial' son imprescindibles para ustedes ahora mismo?"
            }
        ]
    };
};
