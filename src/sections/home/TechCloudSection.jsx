export default function TechCloudSection() {
  const techs = [
    "React",
    "Node.js",
    "Python",
    "AI/ML",
    "AWS",
    "Azure",
    "Docker",
    "Kubernetes",
    "MongoDB",
    "PostgreSQL",
    "Cybersecurity",
    "Cloud",
    "OpenAI",
    "Next.js",
    "Java",
    "DevOps",
  ];

  return (
    <section
      className="tech-section"
      style={{
        background: "#081425",
        padding: "100px 0",
        overflow: "hidden",
      }}
    >
      {/* Heading */}
      <div
        style={{
          textAlign: "center",
          marginBottom: "60px",
        }}
      >
        <h2
          className="tech-title"
          style={{
            color: "white",
            fontSize: "48px",
            marginBottom: "20px",
          }}
        >
          Technologies We Work With
        </h2>

        <p
          className="tech-text"
          style={{
            color: "#94a3b8",
            fontSize: "18px",
          }}
        >
          Building with the world's leading technologies.
        </p>
      </div>

      {/* Slider */}
      <div className="logo-slider">
        <div className="logo-track">
          {[...techs, ...techs].map((tech, index) => (
            <div
              key={index}
              className="tech-card"
              style={{
                background: "#0f1d33",
                color: "white",
                padding: "20px 35px",
                borderRadius: "15px",
                border: "1px solid #1e293b",
                minWidth: "180px",
                textAlign: "center",
                fontWeight: "600",
                fontSize: "18px",
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
