import { HeroSection } from './components/HeroSection';
import { ProblemsSection } from './components/ProblemsSection';
import { SolutionSection } from './components/SolutionSection';
import { ModulesSection } from './components/ModulesSection';
import { RoadmapSection } from './components/RoadmapSection';
import { HowItWorksSection } from './components/HowItWorksSection';
import { TechAdvantagesSection } from './components/TechAdvantagesSection';
import { TargetAudienceSection } from './components/TargetAudienceSection';
import { PricingSection } from './components/PricingSection';
import { ScalabilitySection } from './components/ScalabilitySection';
import { InvestorCTASection } from './components/InvestorCTASection';
import { SupportSection } from './components/SupportSection';
import { ContactForm } from './components/ContactForm';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    document.title = 'Ramply';
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroSection />
        <ProblemsSection />
        <SolutionSection />
        <ModulesSection />
        <RoadmapSection />
        <HowItWorksSection />
        <TechAdvantagesSection />
        <TargetAudienceSection />
        <PricingSection />
        <ScalabilitySection />
        <InvestorCTASection />
        <ContactForm />
        <SupportSection />
      </main>
      <Footer />
    </div>
  );
}