# imyang.world — 书签分享导航（Astro + JSON）

## 本地开发
```bash
npm i
npm run dev
```

## 部署到 GitHub Pages
- 新建仓库，推送代码到 `main`。
- 打开 **Settings → Pages**，将 **Source** 设为 **GitHub Actions**（本仓库已包含 `pages.yml`）。
- 推送后自动构建，几分钟内可访问。

## 自定义域名
- 在 **Settings → Pages** 里填入 `imyang.world`，保存后仓库会生成 `CNAME` 文件。
- 在 Cloudflare 添加 CNAME：`imyang.world` → `<你的用户名>.github.io`，开启 HTTPS。

## 维护书签
- 编辑 `public/links.json`：
  - 支持 `groups` 分组，每个 `items` 支持 `tags`、`added` 时间。
  - 页面前端支持搜索和按标签筛选。
