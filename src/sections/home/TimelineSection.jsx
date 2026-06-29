export default function TimelineSection() {
  const timeline = [
    {
      year: "2023",
      title: "SNC Founded",
      description:
        "Started with a vision to build next-generation software solutions.",
    },
    {
      year: "2024",
      title: "Enterprise Expansion",
      description:
        "Successfully delivered projects for businesses across multiple sectors.",
    },
    {
      year: "2025",
      title: "AI & Cybersecurity Division",
      description:
        "Expanded into artificial intelligence and enterprise cybersecurity.",
    },
    {
      year: "2026",
      title: "Global Growth",
      description:
        "Serving clients and delivering digital innovation worldwide.",
    },
  ];

  return (
    <section
      className="timeline-section"
      style={{
        background: "#081425",
        padding: "120px 0",
      }}
    >
      <div
        style={{
          maxWidth: "1000px",
          margin: "0 auto",
          padding: "0 20px",
        }}
      >
        {/* Heading */}
        <div
          style={{
            textAlign: "center",
            marginBottom: "80px",
          }}
        >
          <h2
            className="timeline-title"
            style={{
              color: "white",
              fontSize: "48px",
              marginBottom: "20px",
            }}
          >
            Our Journey
          </h2>

          <p
            className="timeline-text"
            style={{
              color: "#94a3b8",
              fontSize: "18px",
            }}
          >
            Building the future one milestone at a time.
          </p>
        </div>

        {/* Timeline */}
        <div
          className="timeline-container"
          style={{
            position: "relative",
            borderLeft: "3px solid #2563eb",
            marginLeft: "30px",
            paddingLeft: "40px",
          }}
        >
          {timeline.map((item) => (
            <div
              key={item.year}
              className="timeline-item"
              style={{
                marginBottom: "60px",
                position: "relative",
              }}
            >
              {/* Dot */}
              <div
                className="timeline-dot"
                style={{
                  position: "absolute",
                  left: "-52px",
                  top: "0",
                  width: "20px",
                  height: "20px",
                  background: "#38bdf8",
                  borderRadius: "50%",
                  boxShadow: "0 0 20px #38bdf8",
                }}
              />

              {/* Card */}
              <div
                className="hover-card timeline-card"
                style={{
                  background: "#0f1d33",
                  padding: "30px",
                  borderRadius: "20px",
                  border: "1px solid rgba(255,255,255,0.08)",
                }}
              >
                <h3
                  style={{
                    color: "#4fc3ff",
                    marginBottom: "10px",
                  }}
                >
                  {item.year}
                </h3>

                <h2
                  className="timeline-card-title"
                  style={{
                    color: "white",
                    marginBottom: "15px",
                  }}
                >
                  {item.title}
                </h2>

                <p
                  style={{
                    color: "#cbd5e1",
                    lineHeight: "1.8",
                  }}
                >
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
