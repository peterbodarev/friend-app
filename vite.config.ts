import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

const aliases = {
  "@": "src",
};

const resolvedAliases = Object.fromEntries(
  Object.entries(aliases).map(([key, value]) => [
    key,
    resolve(__dirname, value),
  ])
);

const baseUrl = "/friend-app/";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: baseUrl,
  resolve: {
    alias: {
      ...resolvedAliases,
    },
  },
});
