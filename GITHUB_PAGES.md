# GitHub Pages 与自定义域名

仓库推送到 GitHub 后，打开 **Settings → Pages**，将 Source 设为 **GitHub Actions**。工作流会自动发布 `dist` 目录。

购买域名后，在同一页面的 **Custom domain** 填写域名。推荐使用 `www` 子域名，并在域名服务商添加：

- 类型：`CNAME`
- 主机记录：`www`
- 记录值：`heishek.github.io`

若使用根域名，请按 GitHub Pages 页面显示的 A/AAAA 记录配置。启用成功后勾选 **Enforce HTTPS**。
