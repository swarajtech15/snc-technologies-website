export default function AboutHero() {
  return (
    <section
      style={{
        background: "linear-gradient(180deg,#02162d 0%, #031b3b 100%)",
        padding: "140px 20px",
        textAlign: "center",
      }}
    >
      <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
        <div
          style={{
            display: "inline-block",
            padding: "8px 20px",
            borderRadius: "50px",
            background: "#0f1d33",
            color: "#3bb8ff",
            marginBottom: "30px",
            fontWeight: "600",
            fontSize: "14px",
          }}
        >
          ABOUT SNC TECHNOLOGIES
        </div>

        <h1
          className="about-hero-title"
          style={{
            fontSize: "64px",
            fontWeight: "800",
            color: "white",
            marginBottom: "30px",
            lineHeight: "1.2",
          }}
        >
          Engineering The Future
          <br />
          Through Technology
        </h1>

        <p
          className="about-hero-text"
          style={{
            color: "#b4c3d8",
            fontSize: "20px",
            lineHeight: "1.8",
            maxWidth: "800px",
            margin: "auto",
          }}
        >
          SNC Technologies delivers cutting-edge software, artificial
          intelligence, cybersecurity, and cloud solutions that empower
          businesses to thrive in the digital era.
        </p>
      </div>
    </section>
  );
}
