// @ts-check

import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import { defineConfig, fontProviders } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  site: "https://blog.c0rr1t.dev",
  integrations: [mdx(), sitemap()],
  output: "static",

  fonts: [
    {
      provider: fontProviders.google(),
      name: "Space Mono",
      cssVariable: "--font-space-mono",
      fallbacks: ["sans-serif"],
    },
  ],

  vite: {
    plugins: [tailwindcss()],
  },

  adapter: cloudflare({
    imageService: "compile",
  }),
});
