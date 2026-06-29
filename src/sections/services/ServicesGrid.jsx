const services = [
  {
    icon: "🤖",
    title: "Artificial Intelligence",
    desc: "Machine learning, automation, generative AI and intelligent systems.",
  },
  {
    icon: "💻",
    title: "Software Development",
    desc: "Enterprise web applications and custom software solutions.",
  },
  {
    icon: "🛡️",
    title: "Cybersecurity",
    desc: "Threat detection, penetration testing and security auditing.",
  },
  {
    icon: "☁️",
    title: "Cloud Solutions",
    desc: "AWS, Azure, cloud migration and infrastructure management.",
  },
  {
    icon: "📊",
    title: "Data Analytics",
    desc: "Business intelligence, dashboards and predictive analytics.",
  },
  {
    icon: "📱",
    title: "Digital Products",
    desc: "Mobile applications, SaaS products and UI/UX design.",
  },
];

export default function ServicesGrid() {
  const isMobile = window.innerWidth < 768;

  return (
    <section
      style={{
        background: "#06162c",
        padding: isMobile ? "80px 20px" : "120px 20px",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        <h2
          style={{
            color: "white",
            textAlign: "center",
            fontSize: "clamp(28px,5vw,42px)",
            marginBottom: isMobile ? "50px" : "70px",
          }}
        >
          What We Offer
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              window.innerWidth < 768
                ? "1fr"
                : "repeat(auto-fit,minmax(320px,1fr))",
            gap: "30px",
          }}
        >
          {services.map((service) => (
            <div
              key={service.title}
              className="hover-card"
              style={{
                background: "#0f1d33",
                padding: isMobile ? "30px" : "40px",
                borderRadius: "20px",
                border: "1px solid #1e293b",
              }}
            >
              <div
                style={{
                  fontSize: isMobile ? "42px" : "50px",
                  marginBottom: "20px",
                }}
              >
                {service.icon}
              </div>

              <h3
                style={{
                  color: "white",
                  marginBottom: "20px",
                  fontSize: isMobile ? "24px" : "28px",
                }}
              >
                {service.title}
              </h3>

              <p
                style={{
                  color: "#9db0c8",
                  lineHeight: "1.8",
                  fontSize: isMobile ? "16px" : "18px",
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
