# 快速开始

欢迎使用 Mata UI Design！本指南将帮助您快速上手组件库。

## 安装

```bash
npm install lynn-mata-ui-design
```

或使用 yarn:

```bash
yarn add lynn-mata-ui-design
```

或使用 pnpm:

```bash
pnpm add lynn-mata-ui-design
```

## 快速上手

### 全局注册

在 Vue 3 应用中全局注册所有组件：

```ts
import { createApp } from 'vue'
import App from './App.vue'
import MataUI from 'lynn-mata-ui-design'
import 'lynn-mata-ui-design/dist/style.css'

const app = createApp(App)
app.use(MataUI)
app.mount('#app')
```

### 按需引入

您也可以按需引入单个组件：

```vue
<script setup>
import { MButton, MInput } from 'lynn-mata-ui-design'
import 'lynn-mata-ui-design/dist/style.css'
</script>

<template>
  <MButton type="primary">点击我</MButton>
  <MInput v-model="value" placeholder="请输入..." />
</template>
```

## TypeScript 支持

Mata UI Design 完全使用 TypeScript 编写，提供完整的类型定义。开箱即用的 IntelliSense 智能提示和类型检查。

## 浏览器支持

Mata UI Design 支持所有现代浏览器：

| 浏览器 | 版本 |
| ------- | ------- |
| Chrome | 最新版 |
| Firefox | 最新版 |
| Safari | 最新版 |
| Edge | 最新版 |

## 下一步

- 浏览[组件文档](/zh/components/button)
- 查看组件示例
- 了解自定义主题选项
