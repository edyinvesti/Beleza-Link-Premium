import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { useState } from 'react';
import Home from './screens/Home';
import Dashboard from './screens/Dashboard';
import Clientes from './screens/Clientes';
import Agenda from './screens/Agenda';
import Financeiro from './screens/Financeiro';
import Blog from './screens/Blog';
import Post from './screens/Post';
import LiveWorkshop from './screens/LiveWorkshop';
import CRMScreen from './screens/CRM';
import Community from './screens/Community';
import More from './screens/More';
import Sidebar from './components/Sidebar';
import Splash from './components/Splash';

function AppContent() {
  const location = useLocation();
  const [showSplash, setShowSplash] = useState(true);
  
  const isHomePage = location.pathname === '/';
  const isLivePage = location.pathname.includes('/live');

  if (showSplash) {
    return <Splash onFinish={() => setShowSplash(false)} />;
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {!isHomePage && !isLivePage && <Sidebar />}
      
      <main className={`w-full ${(!isHomePage && !isLivePage) ? 'md:pl-64 pb-24' : ''}`}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/clientes" element={<Clientes />} />
          <Route path="/agenda" element={<Agenda />} />
          <Route path="/financeiro" element={<Financeiro />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/post/:id" element={<Post />} />
          <Route path="/live" element={<LiveWorkshop />} />
          <Route path="/crm" element={<CRMScreen />} />
          <Route path="/community" element={<Community />} />
          <Route path="/more" element={<More />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </main>
    </div>
  );
}

export default function App() {
  return (
    <Router basename="/Beleza-Link-Premium">
      <AppContent />
    </Router>
  );
}
