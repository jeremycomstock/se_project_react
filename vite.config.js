import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/se_project_wtwr/",
  plugins: [react()],
  server: {
    port: 3000,
  },
});
