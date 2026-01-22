#!/bin/bash

# 部署脚本 - 用于 Gitee Pages
# 使用方法: bash deploy.sh

set -e

echo "🔨 正在构建文档..."
npm run docs:build

echo "📦 准备部署文件..."
cd docs/.vitepress/dist

git init
git add -A
git commit -m "deploy: $(date '+%Y-%m-%d %H:%M:%S')"

echo "🚀 正在推送到 Gitee..."
# 请将下面的 URL 替换为你的 Gitee 仓库地址
# git push -f https://gitee.com/你的用户名/mata-ui-design.git master:gh-pages

echo "✅ 部署完成！"
echo "📖 请在 Gitee 仓库设置中启用 Pages 服务"

cd -
