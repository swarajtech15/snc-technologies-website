export default function ServicesHero() {
  const isMobile = window.innerWidth < 768;

  return (
    <section
      style={{
        background: "linear-gradient(180deg,#02162d 0%,#031b3b 100%)",
        padding: isMobile ? "90px 20px" : "140px 20px",
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
            padding: isMobile ? "6px 16px" : "8px 20px",
            borderRadius: "50px",
            background: "#0f1d33",
            color: "#38bdf8",
            marginBottom: "30px",
            fontSize: isMobile ? "14px" : "16px",
          }}
        >
          OUR SERVICES
        </div>

        <h1
          style={{
            fontSize: "clamp(32px,8vw,64px)",
            color: "white",
            fontWeight: "800",
            marginBottom: "30px",
            lineHeight: "1.2",
          }}
        >
          Technology Solutions
          <br />
          For Modern Businesses
        </h1>

        <p
          style={{
            color: "#9db0c8",
            fontSize: isMobile ? "17px" : "20px",
            maxWidth: "700px",
            margin: "auto",
            lineHeight: "1.8",
            padding: isMobile ? "0 10px" : "0",
          }}
        >
          We provide enterprise software, artificial intelligence,
          cybersecurity, cloud computing, and digital transformation services.
        </p>
      </div>
    </section>
  );
}
