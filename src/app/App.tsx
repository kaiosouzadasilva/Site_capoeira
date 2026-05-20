// src/app/App.tsx
import { useState, useEffect, Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { supabase } from './lib/supabase';
import { Session } from '@supabase/supabase-js'; 
import { ThemeProvider } from './contexts/ThemeContext';
import { Loader2 } from 'lucide-react';

// 👇 CORREÇÃO: No Vite (React puro), o import correto é do pacote '/react'
import { Analytics } from "@vercel/analytics/react";

import { Navbar } from './components/NavBar';
import { HeroSection } from './components/HeroSection';
import { BackgroundTexture } from './components/BackgroundTexture';
import { ToastProvider } from './components/Toast';
import { ScrollToTop } from './utils/ScrollToTop';

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

// 👇 CORRIGIDO: Nome do ficheiro no singular sem o "s" no final para não dar tela branca
const DetalhesOficina = lazy(() => import('./components/DetalhesOficina').then(m => ({ default: m.DetalhesOficina })));

const Login = lazy(() => import('./components/Login').then(m => ({ default: m.Login })));
const AdminDashboard = lazy(() => import('./components/AdminDashboard').then(m => ({ default: m.AdminDashboard })));
const GraduationManager = lazy(() => import('./components/GraduationManager').then(m => ({ default: m.GraduationManager })));
const StudentProfile = lazy(() => import('./components/StudentProfile').then(m => ({ default: m.StudentProfile })));
const FastAttendance = lazy(() => import('./components/FastAttendance').then(m => ({ default: m.FastAttendance })));
const AdminEventos = lazy(() => import('./components/AdminEventos').then(m => ({ default: m.AdminEventos })));

const PageLoader = () => (
  <div className="min-h-[60vh] flex items-center justify-center">
    <Loader2 className="animate-spin text-yellow-500" size={32} />
  </div>
);

function ScrollToTopComponent() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

function App() {
  const [session, setSession] = useState<Session | null>(null);
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

  return (
    <ThemeProvider>
      <Router>
        <ScrollToTopComponent />
        <ToastProvider>
        <div className="min-h-screen bg-stone-50 dark:bg-gray-950 text-gray-900 dark:text-white transition-colors duration-300 relative overflow-hidden">
          
          <Navbar />
          <BackgroundTexture /> 
          
          <main className="pt-20 relative z-10"> 
            <Suspense fallback={<PageLoader />}>
              <Routes>
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
                <Route path="/oficinas/:id" element={<DetalhesOficina />} />

                {/* --- ROTA DE LOGIN --- */}
                <Route path="/admin-login" element={!session ? <Login /> : <Navigate to="/admin" />} />

                {/* --- ROTAS PROTEGIDAS --- */}
                <Route path="/admin" element={authLoading ? <PageLoader /> : session ? <AdminDashboard /> : <Navigate to="/admin-login" />} />
                <Route path="/admin/membros" element={authLoading ? <PageLoader /> : session ? <GraduationManager /> : <Navigate to="/admin-login" />} />
                <Route path="/admin/eventos" element={authLoading ? <PageLoader /> : session ? <AdminEventos /> : <Navigate to="/admin-login" />} />
                <Route path="/admin/aluno/:id" element={authLoading ? <PageLoader /> : session ? <StudentProfile /> : <Navigate to="/admin-login" />} />
                <Route path="/admin/chamada" element={authLoading ? <PageLoader /> : session ? <FastAttendance /> : <Navigate to="/admin-login" />} />

                <Route path="*" element={<Navigate to="/" />} />
              </Routes>
            </Suspense>
          </main>
        </div>
        </ToastProvider>

        {/* 📊 O Vercel Analytics é colocado aqui dentro do Router para capturar todas as páginas */}
        <Analytics />

      </Router>
    </ThemeProvider>
  );
}

export default App;