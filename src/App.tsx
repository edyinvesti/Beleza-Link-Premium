import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './screens/Dashboard';
import LiveWorkshop from './screens/LiveWorkshop'; // IMPORTANTE: Importar a tela nova

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/dashboard" element={<Dashboard />} />
        
        {/* ADICIONE ESTA LINHA ABAIXO */}
        <Route path="/workshop" element={<LiveWorkshop />} />
        <Route path="/workshop/:id" element={<LiveWorkshop />} />
        
      </Routes>
    </Router>
  );
}

export default App;