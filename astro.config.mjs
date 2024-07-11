import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import tailwind from '@astrojs/tailwind';
import icon from "astro-icon";

import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  compressHTML: true,
  integrations: [mdx(), icon(), tailwind({
    applyBaseStyles: false
  })],
  output: "server",
  adapter: cloudflare()
});