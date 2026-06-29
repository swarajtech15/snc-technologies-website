export default function ProjectsSection() {
  const projects = [
    {
      icon: "🏢",
      title: "Enterprise ERP Platform",
      description:
        "A scalable enterprise management platform handling operations across multiple business divisions.",
    },
    {
      icon: "🤖",
      title: "AI Analytics Engine",
      description:
        "Machine learning platform delivering predictive analytics and business intelligence.",
    },
    {
      icon: "🛡️",
      title: "Cyber Defense Dashboard",
      description:
        "Real-time threat monitoring and cybersecurity management system.",
    },
  ];

  return (
    <section
      className="projects-section"
      style={{
        background: "#061324",
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
            className="projects-title"
            style={{
              color: "white",
              fontSize: "48px",
              marginBottom: "15px",
            }}
          >
            Featured Projects
          </h2>

          <p
            className="projects-text"
            style={{
              color: "#94a3b8",
              fontSize: "18px",
            }}
          >
            Solutions we've built for modern enterprises.
          </p>
        </div>

        {/* Cards */}
        <div
          className="projects-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px,1fr))",
            gap: "30px",
          }}
        >
          {projects.map((project, index) => (
            <div
              key={index}
              className="project-card"
              style={{
                background: "#0b1f38",
                border: "1px solid #1e3a5f",
                borderRadius: "20px",
                overflow: "hidden",
                transition: "0.3s",
              }}
            >
              {/* Visual */}
              <div
                className="project-visual"
                style={{
                  height: "220px",
                  background: "linear-gradient(135deg,#2563eb,#38bdf8)",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  fontSize: "90px",
                }}
              >
                {project.icon}
              </div>

              {/* Content */}
              <div
                className="project-content"
                style={{
                  padding: "30px",
                }}
              >
                <h3
                  className="project-title"
                  style={{
                    color: "white",
                    marginBottom: "15px",
                    fontSize: "24px",
                  }}
                >
                  {project.title}
                </h3>

                <p
                  style={{
                    color: "#94a3b8",
                    lineHeight: "1.7",
                    marginBottom: "25px",
                  }}
                >
                  {project.description}
                </p>

                <button
                  style={{
                    background: "transparent",
                    border: "1px solid #2563eb",
                    color: "#60a5fa",
                    padding: "12px 20px",
                    borderRadius: "10px",
                    cursor: "pointer",
                    fontWeight: "600",
                  }}
                >
                  View Project →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
