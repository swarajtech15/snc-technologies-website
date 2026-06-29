const reasons = [
  {
    icon: "🚀",
    title: "Innovation",
    text: "Cutting-edge technologies and modern architecture.",
  },
  {
    icon: "🔒",
    title: "Security",
    text: "Enterprise-grade cybersecurity and protection.",
  },
  {
    icon: "⚡",
    title: "Performance",
    text: "High-performance and scalable solutions.",
  },
  {
    icon: "🤝",
    title: "Partnership",
    text: "Long-term collaboration and support.",
  },
];

export default function WhyChooseSection() {
  const isMobile = window.innerWidth < 768;

  return (
    <section
      style={{
        background: "#081425",
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
            marginBottom: isMobile ? "45px" : "70px",
          }}
        >
          Why Choose SNC?
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: isMobile
              ? "1fr"
              : "repeat(auto-fit,minmax(250px,1fr))",
            gap: isMobile ? "20px" : "30px",
          }}
        >
          {reasons.map((reason) => (
            <div
              className="hover-card"
              key={reason.title}
              style={{
                background: "#0f1d33",
                padding: isMobile ? "30px" : "40px",
                borderRadius: "20px",
                border: "1px solid #1e293b",
                textAlign: "center",
              }}
            >
              <div
                style={{
                  fontSize: isMobile ? "40px" : "50px",
                  marginBottom: "20px",
                }}
              >
                {reason.icon}
              </div>

              <h3
                style={{
                  color: "white",
                  marginBottom: "15px",
                  fontSize: isMobile ? "22px" : "26px",
                }}
              >
                {reason.title}
              </h3>

              <p
                style={{
                  color: "#9db0c8",
                  lineHeight: "1.7",
                  fontSize: isMobile ? "15px" : "16px",
                }}
              >
                {reason.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
