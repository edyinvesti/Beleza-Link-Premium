import { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import LockScreen from './components/LockScreen'; // Importando o cadeado
import Dashboard from './screens/Dashboard'; 
import LiveWorkshop from './screens/LiveWorkshop'; 
import Clientes from './screens/Clientes'; 
import Appointments from './screens/Appointments';
import SettingsScreen from './screens/SettingsScreen';
import CashFlow from './screens/CashFlow';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Verifica se já está autenticado NESTA SESSÃO
    const auth = sessionStorage.getItem('is_authenticated');
    if (auth === 'true') setIsAuthenticated(true);
  }, []);

  // Se não estiver autenticado, mostra a tela de login (estilo banco digital)
  if (!isAuthenticated) {
    return <LockScreen onUnlock={() => setIsAuthenticated(true)} />;
  }

  return (
    <Router>
      <div className="flex flex-col lg:flex-row min-h-screen bg-[#09090b] text-white">
        <Sidebar />
        <main className="flex-1 w-full lg:ml-64 p-4 md:p-8 pb-24 lg:pb-8">
          <Routes>
            <Route path="/" element={<Navigate to="/dashboard" replace />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/workshop" element={<LiveWorkshop />} />
            <Route path="/clientes" element={<Clientes />} />
            <Route path="/agenda" element={<Appointments />} />
            <Route path="/config" element={<SettingsScreen />} />
            <Route path="/financeiro" element={<CashFlow />} />
            <Route path="*" element={<Navigate to="/dashboard" replace />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;