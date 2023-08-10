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
import SVG from "file:///E:/software_cache/codetotal/vue/repo/studtwork_desk/node_modules/vite-svg-loader/index.js";
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
        headEnabled: true,
        exportFrontmatter: false,
        exposeFrontmatter: false,
        exposeExcerpt: false,
        markdownItOptions: {
          quotes: `""''`
        }
      }),
      ViteDelTool(),
      UnoCss(),
      ViteCompression(),
      vue({
        include: [/\.vue$/, /\.md$/]
      }),
      SVG({
        defaultImport: "url"
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJFOlxcXFxzb2Z0d2FyZV9jYWNoZVxcXFxjb2RldG90YWxcXFxcdnVlXFxcXHJlcG9cXFxcc3R1ZHR3b3JrX2Rlc2tcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkU6XFxcXHNvZnR3YXJlX2NhY2hlXFxcXGNvZGV0b3RhbFxcXFx2dWVcXFxccmVwb1xcXFxzdHVkdHdvcmtfZGVza1xcXFx2aXRlLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vRTovc29mdHdhcmVfY2FjaGUvY29kZXRvdGFsL3Z1ZS9yZXBvL3N0dWR0d29ya19kZXNrL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnLCBsb2FkRW52IH0gZnJvbSBcInZpdGVcIjtcbmltcG9ydCB7IHJlc29sdmUgfSBmcm9tIFwibm9kZTpwYXRoXCI7XG5pbXBvcnQgdnVlIGZyb20gXCJAdml0ZWpzL3BsdWdpbi12dWVcIjtcbmltcG9ydCBWaXRlRGVsVG9vbCBmcm9tIFwidml0ZS1wbHVnaW4tdnVlLWRldnRvb2xzXCI7XG5pbXBvcnQgdHNDaGVja2VyIGZyb20gXCJ2aXRlLXBsdWdpbi1jaGVja2VyXCI7XG5pbXBvcnQgQXV0b0ltcG9ydCBmcm9tIFwidW5wbHVnaW4tYXV0by1pbXBvcnQvdml0ZVwiO1xuaW1wb3J0IFVub0NzcyBmcm9tIFwidW5vY3NzL3ZpdGVcIjtcbmltcG9ydCBWaXRlQ29tcHJlc3Npb24gZnJvbSBcInZpdGUtcGx1Z2luLWNvbXByZXNzaW9uXCI7XG5pbXBvcnQgTWFya2Rvd24gZnJvbSBcInZpdGUtcGx1Z2luLXZ1ZS1tYXJrZG93blwiO1xuaW1wb3J0IFNWRyBmcm9tIFwidml0ZS1zdmctbG9hZGVyXCI7XG5cbi8vIGh0dHBzOi8vdml0ZWpzLmRldi9jb25maWcvXG5leHBvcnQgZGVmYXVsdCAoeyBtb2RlIH0pID0+IHtcbiAgY29uc3QgVklURV9CQVNFX1VSTDogc3RyaW5nID0gbG9hZEVudihtb2RlLCBwcm9jZXNzLmN3ZCgpKS5WSVRFX0JBU0VfVVJMO1xuXG4gIHJldHVybiBkZWZpbmVDb25maWcoe1xuICAgIGJhc2U6IFwiL1wiLFxuICAgIHJlc29sdmU6IHtcbiAgICAgIGFsaWFzOiB7XG4gICAgICAgIFwiQFwiOiByZXNvbHZlKF9fZGlybmFtZSwgXCJzcmNcIiksXG4gICAgICB9LFxuICAgIH0sXG4gICAgb3B0aW1pemVEZXBzOiB7XG4gICAgICBpbmNsdWRlOiBbXCJ2dWVcIiwgXCJ2dWUtcm91dGVyXCIsIFwiQHZ1ZXVzZS9jb3JlXCJdLFxuICAgIH0sXG4gICAgc2VydmVyOiB7XG4gICAgICBwcm94eToge1xuICAgICAgICBcIi9hcGkvXCI6IHtcbiAgICAgICAgICB0YXJnZXQ6IFZJVEVfQkFTRV9VUkwsXG4gICAgICAgICAgY2hhbmdlT3JpZ2luOiB0cnVlLFxuICAgICAgICAgIHJld3JpdGU6IChwYXRoKSA9PiBwYXRoLnJlcGxhY2UoL15cXC9hcGkvLCBcIlwiKSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSxcbiAgICBidWlsZDoge1xuICAgICAgcm9sbHVwT3B0aW9uczoge1xuICAgICAgICBvdXRwdXQ6IHtcbiAgICAgICAgICBlbnRyeUZpbGVOYW1lczogXCJhc3NldHMvanMvW25hbWVdLmpzXCIsXG4gICAgICAgICAgY2h1bmtGaWxlTmFtZXM6IFwiYXNzZXRzL2pzL1tuYW1lXS1baGFzaF0uanNcIixcbiAgICAgICAgICBhc3NldEZpbGVOYW1lczogXCJhc3NldHMvW2V4dF0vW25hbWVdLVtoYXNoXS0uW2V4dF1cIixcbiAgICAgICAgICBtYW51YWxDaHVua3MoaWQpIHtcbiAgICAgICAgICAgIGlmIChpZC5pbmNsdWRlcyhcIm5vZGVfbW9kdWxlc1wiKSkge1xuICAgICAgICAgICAgICByZXR1cm4gaWRcbiAgICAgICAgICAgICAgICAudG9TdHJpbmcoKVxuICAgICAgICAgICAgICAgIC5zcGxpdChcIm5vZGVfbW9kdWxlcy9cIilbMV1cbiAgICAgICAgICAgICAgICAuc3BsaXQoXCIvXCIpWzBdXG4gICAgICAgICAgICAgICAgLnRvU3RyaW5nKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSxcbiAgICBwbHVnaW5zOiBbXG4gICAgICBNYXJrZG93bih7XG4gICAgICAgIGhlYWRFbmFibGVkOiB0cnVlLFxuICAgICAgICBleHBvcnRGcm9udG1hdHRlcjogZmFsc2UsXG4gICAgICAgIGV4cG9zZUZyb250bWF0dGVyOiBmYWxzZSxcbiAgICAgICAgZXhwb3NlRXhjZXJwdDogZmFsc2UsXG4gICAgICAgIG1hcmtkb3duSXRPcHRpb25zOiB7XG4gICAgICAgICAgcXVvdGVzOiBcIlxcXCJcXFwiJydcIixcbiAgICAgICAgfSxcbiAgICAgIH0pLFxuICAgICAgVml0ZURlbFRvb2woKSxcbiAgICAgIFVub0NzcygpLFxuICAgICAgVml0ZUNvbXByZXNzaW9uKCksXG4gICAgICB2dWUoe1xuICAgICAgICBpbmNsdWRlOiBbL1xcLnZ1ZSQvLCAvXFwubWQkL10sXG4gICAgICB9KSxcbiAgICAgIFNWRyh7XG4gICAgICAgIGRlZmF1bHRJbXBvcnQ6IFwidXJsXCIsXG4gICAgICB9KSxcbiAgICAgIEF1dG9JbXBvcnQoe1xuICAgICAgICBpbXBvcnRzOiBbXCJ2dWVcIiwgXCJ2dWUtcm91dGVyXCIsIFwiQHZ1ZXVzZS9jb3JlXCIsIFwiQHZ1ZXVzZS9oZWFkXCJdLFxuICAgICAgfSksXG4gICAgICB0c0NoZWNrZXIoe1xuICAgICAgICB0eXBlc2NyaXB0OiB0cnVlLFxuICAgICAgfSksXG4gICAgXSxcbiAgfSk7XG59O1xuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUF1VixTQUFTLGNBQWMsZUFBZTtBQUM3WCxTQUFTLGVBQWU7QUFDeEIsT0FBTyxTQUFTO0FBQ2hCLE9BQU8saUJBQWlCO0FBQ3hCLE9BQU8sZUFBZTtBQUN0QixPQUFPLGdCQUFnQjtBQUN2QixPQUFPLFlBQVk7QUFDbkIsT0FBTyxxQkFBcUI7QUFDNUIsT0FBTyxjQUFjO0FBQ3JCLE9BQU8sU0FBUztBQVRoQixJQUFNLG1DQUFtQztBQVl6QyxJQUFPLHNCQUFRLENBQUMsRUFBRSxLQUFLLE1BQU07QUFDM0IsUUFBTSxnQkFBd0IsUUFBUSxNQUFNLFFBQVEsSUFBSSxDQUFDLEVBQUU7QUFFM0QsU0FBTyxhQUFhO0FBQUEsSUFDbEIsTUFBTTtBQUFBLElBQ04sU0FBUztBQUFBLE1BQ1AsT0FBTztBQUFBLFFBQ0wsS0FBSyxRQUFRLGtDQUFXLEtBQUs7QUFBQSxNQUMvQjtBQUFBLElBQ0Y7QUFBQSxJQUNBLGNBQWM7QUFBQSxNQUNaLFNBQVMsQ0FBQyxPQUFPLGNBQWMsY0FBYztBQUFBLElBQy9DO0FBQUEsSUFDQSxRQUFRO0FBQUEsTUFDTixPQUFPO0FBQUEsUUFDTCxTQUFTO0FBQUEsVUFDUCxRQUFRO0FBQUEsVUFDUixjQUFjO0FBQUEsVUFDZCxTQUFTLENBQUMsU0FBUyxLQUFLLFFBQVEsVUFBVSxFQUFFO0FBQUEsUUFDOUM7QUFBQSxNQUNGO0FBQUEsSUFDRjtBQUFBLElBQ0EsT0FBTztBQUFBLE1BQ0wsZUFBZTtBQUFBLFFBQ2IsUUFBUTtBQUFBLFVBQ04sZ0JBQWdCO0FBQUEsVUFDaEIsZ0JBQWdCO0FBQUEsVUFDaEIsZ0JBQWdCO0FBQUEsVUFDaEIsYUFBYSxJQUFJO0FBQ2YsZ0JBQUksR0FBRyxTQUFTLGNBQWMsR0FBRztBQUMvQixxQkFBTyxHQUNKLFNBQVMsRUFDVCxNQUFNLGVBQWUsRUFBRSxDQUFDLEVBQ3hCLE1BQU0sR0FBRyxFQUFFLENBQUMsRUFDWixTQUFTO0FBQUEsWUFDZDtBQUFBLFVBQ0Y7QUFBQSxRQUNGO0FBQUEsTUFDRjtBQUFBLElBQ0Y7QUFBQSxJQUNBLFNBQVM7QUFBQSxNQUNQLFNBQVM7QUFBQSxRQUNQLGFBQWE7QUFBQSxRQUNiLG1CQUFtQjtBQUFBLFFBQ25CLG1CQUFtQjtBQUFBLFFBQ25CLGVBQWU7QUFBQSxRQUNmLG1CQUFtQjtBQUFBLFVBQ2pCLFFBQVE7QUFBQSxRQUNWO0FBQUEsTUFDRixDQUFDO0FBQUEsTUFDRCxZQUFZO0FBQUEsTUFDWixPQUFPO0FBQUEsTUFDUCxnQkFBZ0I7QUFBQSxNQUNoQixJQUFJO0FBQUEsUUFDRixTQUFTLENBQUMsVUFBVSxPQUFPO0FBQUEsTUFDN0IsQ0FBQztBQUFBLE1BQ0QsSUFBSTtBQUFBLFFBQ0YsZUFBZTtBQUFBLE1BQ2pCLENBQUM7QUFBQSxNQUNELFdBQVc7QUFBQSxRQUNULFNBQVMsQ0FBQyxPQUFPLGNBQWMsZ0JBQWdCLGNBQWM7QUFBQSxNQUMvRCxDQUFDO0FBQUEsTUFDRCxVQUFVO0FBQUEsUUFDUixZQUFZO0FBQUEsTUFDZCxDQUFDO0FBQUEsSUFDSDtBQUFBLEVBQ0YsQ0FBQztBQUNIOyIsCiAgIm5hbWVzIjogW10KfQo=
