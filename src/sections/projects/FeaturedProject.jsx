export default function FeaturedProject() {
  const isMobile = window.innerWidth <= 768;

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
        }}
      >
        {/* Heading */}
        <h2
          style={{
            color: "white",
            fontSize: "clamp(32px,6vw,42px)",
            marginBottom: "50px",
            textAlign: "center",
          }}
        >
          Featured Project
        </h2>

        {/* Card */}
        <div
          className="hover-card"
          style={{
            background: "#0f1d33",
            borderRadius: "25px",
            border: "1px solid #1e293b",
            overflow: "hidden",
          }}
        >
          {/* Image */}
          <img
            src="/images/project1.jpg"
            alt="project"
            style={{
              width: "100%",
              height: isMobile ? "240px" : "420px",
              objectFit: "cover",
              display: "block",
            }}
          />

          {/* Content */}
          <div
            style={{
              padding: isMobile ? "30px" : "50px",
            }}
          >
            {/* Tags */}
            <div
              style={{
                color: "#38bdf8",
                fontSize: "16px",
                fontWeight: "600",
                marginBottom: "20px",
              }}
            >
              AI • Cloud • Enterprise
            </div>

            {/* Title */}
            <h2
              style={{
                color: "white",
                fontSize: "clamp(30px,6vw,48px)",
                lineHeight: "1.2",
                marginBottom: "25px",
              }}
            >
              Intelligent Enterprise Platform
            </h2>

            {/* Description */}
            <p
              style={{
                color: "#9db0c8",
                lineHeight: "1.8",
                fontSize: "18px",
                marginBottom: "40px",
                maxWidth: "700px",
              }}
            >
              Developed a scalable AI-powered enterprise management platform
              serving thousands of users across multiple industries.
            </p>

            {/* Stats */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: isMobile
                  ? "repeat(3,1fr)"
                  : "repeat(3,150px)",
                gap: "25px",
              }}
            >
              <div>
                <h2
                  style={{
                    color: "#38bdf8",
                    fontSize: "36px",
                    margin: 0,
                  }}
                >
                  300%
                </h2>

                <p
                  style={{
                    color: "#9db0c8",
                    marginTop: "8px",
                  }}
                >
                  Growth
                </p>
              </div>

              <div>
                <h2
                  style={{
                    color: "#38bdf8",
                    fontSize: "36px",
                    margin: 0,
                  }}
                >
                  99.9%
                </h2>

                <p
                  style={{
                    color: "#9db0c8",
                    marginTop: "8px",
                  }}
                >
                  Uptime
                </p>
              </div>

              <div>
                <h2
                  style={{
                    color: "#38bdf8",
                    fontSize: "36px",
                    margin: 0,
                  }}
                >
                  50K+
                </h2>

                <p
                  style={{
                    color: "#9db0c8",
                    marginTop: "8px",
                  }}
                >
                  Users
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
