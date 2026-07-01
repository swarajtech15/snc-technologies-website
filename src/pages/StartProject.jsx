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

export default function StartProject() {
  const isMobile = window.innerWidth < 768;

  const [sending, setSending] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    service: "",
    budget: "",
    timeline: "",
    description: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const submitProject = async () => {
    if (
      !form.name ||
      !form.email ||
      !form.company ||
      !form.phone ||
      !form.service ||
      !form.budget ||
      !form.timeline ||
      !form.description
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
          service: form.service,
          budget: `${form.budget} | Timeline: ${form.timeline} | Phone: ${form.phone}`,
          date: "Not specified",
          time: "Not specified",
          message: form.description,
        },
        "dFNU9MQhyohyyz-VM",
      );

      toast.success(
        "Project request submitted successfully! We'll contact you shortly.",
        {
          icon: "🚀",
        },
      );

      setForm({
        name: "",
        email: "",
        company: "",
        phone: "",
        service: "",
        budget: "",
        timeline: "",
        description: "",
      });
    } catch (error) {
      console.error(error);

      toast.error("Failed to submit project request. Please try again.");
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
            onSubmit={(e) => e.preventDefault()}
            style={{
              display: "flex",
              flexDirection: "column",
              gap: isMobile ? "18px" : "25px",
            }}
          >
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              type="text"
              placeholder="Full Name"
              style={inputStyle}
            />

            <input
              name="email"
              value={form.email}
              onChange={handleChange}
              type="email"
              placeholder="Email Address"
              style={inputStyle}
            />

            <input
              name="phone"
              value={form.phone}
              onChange={handleChange}
              type="text"
              placeholder="Phone Number"
              style={inputStyle}
            />

            <input
              name="company"
              value={form.company}
              onChange={handleChange}
              type="text"
              placeholder="Company Name"
              style={inputStyle}
            />

            <select
              name="service"
              value={form.service}
              onChange={handleChange}
              style={inputStyle}
            >
              <option value="">Select Service</option>
              <option>AI Solutions</option>
              <option>Web Development</option>
              <option>Cybersecurity</option>
              <option>Cloud Infrastructure</option>
            </select>

            <select
              name="budget"
              value={form.budget}
              onChange={handleChange}
              style={inputStyle}
            >
              <option value="">Select Budget</option>
              <option>Under ₹50,000</option>
              <option>₹50,000 - ₹2 Lakhs</option>
              <option>₹2 Lakhs - ₹10 Lakhs</option>
              <option>₹10 Lakhs+</option>
            </select>

            <select
              name="timeline"
              value={form.timeline}
              onChange={handleChange}
              style={inputStyle}
            >
              <option value="">Select Timeline</option>
              <option>ASAP</option>
              <option>Within 1 Month</option>
              <option>Within 3 Months</option>
              <option>Flexible</option>
            </select>

            <textarea
              name="description"
              value={form.description}
              onChange={handleChange}
              rows={isMobile ? "5" : "6"}
              placeholder="Describe your project..."
              style={{
                ...inputStyle,
                resize: "vertical",
                minHeight: "150px",
              }}
            />

            <button
              onClick={submitProject}
              disabled={sending}
              className="btn btn--primary hover-btn glow-button"
              style={{
                width: isMobile ? "100%" : "220px",
                margin: "10px auto 0",
                padding: "16px",
                fontWeight: "700",
              }}
            >
              {sending ? "Submitting..." : "Submit Project"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
