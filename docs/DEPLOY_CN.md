# Mata UI Design 国内部署指南

> ⚠️ Gitee Pages 已于 2024 年 5 月下线，个人用户无法使用

## 推荐方案

### 方案一：Cloudflare Pages（推荐 ⭐）

国内大部分地区可访问，免费额度充足。

**部署步骤：**

1. 注册 [Cloudflare](https://dash.cloudflare.com/sign-up)
2. 进入 Dashboard → Pages → Create a project
3. 连接 Git 仓库（支持 GitHub/GitLab）
4. 配置：
   - Build command: `npm run docs:build`
   - Build output directory: `docs/.vitepress/dist`
5. 点击 Deploy

**访问地址：** `https://项目名.pages.dev`

---

### 方案二：腾讯云静态网站托管

使用腾讯云 CloudBase 的静态网站托管功能。

**部署步骤：**

1. 访问 [腾讯云 CloudBase](https://cloud.tencent.com/product/wh)
2. 创建环境 → 开通静态网站托管
3. 安装 CLI：
   ```bash
   npm install -g @cloudbase/cli
   ```
4. 登录并部署：
   ```bash
   tcb login
   npm run docs:build
   tcb hosting deploy docs/.vitepress/dist -e 环境ID
   ```

**免费额度：** 每月 1GB 流量

---

### 方案三：阿里云 OSS + CDN

**部署步骤：**

1. 创建 OSS Bucket（公共读）
2. 开启静态网站托管
3. 上传 `docs/.vitepress/dist` 目录
4. （可选）配置 CDN 加速

**工具上传：**
```bash
# 安装 ossutil
# 上传文件
ossutil cp -r docs/.vitepress/dist oss://你的bucket名/
```

---

### 方案四：Surge.sh

简单快速，国内大部分地区可访问。

```bash
# 安装
npm install -g surge

# 构建
npm run docs:build

# 部署
cd docs/.vitepress/dist
surge
```

按提示输入邮箱和密码即可部署。

---

### 方案五：自有服务器（Nginx）

如果有自己的服务器，直接上传静态文件：

```nginx
server {
    listen 80;
    server_name docs.yourdomain.com;
    root /var/www/mata-ui-docs;
    index index.html;
    
    location / {
        try_files $uri $uri/ /index.html;
    }
}
```

上传命令：
```bash
npm run docs:build
scp -r docs/.vitepress/dist/* user@your-server:/var/www/mata-ui-docs/
```
