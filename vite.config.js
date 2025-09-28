import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// const base = process.env.DEPLOY_TARGET === "gh" ? "/Amazon-Clone-2025" : "/";
export default defineConfig({
  // base: "/", // Netlify serves from domain root
  base: "/Amazon-Clone-2025",
  plugins: [react()],
  resolve: { alias: { "@": path.resolve(__dirname, "src") } }
});
