// Esta é a linha que está sublinhada (Linha 1) [cite: 2026-01-06]
import { HashRouter as Router, Routes, Route } from 'react-router-dom'; 

import Sidebar from './components/Sidebar';
import Dashboard from './screens/Dashboard';
import Clientes from './screens/Clientes'; 
import Appointments from './screens/Appointments';

function App() {
  return (
    // Se você NÃO usar <Router>, <Routes> e <Route> aqui embaixo, o erro aparece [cite: 2026-01-06]
    <Router>
      <div className="flex min-h-screen bg-[#09090b]">
        <Sidebar />
        <main className="flex-1 lg:ml-64 p-4">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/clientes" element={<Clientes />} />
            <Route path="/agenda" element={<Appointments />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;