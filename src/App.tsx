import { useState } from "react";
import { HashRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import SplashScreen from "./components/SplashScreen";
import Sidebar from "./components/Sidebar";
import { motion, AnimatePresence } from "framer-motion";
import { Lock, User } from "lucide-react";

export default function App() {
  const [showSplash, setShowSplash] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  if (showSplash) {
    return <SplashScreen onFinish={() => setShowSplash(false)} />;
  }

  return (
    <Router>
      <div className="min-h-screen bg-[#0a0a0a] text-white">
        <AnimatePresence mode="wait">
          {!isLoggedIn ? (
            /* TELA DE ENTRADA COM O CADEADO RESTAURADO */
            <motion.div 
              key="login"
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              exit={{ opacity: 0, y: -20 }}
              className="h-screen flex items-center justify-center p-4 relative overflow-hidden"
            >
              {/* Efeito de luz de fundo */}
              <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-[#F97316]/10 blur-[120px] rounded-full" />
              
              <div className="w-full max-w-md z-10 text-center">
                <motion.div 
                  initial={{ scale: 0.8 }}
                  animate={{ scale: 1 }}
                  className="inline-block p-4 rounded-2xl bg-gradient-to-b from-zinc-800 to-transparent mb-6 border border-zinc-800"
                >
                  <div className="w-16 h-16 bg-[#F97316] rounded-xl flex items-center justify-center shadow-[0_0_30px_rgba(249,115,22,0.3)]">
                    <Lock className="text-black" size={32} />
                  </div>
                </motion.div>

                <h1 className="text-4xl font-light tracking-[0.3em] uppercase mb-2">
                  BELEZA <span className="font-bold text-[#F97316]">LINK</span>
                </h1>
                <p className="text-zinc-500 text-xs mt-4 tracking-[0.2em] uppercase font-medium mb-12">Acesso ao Sistema de Gestão</p>

                <div className="space-y-4 text-left">
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500" size={18} />
                    <input type="text" placeholder="USUÁRIO" className="w-full bg-zinc-900/50 border border-zinc-800 p-4 pl-12 rounded-xl focus:border-[#F97316] focus:outline-none transition-all text-sm tracking-widest uppercase" />
                  </div>
                  <div className="relative">
                    <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500" size={18} />
                    <input type="password" placeholder="SENHA" className="w-full bg-zinc-900/50 border border-zinc-800 p-4 pl-12 rounded-xl focus:border-[#F97316] focus:outline-none transition-all text-sm tracking-widest uppercase" />
                  </div>
                  
                  <motion.button 
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setIsLoggedIn(true)}
                    className="w-full bg-[#F97316] text-black font-bold py-4 rounded-xl shadow-[0_10px_20px_rgba(249,115,22,0.2)] hover:shadow-[0_15px_30px_rgba(249,115,22,0.4)] transition-all uppercase tracking-[0.2em]"
                  >
                    Entrar no Sistema
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ) : (
            /* DASHBOARD COM A SIDEBAR PROFISSIONAL */
            <div className="flex h-screen">
              <Sidebar />
              <main className="flex-1 md:ml-64 p-8 overflow-y-auto">
                <Routes>
                  <Route path="/painel" element={
                    <div>
                      <h2 className="text-zinc-500 text-xs uppercase tracking-widest mb-1">Dashboard Executivo</h2>
                      <h1 className="text-3xl font-bold">Bem-vindo, Administrador</h1>
                    </div>
                  } />
                  <Route path="/clientes" element={<h1 className="text-3xl font-bold">Gestão de Clientes</h1>} />
                  <Route path="*" element={<Navigate to="/painel" />} />
                </Routes>
              </main>
            </div>
          )}
        </AnimatePresence>
      </div>
    </Router>
  );
}