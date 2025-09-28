import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// Apply light theme
document.documentElement.classList.add('light');

createRoot(document.getElementById("root")!).render(<App />);
