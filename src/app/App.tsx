import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/NavBar';
import { HeroSection } from './components/HeroSection';
import { MemorialPatriarca } from './components/MemorialPatriarca';
import { MethodologySection } from './components/MethodologySection';
import { LeadershipHierarchy } from './components/LeadershipHierarchy';
import { CulturalFundamentals } from './components/CulturalFundamentals';
import { LocationsMap } from './components/LocationsMap';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300">
        <Navbar />
        
        <main className="pt-20"> 
          <Routes>
            <Route path="/" element={<HeroSection />} />
            
            <Route path="/historia" element={
              <>
                <MemorialPatriarca />
                <MethodologySection />
              </>
            } />
            
            <Route path="/fundamentos" element={<CulturalFundamentals />} />
            <Route path="/lideranca" element={<LeadershipHierarchy />} />
            
            {/* CORREÇÃO AQUI: Agora /polos carrega o componente LocationsMap */}
            <Route path="/polos" element={<LocationsMap />} />
            
            {/* Mantendo o /mapa caso você use esse link em algum lugar */}
            <Route path="/mapa" element={<LocationsMap />} />
            
            <Route path="/oficinas" element={<div className="py-40 text-center text-2xl font-bold">Em breve: Oficinas e Eventos</div>} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;