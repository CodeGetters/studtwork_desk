import { defineConfig, loadEnv } from "vite";
import { basename, dirname, resolve } from "node:path";
import vue from "@vitejs/plugin-vue";
import ViteDelTool from "vite-plugin-vue-devtools";
import tsChecker from "vite-plugin-checker";
import AutoImport from "unplugin-auto-import/vite";
import UnoCss from "unocss/vite";
import ViteCompression from "vite-plugin-compression";
import Markdown from "vite-plugin-vue-markdown";

// https://vitejs.dev/config/
export default ({ mode }) => {
  const VITE_BASE_URL = loadEnv(mode, process.cwd()).VITE_BASE_URL;

  return defineConfig({
    base: "/",
    resolve: {
      alias: {
        "@": resolve(__dirname, "src"),
      },
    },
    optimizeDeps: {
      include: ["vue", "vue-router", "@vueuse/core"],
    },
    server: {
      proxy: {
        "/api/": {
          target: VITE_BASE_URL,
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, ""),
        },
      },
    },
    build: {
      rollupOptions: {
        output: {
          entryFileNames: "assets/js/[name].js",
          chunkFileNames: "assets/js/[name]-[hash].js",
          assetFileNames: "assets/[ext]/[name]-[hash]-.[ext]",
          manualChunks(id) {
            if (id.includes("node_modules")) {
              return id
                .toString()
                .split("node_modules/")[1]
                .split("/")[0]
                .toString();
            }
          },
        },
      },
    },
    plugins: [
      vue({
        include: [/\.vue$/, /\.md$/],
      }),
      Markdown(),
      ViteDelTool(),
      UnoCss(),
      ViteCompression(),
      AutoImport({
        imports: ["vue", "vue-router", "@vueuse/core", "@vueuse/head"],
      }),
      tsChecker({
        typescript: true,
      }),
    ],
  });
};
