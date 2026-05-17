// src/app/App.tsx
import { useState, useEffect, Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { supabase } from './lib/supabase';
import { ThemeProvider } from './contexts/ThemeContext';
import { Loader2 } from 'lucide-react';

// OBRIGATÓRIOS: Layout e Estrutura Inicial carregam imediatamente
import { Navbar } from './components/NavBar';
import { HeroSection } from './components/HeroSection';
import { BackgroundTexture } from './components/BackgroundTexture';
import { ScrollToTop } from './utils/ScrollToTop'; // Mova a função ScrollToTop para um arquivo utils se preferir, ou deixe no fim do arquivo

// PREGUIÇOSOS (Lazy): Páginas secundárias e administrativas só carregam quando chamadas
const MemorialPatriarca = lazy(() => import('./components/MemorialPatriarca').then(m => ({ default: m.MemorialPatriarca })));
const MethodologySection = lazy(() => import('./components/MethodologySection').then(m => ({ default: m.MethodologySection })));
const CulturalFundamentals = lazy(() => import('./components/CulturalFundamentals').then(m => ({ default: m.CulturalFundamentals })));
const WikiFundamentos = lazy(() => import('./components/WikiFundamentos').then(m => ({ default: m.WikiFundamentos })));
const LocationsMap = lazy(() => import('./components/LocationsMap').then(m => ({ default: m.LocationsMap })));
const Gallery = lazy(() => import('./components/Gallery').then(m => ({ default: m.Gallery })));
const LeaderDetail = lazy(() => import('./components/LeaderDetail').then(m => ({ default: m.LeaderDetail })));
const LeadershipHierarchy = lazy(() => import('./components/LeadershipHierarchy').then(m => ({ default: m.LeadershipHierarchy })));
const Eventos = lazy(() => import('./components/Eventos').then(m => ({ default: m.Eventos })));
const DetalheEvento = lazy(() => import('./components/DetalhesEvento').then(m => ({ default: m.DetalheEvento })));
const Batizados = lazy(() => import('./components/Batizados').then(m => ({ default: m.Batizados })));
const Graduacao = lazy(() => import('./components/Graduacao').then(m => ({ default: m.Graduacao })));

// SISTEMA DE GESTÃO (LAZY)
const Login = lazy(() => import('./components/Login').then(m => ({ default: m.Login })));
const AdminDashboard = lazy(() => import('./components/AdminDashboard').then(m => ({ default: m.AdminDashboard })));
const GraduationManager = lazy(() => import('./components/GraduationManager').then(m => ({ default: m.GraduationManager })));
const StudentProfile = lazy(() => import('./components/StudentProfile').then(m => ({ default: m.StudentProfile })));
const FastAttendance = lazy(() => import('./components/FastAttendance').then(m => ({ default: m.FastAttendance })));
const AdminEventos = lazy(() => import('./components/AdminEventos').then(m => ({ default: m.AdminEventos })));


// Componente Global de Loading
const PageLoader = () => (
  <div className="min-h-[60vh] flex items-center justify-center">
    <Loader2 className="animate-spin text-yellow-500" size={32} />
  </div>
);

// Componente ScrollToTop isolado
function ScrollToTopComponent() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

function App() {
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

  if (authLoading) return <PageLoader />;

  return (
    <ThemeProvider>
      <Router>
        <ScrollToTopComponent />
        <div className="min-h-screen bg-stone-50 dark:bg-gray-950 text-gray-900 dark:text-white transition-colors duration-300 relative overflow-hidden">
          
          <Navbar />
          <BackgroundTexture /> 
          
          <main className="pt-20 relative z-10"> 
            {/* O Suspense segura a tela de carregamento enquanto o pedaço do site é baixado */}
            <Suspense fallback={<PageLoader />}>
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

                {/* --- ROTA DE LOGIN DO APP DE GESTÃO --- */}
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
            </Suspense>
          </main>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;