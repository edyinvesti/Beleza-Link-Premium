import { useState } from 'react';
import { Lock } from 'lucide-react';

export default function LockScreen({ onUnlock }: { onUnlock: () => void }) {
  const [password, setPassword] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setTimeout(() => {
      if (password === '1234') {
        window.sessionStorage.setItem('is_authenticated', 'true');
        onUnlock();
      }
    }, 500);
  };

  return (
    <div className="fixed inset-0 z-[200] bg-black flex items-center justify-center p-4">
      <div className="w-full max-w-sm space-y-8 text-center">
        <Lock className="text-amber-500 mx-auto" size={48} />
        <h1 className="text-2xl font-black text-white uppercase tracking-tighter">Acesso Restrito</h1>
        <form onSubmit={handleLogin} className="space-y-4">
          <input
            type="password"
            placeholder="Senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full bg-zinc-900 border border-white/10 p-5 rounded-3xl text-center text-white outline-none focus:border-amber-500"
          />
          <button type="submit" className="w-full bg-amber-500 text-black font-black py-5 rounded-3xl uppercase text-xs tracking-widest">
            Entrar
          </button>
        </form>
      </div>
    </div>
  );
}
