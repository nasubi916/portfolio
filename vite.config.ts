import { defineConfig } from "vite";
import mdx from '@mdx-js/rollup'
import react from "@vitejs/plugin-react-swc";
import vike from "vike/plugin";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [
    react(),
    tsconfigPaths(),
    vike({ prerender: true }),
    {enforce: 'pre', ...mdx()},
  ],
});
