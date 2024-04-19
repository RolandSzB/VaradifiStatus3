import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { VitePWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    VitePWA({
      registerType: "autoUpdate",
      devOptions: {
        enabled: true,
      },
      manifest: {
        theme_color: "#169bcb",
        icons: [
          {
            src: "icons/varadifi.png",
            sizes: "192x192",
            type: "image/png",
          },
        ],
      },
    }),
  ],

  server: {
    fs: {
      allow: [".."],
    },
  },
});
