// vite.config.ts
import { defineConfig, loadEnv } from "file:///E:/software_cache/codetotal/vue/repo/studtwork_desk/node_modules/vite/dist/node/index.js";
import { resolve } from "node:path";
import vue from "file:///E:/software_cache/codetotal/vue/repo/studtwork_desk/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import ViteDelTool from "file:///E:/software_cache/codetotal/vue/repo/studtwork_desk/node_modules/vite-plugin-vue-devtools/dist/vite.mjs";
import tsChecker from "file:///E:/software_cache/codetotal/vue/repo/studtwork_desk/node_modules/vite-plugin-checker/dist/esm/main.js";
import AutoImport from "file:///E:/software_cache/codetotal/vue/repo/studtwork_desk/node_modules/unplugin-auto-import/dist/vite.js";
import UnoCss from "file:///E:/software_cache/codetotal/vue/repo/studtwork_desk/node_modules/unocss/dist/vite.mjs";
import ViteCompression from "file:///E:/software_cache/codetotal/vue/repo/studtwork_desk/node_modules/vite-plugin-compression/dist/index.mjs";
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
      // 静态资源合并打包
      rollupOptions: {
        // 确保外部化处理不想打包进库的依赖
        output: {
          // 入口文件名
          entryFileNames: "assets/js/[name].js",
          // 块文件名
          chunkFileNames: "assets/js/[name]-[hash].js",
          // 资源文件名
          assetFileNames: "assets/[ext]/[name]-[hash]-.[ext]",
          // 静态资源分拆打包---视频等超大文件
          manualChunks(id) {
            if (id.includes("node_modules")) {
              return id.toString().split("node_modules/")[1].split("/")[0].toString();
            }
          }
        }
      }
    },
    plugins: [
      vue(),
      ViteDelTool(),
      UnoCss(),
      ViteCompression(),
      AutoImport({
        imports: ["vue", "vue-router"]
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJFOlxcXFxzb2Z0d2FyZV9jYWNoZVxcXFxjb2RldG90YWxcXFxcdnVlXFxcXHJlcG9cXFxcc3R1ZHR3b3JrX2Rlc2tcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkU6XFxcXHNvZnR3YXJlX2NhY2hlXFxcXGNvZGV0b3RhbFxcXFx2dWVcXFxccmVwb1xcXFxzdHVkdHdvcmtfZGVza1xcXFx2aXRlLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vRTovc29mdHdhcmVfY2FjaGUvY29kZXRvdGFsL3Z1ZS9yZXBvL3N0dWR0d29ya19kZXNrL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnLCBsb2FkRW52IH0gZnJvbSBcInZpdGVcIjtcbmltcG9ydCB7IGJhc2VuYW1lLCBkaXJuYW1lLCByZXNvbHZlIH0gZnJvbSBcIm5vZGU6cGF0aFwiO1xuaW1wb3J0IHZ1ZSBmcm9tIFwiQHZpdGVqcy9wbHVnaW4tdnVlXCI7XG5pbXBvcnQgVml0ZURlbFRvb2wgZnJvbSBcInZpdGUtcGx1Z2luLXZ1ZS1kZXZ0b29sc1wiO1xuaW1wb3J0IHRzQ2hlY2tlciBmcm9tIFwidml0ZS1wbHVnaW4tY2hlY2tlclwiO1xuaW1wb3J0IEF1dG9JbXBvcnQgZnJvbSBcInVucGx1Z2luLWF1dG8taW1wb3J0L3ZpdGVcIjtcbmltcG9ydCBVbm9Dc3MgZnJvbSBcInVub2Nzcy92aXRlXCI7XG5pbXBvcnQgVml0ZUNvbXByZXNzaW9uIGZyb20gXCJ2aXRlLXBsdWdpbi1jb21wcmVzc2lvblwiO1xuXG4vLyBodHRwczovL3ZpdGVqcy5kZXYvY29uZmlnL1xuZXhwb3J0IGRlZmF1bHQgKHsgbW9kZSB9KSA9PiB7XG4gIGNvbnN0IFZJVEVfQkFTRV9VUkwgPSBsb2FkRW52KG1vZGUsIHByb2Nlc3MuY3dkKCkpLlZJVEVfQkFTRV9VUkw7XG5cbiAgcmV0dXJuIGRlZmluZUNvbmZpZyh7XG4gICAgYmFzZTogXCIvXCIsXG4gICAgcmVzb2x2ZToge1xuICAgICAgYWxpYXM6IHtcbiAgICAgICAgXCJAXCI6IHJlc29sdmUoX19kaXJuYW1lLCBcInNyY1wiKSxcbiAgICAgIH0sXG4gICAgfSxcbiAgICBzZXJ2ZXI6IHtcbiAgICAgIHByb3h5OiB7XG4gICAgICAgIFwiL2FwaS9cIjoge1xuICAgICAgICAgIHRhcmdldDogVklURV9CQVNFX1VSTCxcbiAgICAgICAgICBjaGFuZ2VPcmlnaW46IHRydWUsXG4gICAgICAgICAgcmV3cml0ZTogKHBhdGgpID0+IHBhdGgucmVwbGFjZSgvXlxcL2FwaS8sIFwiXCIpLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9LFxuICAgIGJ1aWxkOiB7XG4gICAgICAvLyBcdTk3NTlcdTYwMDFcdThENDRcdTZFOTBcdTU0MDhcdTVFNzZcdTYyNTNcdTUzMDVcbiAgICAgIHJvbGx1cE9wdGlvbnM6IHtcbiAgICAgICAgLy8gXHU3ODZFXHU0RkREXHU1OTE2XHU5MEU4XHU1MzE2XHU1OTA0XHU3NDA2XHU0RTBEXHU2MEYzXHU2MjUzXHU1MzA1XHU4RkRCXHU1RTkzXHU3Njg0XHU0RjlEXHU4RDU2XG4gICAgICAgIG91dHB1dDoge1xuICAgICAgICAgIC8vIFx1NTE2NVx1NTNFM1x1NjU4N1x1NEVGNlx1NTQwRFxuICAgICAgICAgIGVudHJ5RmlsZU5hbWVzOiBcImFzc2V0cy9qcy9bbmFtZV0uanNcIixcbiAgICAgICAgICAvLyBcdTU3NTdcdTY1ODdcdTRFRjZcdTU0MERcbiAgICAgICAgICBjaHVua0ZpbGVOYW1lczogXCJhc3NldHMvanMvW25hbWVdLVtoYXNoXS5qc1wiLFxuICAgICAgICAgIC8vIFx1OEQ0NFx1NkU5MFx1NjU4N1x1NEVGNlx1NTQwRFxuICAgICAgICAgIGFzc2V0RmlsZU5hbWVzOiBcImFzc2V0cy9bZXh0XS9bbmFtZV0tW2hhc2hdLS5bZXh0XVwiLFxuICAgICAgICAgIC8vIFx1OTc1OVx1NjAwMVx1OEQ0NFx1NkU5MFx1NTIwNlx1NjJDNlx1NjI1M1x1NTMwNS0tLVx1ODlDNlx1OTg5MVx1N0I0OVx1OEQ4NVx1NTkyN1x1NjU4N1x1NEVGNlxuICAgICAgICAgIG1hbnVhbENodW5rcyhpZCkge1xuICAgICAgICAgICAgaWYgKGlkLmluY2x1ZGVzKFwibm9kZV9tb2R1bGVzXCIpKSB7XG4gICAgICAgICAgICAgIHJldHVybiBpZFxuICAgICAgICAgICAgICAgIC50b1N0cmluZygpXG4gICAgICAgICAgICAgICAgLnNwbGl0KFwibm9kZV9tb2R1bGVzL1wiKVsxXVxuICAgICAgICAgICAgICAgIC5zcGxpdChcIi9cIilbMF1cbiAgICAgICAgICAgICAgICAudG9TdHJpbmcoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9LFxuICAgIHBsdWdpbnM6IFtcbiAgICAgIHZ1ZSgpLFxuICAgICAgVml0ZURlbFRvb2woKSxcbiAgICAgIFVub0NzcygpLFxuICAgICAgVml0ZUNvbXByZXNzaW9uKCksXG4gICAgICBBdXRvSW1wb3J0KHtcbiAgICAgICAgaW1wb3J0czogW1widnVlXCIsIFwidnVlLXJvdXRlclwiXSxcbiAgICAgIH0pLFxuICAgICAgdHNDaGVja2VyKHtcbiAgICAgICAgdHlwZXNjcmlwdDogdHJ1ZSxcbiAgICAgIH0pLFxuICAgIF0sXG4gIH0pO1xufTtcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBdVYsU0FBUyxjQUFjLGVBQWU7QUFDN1gsU0FBNEIsZUFBZTtBQUMzQyxPQUFPLFNBQVM7QUFDaEIsT0FBTyxpQkFBaUI7QUFDeEIsT0FBTyxlQUFlO0FBQ3RCLE9BQU8sZ0JBQWdCO0FBQ3ZCLE9BQU8sWUFBWTtBQUNuQixPQUFPLHFCQUFxQjtBQVA1QixJQUFNLG1DQUFtQztBQVV6QyxJQUFPLHNCQUFRLENBQUMsRUFBRSxLQUFLLE1BQU07QUFDM0IsUUFBTSxnQkFBZ0IsUUFBUSxNQUFNLFFBQVEsSUFBSSxDQUFDLEVBQUU7QUFFbkQsU0FBTyxhQUFhO0FBQUEsSUFDbEIsTUFBTTtBQUFBLElBQ04sU0FBUztBQUFBLE1BQ1AsT0FBTztBQUFBLFFBQ0wsS0FBSyxRQUFRLGtDQUFXLEtBQUs7QUFBQSxNQUMvQjtBQUFBLElBQ0Y7QUFBQSxJQUNBLFFBQVE7QUFBQSxNQUNOLE9BQU87QUFBQSxRQUNMLFNBQVM7QUFBQSxVQUNQLFFBQVE7QUFBQSxVQUNSLGNBQWM7QUFBQSxVQUNkLFNBQVMsQ0FBQyxTQUFTLEtBQUssUUFBUSxVQUFVLEVBQUU7QUFBQSxRQUM5QztBQUFBLE1BQ0Y7QUFBQSxJQUNGO0FBQUEsSUFDQSxPQUFPO0FBQUE7QUFBQSxNQUVMLGVBQWU7QUFBQTtBQUFBLFFBRWIsUUFBUTtBQUFBO0FBQUEsVUFFTixnQkFBZ0I7QUFBQTtBQUFBLFVBRWhCLGdCQUFnQjtBQUFBO0FBQUEsVUFFaEIsZ0JBQWdCO0FBQUE7QUFBQSxVQUVoQixhQUFhLElBQUk7QUFDZixnQkFBSSxHQUFHLFNBQVMsY0FBYyxHQUFHO0FBQy9CLHFCQUFPLEdBQ0osU0FBUyxFQUNULE1BQU0sZUFBZSxFQUFFLENBQUMsRUFDeEIsTUFBTSxHQUFHLEVBQUUsQ0FBQyxFQUNaLFNBQVM7QUFBQSxZQUNkO0FBQUEsVUFDRjtBQUFBLFFBQ0Y7QUFBQSxNQUNGO0FBQUEsSUFDRjtBQUFBLElBQ0EsU0FBUztBQUFBLE1BQ1AsSUFBSTtBQUFBLE1BQ0osWUFBWTtBQUFBLE1BQ1osT0FBTztBQUFBLE1BQ1AsZ0JBQWdCO0FBQUEsTUFDaEIsV0FBVztBQUFBLFFBQ1QsU0FBUyxDQUFDLE9BQU8sWUFBWTtBQUFBLE1BQy9CLENBQUM7QUFBQSxNQUNELFVBQVU7QUFBQSxRQUNSLFlBQVk7QUFBQSxNQUNkLENBQUM7QUFBQSxJQUNIO0FBQUEsRUFDRixDQUFDO0FBQ0g7IiwKICAibmFtZXMiOiBbXQp9Cg==
