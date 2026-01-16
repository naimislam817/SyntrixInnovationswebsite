import { Hero } from './Hero';
import { ProcessSection } from './ProcessSection';
import { ServicesSection } from './ServicesSection';
import { GuaranteeSection } from './GuaranteeSection';
import { TechnologiesSection } from './TechnologiesSection';
import { PortfolioSection } from './PortfolioSection';
import { ContactSection } from './ContactSection';

export function HomePage() {
  return (
    <>
      <Hero />
      <GuaranteeSection />
      <ProcessSection />
      <TechnologiesSection />
      <ServicesSection />
      <PortfolioSection />
      <ContactSection />
    </>
  );
}
