@echo off
chcp 65001 >nul
REM 部署脚本 - 用于 Gitee Pages (Windows)
REM 使用方法: deploy.bat

echo 🔨 正在构建文档...
call npm run docs:build

echo 📦 准备部署文件...
cd docs\.vitepress\dist

git init
git add -A
git commit -m "deploy"

echo 🚀 正在推送到 Gitee...
REM 请将下面的 URL 替换为你的 Gitee 仓库地址
REM git push -f https://gitee.com/你的用户名/mata-ui-design.git master:gh-pages

echo ✅ 部署完成！
echo 📖 请在 Gitee 仓库设置中启用 Pages 服务

cd ..\..\..
pause
