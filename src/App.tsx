import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dashboard from './screens/Dashboard'; 
import LiveWorkshop from './screens/LiveWorkshop'; 
import Clientes from './screens/Clientes'; 
import Appointments from './screens/Appointments';
import SettingsScreen from './screens/SettingsScreen';
import CashFlow from './screens/CashFlow';

function App() {
  return (
    <Router>
      <div className="flex flex-col lg:flex-row min-h-screen bg-[#09090b] text-white">
        <Sidebar />
        <main className="flex-1 w-full lg:ml-64 p-4 md:p-8 pb-24 lg:pb-8">
          <Routes>
            {/* Redireciona a página inicial para o dashboard automaticamente */}
            <Route path="/" element={<Navigate to="/dashboard" replace />} />
            
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/workshop" element={<LiveWorkshop />} />
            <Route path="/clientes" element={<Clientes />} />
            <Route path="/agenda" element={<Appointments />} />
            <Route path="/config" element={<SettingsScreen />} />
            <Route path="/financeiro" element={<CashFlow />} />
            
            {/* Rota de segurança para caso o link esteja errado */}
            <Route path="*" element={<Navigate to="/dashboard" replace />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;