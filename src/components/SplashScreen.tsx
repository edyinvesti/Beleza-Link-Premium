import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function SplashScreen({ onFinish }: { onFinish: () => void }) {
  const [isStarted, setIsStarted] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  const handleStart = () => {
    setIsStarted(true);
    const audio = new Audio("https://assets.mixkit.co/active_storage/sfx/2573/2573-preview.mp3");
    audio.volume = 0.9;
    audio.play().catch(e => console.error("Erro ao tocar áudio:", e));

    setTimeout(() => {
      setIsVisible(false);
      setTimeout(onFinish, 1000);
    }, 7000);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div 
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-black overflow-hidden"
          exit={{ opacity: 0, scale: 1.1, filter: "brightness(2)" }}
          transition={{ duration: 1 }}
        >
          {!isStarted ? (
            <motion.button
              onClick={handleStart}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              whileHover={{ scale: 1.05 }}
              className="flex flex-col items-center group"
            >
              <div className="w-24 h-24 mb-6 border-2 border-[#F97316] rounded-full flex items-center justify-center relative">
                <div className="absolute inset-0 rounded-full bg-[#F97316]/20 animate-ping" />
                <svg width="30" height="30" viewBox="0 0 24 24" fill="none">
                  <path d="M5 3L19 12L5 21V3Z" fill="#F97316" />
                </svg>
              </div>
              <span className="text-white font-light tracking-[0.5em] uppercase text-[12px]">
                Entrar na Experiência
              </span>
            </motion.button>
          ) : (
            <div className="relative flex flex-col items-center text-center">
              <div className="relative w-64 h-64 flex items-center justify-center">
                <svg width="280" height="280" viewBox="0 0 100 100">
                  <motion.path 
                    d="M40 25C30 45 50 60 30 85" stroke="#F97316" strokeWidth="4" strokeLinecap="round" fill="none"
                    initial={{ pathLength: 0, rotate: -220, opacity: 0 }}
                    animate={{ pathLength: 1, rotate: 0, opacity: 1 }}
                    transition={{ duration: 4, ease: [0.16, 1, 0.3, 1] }}
                  />
                  <motion.path 
                    d="M60 15C50 35 70 50 50 75" stroke="#F97316" strokeWidth="4" strokeLinecap="round" fill="none"
                    initial={{ pathLength: 0, rotate: 220, opacity: 0 }}
                    animate={{ pathLength: 1, rotate: 0, opacity: 1 }}
                    transition={{ duration: 4, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  />
                  <motion.path 
                    d="M50 20C40 40 60 55 40 80" stroke="#F97316" strokeWidth="4" strokeLinecap="round" fill="none"
                    initial={{ pathLength: 0, opacity: 0, y: 30 }}
                    animate={{ pathLength: 1, opacity: 1, y: 0 }}
                    transition={{ duration: 2, delay: 3.5 }}
                  />
                </svg>
                <motion.div 
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: [0, 1, 0], scale: [0.5, 2.5, 3] }}
                  transition={{ delay: 4.5, duration: 1.5 }}
                  className="absolute inset-0 bg-[#F97316] rounded-full blur-[100px] -z-10"
                />
              </div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 2, delay: 4.8 }}
              >
                <h1 className="text-5xl font-extralight text-white uppercase tracking-[0.6em]">
                  BELEZA <span style={{ color: "#F97316" }} className="font-bold">LINK</span>
                </h1>
                <motion.p 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 5.5, duration: 1.5 }}
                  className="mt-6 text-[10px] text-zinc-500 tracking-[0.4em] uppercase font-medium"
                >
                  Sempre ao lado do profissional
                </motion.p>
              </motion.div>
            </div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}