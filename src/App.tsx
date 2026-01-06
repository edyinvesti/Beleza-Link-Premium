import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';

// Verifique se os arquivos na pasta se chamam exatamente assim:
import Dashboard from './screens/Dashboard'; 
import LiveWorkshop from './screens/LiveWorkshop'; 
import Clientes from './screens/Clientes'; 
import Appointments from './screens/Appointments';

function App() {
  return (
    <Router>
      <div className="flex flex-col lg:flex-row min-h-screen bg-[#09090b]">
        <Sidebar />
        <main className="flex-1 w-full lg:ml-64 p-4 md:p-8 pb-24 lg:pb-8">
          <Routes>
            {/* Rota Raiz (Início) */}
            <Route path="/" element={<Dashboard />} />
            <Route path="/dashboard" element={<Dashboard />} />
            
            {/* Rota da Live */}
            <Route path="/workshop" element={<LiveWorkshop />} />
            
            {/* Outras Rotas */}
            <Route path="/clientes" element={<Clientes />} />
            <Route path="/agenda" element={<Appointments />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;