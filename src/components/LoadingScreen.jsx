export default function LoadingScreen() {
  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        background: "#081425",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 999999,
      }}
    >
      <img
        src="/logo.png"
        alt="SNC Technologies"
        style={{
          width: "320px",
          maxWidth: "80%",
          objectFit: "contain",
        }}
      />

      <p
        style={{
          color: "#94a3b8",
          marginBottom: "30px",
        }}
      >
        Initializing Innovation...
      </p>

      <div
        style={{
          width: "250px",
          height: "4px",
          background: "#1e293b",
          borderRadius: "10px",
          overflow: "hidden",
        }}
      >
        <div
          className="loader-bar"
          style={{
            height: "100%",
            background: "linear-gradient(90deg,#2563eb,#38bdf8)",
          }}
        />
      </div>
    </div>
  );
}
