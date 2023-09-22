import { fileURLToPath, URL } from "url";
import { defineConfig } from "vite";

import Vue from "@vitejs/plugin-vue";

export default defineConfig({
  plugins: [Vue()],
  test: {
    globals: true,
    environment: "jsdom",
    coverage: {
      all: true,
      extension: [".vue"],
      reporter: ["text", "json", "html", "lcov"],
    },
  },
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
