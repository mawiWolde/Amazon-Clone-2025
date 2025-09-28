import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
  base: "/Amazon-Clone-2025/",
  plugins: [react()],
  resolve: {
    alias: { "@": path.resolve(__dirname, "src") }
  }
});
