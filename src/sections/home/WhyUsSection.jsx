export default function WhyUsSection() {
  const reasons = [
    {
      title: "Enterprise Expertise",
      desc: "We build scalable software architectures designed for long-term growth.",
      icon: "🏢",
    },
    {
      title: "AI Driven Solutions",
      desc: "We leverage artificial intelligence to solve complex business problems.",
      icon: "🤖",
    },
    {
      title: "Cyber Security First",
      desc: "Security is integrated into every stage of our development process.",
      icon: "🔐",
    },
    {
      title: "Cloud Native",
      desc: "Our systems are built for scalability, resilience, and performance.",
      icon: "☁️",
    },
  ];

  return (
    <section
      className="why-section"
      style={{
        background: "#06101f",
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
            className="why-title"
            style={{
              color: "white",
              fontSize: "48px",
              marginBottom: "20px",
            }}
          >
            Why Choose SNC
          </h2>

          <p
            className="why-text"
            style={{
              color: "#94a3b8",
              fontSize: "18px",
            }}
          >
            Engineering excellence combined with modern technology.
          </p>
        </div>

        {/* Cards */}
        <div
          className="why-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2,1fr)",
            gap: "30px",
          }}
        >
          {reasons.map((reason) => (
            <div
              className="hover-card why-card"
              key={reason.title}
              style={{
                background: "#0f1d33",
                border: "1px solid #1e293b",
                borderRadius: "20px",
                padding: "35px",
              }}
            >
              <div
                className="why-icon"
                style={{
                  fontSize: "40px",
                  marginBottom: "20px",
                }}
              >
                {reason.icon}
              </div>

              <h3
                style={{
                  color: "white",
                  marginBottom: "15px",
                  fontSize: "24px",
                }}
              >
                {reason.title}
              </h3>

              <p
                style={{
                  color: "#94a3b8",
                  lineHeight: "1.7",
                }}
              >
                {reason.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
