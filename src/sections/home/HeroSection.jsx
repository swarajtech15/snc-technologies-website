import { TypeAnimation } from "react-type-animation";
import { NavLink } from "react-router-dom";

export default function HeroSection() {
  return (
    <section className="section section--dark">
      <div className="container">
        <div
          className="hero-content"
          style={{
            textAlign: "center",
            padding: "120px 0",
          }}
        >
          {/* Badge */}
          <div className="badge badge--brand">SNC Technologies</div>

          {/* Heading */}
          <h1
            className="text-d1 gradient-text hero-title"
            style={{
              marginTop: "24px",
              marginBottom: "24px",
              minHeight: "180px",
            }}
          >
            Transforming Ideas Into
            <br />
            <TypeAnimation
              sequence={[
                "Enterprise Software",
                2000,
                "AI Solutions",
                2000,
                "Cybersecurity Platforms",
                2000,
                "Digital Innovation",
                2000,
              ]}
              wrapper="span"
              speed={40}
              repeat={Infinity}
            />
          </h1>

          {/* Description */}
          <p
            className="text-body-lg text-inverse hero-description"
            style={{
              maxWidth: "700px",
              margin: "0 auto 40px",
              opacity: 0.8,
            }}
          >
            We build enterprise software, AI systems, cybersecurity platforms,
            and scalable digital experiences for the next generation of
            businesses.
          </p>

          {/* Buttons */}
          <div
            className="hero-buttons"
            style={{
              display: "flex",
              gap: "20px",
              justifyContent: "center",
            }}
          >
            <NavLink to="/start-project">
              <button className="btn btn--primary hover-btn glow-button">
                Start Your Project
              </button>
            </NavLink>

            <NavLink
              to="/services"
              style={{
                textDecoration: "none",
              }}
            >
              <button className="btn btn--ghost-dark hover-btn">
                Explore Services
              </button>
            </NavLink>
          </div>
        </div>
      </div>
    </section>
  );
}
