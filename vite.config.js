import { defineConfig, loadEnv } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  const isBuild = command === "build";
  const viteEnv = loadEnv(mode, process.cwd());
  const { VITE_TITLE, VITE_PUBLIC_PATH, VITE_PROXY_TARGET } = viteEnv;
  return {
    base: VITE_PUBLIC_PATH || "/",
    plugins: [vue()],
    resolve: {
      alias: {
        "@": path.resolve(process.cwd(), "src"),
        "~": path.resolve(process.cwd()),
      },
    },
    server: {},
  };
});
