import React from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Toaster } from 'sonner';

import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import Dashboard from './screens/Dashboard';
import ProductsList from './screens/ProductsList';
import ProductDetail from './screens/ProductDetail';
import SalesList from './screens/SalesList';
import Community from './screens/Community';
import Blog from './screens/Blog';
import Profile from './screens/Profile';
import SaquePix from './screens/SaquePix';
import CRMScreen from './screens/CRMScreen';
import WithdrawSuccess from './screens/WithdrawSuccess';
import LiveWorkshop from './screens/LiveWorkshop';
import SettingsScreen from './screens/SettingsScreen';
import Appointments from './screens/Appointments';
import Clients from './screens/Clients';
import More from './screens/More';
import PremiumSalon from './screens/PremiumSalon';
import CashFlow from './screens/CashFlow';
import Success from './screens/Success';
import Courses from './screens/Courses';

import BottomNav from './components/BottomNav';
import Sidebar from './components/Sidebar';
import { UserProvider } from './contexts/UserContext';

const App: React.FC = () => {
  return (
    <Router>
      <UserProvider>
        <div className="min-h-screen bg-[#09090b] text-white flex">
          <aside className="hidden lg:flex sticky top-0 h-screen"><Sidebar /></aside>
          <main className="flex-1 relative">
            <div className="p-4 pb-24 lg:pb-10">
              <Routes>
                <Route path="/" element={<Navigate to="/dashboard" replace />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/login" element={<LoginScreen />} />
                <Route path="/register" element={<RegisterScreen />} />
                <Route path="/products" element={<ProductsList />} />
                <Route path="/product/:id" element={<ProductDetail />} />
                <Route path="/sales" element={<SalesList />} />
                <Route path="/community" element={<Community />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/appointments" element={<Appointments />} />
                <Route path="/clients" element={<Clients />} />
                <Route path="/more" element={<More />} />
                <Route path="/premium-salon" element={<PremiumSalon />} />
                <Route path="/cash-flow" element={<CashFlow />} />
                <Route path="/courses" element={<Courses />} />
                <Route path="/saque-pix" element={<SaquePix />} />
                <Route path="/crm" element={<CRMScreen />} />
                <Route path="/withdraw-success" element={<WithdrawSuccess />} />
                <Route path="/live/:id" element={<LiveWorkshop />} />
                <Route path="/live" element={<LiveWorkshop />} />
                <Route path="/success" element={<Success />} />
                <Route path="/settings" element={<SettingsScreen />} />
              </Routes>
            </div>
            <div className="lg:hidden"><BottomNav /></div>
          </main>
          <Toaster position="top-center" />
        </div>
      </UserProvider>
    </Router>
  );
};
export default App;