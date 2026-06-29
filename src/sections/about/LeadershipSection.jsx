export default function LeadershipSection() {
  return (
    <section
      style={{
        background: "#06162c",
        padding: "120px 20px",
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
          className="leadership-heading"
          style={{
            color: "white",
            fontSize: "42px",
            marginBottom: "20px",
          }}
        >
          Leadership & Vision
        </h2>

        <p
          style={{
            color: "#9db0c8",
            maxWidth: "700px",
            margin: "0 auto 60px",
            lineHeight: "1.8",
          }}
        >
          Our leadership team combines innovation, engineering, and strategic
          thinking to deliver exceptional digital solutions.
        </p>

        <div
          className="leadership-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))",
            gap: "30px",
          }}
        >
          {/* Card 1 */}
          <div
            className="leadership-card"
            style={{
              background: "#0f1d33",
              padding: "40px",
              borderRadius: "20px",
              border: "1px solid #1e293b",
            }}
          >
            <img
              className="float image-hover leader-image"
              src="/images/founder.jpg"
              alt="Founder"
              style={{
                width: "100px",
                height: "100px",
                borderRadius: "50%",
                objectFit: "cover",
                margin: "0 auto 25px",
                border: "3px solid #38bdf8",
                display: "block",
              }}
            />

            <h3 style={{ color: "white", marginBottom: "10px" }}>
              Founder & CEO
            </h3>

            <p
              style={{
                color: "#38bdf8",
                marginBottom: "20px",
              }}
            >
              SNC Technologies
            </p>

            <p
              style={{
                color: "#9db0c8",
                lineHeight: "1.7",
              }}
            >
              Passionate about artificial intelligence, enterprise software,
              cybersecurity, and building scalable technology solutions.
            </p>
          </div>

          {/* Card 2 */}
          <div
            className="leadership-card"
            style={{
              background: "#0f1d33",
              padding: "40px",
              borderRadius: "20px",
              border: "1px solid #1e293b",
            }}
          >
            <img
              className="float image-hover leader-image"
              src="/images/founder.jpg"
              alt="Founder"
              style={{
                width: "100px",
                height: "100px",
                borderRadius: "50%",
                objectFit: "cover",
                margin: "0 auto 25px",
                border: "3px solid #38bdf8",
                display: "block",
              }}
            />

            <h3 style={{ color: "white", marginBottom: "10px" }}>
              Technology Division
            </h3>

            <p
              style={{
                color: "#38bdf8",
                marginBottom: "20px",
              }}
            >
              Engineering Excellence
            </p>

            <p
              style={{
                color: "#9db0c8",
                lineHeight: "1.7",
              }}
            >
              Delivering cutting-edge software, cloud, AI, and cybersecurity
              solutions worldwide.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
