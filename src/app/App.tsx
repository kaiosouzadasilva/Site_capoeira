import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { supabase } from './lib/supabase';

// Componente auxiliar para forçar a rolagem para o topo a cada mudança de página
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

// Componentes Públicos
import { Navbar } from './components/NavBar';
import { HeroSection } from './components/HeroSection';
import { MemorialPatriarca } from './components/MemorialPatriarca';
import { MethodologySection } from './components/MethodologySection';
import { CulturalFundamentals } from './components/CulturalFundamentals';
import { WikiFundamentos } from './components/WikiFundamentos'; 
import { LocationsMap } from './components/LocationsMap';
import { Gallery } from './components/Gallery';
import { LeaderDetail } from './components/LeaderDetail'; 
import { LeadershipHierarchy } from './components/LeadershipHierarchy'; 
import { Eventos } from './components/Eventos'; 
import { DetalheEvento } from './components/DetalhesEvento'; 
import { Batizados } from './components/Batizados';
import { Graduacao } from './components/Graduacao'; 
import { BackgroundTexture } from './components/BackgroundTexture';

// Componentes do Sistema de Gestão
import { Login } from './components/Login';
import { AdminDashboard } from './components/AdminDashboard';
import { GraduationManager } from './components/GraduationManager';
import { StudentProfile } from './components/StudentProfile';
import { FastAttendance } from './components/FastAttendance';
import { AdminEventos } from './components/AdminEventos';

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme ? savedTheme === 'dark' : true;
  });

  const [session, setSession] = useState<any>(null);
  const [authLoading, setAuthLoading] = useState(true);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setAuthLoading(false);
    });

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    return () => subscription.unsubscribe();
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  if (authLoading) {
    return (
      <div className="min-h-screen bg-stone-50 dark:bg-gray-950 flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-yellow-500"></div>
      </div>
    );
  }

  return (
    <Router>
      <ScrollToTop /> {/* Agora o hook de rolagem roda no sítio certo! */}
      <div className="min-h-screen bg-stone-50 dark:bg-gray-950 text-gray-900 dark:text-white transition-colors duration-300 relative overflow-hidden">
        
        <Navbar />
        <BackgroundTexture /> 
        
        <main className="pt-20 relative z-10"> 
          <Routes>
            {/* --- ROTAS PÚBLICAS --- */}
            <Route path="/" element={<HeroSection />} />
            <Route path="/historia" element={<><MemorialPatriarca /><MethodologySection /></>} />
            <Route path="/fundamentos" element={<CulturalFundamentals />} />
            <Route path="/fundamentos/:categoria/:id" element={<WikiFundamentos />} />
            <Route path="/graduacao" element={<Graduacao />} />
            <Route path="/eventos" element={<Eventos />} /> 
            <Route path="/eventos/:id" element={<DetalheEvento />} /> 
            <Route path="/lideranca" element={<LeadershipHierarchy />} />
            <Route path="/polos" element={<LocationsMap />} />
            <Route path="/galeria" element={<Gallery />} />
            <Route path="/lideranca/:id" element={<LeaderDetail />} /> 
            <Route path="/batizados" element={<Batizados />} />

            {/* --- ROTA DE LOGIN DO APP DE GESTÃO (SECRETA) --- */}
            <Route path="/admin-login" element={!session ? <Login /> : <Navigate to="/admin" />} />

            {/* --- ROTAS PROTEGIDAS DA LIDERANÇA --- */}
            <Route path="/admin" element={session ? <AdminDashboard /> : <Navigate to="/admin-login" />} />
            <Route path="/admin/membros" element={session ? <GraduationManager /> : <Navigate to="/admin-login" />} />
            <Route path="/admin/eventos" element={session ? <AdminEventos /> : <Navigate to="/admin-login" />} />
            <Route path="/admin/aluno/:id" element={session ? <StudentProfile /> : <Navigate to="/admin-login" />} />
            <Route path="/admin/chamada" element={session ? <FastAttendance /> : <Navigate to="/admin-login" />} />

            {/* Redirecionamento padrão */}
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;