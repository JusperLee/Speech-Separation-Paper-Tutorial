# 部署指南

本项目支持部署到 GitHub Pages，提供以下几种部署方式：

## 自动部署（推荐）

### 使用 GitHub Actions

1. **推送代码到 GitHub**
   ```bash
   git add .
   git commit -m "Add GitHub Pages deployment"
   git push origin main
   ```

2. **启用 GitHub Pages**
   - 进入 GitHub 仓库设置页面
   - 找到 "Pages" 选项
   - 在 "Source" 中选择 "GitHub Actions"

3. **自动部署**
   - 每次推送到 `main` 分支时，GitHub Actions 会自动构建和部署
   - 部署完成后，网站将在 `https://[username].github.io/Speech-Separation-Paper-Tutorial/` 可访问

## 手动部署

### 使用 gh-pages 包

1. **安装 gh-pages**
   ```bash
   npm install --save-dev gh-pages
   ```

2. **构建和部署**
   ```bash
   npm run deploy
   ```

### 本地构建

1. **构建项目**
   ```bash
   npm run build
   ```

2. **预览构建结果**
   ```bash
   npm run preview
   ```

## 配置说明

### Vite 配置

项目已配置 `vite.config.ts` 以支持 GitHub Pages：

```typescript
export default defineConfig({
  base: process.env.NODE_ENV === 'production' ? '/Speech-Separation-Paper-Tutorial/' : '/',
  // ...
});
```

### 静态资源路径

- CSV 文件等静态资源已配置为使用相对路径
- 支持 GitHub Pages 的子路径部署

### GitHub Actions 工作流

工作流文件位于 `.github/workflows/deploy.yml`，包含：
- Node.js 环境设置
- 依赖安装
- 项目构建
- 自动部署到 gh-pages 分支

## 故障排除

### 常见问题

1. **404 错误**
   - 确保 GitHub Pages 已启用
   - 检查仓库名称是否正确
   - 确认 base path 配置正确

2. **静态资源加载失败**
   - 检查 `public` 目录中的文件是否存在
   - 确认文件路径配置正确

3. **构建失败**
   - 检查 Node.js 版本兼容性
   - 确认所有依赖已正确安装
   - 查看 GitHub Actions 日志

### 调试步骤

1. **本地测试**
   ```bash
   npm run build
   npm run preview
   ```

2. **检查构建产物**
   - 确认 `dist` 目录生成正确
   - 检查静态资源是否包含在内

3. **查看部署日志**
   - 在 GitHub Actions 页面查看详细日志
   - 检查部署步骤是否成功

## 自定义域名（可选）

如需使用自定义域名：

1. 在 `public` 目录添加 `CNAME` 文件
2. 文件内容为你的域名，如：`example.com`
3. 在域名提供商处配置 DNS 记录

## 更新部署

每次代码更新后，只需推送到 `main` 分支，GitHub Actions 会自动重新部署。

```bash
git add .
git commit -m "Update content"
git push origin main
```

部署完成后，访问 GitHub Pages 地址即可查看更新后的网站。