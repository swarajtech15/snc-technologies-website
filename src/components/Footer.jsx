import { NavLink } from "react-router-dom";

export default function Footer() {
  const linkStyle = {
    color: "#94a3b8",
    textDecoration: "none",
    fontSize: "18px",
  };

  return (
    <footer
      style={{
        background: "#081425",
        borderTop: "1px solid #1e293b",
        padding: "80px 0 30px",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 20px",
        }}
      >
        <div
          className="footer-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "2fr 1fr 1fr 1fr",
            gap: "50px",
            marginBottom: "60px",
          }}
        >
          {/* Company Intro */}
          <div>
            <NavLink
              to="/"
              style={{
                color: "white",
                textDecoration: "none",
                fontSize: "28px",
                fontWeight: "700",
              }}
            >
              SNC Technologies
            </NavLink>

            <p
              style={{
                color: "#94a3b8",
                lineHeight: "1.8",
                maxWidth: "350px",
                marginTop: "20px",
              }}
            >
              Building intelligent software, AI systems, cybersecurity
              platforms, and enterprise digital solutions for the next
              generation.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3
              style={{
                color: "white",
                marginBottom: "20px",
              }}
            >
              Services
            </h3>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "15px",
              }}
            >
              <NavLink className="footer-link" to="/services" style={linkStyle}>
                AI Solutions
              </NavLink>

              <NavLink className="footer-link" to="/services" style={linkStyle}>
                Web Development
              </NavLink>

              <NavLink className="footer-link" to="/services" style={linkStyle}>
                Cybersecurity
              </NavLink>

              <NavLink className="footer-link" to="/services" style={linkStyle}>
                Cloud Infrastructure
              </NavLink>
            </div>
          </div>

          {/* Company */}
          <div>
            <h3
              style={{
                color: "white",
                marginBottom: "20px",
              }}
            >
              Company
            </h3>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "15px",
              }}
            >
              <NavLink className="footer-link" to="/" style={linkStyle}>
                Home
              </NavLink>

              <NavLink className="footer-link" to="/about" style={linkStyle}>
                About
              </NavLink>

              <NavLink className="footer-link" to="/projects" style={linkStyle}>
                Projects
              </NavLink>

              <NavLink className="footer-link" to="/contact" style={linkStyle}>
                Contact
              </NavLink>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3
              style={{
                color: "white",
                marginBottom: "20px",
              }}
            >
              Contact
            </h3>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "15px",
              }}
            >
              <a
                href="mailto:hellosnc@gmail.com"
                className="footer-link"
                style={linkStyle}
              >
                hellosnc@gmail.com
              </a>

              <span className="footer-link" style={linkStyle}>
                Mumbai, India
              </span>

              <span className="footer-link" style={linkStyle}>
                +91 XXXXX XXXXX
              </span>
            </div>
          </div>
        </div>

        <div
          style={{
            borderTop: "1px solid #1e293b",
            paddingTop: "30px",
            textAlign: "center",
            color: "#64748b",
          }}
        >
          © 2026 SNC Technologies. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
