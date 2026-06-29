import { useEffect, useState } from "react";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggle = () => {
      setVisible(window.scrollY > 400);
    };

    window.addEventListener("scroll", toggle);

    return () => {
      window.removeEventListener("scroll", toggle);
    };
  }, []);

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!visible) return null;

  return (
    <button
      onClick={scrollTop}
      style={{
        position: "fixed",
        bottom: "30px",
        right: "30px",
        width: "60px",
        height: "60px",
        borderRadius: "50%",
        border: "none",
        cursor: "pointer",
        background: "linear-gradient(135deg,#2563eb,#38bdf8)",
        color: "white",
        fontSize: "26px",
        fontWeight: "700",
        boxShadow: "0 10px 30px rgba(37,99,235,0.4)",
        zIndex: 9999,
        transition: "0.3s",
      }}
    >
      ↑
    </button>
  );
}
