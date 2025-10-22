import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import QuickInfoSection from '@/components/QuickInfoSection';
import FeaturesSection from '@/components/FeaturesSection';
import CallToActionSection from '@/components/CallToActionSection';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <QuickInfoSection />
      <FeaturesSection />
      <CallToActionSection />
    </main>
  );
}
