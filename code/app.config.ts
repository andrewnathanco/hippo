import { defineConfig } from "@solidjs/start/config";
import mkcert from "vite-plugin-mkcert";

export default defineConfig({
  vite: {
    server: { https: true },
    plugins: [
      mkcert({
        force: true,
        savePath: "./certs",
      }),
    ],
  },
  server: {
    baseURL: process.env.BASE_PATH || "/",
    https: {
      cert: "./certs/cert.pem",
      key: "./certs/dev.pem",
    },
  },
});
