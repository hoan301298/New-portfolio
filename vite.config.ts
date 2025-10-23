import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/New-portfolio/', // 👈 must match your GitHub repo name exactly
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'), // 👈 this tells Vite what "@" means
    },
  },
})
