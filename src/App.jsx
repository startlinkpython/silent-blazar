import { useState } from 'react';
import Layout from './components/Layout';
import DiagnosisForm from './components/diagnosis/DiagnosisForm';
import StrategyDashboard from './components/dashboard/StrategyDashboard';
import { calculatePricing } from './services/pricingEngine';
import { generateCopy } from './services/copyGenerator';

function App() {
  const [view, setView] = useState('form'); // 'form' | 'dashboard'
  const [results, setResults] = useState(null);

  const handleFormSubmit = (formData) => {
    const pricing = calculatePricing(formData);
    const copy = generateCopy(pricing);

    setResults({ pricing, copy });
    setView('dashboard');
    window.scrollTo(0, 0);
  };

  const handleReset = () => {
    setView('form');
    setResults(null);
  };

  return (
    <Layout>
      {view === 'form' ? (
        <DiagnosisForm onSubmit={handleFormSubmit} />
      ) : (
        <StrategyDashboard
          pricingData={results.pricing}
          copyData={results.copy}
          onReset={handleReset}
        />
      )}
    </Layout>
  );
}

export default App;
