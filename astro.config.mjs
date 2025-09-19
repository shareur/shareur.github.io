// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'https://imyang.world', // 你的自定义域名
  base: '/astro/',              // 注意：你是发布在 gh-pages/astro 子目录
  output: 'static',
  integrations: [tailwind()]
});
