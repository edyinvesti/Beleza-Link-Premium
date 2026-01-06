import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Sun, Moon, BellOff } from 'lucide-react';
import { Toaster } from 'sonner';

// Telas
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

// Componentes globais
import BottomNav from './components/BottomNav';
import Sidebar from './components/Sidebar'; // <--- VAMOS ADICIONAR ESTE
import BackHeader from './components/BackHeader';
import SplashScreen from './components/SplashScreen';

// Context e serviços
import { UserProvider } from './contexts/UserContext';
import { getSettings } from './services/database';

const App: React.FC = () => {
  const [isDark, setIsDark] = useState<boolean>(() => getSettings().darkMode ?? false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleSettingsUpdate = (e: any) => {
      if (e.detail && typeof e.detail.darkMode === 'boolean') {
        setIsDark(e.detail.darkMode);
      }
    };
    window.addEventListener('app-settings-updated', handleSettingsUpdate as EventListener);
    return () => window.removeEventListener('app-settings-updated', handleSettingsUpdate as EventListener);
  }, []);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  return (
    <Router>
      <UserProvider>
        <div className="min-h-screen bg-[#09090b] text-white font-sans selection:bg-amber-500 selection:text-black transition-colors duration-500 overflow-x-hidden relative flex">
          
          {/* Splash Screen */}
          {isLoading && <SplashScreen onComplete={() => setIsLoading(false)} />}

          {/* Fundo Glassmorphism */}
          <div className="fixed inset-0 pointer-events-none z-0">
            <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[50%] bg-amber-500/10 blur-[120px] rounded-full animate-pulse" />
            <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[50%] bg-orange-500/10 blur-[120px] rounded-full" />
          </div>

          <Toaster position="top-center" toastOptions={{ className: 'glass-toast' }} />

          {/* SIDEBAR - Aparece apenas em telas grandes (Desktop) */}
          {!isLoading && (
            <div className="hidden lg:block sticky top-0 h-screen z-50">
              <Sidebar />
            </div>
          )}

          {/* Conteúdo principal com ajuste de margem para a Sidebar no Desktop */}
          <div
            className={`flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 relative min-h-screen z-10 flex flex-col ${
              !isLoading ? 'animate-slide-up-settle' : 'opacity-0'
            }`}
          >
            {/* Botão de Tema (posicionado no topo do conteúdo) */}
            <div className="flex justify-end p-6">
               <button
                onClick={() => setIsDark(!isDark)}
                className="size-10 bg-white/5 backdrop-blur-md text-white rounded-full flex items-center justify-center border border-white/10 active:scale-90 transition-all hover:bg-amber-500 hover:text-black"
              >
                {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
            </div>

            <div className="flex-1 pb-24 lg:pb-10"> {/* Padding bottom para o menu mobile */}
              <Routes>
                <Route path="/" element={<Navigate to="/dashboard" replace />} />
                <Route path="/login" element={<LoginScreen />} />
                <Route path="/register" element={<RegisterScreen />} />
                <Route path="/dashboard" element={<Dashboard />} />
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

            {/* BOTTOM NAV - Aparece apenas em telas pequenas (Mobile) */}
            <div className="lg:hidden">
              <BottomNav />
            </div>
          </div>
        </div>
      </UserProvider>
    </Router>
  );
};

export default App;