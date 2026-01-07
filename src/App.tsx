import { HashRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Home from "./screens/Home";
import Painel from "./screens/Painel";
import Agenda from "./screens/Agenda";
import Financeiro from "./screens/Financeiro";
import Community from "./screens/Community";
import MORE from "./screens/More";
import CLIENTES from "./screens/Clientes";
import CRM from "./screens/CRM";
import Academy from "./screens/Academy";
import Blog from "./screens/Blog";
import Post from "./screens/Post";
import LockScreen from "./components/LockScreen";
import Layout from "./components/Layout";

function App() {
    const [flash, setFlash] = useState(true);
    const [autenticado, setAutenticado] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setFlash(false), 1800);
        const auth = sessionStorage.getItem("is_authenticated");
        if (auth === "true") setAutenticado(true);
        return () => clearTimeout(timer);
    }, []);

    if (flash) {
        return (
            <div className="min-h-screen bg-black flex items-center justify-center overflow-hidden">
                <div className="relative">
                    <div className="absolute inset-0 bg-amber-500/20 blur-[100px] animate-pulse rounded-full"></div>
                    <div className="relative animate-[flashZoom_1.5s_ease-out_forwards] flex flex-col items-center">
                        <span className="text-4xl md:text-6xl font-black italic tracking-tighter text-white uppercase">
                            BELEZA <span className="text-amber-500 drop-shadow-[0_0_30px_rgba(245,158,11,0.8)]">LINK</span>
                        </span>
                        <div className="mt-4 flex gap-1">
                            <div className="w-1 h-1 bg-amber-500 rounded-full animate-bounce"></div>
                            <div className="w-1 h-1 bg-amber-500 rounded-full animate-bounce [animation-delay:0.2s]"></div>
                            <div className="w-1 h-1 bg-amber-500 rounded-full animate-bounce [animation-delay:0.4s]"></div>
                        </div>
                    </div>
                </div>
                <style>{`
          @keyframes flashZoom {
            0% { opacity: 0; transform: scale(0.8); filter: blur(10px); }
            50% { opacity: 1; filter: blur(0px); }
            100% { opacity: 0; transform: scale(1.1); filter: blur(5px); }
          }
        `}</style>
            </div>
        );
    }

    const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
        if (!autenticado) {
            return (
                <LockScreen onUnlock={() => {
                    setAutenticado(true);
                    sessionStorage.setItem("is_authenticated", "true");
                }} />
            );
        }
        return <Layout>{children}</Layout>;
    };

    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />

                <Route path="/painel" element={<ProtectedRoute><Painel /></ProtectedRoute>} />
                <Route path="/agenda" element={<ProtectedRoute><Agenda /></ProtectedRoute>} />
                <Route path="/financeiro" element={<ProtectedRoute><Financeiro /></ProtectedRoute>} />
                <Route path="/community" element={<ProtectedRoute><Community /></ProtectedRoute>} />
                <Route path="/clientes" element={<ProtectedRoute><CLIENTES /></ProtectedRoute>} />
                <Route path="/more" element={<ProtectedRoute><MORE /></ProtectedRoute>} />
                <Route path="/crm" element={<ProtectedRoute><CRM /></ProtectedRoute>} />
                <Route path="/academy" element={<ProtectedRoute><Academy /></ProtectedRoute>} />
                <Route path="/blog" element={<ProtectedRoute><Blog /></ProtectedRoute>} />
                <Route path="/post/:id" element={<ProtectedRoute><Post /></ProtectedRoute>} />

                {/* Redirect aliases for consistency */}
                <Route path="/Painel" element={<Navigate to="/painel" replace />} />

                <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
        </Router>
    );
}

export default App;