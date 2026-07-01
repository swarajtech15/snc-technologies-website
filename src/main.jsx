import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";
import { Toaster } from "react-hot-toast";

import "./styles/tokens.css";
import "./styles/global.css";
import "./styles/animations.css";

import App from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Toaster
        position="top-right"
        toastOptions={{
          duration: 5000,

          style: {
            background: "#0f1d33",

            color: "#fff",

            border: "1px solid #2563eb",

            padding: "16px",

            borderRadius: "12px",
          },
        }}
      />
      <App />
      <Analytics />
    </BrowserRouter>
  </React.StrictMode>,
);
