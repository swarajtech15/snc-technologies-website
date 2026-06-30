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

      {/* Demo Notice */}
      <div
        style={{
          background: "#0a192f",
          color: "#94a3b8",
          textAlign: "center",
          padding: "20px",
          fontSize: "14px",
          borderTop: "1px solid rgba(255,255,255,0.1)",
        }}
      >
        Note: This website is a demonstration portfolio project created for
        educational and showcase purposes only. SNC Technologies is a conceptual
        company created to demonstrate web development, UI/UX design, and modern
        software engineering practices.
      </div>
    </>
  );
}
