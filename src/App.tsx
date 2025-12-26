import { HeroSection } from './components/HeroSection';
import { ProblemsSection } from './components/ProblemsSection';
import { SolutionSection } from './components/SolutionSection';
import { ModulesSection } from './components/ModulesSection';
import { HowItWorksSection } from './components/HowItWorksSection';
import { TechAdvantagesSection } from './components/TechAdvantagesSection';
import { TargetAudienceSection } from './components/TargetAudienceSection';
import { ScalabilitySection } from './components/ScalabilitySection';
import { InvestorCTASection } from './components/InvestorCTASection';
import { SupportSection } from './components/SupportSection';
import { Header } from './components/Header';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroSection />
        <ProblemsSection />
        <SolutionSection />
        <ModulesSection />
        <HowItWorksSection />
        <TechAdvantagesSection />
        <TargetAudienceSection />
        <ScalabilitySection />
        <InvestorCTASection />
        <SupportSection />
      </main>
      <Footer />
    </div>
  );
}