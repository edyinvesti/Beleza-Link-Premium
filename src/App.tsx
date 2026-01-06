import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dashboard from './screens/Dashboard';
import LiveWorkshop from './screens/LiveWorkshop';
import Clientes from './screens/Clients'; // CORRIGIDO: Agora aponta para Clients.tsx [cite: 2026-01-06]

// Telas temporárias para não dar erro enquanto não as criamos
const Placeholder = ({ title }: { title: string }) => (
  <div className="flex items-center justify-center h-[80vh] text-zinc-500">
    <h2 className="text-2xl font-bold">{title} em breve... 🚀</h2>
  </div>
);

function App() {
  return (
    <Router>
      <div className="flex flex-col lg:flex-row min-h-screen bg-[#09090b]">
        {/* Sidebar híbrida: lateral no PC e ícones embaixo no celular [cite: 2026-01-06] */}
        <Sidebar />
        
        <main className="flex-1 w-full lg:ml-64 p-4 md:p-8 pb-24 lg:pb-8">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/workshop" element={<LiveWorkshop />} />
            <Route path="/workshop/:id" element={<LiveWorkshop />} />
            
            {/* Rotas ativadas para os ícones funcionarem [cite: 2026-01-06] */}
            <Route path="/clientes" element={<Clientes />} />
            <Route path="/agenda" element={<Placeholder title="Agenda" />} />
            <Route path="/config" element={<Placeholder title="Ajustes" />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;