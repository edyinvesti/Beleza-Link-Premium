import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function SplashScreen({ onFinish }: { onFinish: () => void }) {
  const [isStarted, setIsStarted] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  const handleStart = () => {
    setIsStarted(true);
    const audio = new Audio("https://assets.mixkit.co/active_storage/sfx/2573/2573-preview.mp3");
    audio.volume = 0.9;
    audio.play().catch(e => console.error("Erro:", e));

    setTimeout(() => {
      setIsVisible(false);
      setTimeout(onFinish, 1000);
    }, 2500); // 2.5s Turbo
  };

  const slogan = "Sempre ao lado do profissional";

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div 
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-black overflow-hidden"
          exit={{ opacity: 0, scale: 1.1, filter: "brightness(2)" }}
          transition={{ duration: 0.8 }}
        >
          {!isStarted ? (
            <motion.button onClick={handleStart} className="flex flex-col items-center bg-transparent border-none cursor-pointer">
              <div className="w-24 h-24 mb-6 border-2 border-[#F97316] rounded-full flex items-center justify-center relative">
                <div className="absolute inset-0 rounded-full bg-[#F97316]/20 animate-ping" />
                <svg width="30" height="30" viewBox="0 0 24 24" fill="none"><path d="M5 3L19 12L5 21V3Z" fill="#F97316" /></svg>
              </div>
              <span className="text-white font-light tracking-[0.5em] uppercase text-[12px]">Entrar na Experiência</span>
            </motion.button>
          ) : (
            <div className="relative flex flex-col items-center text-center">
              <div className="relative w-64 h-64 flex items-center justify-center">
                <svg width="280" height="280" viewBox="0 0 100 100">
                  <motion.path d="M40 25C30 45 50 60 30 85" stroke="#F97316" strokeWidth="4" strokeLinecap="round" fill="none"
                    initial={{ pathLength: 0, opacity: 0 }} animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ duration: 0.8 }} />
                  <motion.path d="M60 15C50 35 70 50 50 75" stroke="#F97316" strokeWidth="4" strokeLinecap="round" fill="none"
                    initial={{ pathLength: 0, opacity: 0 }} animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.1 }} />
                  <motion.path d="M50 20C40 40 60 55 40 80" stroke="#F97316" strokeWidth="4" strokeLinecap="round" fill="none"
                    initial={{ pathLength: 0, opacity: 0 }} animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.4 }} />
                </svg>
                
                <motion.div 
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: [0, 1, 0], scale: [0.5, 2.8, 3.5] }}
                  transition={{ delay: 0.8, duration: 1.2 }}
                  className="absolute inset-0 bg-[#F97316] rounded-full blur-[110px] -z-10"
                />
              </div>

              <motion.div 
                initial={{ opacity: 0, y: 15 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ delay: 1, duration: 0.8 }}
                className="mt-[-20px]"
              >
                <h1 className="text-4xl font-extralight text-white uppercase tracking-[0.6em] ml-[0.6em]">
                  BELEZA <span className="text-[#F97316] font-black">LINK</span>
                </h1>
                
                <motion.div 
                  className="flex justify-center mt-4 overflow-hidden"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.2 }}
                >
                  {slogan.split("").map((char, index) => (
                    <motion.span
                      key={index}
                      initial={{ opacity: 0, y: 10, filter: "blur(5px)" }}
                      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                      transition={{ 
                        delay: 1.2 + (index * 0.03), 
                        duration: 0.5,
                        ease: "easeOut"
                      }}
                      className="text-[#F97316] text-[10px] font-bold uppercase italic inline-block"
                      style={{ whiteSpace: char === " " ? "pre" : "normal", letterSpacing: "0.3em" }}
                    >
                      {char}
                    </motion.span>
                  ))}
                </motion.div>
              </motion.div>
            </div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}