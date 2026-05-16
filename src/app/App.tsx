import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Analytics } from '@vercel/analytics/react';

import { Navbar } from './components/NavBar';
import { HeroSection } from './components/HeroSection';
import { MemorialPatriarca } from './components/MemorialPatriarca';
import { MethodologySection } from './components/MethodologySection';
import { LeadershipHierarchy } from './components/LeadershipHierarchy';
import { CulturalFundamentals } from './components/CulturalFundamentals';
import { WikiFundamentos } from './components/WikiFundamentos'; 
import { LocationsMap } from './components/LocationsMap';
import { Gallery } from './components/Gallery';
import { LeaderDetail } from './components/LeaderDetail'; 
import { Oficinas } from './components/Oficinas'; 
import { Batizados } from './components/Batizados';
import { Graduacao } from './components/Graduacao'; 
import { BackgroundTexture } from './components/BackgroundTexture'; // <-- IMPORTAÇÃO DO EFEITO ADICIONADA AQUI

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme ? savedTheme === 'dark' : true;
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  return (
    <Router>
      {/* Adicionamos as classes "relative overflow-hidden" na div principal 
        para conter a textura absoluta e cobrir a tela inteira corretamente.
      */}
      <div className="min-h-screen bg-stone-50 dark:bg-gray-950 text-gray-900 dark:text-white transition-colors duration-300 relative overflow-hidden">
        
        <Navbar />
        
        {/* APLICADO GLOBALMENTE: Agora o efeito de ondulação se repete em todo o restante do site */}
        <BackgroundTexture /> 
        
        {/* Adicionamos "relative z-10" na tag main para garantir que todo o conteúdo 
          das páginas e rotas flutue perfeitamente por cima do efeito de fundo.
        */}
        <main className="pt-20 relative z-10"> 
          <Routes>
            <Route path="/" element={<HeroSection />} />
            
            <Route path="/historia" element={
              <>
                <MemorialPatriarca />
                <MethodologySection />
              </>
            } />
            
            <Route path="/fundamentos" element={<CulturalFundamentals />} />
            
            <Route path="/fundamentos/:categoria/:id" element={<WikiFundamentos />} />
            
            <Route path="/graduacao" element={<Graduacao />} />
            <Route path="/oficinas" element={<Oficinas />} /> 
            <Route path="/lideranca" element={<LeadershipHierarchy />} />
            <Route path="/polos" element={<LocationsMap />} />
            <Route path="/galeria" element={<Gallery />} />
            <Route path="/lideranca/:id" element={<LeaderDetail />} /> 
            <Route path="/batizados" element={<Batizados />} />

            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </main>
      </div>
      <Analytics />
    </Router>
  );
}

export default App;