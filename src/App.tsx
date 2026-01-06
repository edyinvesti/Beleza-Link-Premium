import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar'; // Verifique se o caminho está correto
import Dashboard from './screens/Dashboard';
import LiveWorkshop from './screens/LiveWorkshop';

function App() {
  return (
    <Router>
      <div className="flex min-h-screen bg-[#09090b]">
        {/* A Sidebar volta a aparecer aqui */}
        <Sidebar />
        
        <main className="flex-1 lg:ml-64 p-4 md:p-8">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/workshop" element={<LiveWorkshop />} />
            <Route path="/workshop/:id" element={<LiveWorkshop />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;