export default function ServicesSection() {
  const services = [
    {
      title: "AI Solutions",
      desc: "Custom AI systems, machine learning models, and intelligent automation platforms.",
      icon: "🤖",
    },
    {
      title: "Web Development",
      desc: "Modern websites, enterprise applications, and scalable SaaS platforms.",
      icon: "💻",
    },
    {
      title: "Cybersecurity",
      desc: "Security audits, penetration testing, and enterprise cyber defense.",
      icon: "🔒",
    },
  ];

  return (
    <section
      className="services-section"
      style={{
        background: "#081425",
        padding: "120px 0",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 20px",
        }}
      >
        {/* Heading */}
        <div
          style={{
            textAlign: "center",
            marginBottom: "70px",
          }}
        >
          <h2
            className="services-title"
            style={{
              color: "white",
              fontSize: "48px",
              marginBottom: "20px",
            }}
          >
            Our Services
          </h2>

          <p
            className="services-text"
            style={{
              color: "#94a3b8",
              fontSize: "18px",
              maxWidth: "700px",
              margin: "0 auto",
            }}
          >
            We build cutting-edge digital products and enterprise solutions for
            modern businesses.
          </p>
        </div>

        {/* Cards */}
        <div
          className="services-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "30px",
          }}
        >
          {services.map((service) => (
            <div
              key={service.title}
              className="hover-card service-card"
              style={{
                background: "#0f1d33",
                padding: "40px",
                borderRadius: "20px",
                border: "1px solid #1e293b",
              }}
            >
              <div
                className="service-icon"
                style={{
                  fontSize: "48px",
                  marginBottom: "20px",
                }}
              >
                {service.icon}
              </div>

              <h3
                style={{
                  color: "white",
                  marginBottom: "20px",
                  fontSize: "24px",
                }}
              >
                {service.title}
              </h3>

              <p
                style={{
                  color: "#94a3b8",
                  lineHeight: "1.8",
                }}
              >
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
