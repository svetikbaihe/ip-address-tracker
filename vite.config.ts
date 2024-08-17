import * as path from 'path';

import { defineConfig } from "vite"

export default defineConfig ({
  css: {
    modules: {
      localsConvention: "camelCase",
    },
  },
  resolve: {
    alias: {
      '@constants': path.resolve('src/constants'),
      '@components': path.resolve('src/components'),
      "@elements": path.resolve("src/elements"),
      "@modules": path.resolve("src/modules"),
      "@utils": path.resolve("src/utils"),
      "@services": path.resolve("src/services"),
      "@assets": path.resolve("src/assets"),
      "@state": path.resolve("src/state"),
    },
  },
});