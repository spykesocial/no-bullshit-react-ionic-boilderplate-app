import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";
import million from "million/compiler";
import svgr from "vite-plugin-svgr";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    million.vite({ auto: true }),

    svgr(),
    react(),

    VitePWA({
      registerType: "prompt",
      includeAssets: [
        "favicon.png",
        "maskable_icon.png",
        "maskable_icon_x192.png",
        "maskable_icon_x512.png",
        "spyke.png",
        "spyke.svg",
      ],
      workbox: {
        cleanupOutdatedCaches: true,
        // by default, the ServiceWorker precaches a total of 2MB of assets,
        // so raising it slightly to accommodate all the built assets.
        // DO NOT make it absurdly high, as it will cause the ServiceWorker to take
        // a long time to install, and will block the page from loading until it's done.
        maximumFileSizeToCacheInBytes: 2621440,
      },

      manifest: {
        name: "Spyke",
        short_name: "Spyke",
        start_url: ".",
        display: "standalone",
        theme_color: "#ffffff",
        background_color: "#171717",
        icons: [
          {
            src: "maskable_icon_x192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "maskable_icon_x512.png",
            sizes: "512x512",
            type: "image/png",
          },
          {
            src: "spyke.svg",
            sizes: "150x150",
            type: "image/svg",
          },
        ],
      },
    }),
  ],
});
