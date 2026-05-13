import { HeroSection } from './components/HeroSection';
import { MethodologySection } from './components/MethodologySection';
import { CulturalFundamentals } from './components/CulturalFundamentals';
import { LeadershipHierarchy } from './components/LeadershipHierarchy';
import { LocationsMap } from './components/LocationsMap';
// import { EventGallery } from './components/EventGallery';
// import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection />
      <MethodologySection />
      <CulturalFundamentals />
      <LeadershipHierarchy />
      <LocationsMap />
      {/* <EventGallery />
      <Footer /> 
      */}
    </div>
  );
}