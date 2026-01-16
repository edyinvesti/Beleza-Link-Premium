import BackHeader from "../components/BackHeader";
export default function CRM() {
  return (
    <div className="min-h-screen bg-black text-white">
      <BackHeader title="CRM VIP" />
      <div className="p-8">
        <h1 className="text-4xl font-black uppercase text-[#F97316]">Gestão de Clientes</h1>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 bg-zinc-900 border border-white/5 rounded-3xl">
            <p className="text-zinc-500 uppercase text-xs font-bold">Total de Clientes</p>
            <h2 className="text-3xl font-black">1.248</h2>
          </div>
          <div className="p-6 bg-zinc-900 border border-white/5 rounded-3xl">
            <p className="text-zinc-500 uppercase text-xs font-bold">Fidelização</p>
            <h2 className="text-3xl font-black text-green-500">85%</h2>
          </div>
        </div>
      </div>
    </div>
  );
}
