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
import BackHeader from './components/BackHeader';
import SplashScreen from './components/SplashScreen';

// Context e serviços
import { UserProvider } from './contexts/UserContext';
import { getSettings } from './services/database';

const App: React.FC = () => {
  const [isDark, setIsDark] = useState<boolean>(() => getSettings().darkMode ?? false);
  const [isLoading, setIsLoading] = useState(true);

  // Escuta atualizações de configurações (ex: mudança de tema nas settings)
  useEffect(() => {
    const handleSettingsUpdate = (e: any) => {
      if (e.detail && typeof e.detail.darkMode === 'boolean') {
        setIsDark(e.detail.darkMode);
      }
    };

    window.addEventListener('app-settings-updated', handleSettingsUpdate as EventListener);
    return () => window.removeEventListener('app-settings-updated', handleSettingsUpdate as EventListener);
  }, []);

  // Aplica/remover classe dark no html
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
        <div className="min-h-screen bg-[#09090b] text-white font-sans selection:bg-pink-500 selection:text-white transition-colors duration-500 overflow-x-hidden relative flex justify-center">
          {/* Splash Screen */}
          {isLoading && <SplashScreen onComplete={() => setIsLoading(false)} />}

          {/* Fundo Glassmorphism */}
          <div className="fixed inset-0 pointer-events-none z-0">
            <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[50%] bg-pink-500/10 blur-[120px] rounded-full animate-pulse" />
            <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[50%] bg-purple-500/10 blur-[120px] rounded-full" />
            <div className="absolute top-[30%] right-[10%] w-[30%] h-[30%] bg-blue-500/5 blur-[100px] rounded-full" />
          </div>

          {/* Toaster personalizado */}
          <Toaster
            position="top-center"
            toastOptions={{
              className: 'glass-toast',
              style: {
                background: 'rgba(24, 24, 27, 0.8)',
                backdropFilter: 'blur(12px)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                color: '#ffffff',
                borderRadius: '1.25rem',
                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
                textShadow: '0 1px 2px rgba(0,0,0,0.5)',
              },
            }}
          />

          {/* Botão flutuante de toggle dark mode */}
          <button
            onClick={() => setIsDark(!isDark)}
            className="fixed top-6 right-6 z-[100] size-10 bg-white/5 backdrop-blur-md text-white rounded-full flex items-center justify-center border border-white/10 active:scale-90 transition-all group"
          >
            {isDark ? <Sun className="w-5 h-5 shadow-sm" /> : <Moon className="w-5 h-5 shadow-sm" />}
          </button>

          {/* Conteúdo principal */}
          <div
            className={`w-full max-w-7xl mx-auto px-4 sm:px-6 relative min-h-screen z-10 flex flex-col items-center ${
              !isLoading ? 'animate-slide-up-settle' : 'opacity-0'
            }`}
          >
            <Routes>
              {/* Redirecionamento inicial */}
              <Route path="/" element={<Navigate to="/login" replace />} />

              {/* Autenticação */}
              <Route path="/login" element={<LoginScreen />} />
              <Route path="/register" element={<RegisterScreen />} />

              {/* Telas principais */}
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

              {/* Fluxos específicos */}
              <Route path="/saque-pix" element={<SaquePix />} />
              <Route path="/crm" element={<CRMScreen />} />
              <Route path="/withdraw-success" element={<WithdrawSuccess />} />
              <Route path="/live/:id" element={<LiveWorkshop />} />
              <Route path="/live" element={<LiveWorkshop />} />
              <Route path="/success" element={<Success />} />

              {/* Utilitárias */}
              <Route
                path="/notifications"
                element={
                  <div className="pb-24">
                    <BackHeader title="Notificações" />
                    <div className="flex flex-col items-center justify-center pt-20 px-10 text-center">
                      <BellOff className="w-16 h-16 text-zinc-200 dark:text-zinc-800 mb-4" />
                      <p className="text-zinc-400 font-medium text-sm">
                        Nenhuma notificação por aqui ainda.
                      </p>
                    </div>
                  </div>
                }
              />
              <Route path="/settings" element={<SettingsScreen />} />
            </Routes>

            {/* Bottom Navigation - escondida em algumas telas */}
            <BottomNav />
          </div>
        </div>
      </UserProvider>
    </Router>
  );
};

export default App;
