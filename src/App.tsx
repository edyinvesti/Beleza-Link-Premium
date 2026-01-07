import { HashRouter as Router, Routes, Route, Navigate } from "react-router-dom"; 
import Home from "./screens/Home"; 
import Painel from "./screens/Painel"; 
import Academy from "./screens/Academy"; 

function App() { 
  return ( 
    <Router> 
      <Routes> 
        <Route path="/" element={<Home />} /> 
        <Route path="/painel" element={<Painel />} /> 
        <Route path="/academy" element={<Academy />} /> 
        <Route path="*" element={<Navigate to="/" replace />} /> 
      </Routes> 
    </Router> 
  ); 
} 
export default App;