const inputStyle = {
  background: "#081425",
  border: "1px solid #1e293b",
  color: "white",
  padding: "18px",
  borderRadius: "12px",
  fontSize: "16px",
  outline: "none",
  width: "100%",
  boxSizing: "border-box",
};

export default function StartProject() {
  const isMobile = window.innerWidth < 768;

  return (
    <section
      style={{
        minHeight: "100vh",
        background: "#081425",
        padding: isMobile ? "80px 20px" : "120px 20px",
      }}
    >
      <div
        style={{
          maxWidth: "900px",
          margin: "0 auto",
        }}
      >
        {/* Hero */}
        <div
          style={{
            textAlign: "center",
            marginBottom: isMobile ? "40px" : "60px",
          }}
        >
          <h1
            style={{
              color: "white",
              fontSize: "clamp(36px,8vw,56px)",
              marginBottom: "20px",
              fontWeight: "800",
            }}
          >
            Start Your Project
          </h1>

          <p
            style={{
              color: "#94a3b8",
              fontSize: "clamp(16px,4vw,20px)",
              lineHeight: "1.7",
              maxWidth: "700px",
              margin: "0 auto",
            }}
          >
            Tell us about your vision and our team will get back to you with the
            best solution.
          </p>
        </div>

        {/* Form Card */}
        <div
          style={{
            background: "#0f1d33",
            padding: isMobile ? "25px" : "50px",
            borderRadius: "20px",
            border: "1px solid #1e293b",
            boxShadow: "0 15px 40px rgba(0,0,0,0.25)",
          }}
        >
          <form
            style={{
              display: "flex",
              flexDirection: "column",
              gap: isMobile ? "18px" : "25px",
            }}
          >
            <input type="text" placeholder="Full Name" style={inputStyle} />

            <input
              type="email"
              placeholder="Email Address"
              style={inputStyle}
            />

            <input type="text" placeholder="Company Name" style={inputStyle} />

            <select style={inputStyle}>
              <option>Select Service</option>
              <option>AI Solutions</option>
              <option>Web Development</option>
              <option>Cybersecurity</option>
              <option>Cloud Infrastructure</option>
            </select>

            <select style={inputStyle}>
              <option>Select Budget</option>
              <option>$1,000 - $5,000</option>
              <option>$5,000 - $20,000</option>
              <option>$20,000+</option>
            </select>

            <textarea
              rows={isMobile ? "5" : "6"}
              placeholder="Describe your project..."
              style={{
                ...inputStyle,
                resize: "vertical",
                minHeight: "150px",
              }}
            />

            <button
              className="btn btn--primary hover-btn glow-button"
              style={{
                width: isMobile ? "100%" : "220px",
                margin: "10px auto 0",
                padding: "16px",
                fontWeight: "700",
              }}
            >
              Submit Project
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
