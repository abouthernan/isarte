import { defineConfig } from "astro/config";
import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  site: "https://abouthernan.github.io",
  base: "/isarte",
  integrations: [preact()],
});
