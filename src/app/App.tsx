import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

// Importação dos Componentes
import { Navbar } from './components/NavBar';
import { HeroSection } from './components/HeroSection';
import { MemorialPatriarca } from './components/MemorialPatriarca';
import { MethodologySection } from './components/MethodologySection';
import { LeadershipHierarchy } from './components/LeadershipHierarchy';
import { CulturalFundamentals } from './components/CulturalFundamentals';
import { LocationsMap } from './components/LocationsMap';
import { Gallery } from './components/Gallery';
import { GraduationManager } from './components/GraduationManager';
import { StudentDashboard } from './components/StudentDashboard';
import { StudentProfile } from './components/StudentProfile'; // <-- NOVO IMPORT ADICIONADO
import { Login } from './components/login';
// Definição do tipo de Usuário
interface User {
  name: string;
  role: 'mestre' | 'aluno';
}

function App() {
  const [user, setUser] = useState<User | null>(null);
  
  // --- LÓGICA DE TEMA (CLARO/ESCURO) ---
  const [darkMode, setDarkMode] = useState(() => {
    // Tenta pegar a preferência salva no navegador, se não tiver, usa escuro como padrão
    const savedTheme = localStorage.getItem('theme');
    return savedTheme ? savedTheme === 'dark' : true;
  });

  useEffect(() => {
    // Aplica ou remove a classe 'dark' no elemento raiz (HTML)
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  const toggleTheme = () => setDarkMode(!darkMode);

  return (
    <Router>
      {/* A classe 'transition-colors' garante que a mudança entre 
        claro e escuro seja suave (300ms) e não um susto.
      */}
      <div className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-white transition-colors duration-300">
        
        {/* Passamos o estado do tema e a função de trocar para a Navbar.
          Lá na Navbar, você poderá colocar o botão de Sol/Lua.
        */}
        <Navbar darkMode={darkMode} toggleTheme={toggleTheme} userRole={user?.role} />
        
        <main className="pt-20"> 
          <Routes>
            {/* --- ROTAS PÚBLICAS --- */}
            <Route path="/" element={<HeroSection />} />
            
            <Route path="/historia" element={
              <>
                <MemorialPatriarca />
                <MethodologySection />
              </>
            } />
            
            <Route path="/fundamentos" element={<CulturalFundamentals />} />
            <Route path="/lideranca" element={<LeadershipHierarchy />} />
            <Route path="/polos" element={<LocationsMap />} />
            <Route path="/galeria" element={<Gallery />} />
            
            {/* --- ROTA DE LOGIN --- */}
            <Route path="/login" element={<Login onLogin={(u) => setUser(u)} />} />

            {/* --- ROTAS PROTEGIDAS (CONTROLE PEDAGÓGICO) --- */}
            
            <Route 
              path="/admin" 
              element={
                user?.role === 'mestre' ? <GraduationManager /> : <Navigate to="/login" />
              } 
            />

            {/* --- NOVA ROTA: PERFIL DO ALUNO (ÁREA DO MESTRE) --- */}
            <Route 
              path="/admin/aluno/:id" 
              element={
                user?.role === 'mestre' ? <StudentProfile /> : <Navigate to="/login" />
              } 
            />

            <Route 
              path="/meu-progresso" 
              element={
                user?.role === 'aluno' || user?.role === 'mestre' 
                ? <StudentDashboard /> 
                : <Navigate to="/login" />
              } 
            />

            {/* Redirecionamento caso a rota não exista */}
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;