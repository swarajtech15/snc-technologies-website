export default function MissionVision() {
  return (
    <section
      style={{
        background: "#081425",
        padding: "120px 20px",
      }}
    >
      <div
        className="mission-grid"
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(2,1fr)",
          gap: "40px",
        }}
      >
        <div
          className="mission-card"
          style={{
            background: "#0f1d33",
            padding: "50px",
            borderRadius: "20px",
          }}
        >
          <h2
            className="mission-title"
            style={{
              color: "#3bb8ff",
              marginBottom: "20px",
            }}
          >
            Our Mission
          </h2>

          <p
            style={{
              color: "#c7d2e0",
              lineHeight: "1.8",
            }}
          >
            To deliver world-class software, AI, cybersecurity, and cloud
            solutions that transform businesses.
          </p>
        </div>

        <div
          className="mission-card"
          style={{
            background: "#0f1d33",
            padding: "50px",
            borderRadius: "20px",
          }}
        >
          <h2
            className="mission-title"
            style={{
              color: "#3bb8ff",
              marginBottom: "20px",
            }}
          >
            Our Vision
          </h2>

          <p
            style={{
              color: "#c7d2e0",
              lineHeight: "1.8",
            }}
          >
            To become a globally recognized technology company that drives
            innovation and digital excellence.
          </p>
        </div>
      </div>
    </section>
  );
}
