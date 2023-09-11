import { defineConfig } from 'vite';
import preact from '@preact/preset-vite';
import { VitePWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig({
	base: '/cloud-share',
	plugins: [
		preact(),
		VitePWA({
      registerType: "autoUpdate",
      workbox: {
        globPatterns: ["**/*.{js,css,html,ico,png,svg}"],
      },
      manifest: {
        name: "cloud-share",
        short_name: "cloud-share",
        description: "Make your own cloud-share",
        theme_color: "#ffffff",
        icons: [
          {
            src: "/cloud-share/android-chrome-192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "/cloud-share/android-chrome-512x512.png",
            sizes: "512x512",
            type: "image/png",
          },
          {
            src: "/cloud-share/android-chrome-512x512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "any",
          },
          {
            src: "/cloud-share/android-chrome-512x512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "maskable",
          },
        ],
      },
      includeAssets: ["favicon.ico", "apple-touch-icon.png"],
    }),
	],
});
