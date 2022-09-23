import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
  build: {
  cssCodeSplit: false,
  lib: {
    entry: "./src/AqilioVueComponentsPlugin.js",
    formats: ["es", "cjs"],
    name: "Aqilio-Vue-Components",
    fileName: (format) => (format === "es" ? "index.js" : "index.cjs"),
  },
  rollupOptions: {
    external: ["vue"],
    output: {
      globals: {
        vue: "Vue",
      },
    },
  },
},
})
