import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Home from './screens/Home';
import Dashboard from './screens/Dashboard';
import Clientes from './screens/Clientes';
import Sidebar from './components/Sidebar';
import { SparklesLoader } from './components/SparklesLoader';

function AppContent() {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <div className="flex min-h-screen bg-black text-white">
      {!isHomePage && <Sidebar />}
      {/* ml-0 para celular (encostado na esquerda) e md:ml-64 para PC */}
      <main className={`flex-1 w-full ${!isHomePage ? 'ml-0 md:ml-64 pb-24 md:pb-0' : ''}`}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/clientes" element={<Clientes />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </main>
    </div>
  );
}

function App() {
  const [isAppLoading, setIsAppLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => setIsAppLoading(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  if (isAppLoading) return <SparklesLoader />;

  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
