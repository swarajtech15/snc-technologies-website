import { useEffect, useState } from "react";

export default function ScrollProgress() {
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    const updateScroll = () => {
      const totalHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

      const scrollPosition = window.scrollY;

      const progress = (scrollPosition / totalHeight) * 100;

      setScroll(progress);
    };

    window.addEventListener("scroll", updateScroll);

    return () => window.removeEventListener("scroll", updateScroll);
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: `${scroll}%`,
        height: "4px",
        background: "linear-gradient(90deg,#2563eb,#38bdf8)",
        zIndex: 99999,
        transition: "width 0.1s linear",
        boxShadow: "0 0 15px rgba(56,189,248,0.7)",
      }}
    />
  );
}
