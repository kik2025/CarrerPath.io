import React, { useState } from 'react';
import Crysteldashboard from './components/Crysteldashboard'; // Importación única
import CareerCompassDashboard from './components/CareerCompassDashboard'; // Importación única
function App() {
  const [activeTab, setActiveTab] = useState('home');

  return (
    <div style={{ padding: '20px', maxWidth: '1200px', margin: '0 auto', fontFamily: 'system-ui, -apple-system, sans-serif' }}>
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
        <h1 style={{ color: '#4F46E5', margin: 0 }}>Career Compass</h1>
        <div
          style={{
            background: '#4F46E5',
            color: 'white',
            width: '40px',
            height: '40px',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontWeight: 'bold',
          }}
        >
          CL
        </div>
      </header>

      {/* Renderiza el componente Crysteldashboard */}
      <CareerCompassDashboard></CareerCompassDashboard>
    </div>
  );
}

export default App;