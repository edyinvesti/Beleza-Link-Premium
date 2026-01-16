import BackHeader from "../components/BackHeader";
export default function Geo() {
  return (
    <div className="min-h-screen bg-black text-white">
      <BackHeader title="Geolocalização" />
      <div className="p-6">
        <h1 className="text-4xl font-black uppercase italic text-[#F97316]">Geolocalização</h1>
        <p className="text-zinc-500 mt-4 uppercase font-bold tracking-widest text-xs">Mapa de Calor em breve...</p>
      </div>
    </div>
  );
}
