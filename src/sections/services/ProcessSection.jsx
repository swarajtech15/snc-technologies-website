const steps = ["Discovery", "Planning", "Development", "Testing", "Deployment"];

export default function ProcessSection() {
  const isMobile = window.innerWidth < 768;

  return (
    <section
      style={{
        background: "#081425",
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
            marginBottom: isMobile ? "40px" : "60px",
          }}
        >
          Our Process
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              window.innerWidth < 768
                ? "1fr"
                : "repeat(auto-fit,minmax(180px,1fr))",
            gap: "20px",
          }}
        >
          {steps.map((step, index) => (
            <div
              key={step}
              className="hover-card"
              style={{
                background: "#0f1d33",
                padding: isMobile ? "30px" : "40px",
                borderRadius: "20px",
                border: "1px solid #1e293b",
              }}
            >
              <div
                style={{
                  fontSize: isMobile ? "34px" : "40px",
                  color: "#38bdf8",
                  fontWeight: "700",
                }}
              >
                {index + 1}
              </div>

              <h3
                style={{
                  color: "white",
                  marginTop: "20px",
                  fontSize: isMobile ? "22px" : "26px",
                }}
              >
                {step}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
