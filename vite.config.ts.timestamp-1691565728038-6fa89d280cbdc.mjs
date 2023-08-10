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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJFOlxcXFxzb2Z0d2FyZV9jYWNoZVxcXFxjb2RldG90YWxcXFxcdnVlXFxcXHJlcG9cXFxcc3R1ZHR3b3JrX2Rlc2tcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkU6XFxcXHNvZnR3YXJlX2NhY2hlXFxcXGNvZGV0b3RhbFxcXFx2dWVcXFxccmVwb1xcXFxzdHVkdHdvcmtfZGVza1xcXFx2aXRlLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vRTovc29mdHdhcmVfY2FjaGUvY29kZXRvdGFsL3Z1ZS9yZXBvL3N0dWR0d29ya19kZXNrL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnLCBsb2FkRW52IH0gZnJvbSBcInZpdGVcIjtcbmltcG9ydCB7IHJlc29sdmUgfSBmcm9tIFwibm9kZTpwYXRoXCI7XG5pbXBvcnQgdnVlIGZyb20gXCJAdml0ZWpzL3BsdWdpbi12dWVcIjtcbmltcG9ydCBWaXRlRGVsVG9vbCBmcm9tIFwidml0ZS1wbHVnaW4tdnVlLWRldnRvb2xzXCI7XG5pbXBvcnQgdHNDaGVja2VyIGZyb20gXCJ2aXRlLXBsdWdpbi1jaGVja2VyXCI7XG5pbXBvcnQgQXV0b0ltcG9ydCBmcm9tIFwidW5wbHVnaW4tYXV0by1pbXBvcnQvdml0ZVwiO1xuaW1wb3J0IFVub0NzcyBmcm9tIFwidW5vY3NzL3ZpdGVcIjtcbmltcG9ydCBWaXRlQ29tcHJlc3Npb24gZnJvbSBcInZpdGUtcGx1Z2luLWNvbXByZXNzaW9uXCI7XG5pbXBvcnQgTWFya2Rvd24gZnJvbSBcInZpdGUtcGx1Z2luLXZ1ZS1tYXJrZG93blwiO1xuaW1wb3J0IFNWRyBmcm9tIFwidml0ZS1zdmctbG9hZGVyXCI7XG5cbi8vIGh0dHBzOi8vdml0ZWpzLmRldi9jb25maWcvXG5leHBvcnQgZGVmYXVsdCAoeyBtb2RlIH0pID0+IHtcbiAgY29uc3QgVklURV9CQVNFX1VSTCA9IGxvYWRFbnYobW9kZSwgcHJvY2Vzcy5jd2QoKSkuVklURV9CQVNFX1VSTDtcblxuICByZXR1cm4gZGVmaW5lQ29uZmlnKHtcbiAgICBiYXNlOiBcIi9cIixcbiAgICByZXNvbHZlOiB7XG4gICAgICBhbGlhczoge1xuICAgICAgICBcIkBcIjogcmVzb2x2ZShfX2Rpcm5hbWUsIFwic3JjXCIpLFxuICAgICAgfSxcbiAgICB9LFxuICAgIG9wdGltaXplRGVwczoge1xuICAgICAgaW5jbHVkZTogW1widnVlXCIsIFwidnVlLXJvdXRlclwiLCBcIkB2dWV1c2UvY29yZVwiXSxcbiAgICB9LFxuICAgIHNlcnZlcjoge1xuICAgICAgcHJveHk6IHtcbiAgICAgICAgXCIvYXBpL1wiOiB7XG4gICAgICAgICAgdGFyZ2V0OiBWSVRFX0JBU0VfVVJMLFxuICAgICAgICAgIGNoYW5nZU9yaWdpbjogdHJ1ZSxcbiAgICAgICAgICByZXdyaXRlOiAocGF0aCkgPT4gcGF0aC5yZXBsYWNlKC9eXFwvYXBpLywgXCJcIiksXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0sXG4gICAgYnVpbGQ6IHtcbiAgICAgIHJvbGx1cE9wdGlvbnM6IHtcbiAgICAgICAgb3V0cHV0OiB7XG4gICAgICAgICAgZW50cnlGaWxlTmFtZXM6IFwiYXNzZXRzL2pzL1tuYW1lXS5qc1wiLFxuICAgICAgICAgIGNodW5rRmlsZU5hbWVzOiBcImFzc2V0cy9qcy9bbmFtZV0tW2hhc2hdLmpzXCIsXG4gICAgICAgICAgYXNzZXRGaWxlTmFtZXM6IFwiYXNzZXRzL1tleHRdL1tuYW1lXS1baGFzaF0tLltleHRdXCIsXG4gICAgICAgICAgbWFudWFsQ2h1bmtzKGlkKSB7XG4gICAgICAgICAgICBpZiAoaWQuaW5jbHVkZXMoXCJub2RlX21vZHVsZXNcIikpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGlkXG4gICAgICAgICAgICAgICAgLnRvU3RyaW5nKClcbiAgICAgICAgICAgICAgICAuc3BsaXQoXCJub2RlX21vZHVsZXMvXCIpWzFdXG4gICAgICAgICAgICAgICAgLnNwbGl0KFwiL1wiKVswXVxuICAgICAgICAgICAgICAgIC50b1N0cmluZygpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0sXG4gICAgcGx1Z2luczogW1xuICAgICAgTWFya2Rvd24oe1xuICAgICAgICBoZWFkRW5hYmxlZDogdHJ1ZSxcbiAgICAgICAgZXhwb3J0RnJvbnRtYXR0ZXI6IGZhbHNlLFxuICAgICAgICBleHBvc2VGcm9udG1hdHRlcjogZmFsc2UsXG4gICAgICAgIGV4cG9zZUV4Y2VycHQ6IGZhbHNlLFxuICAgICAgICBtYXJrZG93bkl0T3B0aW9uczoge1xuICAgICAgICAgIHF1b3RlczogXCJcXFwiXFxcIicnXCIsXG4gICAgICAgIH0sXG4gICAgICB9KSxcbiAgICAgIFZpdGVEZWxUb29sKCksXG4gICAgICBVbm9Dc3MoKSxcbiAgICAgIFZpdGVDb21wcmVzc2lvbigpLFxuICAgICAgdnVlKHtcbiAgICAgICAgaW5jbHVkZTogWy9cXC52dWUkLywgL1xcLm1kJC9dLFxuICAgICAgfSksXG4gICAgICBTVkcoe1xuICAgICAgICBkZWZhdWx0SW1wb3J0OiBcInVybFwiLFxuICAgICAgfSksXG4gICAgICBBdXRvSW1wb3J0KHtcbiAgICAgICAgaW1wb3J0czogW1widnVlXCIsIFwidnVlLXJvdXRlclwiLCBcIkB2dWV1c2UvY29yZVwiLCBcIkB2dWV1c2UvaGVhZFwiXSxcbiAgICAgIH0pLFxuICAgICAgdHNDaGVja2VyKHtcbiAgICAgICAgdHlwZXNjcmlwdDogdHJ1ZSxcbiAgICAgIH0pLFxuICAgIF0sXG4gIH0pO1xufTtcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBdVYsU0FBUyxjQUFjLGVBQWU7QUFDN1gsU0FBUyxlQUFlO0FBQ3hCLE9BQU8sU0FBUztBQUNoQixPQUFPLGlCQUFpQjtBQUN4QixPQUFPLGVBQWU7QUFDdEIsT0FBTyxnQkFBZ0I7QUFDdkIsT0FBTyxZQUFZO0FBQ25CLE9BQU8scUJBQXFCO0FBQzVCLE9BQU8sY0FBYztBQUNyQixPQUFPLFNBQVM7QUFUaEIsSUFBTSxtQ0FBbUM7QUFZekMsSUFBTyxzQkFBUSxDQUFDLEVBQUUsS0FBSyxNQUFNO0FBQzNCLFFBQU0sZ0JBQWdCLFFBQVEsTUFBTSxRQUFRLElBQUksQ0FBQyxFQUFFO0FBRW5ELFNBQU8sYUFBYTtBQUFBLElBQ2xCLE1BQU07QUFBQSxJQUNOLFNBQVM7QUFBQSxNQUNQLE9BQU87QUFBQSxRQUNMLEtBQUssUUFBUSxrQ0FBVyxLQUFLO0FBQUEsTUFDL0I7QUFBQSxJQUNGO0FBQUEsSUFDQSxjQUFjO0FBQUEsTUFDWixTQUFTLENBQUMsT0FBTyxjQUFjLGNBQWM7QUFBQSxJQUMvQztBQUFBLElBQ0EsUUFBUTtBQUFBLE1BQ04sT0FBTztBQUFBLFFBQ0wsU0FBUztBQUFBLFVBQ1AsUUFBUTtBQUFBLFVBQ1IsY0FBYztBQUFBLFVBQ2QsU0FBUyxDQUFDLFNBQVMsS0FBSyxRQUFRLFVBQVUsRUFBRTtBQUFBLFFBQzlDO0FBQUEsTUFDRjtBQUFBLElBQ0Y7QUFBQSxJQUNBLE9BQU87QUFBQSxNQUNMLGVBQWU7QUFBQSxRQUNiLFFBQVE7QUFBQSxVQUNOLGdCQUFnQjtBQUFBLFVBQ2hCLGdCQUFnQjtBQUFBLFVBQ2hCLGdCQUFnQjtBQUFBLFVBQ2hCLGFBQWEsSUFBSTtBQUNmLGdCQUFJLEdBQUcsU0FBUyxjQUFjLEdBQUc7QUFDL0IscUJBQU8sR0FDSixTQUFTLEVBQ1QsTUFBTSxlQUFlLEVBQUUsQ0FBQyxFQUN4QixNQUFNLEdBQUcsRUFBRSxDQUFDLEVBQ1osU0FBUztBQUFBLFlBQ2Q7QUFBQSxVQUNGO0FBQUEsUUFDRjtBQUFBLE1BQ0Y7QUFBQSxJQUNGO0FBQUEsSUFDQSxTQUFTO0FBQUEsTUFDUCxTQUFTO0FBQUEsUUFDUCxhQUFhO0FBQUEsUUFDYixtQkFBbUI7QUFBQSxRQUNuQixtQkFBbUI7QUFBQSxRQUNuQixlQUFlO0FBQUEsUUFDZixtQkFBbUI7QUFBQSxVQUNqQixRQUFRO0FBQUEsUUFDVjtBQUFBLE1BQ0YsQ0FBQztBQUFBLE1BQ0QsWUFBWTtBQUFBLE1BQ1osT0FBTztBQUFBLE1BQ1AsZ0JBQWdCO0FBQUEsTUFDaEIsSUFBSTtBQUFBLFFBQ0YsU0FBUyxDQUFDLFVBQVUsT0FBTztBQUFBLE1BQzdCLENBQUM7QUFBQSxNQUNELElBQUk7QUFBQSxRQUNGLGVBQWU7QUFBQSxNQUNqQixDQUFDO0FBQUEsTUFDRCxXQUFXO0FBQUEsUUFDVCxTQUFTLENBQUMsT0FBTyxjQUFjLGdCQUFnQixjQUFjO0FBQUEsTUFDL0QsQ0FBQztBQUFBLE1BQ0QsVUFBVTtBQUFBLFFBQ1IsWUFBWTtBQUFBLE1BQ2QsQ0FBQztBQUFBLElBQ0g7QUFBQSxFQUNGLENBQUM7QUFDSDsiLAogICJuYW1lcyI6IFtdCn0K
