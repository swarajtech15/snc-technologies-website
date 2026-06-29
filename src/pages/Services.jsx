import ServicesHero from "../sections/services/ServicesHero";
import ServicesGrid from "../sections/services/ServicesGrid";
import ProcessSection from "../sections/services/ProcessSection";
import TechStackSection from "../sections/services/TechStackSection";
import WhyChooseSection from "../sections/services/WhyChooseSection";

export default function Services() {
  return (
    <>
      <ServicesHero />
      <ServicesGrid />
      <ProcessSection />
      <TechStackSection />
      <WhyChooseSection />
    </>
  );
}
