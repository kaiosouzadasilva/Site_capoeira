import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { MemorialPatriarca } from './components/MemorialPatriarca';
import { MethodologySection } from './components/MethodologySection';
import { CulturalFundamentals } from './components/CulturalFundamentals';
import { LeadershipHierarchy } from './components/LeadershipHierarchy';
// Importe aqui o seu LocationsMap quando formos fazer a aba de Polos

function App() {
  return (
    <Router>
      <div className="relative bg-white dark:bg-gray-900 transition-colors duration-300 min-h-screen">
        {/* A Navbar fica fora do <Routes> para aparecer em TODAS as abas */}
        <Navbar />

        {/* pt-20 (padding-top) impede que a Navbar fixa cubra o início do seu site */}
        <main className="pt-20">
          <Routes>
            {/* Aba Início */}
            <Route path="/" element={<HeroSection />} />

            {/* Aba Nossa História (Memorial + Árvore Genealógica) */}
            <Route path="/historia" element={
              <>
                <MemorialPatriarca />
                <MethodologySection />
              </>
            } />

            {/* Aba Fundamentos */}
            <Route path="/fundamentos" element={<CulturalFundamentals />} />

            {/* Aba Liderança */}
            <Route path="/lideranca" element={<LeadershipHierarchy />} />

            {/* Abas em construção */}
            <Route path="/oficinas" element={<div className="p-24 text-center text-2xl font-bold dark:text-white">Em breve: Oficinas e Eventos</div>} />
            <Route path="/polos" element={<div className="p-24 text-center text-2xl font-bold dark:text-white">Em breve: Nossos Polos</div>} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;