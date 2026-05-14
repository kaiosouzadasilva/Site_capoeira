import { useState } from 'react';
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
import { Login } from './components/Login';

// Definição do tipo de Usuário
interface User {
  name: string;
  role: 'mestre' | 'aluno';
}

function App() {
  const [user, setUser] = useState<User | null>(null);

  return (
    <Router>
      <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300">
        {/* Passamos o papel do usuário para a Navbar ajustar os links */}
        <Navbar />
        
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
            
            {/* Área do Mestre: Só entra se for 'mestre' */}
            <Route 
              path="/admin" 
              element={
                user?.role === 'mestre' ? <GraduationManager /> : <Navigate to="/login" />
              } 
            />

            {/* Área do Aluno: Aluno vê o dele, Mestre também pode ver para avaliar */}
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