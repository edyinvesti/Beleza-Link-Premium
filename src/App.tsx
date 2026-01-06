import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dashboard from './screens/Dashboard';
import LiveWorkshop from './screens/LiveWorkshop';
import Clientes from './screens/Clientes'; // Importe a tela de clientes que criamos

// Telas temporárias para não dar erro enquanto não as criamos
const Placeholder = ({ title }: { title: string }) => (
  <div className="flex items-center justify-center h-full text-zinc-500">
    <h2 className="text-2xl font-bold">{title} em breve... 🚀</h2>
  </div>
);

function App() {
  return (
    <Router>
      <div className="flex flex-col lg:flex-row min-h-screen bg-[#09090b]">
        {/* Nossa Sidebar híbrida (Lateral no PC / Baixo no Celular) */}
        <Sidebar />
        
        <main className="flex-1 w-full lg:ml-64 p-4 md:p-8 pb-24 lg:pb-8">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/workshop" element={<LiveWorkshop />} />
            <Route path="/workshop/:id" element={<LiveWorkshop />} />
            
            {/* AGORA OS LINKS VÃO FUNCIONAR: */}
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