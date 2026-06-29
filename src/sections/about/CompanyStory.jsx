export default function CompanyStory() {
  return (
    <section
      style={{
        background: "#06162c",
        padding: "120px 20px",
      }}
    >
      <div
        className="company-story-grid"
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "80px",
          alignItems: "center",
        }}
      >
        <div>
          <h2
            className="company-story-title"
            style={{
              color: "white",
              fontSize: "42px",
              marginBottom: "30px",
            }}
          >
            Our Story
          </h2>

          <p
            className="company-story-text"
            style={{
              color: "#9db0c8",
              lineHeight: "1.9",
              fontSize: "18px",
            }}
          >
            SNC Technologies was founded with a mission to bridge innovation and
            business success. We specialize in enterprise software, AI-driven
            applications, cybersecurity infrastructures, and digital
            transformation.
          </p>

          <br />

          <p
            className="company-story-text"
            style={{
              color: "#9db0c8",
              lineHeight: "1.9",
              fontSize: "18px",
            }}
          >
            Our goal is simple: build scalable, intelligent, and secure
            solutions that create long-term value.
          </p>
        </div>

        <img
          className="float image-hover company-story-image"
          src="/images/Cyberimg.png"
          alt="SNC Technologies"
          style={{
            width: "100%",
            height: "400px",
            objectFit: "cover",
            borderRadius: "20px",
            boxShadow: "0 20px 50px rgba(0,0,0,0.4)",
          }}
        />
      </div>
    </section>
  );
}
