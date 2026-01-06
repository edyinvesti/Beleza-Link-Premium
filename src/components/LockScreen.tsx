import { useState } from 'react';
import { Lock, ShieldCheck, Loader2 } from 'lucide-react';

const LockScreen = ({ onUnlock }: { onUnlock: () => void }) => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Defina sua senha aqui (Ex: 1234)
    if (password === '1234') {
      sessionStorage.setItem('is_authenticated', 'true');
      onUnlock();
    } else {
      setError(true);
      setTimeout(() => setError(false), 2000);
    }
    setLoading(false);
  };

  return (
    <div className="fixed inset-0 z-[100] bg-black flex items-center justify-center p-4">
      <div className="w-full max-w-sm space-y-8 text-center">
        <div className="flex justify-center">
          <div className="bg-amber-500/10 p-5 rounded-full border border-amber-500/20">
            <Lock className="text-amber-500" size={40} />
          </div>
        </div>
        
        <div className="space-y-2">
          <h1 className="text-2xl font-black text-white">Acesso Restrito</h1>
          <p className="text-zinc-500 text-sm italic font-medium">Beleza Link Premium</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-4">
          <input 
            type="password" 
            placeholder="Digite sua senha" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={w-full bg-zinc-900 border  p-4 rounded-2xl text-center text-white outline-none focus:border-amber-500 transition-all}
          />
          {error && <p className="text-red-500 text-xs font-bold uppercase">Senha Incorreta</p>}
          
          <button type="submit" className="w-full bg-white text-black font-black py-4 rounded-2xl flex items-center justify-center gap-2 hover:bg-zinc-200">
            {loading ? <Loader2 className="animate-spin" /> : <><ShieldCheck size={20} /> ENTRAR NO SISTEMA</>}
          </button>
        </form>
      </div>
    </div>
  );
};

export default LockScreen;
