import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { mdx } from "@cyco130/vite-plugin-mdx";
import vike from "vike/plugin";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [
    react(),
    vike({ prerender: true }),
    tsconfigPaths(),
    mdx()
  ],
});
