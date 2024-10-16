import { defineConfig } from "astro/config";
import icon from "astro-icon";

export default defineConfig({
  integrations: [
    icon({
      iconDir: "src/icons",
    }),
  ],
  site: 'https://pauchoook.github.io',
  base: 'lendAstro',
});