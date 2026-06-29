import { NavLink } from "react-router-dom";

export default function CTASection() {
  const ctaButtonStyle = {
    minWidth: "220px",
    height: "60px",
    padding: "0 30px",
    fontSize: "18px",
    fontWeight: "700",
    transition: "all 0.3s ease",
  };

  return (
    <section
      className="cta-section"
      style={{
        background: "linear-gradient(135deg, #0b1830 0%, #12284d 100%)",
        padding: "140px 20px",
        textAlign: "center",
      }}
    >
      <div
        style={{
          maxWidth: "900px",
          margin: "0 auto",
        }}
      >
        {/* Badge */}
        <div
          className="cta-badge"
          style={{
            display: "inline-block",
            padding: "8px 18px",
            background: "rgba(79,195,255,0.12)",
            color: "#4fc3ff",
            border: "1px solid rgba(79,195,255,0.25)",
            borderRadius: "999px",
            marginBottom: "30px",
            fontWeight: "600",
          }}
        >
          Let's Build Something Amazing
        </div>

        {/* Heading */}
        <h2
          className="cta-title"
          style={{
            color: "white",
            fontSize: "56px",
            lineHeight: "1.2",
            marginBottom: "30px",
          }}
        >
          Ready To Transform
          <br />
          Your Business?
        </h2>

        {/* Text */}
        <p
          className="cta-text"
          style={{
            color: "#94a3b8",
            fontSize: "20px",
            maxWidth: "700px",
            margin: "0 auto 50px",
            lineHeight: "1.8",
          }}
        >
          Partner with SNC Technologies to build scalable, intelligent, and
          secure digital solutions for the future.
        </p>

        {/* Buttons */}
        <div
          className="cta-buttons"
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "40px",
            flexWrap: "wrap",
          }}
        >
          <NavLink to="/start-project">
            <button
              className="btn btn--primary hover-btn"
              style={ctaButtonStyle}
            >
              Start Your Project
            </button>
          </NavLink>

          <NavLink to="/consultation" style={{ textDecoration: "none" }}>
            <button
              className="btn btn--primary hover-btn"
              style={ctaButtonStyle}
            >
              Schedule Consultation
            </button>
          </NavLink>
        </div>
      </div>
    </section>
  );
}
