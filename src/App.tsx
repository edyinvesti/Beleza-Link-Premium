import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dashboard from './screens/Dashboard';
import LiveWorkshop from './screens/LiveWorkshop';
import Clientes from './screens/CustomerScreen'; // Nome novo para destravar o build [cite: 2026-01-06]

const Placeholder = ({ title }: { title: string }) => (
  <div className="flex flex-col items-center justify-center h-[80vh] text-zinc-500 animate-pulse">
    <h2 className="text-2xl font-black uppercase tracking-widest">{title}</h2>
    <p className="mt-2 text-zinc-600">Em desenvolvimento... 🚀</p>
  </div>
);

function App() {
  return (
    <Router>
      <div className="flex flex-col lg:flex-row min-h-screen bg-[#09090b] text-zinc-100">
        <Sidebar />
        <main className="flex-1 w-full lg:ml-64 p-4 md:p-8 pb-28 lg:pb-8">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/workshop" element={<LiveWorkshop />} />
            <Route path="/workshop/:id" element={<LiveWorkshop />} />
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