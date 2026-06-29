const technologies = [
  "React",
  "Node.js",
  "Python",
  "Java",
  "AWS",
  "Azure",
  "Docker",
  "Kubernetes",
  "TensorFlow",
  "PyTorch",
  "MongoDB",
  "PostgreSQL",
  "Cybersecurity",
  "Cloud Computing",
  "AI/ML",
];

export default function TechStackSection() {
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
          textAlign: "center",
        }}
      >
        <h2
          style={{
            color: "white",
            fontSize: "clamp(28px,5vw,42px)",
            marginBottom: "20px",
          }}
        >
          Technologies We Use
        </h2>

        <p
          style={{
            color: "#9db0c8",
            marginBottom: isMobile ? "40px" : "60px",
            fontSize: isMobile ? "16px" : "18px",
          }}
        >
          Modern technologies powering enterprise solutions.
        </p>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: isMobile ? "12px" : "20px",
          }}
        >
          {technologies.map((tech) => (
            <div
              className="tech-card"
              key={tech}
              style={{
                background: "#0f1d33",
                color: "white",
                padding: isMobile ? "14px 20px" : "18px 30px",
                borderRadius: "15px",
                border: "1px solid #1e293b",
                fontWeight: "600",
                fontSize: isMobile ? "14px" : "16px",
              }}
            >
              {tech}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
