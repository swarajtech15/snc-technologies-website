const projects = [
  {
    title: "AI Assistant",
    image: "/images/ai-assistant.jpg",
  },
  {
    title: "Cyber Defense",
    image: "/images/cyber-defense.jpg",
  },
  {
    title: "Cloud Platform",
    image: "/images/cloud-platform.jpg",
  },
  {
    title: "Banking App",
    image: "/images/banking-app.jpg",
  },
  {
    title: "Analytics Dashboard",
    image: "/images/analytics-dashboard.jpg",
  },
  {
    title: "IoT Network",
    image: "/images/iot-network.jpg",
  },
];

export default function ProjectsGrid() {
  return (
    <section
      style={{
        background: "#081425",
        padding: "120px 20px",
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
            marginBottom: "60px",
            fontSize: "clamp(32px,6vw,42px)",
          }}
        >
          More Projects
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))",
            gap: "30px",
          }}
        >
          {projects.map((project, index) => (
            <div
              key={index}
              style={{
                background: "#0f1d33",
                borderRadius: "20px",
                overflow: "hidden",
                border: "1px solid #1e293b",
              }}
            >
              <img
                src={project.image}
                alt={project.title}
                style={{
                  width: "100%",
                  height: window.innerWidth < 768 ? "200px" : "220px",
                  objectFit: "cover",
                  display: "block",
                }}
              />

              <div style={{ padding: "30px" }}>
                <h3
                  style={{
                    color: "white",
                    marginBottom: "15px",
                  }}
                >
                  {project.title}
                </h3>

                <p
                  style={{
                    color: "#9db0c8",
                    lineHeight: "1.7",
                  }}
                >
                  Enterprise-grade digital solution built by SNC Technologies.
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
