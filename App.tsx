
import React from 'react';
import { HashRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import Home from './screens/Home';
import Wallet from './screens/Wallet';
import Products from './screens/Products';
import Community from './screens/Community';
import Profile from './screens/Profile';
import LiveWorkshop from './screens/LiveWorkshop';
import Success from './screens/Success';
import Courses from './screens/Courses';
import Appointments from './screens/Appointments';
import Clients from './screens/Clients';
import More from './screens/More';
import PremiumSalon from './screens/PremiumSalon';
import CashFlow from './screens/CashFlow';

const BottomNav = () => {
  const location = useLocation();
  const path = location.pathname;

  const NavLink = ({ to, icon, label }: { to: string, icon: string, label: string }) => {
    const isActive = path === to;
    return (
      <Link to={to} className={`flex flex-col items-center gap-1 transition-colors ${isActive ? 'text-primary' : 'text-gray-400'}`}>
        <span className={`material-symbols-outlined ${isActive ? 'filled' : ''}`}>{icon}</span>
        <span className="text-[10px] font-bold">{label}</span>
      </Link>
    );
  };

  if (['/live', '/success', '/cash-flow'].includes(path)) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white dark:bg-surface-dark border-t border-gray-100 dark:border-gray-800 px-4 py-2 pb-5 z-50">
      <nav className="flex justify-between items-center max-w-md mx-auto w-full">
        <NavLink to="/" icon="dashboard" label="Home" />
        <NavLink to="/appointments" icon="calendar_month" label="Agenda" />
        <NavLink to="/clients" icon="person_search" label="Clientes" />
        <NavLink to="/products" icon="store" label="Loja" />
        <NavLink to="/more" icon="menu" label="Mais" />
      </nav>
    </div>
  );
};

export default function App() {
  return (
    <HashRouter>
      <div className="max-w-md mx-auto min-h-screen bg-background-light dark:bg-background-dark relative pb-20">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/appointments" element={<Appointments />} />
          <Route path="/clients" element={<Clients />} />
          <Route path="/products" element={<Products />} />
          <Route path="/wallet" element={<Wallet />} />
          <Route path="/cash-flow" element={<CashFlow />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/community" element={<Community />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/more" element={<More />} />
          <Route path="/premium-salon" element={<PremiumSalon />} />
          <Route path="/live" element={<LiveWorkshop />} />
          <Route path="/success" element={<Success />} />
        </Routes>
        <BottomNav />
      </div>
    </HashRouter>
  );
}
