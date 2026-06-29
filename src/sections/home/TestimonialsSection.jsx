export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Michael Chen",
      role: "CTO, Nexus Corp",
      text: "SNC Technologies transformed our infrastructure with an enterprise-grade AI platform that exceeded our expectations.",
    },
    {
      name: "Sarah Williams",
      role: "Founder, FinEdge",
      text: "Their cybersecurity expertise and development process were exceptional from start to finish.",
    },
    {
      name: "David Kumar",
      role: "Director, CloudSphere",
      text: "The team delivered a highly scalable solution while maintaining outstanding communication.",
    },
  ];

  return (
    <section
      style={{
        background: "#081425",
        padding: "120px 0",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 20px",
        }}
      >
        {/* Heading */}
        <div
          style={{
            textAlign: "center",
            marginBottom: "70px",
          }}
        >
          <h2
            className="testimonials-title"
            style={{
              color: "white",
              fontSize: "48px",
              marginBottom: "20px",
            }}
          >
            What Our Clients Say
          </h2>

          <p
            style={{
              color: "#94a3b8",
              fontSize: "18px",
            }}
          >
            Trusted by businesses around the world.
          </p>
        </div>

        {/* Cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))",
            gap: "30px",
          }}
        >
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="hover-card testimonial-card"
              style={{
                background: "#0f1d33",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: "20px",
                padding: "35px",
                backdropFilter: "blur(10px)",
                position: "relative",
                overflow: "hidden",
              }}
            >
              {/* Quote Icon */}
              <div
                style={{
                  position: "absolute",
                  top: "20px",
                  right: "25px",
                  fontSize: "60px",
                  color: "rgba(79,195,255,0.08)",
                  fontWeight: "bold",
                }}
              >
                "
              </div>

              {/* Stars */}
              <div
                style={{
                  color: "#4fc3ff",
                  fontSize: "22px",
                  marginBottom: "20px",
                }}
              >
                ★★★★★
              </div>

              {/* Review */}
              <p
                style={{
                  color: "#cbd5e1",
                  lineHeight: "1.9",
                  marginBottom: "35px",
                  fontSize: "16px",
                }}
              >
                "{testimonial.text}"
              </p>

              {/* Client */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "15px",
                }}
              >
                {/* Avatar */}
                <div
                  style={{
                    width: "55px",
                    height: "55px",
                    borderRadius: "50%",
                    background: "linear-gradient(135deg,#2563eb,#38bdf8)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "white",
                    fontWeight: "700",
                    fontSize: "18px",
                  }}
                >
                  {testimonial.name.charAt(0)}
                </div>

                <div>
                  <h4
                    style={{
                      color: "white",
                      margin: 0,
                      fontSize: "18px",
                    }}
                  >
                    {testimonial.name}
                  </h4>

                  <p
                    style={{
                      color: "#94a3b8",
                      marginTop: "5px",
                      fontSize: "14px",
                    }}
                  >
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
