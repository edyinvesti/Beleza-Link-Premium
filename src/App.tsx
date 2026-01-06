import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './screens/Home';
import Dashboard from './screens/Dashboard';
import Clientes from './screens/Clientes';
import { SparklesLoader } from './components/SparklesLoader';

function App() {
  const [isAppLoading, setIsAppLoading] = useState(true);

  useEffect(() => {
    // Simula o tempo de carregamento dos bancos digitais (2.5 segundos)
    const timer = setTimeout(() => {
      setIsAppLoading(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  if (isAppLoading) {
    return <SparklesLoader />;
  }

  return (
    <Router>
      <div className="min-h-screen bg-black text-white selection:bg-amber-500/30">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/clientes" element={<Clientes />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
