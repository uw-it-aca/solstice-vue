import { fileURLToPath, URL } from "url";

import { defineConfig } from "vite";
import Vue from "@vitejs/plugin-vue";
import Pages from "vite-plugin-pages";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    Vue(),
    Pages({
      dirs: [{ dir: "src/docs", baseRoute: "" }],
      exclude: ["_*.vue"],
    }),
  ],
  build: {
    emptyOutDir: false, // set to false to ensure axdd-components modules are not overridden
  },
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
