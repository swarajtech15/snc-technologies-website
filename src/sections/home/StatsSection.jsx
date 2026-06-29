import { useEffect, useState } from "react";

function Counter({ end, suffix = "" }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 2000; // 2 seconds
    const increment = end / (duration / 20);

    const timer = setInterval(() => {
      start += increment;

      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 20);

    return () => clearInterval(timer);
  }, [end]);

  return (
    <>
      {count}
      {suffix}
    </>
  );
}

export default function StatsSection() {
  const stats = [
    {
      number: 150,
      suffix: "+",
      label: "Projects Delivered",
    },
    {
      number: 50,
      suffix: "+",
      label: "Enterprise Clients",
    },
    {
      number: 10,
      suffix: "+",
      label: "Countries Served",
    },
    {
      number: 99,
      suffix: "%",
      label: "Success Rate",
    },
  ];

  return (
    <section
      style={{
        background: "#081425",
        padding: "100px 0",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 20px",
        }}
      >
        <div
          style={{
            textAlign: "center",
            marginBottom: "60px",
          }}
        >
          <h2
            className="fade-up stats-title"
            style={{
              fontSize: "42px",
              color: "#ffffff",
              marginBottom: "15px",
            }}
          >
            Our Impact In Numbers
          </h2>

          <p
            style={{
              color: "#94a3b8",
              fontSize: "18px",
            }}
          >
            Delivering innovation across industries worldwide.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "30px",
          }}
        >
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="stats-card hover-card"
              style={{
                background: "#0f1d33",
                padding: "50px 20px",
                borderRadius: "20px",
                textAlign: "center",
                border: "1px solid rgba(255,255,255,0.08)",
                backdropFilter: "blur(10px)",
              }}
            >
              <h2
                style={{
                  fontSize: "56px",
                  fontWeight: "800",
                  margin: 0,
                  background: "linear-gradient(90deg,#60a5fa,#38bdf8)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                <Counter end={stat.number} suffix={stat.suffix} />
              </h2>

              <div
                style={{
                  width: "50px",
                  height: "3px",
                  background: "linear-gradient(90deg,#60a5fa,#38bdf8)",
                  margin: "20px auto",
                  borderRadius: "10px",
                }}
              />

              <p
                style={{
                  color: "#cbd5e1",
                  fontSize: "18px",
                  margin: 0,
                }}
              >
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
