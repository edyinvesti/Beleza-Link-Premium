import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dashboard from './screens/Dashboard';
import LiveWorkshop from './screens/LiveWorkshop';

function App() {
  return (
    <Router>
      <div className="flex flex-col lg:flex-row min-h-screen bg-[#09090b]">
        {/* Sidebar: No celular fica embaixo ou some, no PC fica na lateral */}
        <Sidebar />
        
        {/* Conteúdo Principal: Ajusta o recuo (margin) automaticamente */}
        <main className="flex-1 w-full lg:ml-64 p-4 md:p-8 pb-24 lg:pb-8">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/workshop" element={<LiveWorkshop />} />
            <Route path="/workshop/:id" element={<LiveWorkshop />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;