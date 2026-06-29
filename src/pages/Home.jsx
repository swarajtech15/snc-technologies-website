import ServicesSection from "../sections/home/ServicesSection";
import StatsSection from "../sections/home/StatsSection";
import HeroSection from "../sections/home/HeroSection";
import ProjectsSection from "../sections/home/ProjectsSection";
import WhyUsSection from "../sections/home/WhyUsSection";
import TestimonialsSection from "../sections/home/TestimonialsSection";
import CTASection from "../sections/home/CTASection";
import AnimatedSection from "../components/AnimatedSection";
import TechCloudSection from "../sections/home/TechCloudSection";
import TimelineSection from "../sections/home/TimelineSection";

export default function Home() {
  return (
    <>
      <AnimatedSection>
        <HeroSection />
      </AnimatedSection>

      <AnimatedSection>
        <StatsSection />
      </AnimatedSection>

      <AnimatedSection>
        <ServicesSection />
      </AnimatedSection>

      <AnimatedSection>
        <TechCloudSection />
      </AnimatedSection>

      <AnimatedSection>
        <TimelineSection />
      </AnimatedSection>

      <AnimatedSection>
        <ProjectsSection />
      </AnimatedSection>

      <AnimatedSection>
        <WhyUsSection />
      </AnimatedSection>

      <AnimatedSection>
        <TestimonialsSection />
      </AnimatedSection>

      <AnimatedSection>
        <CTASection />
      </AnimatedSection>
    </>
  );
}
