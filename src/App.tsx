import { useState, useEffect } from 'react';
import Lenis from '@studio-freight/lenis';
import LoadingScreen from './app/components/LoadingScreen';
import CustomCursor from './app/components/CustomCursor';
import Header from './app/components/Header';
import HeroSection from './app/components/HeroSection';
import AboutSection from './app/components/AboutSection';
import ServicesSection from './app/components/ServicesSection';
import PortfolioSection from './app/components/PortfolioSection';
import ProcessSection from './app/components/ProcessSection';
import QuizSection from './app/components/QuizSection';
import ExclusivitySection from './app/components/ExclusivitySection';
import TestimonialsSection from './app/components/TestimonialsSection';
import FAQSection from './app/components/FAQSection';
import FinalCTASection from './app/components/FinalCTASection';
import './App.css'

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!loading) {
      const lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        orientation: 'vertical',
        smoothWheel: true,
        wheelMultiplier: 1,
        touchMultiplier: 2,
      });

      function raf(time: number) {
        lenis.raf(time);
        requestAnimationFrame(raf);
      }

      requestAnimationFrame(raf);

      return () => {
        lenis.destroy();
      };
    }
  }, [loading]);

  if (loading) {
    return <LoadingScreen onComplete={() => setLoading(false)} />;
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <CustomCursor />
      <Header />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <PortfolioSection />
      <ProcessSection />
      <QuizSection />
      <ExclusivitySection />
      <TestimonialsSection />
      <FAQSection />
      <FinalCTASection />
    </div>
  );
}
