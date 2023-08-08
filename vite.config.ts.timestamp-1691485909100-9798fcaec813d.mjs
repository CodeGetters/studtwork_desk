// vite.config.ts
import { defineConfig, loadEnv } from "file:///E:/software_cache/codetotal/vue/repo/studtwork_desk/node_modules/vite/dist/node/index.js";
import { resolve } from "node:path";
import vue from "file:///E:/software_cache/codetotal/vue/repo/studtwork_desk/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import ViteDelTool from "file:///E:/software_cache/codetotal/vue/repo/studtwork_desk/node_modules/vite-plugin-vue-devtools/dist/vite.mjs";
import tsChecker from "file:///E:/software_cache/codetotal/vue/repo/studtwork_desk/node_modules/vite-plugin-checker/dist/esm/main.js";
import AutoImport from "file:///E:/software_cache/codetotal/vue/repo/studtwork_desk/node_modules/unplugin-auto-import/dist/vite.js";
import UnoCss from "file:///E:/software_cache/codetotal/vue/repo/studtwork_desk/node_modules/unocss/dist/vite.mjs";
import ViteCompression from "file:///E:/software_cache/codetotal/vue/repo/studtwork_desk/node_modules/vite-plugin-compression/dist/index.mjs";
import Markdown from "file:///E:/software_cache/codetotal/vue/repo/studtwork_desk/node_modules/vite-plugin-vue-markdown/dist/index.mjs";
var __vite_injected_original_dirname = "E:\\software_cache\\codetotal\\vue\\repo\\studtwork_desk";
var vite_config_default = ({ mode }) => {
  const VITE_BASE_URL = loadEnv(mode, process.cwd()).VITE_BASE_URL;
  return defineConfig({
    base: "/",
    resolve: {
      alias: {
        "@": resolve(__vite_injected_original_dirname, "src")
      }
    },
    optimizeDeps: {
      include: ["vue", "vue-router", "@vueuse/core"]
    },
    server: {
      proxy: {
        "/api/": {
          target: VITE_BASE_URL,
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, "")
        }
      }
    },
    build: {
      rollupOptions: {
        output: {
          entryFileNames: "assets/js/[name].js",
          chunkFileNames: "assets/js/[name]-[hash].js",
          assetFileNames: "assets/[ext]/[name]-[hash]-.[ext]",
          manualChunks(id) {
            if (id.includes("node_modules")) {
              return id.toString().split("node_modules/")[1].split("/")[0].toString();
            }
          }
        }
      }
    },
    plugins: [
      Markdown({
        headEnabled: true
      }),
      ViteDelTool(),
      UnoCss(),
      ViteCompression(),
      vue({
        include: [/\.vue$/, /\.md$/]
      }),
      AutoImport({
        imports: ["vue", "vue-router", "@vueuse/core", "@vueuse/head"]
      }),
      tsChecker({
        typescript: true
      })
    ]
  });
};
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJFOlxcXFxzb2Z0d2FyZV9jYWNoZVxcXFxjb2RldG90YWxcXFxcdnVlXFxcXHJlcG9cXFxcc3R1ZHR3b3JrX2Rlc2tcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkU6XFxcXHNvZnR3YXJlX2NhY2hlXFxcXGNvZGV0b3RhbFxcXFx2dWVcXFxccmVwb1xcXFxzdHVkdHdvcmtfZGVza1xcXFx2aXRlLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vRTovc29mdHdhcmVfY2FjaGUvY29kZXRvdGFsL3Z1ZS9yZXBvL3N0dWR0d29ya19kZXNrL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnLCBsb2FkRW52IH0gZnJvbSBcInZpdGVcIjtcbmltcG9ydCB7IHJlc29sdmUgfSBmcm9tIFwibm9kZTpwYXRoXCI7XG5pbXBvcnQgdnVlIGZyb20gXCJAdml0ZWpzL3BsdWdpbi12dWVcIjtcbmltcG9ydCBWaXRlRGVsVG9vbCBmcm9tIFwidml0ZS1wbHVnaW4tdnVlLWRldnRvb2xzXCI7XG5pbXBvcnQgdHNDaGVja2VyIGZyb20gXCJ2aXRlLXBsdWdpbi1jaGVja2VyXCI7XG5pbXBvcnQgQXV0b0ltcG9ydCBmcm9tIFwidW5wbHVnaW4tYXV0by1pbXBvcnQvdml0ZVwiO1xuaW1wb3J0IFVub0NzcyBmcm9tIFwidW5vY3NzL3ZpdGVcIjtcbmltcG9ydCBWaXRlQ29tcHJlc3Npb24gZnJvbSBcInZpdGUtcGx1Z2luLWNvbXByZXNzaW9uXCI7XG5pbXBvcnQgTWFya2Rvd24gZnJvbSBcInZpdGUtcGx1Z2luLXZ1ZS1tYXJrZG93blwiO1xuXG4vLyBodHRwczovL3ZpdGVqcy5kZXYvY29uZmlnL1xuZXhwb3J0IGRlZmF1bHQgKHsgbW9kZSB9KSA9PiB7XG4gIGNvbnN0IFZJVEVfQkFTRV9VUkwgPSBsb2FkRW52KG1vZGUsIHByb2Nlc3MuY3dkKCkpLlZJVEVfQkFTRV9VUkw7XG5cbiAgcmV0dXJuIGRlZmluZUNvbmZpZyh7XG4gICAgYmFzZTogXCIvXCIsXG4gICAgcmVzb2x2ZToge1xuICAgICAgYWxpYXM6IHtcbiAgICAgICAgXCJAXCI6IHJlc29sdmUoX19kaXJuYW1lLCBcInNyY1wiKSxcbiAgICAgIH0sXG4gICAgfSxcbiAgICBvcHRpbWl6ZURlcHM6IHtcbiAgICAgIGluY2x1ZGU6IFtcInZ1ZVwiLCBcInZ1ZS1yb3V0ZXJcIiwgXCJAdnVldXNlL2NvcmVcIl0sXG4gICAgfSxcbiAgICBzZXJ2ZXI6IHtcbiAgICAgIHByb3h5OiB7XG4gICAgICAgIFwiL2FwaS9cIjoge1xuICAgICAgICAgIHRhcmdldDogVklURV9CQVNFX1VSTCxcbiAgICAgICAgICBjaGFuZ2VPcmlnaW46IHRydWUsXG4gICAgICAgICAgcmV3cml0ZTogKHBhdGgpID0+IHBhdGgucmVwbGFjZSgvXlxcL2FwaS8sIFwiXCIpLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9LFxuICAgIGJ1aWxkOiB7XG4gICAgICByb2xsdXBPcHRpb25zOiB7XG4gICAgICAgIG91dHB1dDoge1xuICAgICAgICAgIGVudHJ5RmlsZU5hbWVzOiBcImFzc2V0cy9qcy9bbmFtZV0uanNcIixcbiAgICAgICAgICBjaHVua0ZpbGVOYW1lczogXCJhc3NldHMvanMvW25hbWVdLVtoYXNoXS5qc1wiLFxuICAgICAgICAgIGFzc2V0RmlsZU5hbWVzOiBcImFzc2V0cy9bZXh0XS9bbmFtZV0tW2hhc2hdLS5bZXh0XVwiLFxuICAgICAgICAgIG1hbnVhbENodW5rcyhpZCkge1xuICAgICAgICAgICAgaWYgKGlkLmluY2x1ZGVzKFwibm9kZV9tb2R1bGVzXCIpKSB7XG4gICAgICAgICAgICAgIHJldHVybiBpZFxuICAgICAgICAgICAgICAgIC50b1N0cmluZygpXG4gICAgICAgICAgICAgICAgLnNwbGl0KFwibm9kZV9tb2R1bGVzL1wiKVsxXVxuICAgICAgICAgICAgICAgIC5zcGxpdChcIi9cIilbMF1cbiAgICAgICAgICAgICAgICAudG9TdHJpbmcoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9LFxuICAgIHBsdWdpbnM6IFtcbiAgICAgIE1hcmtkb3duKHtcbiAgICAgICAgaGVhZEVuYWJsZWQ6IHRydWUsXG4gICAgICB9KSxcbiAgICAgIFZpdGVEZWxUb29sKCksXG4gICAgICBVbm9Dc3MoKSxcbiAgICAgIFZpdGVDb21wcmVzc2lvbigpLFxuICAgICAgdnVlKHtcbiAgICAgICAgaW5jbHVkZTogWy9cXC52dWUkLywgL1xcLm1kJC9dLFxuICAgICAgfSksXG4gICAgICBBdXRvSW1wb3J0KHtcbiAgICAgICAgaW1wb3J0czogW1widnVlXCIsIFwidnVlLXJvdXRlclwiLCBcIkB2dWV1c2UvY29yZVwiLCBcIkB2dWV1c2UvaGVhZFwiXSxcbiAgICAgIH0pLFxuICAgICAgdHNDaGVja2VyKHtcbiAgICAgICAgdHlwZXNjcmlwdDogdHJ1ZSxcbiAgICAgIH0pLFxuICAgIF0sXG4gIH0pO1xufTtcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBdVYsU0FBUyxjQUFjLGVBQWU7QUFDN1gsU0FBUyxlQUFlO0FBQ3hCLE9BQU8sU0FBUztBQUNoQixPQUFPLGlCQUFpQjtBQUN4QixPQUFPLGVBQWU7QUFDdEIsT0FBTyxnQkFBZ0I7QUFDdkIsT0FBTyxZQUFZO0FBQ25CLE9BQU8scUJBQXFCO0FBQzVCLE9BQU8sY0FBYztBQVJyQixJQUFNLG1DQUFtQztBQVd6QyxJQUFPLHNCQUFRLENBQUMsRUFBRSxLQUFLLE1BQU07QUFDM0IsUUFBTSxnQkFBZ0IsUUFBUSxNQUFNLFFBQVEsSUFBSSxDQUFDLEVBQUU7QUFFbkQsU0FBTyxhQUFhO0FBQUEsSUFDbEIsTUFBTTtBQUFBLElBQ04sU0FBUztBQUFBLE1BQ1AsT0FBTztBQUFBLFFBQ0wsS0FBSyxRQUFRLGtDQUFXLEtBQUs7QUFBQSxNQUMvQjtBQUFBLElBQ0Y7QUFBQSxJQUNBLGNBQWM7QUFBQSxNQUNaLFNBQVMsQ0FBQyxPQUFPLGNBQWMsY0FBYztBQUFBLElBQy9DO0FBQUEsSUFDQSxRQUFRO0FBQUEsTUFDTixPQUFPO0FBQUEsUUFDTCxTQUFTO0FBQUEsVUFDUCxRQUFRO0FBQUEsVUFDUixjQUFjO0FBQUEsVUFDZCxTQUFTLENBQUMsU0FBUyxLQUFLLFFBQVEsVUFBVSxFQUFFO0FBQUEsUUFDOUM7QUFBQSxNQUNGO0FBQUEsSUFDRjtBQUFBLElBQ0EsT0FBTztBQUFBLE1BQ0wsZUFBZTtBQUFBLFFBQ2IsUUFBUTtBQUFBLFVBQ04sZ0JBQWdCO0FBQUEsVUFDaEIsZ0JBQWdCO0FBQUEsVUFDaEIsZ0JBQWdCO0FBQUEsVUFDaEIsYUFBYSxJQUFJO0FBQ2YsZ0JBQUksR0FBRyxTQUFTLGNBQWMsR0FBRztBQUMvQixxQkFBTyxHQUNKLFNBQVMsRUFDVCxNQUFNLGVBQWUsRUFBRSxDQUFDLEVBQ3hCLE1BQU0sR0FBRyxFQUFFLENBQUMsRUFDWixTQUFTO0FBQUEsWUFDZDtBQUFBLFVBQ0Y7QUFBQSxRQUNGO0FBQUEsTUFDRjtBQUFBLElBQ0Y7QUFBQSxJQUNBLFNBQVM7QUFBQSxNQUNQLFNBQVM7QUFBQSxRQUNQLGFBQWE7QUFBQSxNQUNmLENBQUM7QUFBQSxNQUNELFlBQVk7QUFBQSxNQUNaLE9BQU87QUFBQSxNQUNQLGdCQUFnQjtBQUFBLE1BQ2hCLElBQUk7QUFBQSxRQUNGLFNBQVMsQ0FBQyxVQUFVLE9BQU87QUFBQSxNQUM3QixDQUFDO0FBQUEsTUFDRCxXQUFXO0FBQUEsUUFDVCxTQUFTLENBQUMsT0FBTyxjQUFjLGdCQUFnQixjQUFjO0FBQUEsTUFDL0QsQ0FBQztBQUFBLE1BQ0QsVUFBVTtBQUFBLFFBQ1IsWUFBWTtBQUFBLE1BQ2QsQ0FBQztBQUFBLElBQ0g7QUFBQSxFQUNGLENBQUM7QUFDSDsiLAogICJuYW1lcyI6IFtdCn0K
