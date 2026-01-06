import { useState } from 'react';
import { Lock, ShieldCheck, Loader2 } from 'lucide-react';

export default function LockScreen({ onUnlock }: { onUnlock: () => void }) {
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
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
      <div className="w-full max-w-sm space-y-8 text-center text-white">
        <Lock className="text-amber-500 mx-auto" size={40} />
        <h1 className="text-2xl font-black">Acesso Restrito</h1>
        <form onSubmit={handleLogin} className="space-y-4">
          <input 
            type="password" 
            placeholder="Senha" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full bg-zinc-900 border border-white/10 p-4 rounded-2xl text-center outline-none focus:border-amber-500"
          />
          <button type="submit" className="w-full bg-white text-black font-black py-4 rounded-2xl">
            {loading ? <Loader2 className="animate-spin mx-auto" /> : 'ENTRAR'}
          </button>
        </form>
      </div>
    </div>
  );
}
