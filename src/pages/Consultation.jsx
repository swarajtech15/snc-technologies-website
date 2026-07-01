import { useState } from "react";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";

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

export default function Consultation() {
  const isMobile = window.innerWidth < 768;

  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    consultation: "",
    date: "",
    time: "",
    message: "",
  });

  const [sending, setSending] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const sendConsultation = async (e) => {
    e.preventDefault();

    if (
      !form.name ||
      !form.email ||
      !form.company ||
      !form.consultation ||
      !form.date ||
      !form.time ||
      !form.message
    ) {
      toast("Please fill all required fields.", {
        icon: "⚠️",
      });
      return;
    }

    try {
      setSending(true);

      await emailjs.send(
        "service_5weq00n",
        "template_41epack",
        {
          name: form.name,
          email: form.email,
          company: form.company,
          service: form.consultation,
          budget: "Not specified",
          date: form.date,
          time: form.time,
          message: form.message,
        },
        "dFNU9MQhyohyyz-VM",
      );

      toast.success(
        "Consultation request submitted successfully! We'll contact you shortly.",
        {
          icon: "🚀",
        },
      );

      setForm({
        name: "",
        email: "",
        company: "",
        consultation: "",
        date: "",
        time: "",
        message: "",
      });
    } catch (error) {
      console.error(error);
      toast.error("Failed to submit consultation request. Please try again.");
    } finally {
      setSending(false);
    }
  };

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
            Schedule a Consultation
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
            Book a free consultation with our experts and discuss your business
            goals, technical requirements, and future vision.
          </p>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: isMobile ? "15px" : "25px",
            flexWrap: "wrap",
            marginBottom: "50px",
            color: "#4fc3ff",
            fontWeight: "600",
            fontSize: isMobile ? "14px" : "16px",
          }}
        >
          <span>✓ AI Strategy</span>
          <span>✓ Software Architecture</span>
          <span>✓ Cybersecurity</span>
          <span>✓ Cloud Solutions</span>
        </div>

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
            onSubmit={sendConsultation}
            style={{
              display: "flex",
              flexDirection: "column",
              gap: isMobile ? "18px" : "25px",
            }}
          >
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={form.name}
              onChange={handleChange}
              style={inputStyle}
            />

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={form.email}
              onChange={handleChange}
              style={inputStyle}
            />

            <input
              type="text"
              name="company"
              placeholder="Company Name"
              value={form.company}
              onChange={handleChange}
              style={inputStyle}
            />

            <select
              name="consultation"
              value={form.consultation}
              onChange={handleChange}
              style={inputStyle}
            >
              <option value="">Select Consultation Type</option>
              <option>AI Solutions</option>
              <option>Web Development</option>
              <option>Cybersecurity</option>
              <option>Cloud Infrastructure</option>
            </select>

            <input
              type="date"
              name="date"
              value={form.date}
              onChange={handleChange}
              style={inputStyle}
            />

            <input
              type="time"
              name="time"
              value={form.time}
              onChange={handleChange}
              style={inputStyle}
            />

            <textarea
              rows={isMobile ? "4" : "5"}
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Tell us what you'd like to discuss..."
              style={{
                ...inputStyle,
                resize: "vertical",
                minHeight: "140px",
              }}
            />

            <button
              type="submit"
              disabled={sending}
              className="btn btn--primary hover-btn glow-button"
              style={{
                width: isMobile ? "100%" : "250px",
                margin: "10px auto 0",
                padding: "16px",
                fontWeight: "700",
              }}
            >
              {sending ? "Scheduling..." : "Schedule Consultation"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
