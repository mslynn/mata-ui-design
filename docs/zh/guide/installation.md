# 安装

## 包管理器

我们推荐使用包管理器（npm、yarn、pnpm）安装 Mata UI Design。

### npm

```bash
npm install lynn-mata-ui-design
```

### yarn

```bash
yarn add lynn-mata-ui-design
```

### pnpm

```bash
pnpm add lynn-mata-ui-design
```

## 依赖要求

Mata UI Design 需要 Vue 3.3.0 或更高版本：

```json
{
  "peerDependencies": {
    "vue": "^3.3.0"
  }
}
```

## 样式文件

别忘了引入 CSS 文件：

```ts
import 'lynn-mata-ui-design/dist/style.css'
```

## Vite 配置

如果您使用 Vite，无需额外配置。该库开箱即用，完全兼容 Vite。

## Nuxt 3 集成

对于 Nuxt 3 项目，请创建一个插件文件：

```ts
// plugins/mata-ui.ts
import MataUI from 'lynn-mata-ui-design'
import 'lynn-mata-ui-design/dist/style.css'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(MataUI)
})
```
