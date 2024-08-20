// app.config.ts
import { defineConfig } from "@solidjs/start/config";
import mkcert from "vite-plugin-mkcert";
var app_config_default = defineConfig({
  vite: {
    server: { https: true },
    plugins: [
      mkcert({
        force: true,
        savePath: "./certs"
      })
    ]
  }
});
export {
  app_config_default as default
};
