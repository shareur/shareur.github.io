// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://imyang.world', // 你的域名
  base: '/master/',             // 发布到 gh-pages/master/ 子目录
  output: 'static'
});
