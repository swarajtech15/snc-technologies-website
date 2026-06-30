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
        🚀 Interested in a website like this? This is a demonstration website
        developed by SNC Technologies to showcase our design and development
        capabilities. If you’d like a fully customized, production-ready
        website, web application, or software solution for your business, please
        visit our Contact Us page and share your requirements. We’d be glad to
        help bring your vision to life.
      </div>
    </>
  );
}
