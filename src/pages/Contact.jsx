import { useState } from "react";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";

export default function Contact() {
  const isMobile = window.innerWidth < 768;
  const isTablet = window.innerWidth < 900;

  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [sending, setSending] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const sendEmail = async () => {
    if (!form.name || !form.email || !form.subject || !form.message) {
      alert("Please fill all fields.");
      return;
    }

    try {
      setSending(true);

      await emailjs.send(
        "service_5weq00n",
        "template_it7ktg9",
        {
          name: form.name,
          email: form.email,
          phone: "Not Provided",
          subject: form.subject,
          message: form.message,
        },
        "dFNU9MQhyohyyz-VM",
      );

      toast.success(
        "Thank you for contacting SNC Technologies. We'll get back to you shortly.",
      );

      setForm({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error(error);
      toast.error("Unable to send your message. Please try again.");
    } finally {
      setSending(false);
    }
  };

  const cardStyle = {
    background: "#0f1d33",
    padding: isMobile ? "25px" : "35px",
    borderRadius: "20px",
    marginBottom: "25px",
    border: "1px solid rgba(255,255,255,0.08)",
    boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
    color: "#ffffff",
  };

  const inputStyle = {
    width: "100%",
    padding: "16px",
    marginBottom: "20px",
    background: "#081425",
    border: "1px solid #1e293b",
    borderRadius: "10px",
    color: "white",
    fontSize: "16px",
    boxSizing: "border-box",
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#081425",
        color: "white",
        padding: isMobile ? "80px 20px" : "120px 20px",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        {/* Heading */}
        <div
          style={{
            textAlign: "center",
            marginBottom: isMobile ? "60px" : "80px",
          }}
        >
          <h1
            style={{
              fontSize: "clamp(36px,8vw,64px)",
              fontWeight: "800",
              background: "linear-gradient(90deg,#60a5fa,#38bdf8)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              marginBottom: "20px",
            }}
          >
            Contact Us
          </h1>

          <p
            style={{
              color: "#cbd5e1",
              fontSize: "clamp(18px,4vw,22px)",
            }}
          >
            Let's discuss your next project.
          </p>
        </div>

        {/* Main Section */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: isTablet ? "1fr" : "1fr 1fr",
            gap: "50px",
          }}
        >
          {/* Left */}
          <div>
            <div className="hover-card" style={cardStyle}>
              <h3 style={{ color: "#ffffff", marginBottom: "10px" }}>
                📍 Address
              </h3>

              <p style={{ color: "#cbd5e1" }}>Mumbai, Maharashtra, India</p>
            </div>

            <div className="hover-card" style={cardStyle}>
              <h3 style={{ color: "#ffffff", marginBottom: "10px" }}>
                📞 Phone
              </h3>

              <p style={{ color: "#cbd5e1" }}>+91 XXXXX XXXXX </p>
            </div>

            <div className="hover-card" style={cardStyle}>
              <h3 style={{ color: "#ffffff", marginBottom: "10px" }}>
                🕒 Working Hours
              </h3>

              <p style={{ color: "#cbd5e1" }}>Monday - Friday</p>

              <p style={{ color: "#cbd5e1" }}>9:00 AM - 6:00 PM</p>
            </div>

            <div className="hover-card" style={cardStyle}>
              <h3 style={{ color: "#ffffff", marginBottom: "10px" }}>
                🌐 Follow Us
              </h3>

              <div
                style={{
                  display: "flex",

                  gap: "20px",

                  marginTop: "20px",

                  fontSize: "28px",

                  justifyContent: isMobile ? "center" : "flex-start",
                }}
              >
                <span>💼</span>

                <span>📸</span>

                <span>🐦</span>

                <span>📺</span>
              </div>
            </div>
          </div>

          {/* Right */}
          <div
            style={{
              background: "#0f1d33",
              padding: isMobile ? "25px" : "40px",
              borderRadius: "20px",
              border: "1px solid rgba(255,255,255,0.08)",
              boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
              color: "#ffffff",
            }}
          >
            <h2
              style={{
                marginBottom: "30px",
                fontSize: "clamp(24px,5vw,32px)",
                color: "#ffffff",
              }}
            >
              Send us a message
            </h2>

            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Your Name"
              style={inputStyle}
            />

            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Email Address"
              style={inputStyle}
            />

            <input
              type="text"
              name="subject"
              value={form.subject}
              onChange={handleChange}
              placeholder="Subject"
              style={inputStyle}
            />

            <textarea
              rows="6"
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Your Message"
              style={{
                ...inputStyle,
                resize: "none",
              }}
            />

            <button
              onClick={sendEmail}
              disabled={sending}
              className="btn btn--primary hover-btn glow-button"
              style={{
                width: isMobile ? "100%" : "auto",
                padding: "16px 40px",
                fontSize: "16px",
                fontWeight: "700",
              }}
            >
              {sending ? "Sending..." : "Send Message"}
            </button>
          </div>
        </div>

        {/* Map */}
        <div
          style={{
            marginTop: isMobile ? "70px" : "100px",
          }}
        >
          <h2
            style={{
              textAlign: "center",
              fontSize: "clamp(28px,5vw,40px)",
              marginBottom: "30px",
              color: "#ffffff",
            }}
          >
            Find Us
          </h2>

          <iframe
            src="https://www.google.com/maps?q=Mumbai&output=embed"
            width="100%"
            height={isMobile ? "300" : "400"}
            style={{
              border: 0,
              borderRadius: "20px",
            }}
            loading="lazy"
            title="map"
          />
        </div>
      </div>
    </div>
  );
}
