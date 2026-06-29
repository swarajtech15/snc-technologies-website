export default function ProjectsHero() {
  return (
    <section
      style={{
        background: "linear-gradient(180deg,#02162d 0%,#031b3b 100%)",
        padding: "140px 20px",
        textAlign: "center",
      }}
    >
      <div
        style={{
          maxWidth: "1000px",
          margin: "0 auto",
        }}
      >
        <div
          style={{
            display: "inline-block",
            padding: "8px 20px",
            borderRadius: "50px",
            background: "#0f1d33",
            color: "#38bdf8",
            marginBottom: "30px",
          }}
        >
          OUR PROJECTS
        </div>

        <h1
          style={{
            color: "white",
            fontSize: "clamp(38px, 8vw, 64px)",
            fontWeight: "800",
            marginBottom: "30px",
            lineHeight: "1.15",
          }}
        >
          Building The Future
          <br />
          One Project At A Time
        </h1>

        <p
          style={{
            color: "#9db0c8",
            fontSize: "clamp(16px, 3vw, 20px)",
            maxWidth: "700px",
            margin: "auto",
            lineHeight: "1.8",
          }}
        >
          Explore our portfolio of AI platforms, cybersecurity solutions, cloud
          systems, and enterprise applications.
        </p>
      </div>
    </section>
  );
}
