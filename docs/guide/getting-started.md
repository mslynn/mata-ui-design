# Getting Started

Welcome to Mata UI Design! This guide will help you get started with the library.

## Installation

```bash
npm install lynn-mata-ui-design
```

or using yarn:

```bash
yarn add lynn-mata-ui-design
```

or using pnpm:

```bash
pnpm add lynn-mata-ui-design
```

## Quick Start

### Global Registration

Register all components globally in your Vue 3 application:

```ts
import { createApp } from 'vue'
import App from './App.vue'
import MataUI from 'lynn-mata-ui-design'
import 'lynn-mata-ui-design/dist/style.css'

const app = createApp(App)
app.use(MataUI)
app.mount('#app')
```

### On-demand Import

You can also import components individually:

```vue
<script setup>
import { MButton, MInput } from 'lynn-mata-ui-design'
import 'lynn-mata-ui-design/dist/style.css'
</script>

<template>
  <MButton type="primary">Click Me</MButton>
  <MInput v-model="value" placeholder="Enter text..." />
</template>
```

## TypeScript Support

Mata UI Design is written in TypeScript with complete type definitions. You'll get full IntelliSense and type checking out of the box.

## Browser Support

Mata UI Design supports all modern browsers:

| Browser | Version |
| ------- | ------- |
| Chrome | Latest |
| Firefox | Latest |
| Safari | Latest |
| Edge | Latest |

## Next Steps

- Explore the [Components](/components/button) documentation
- Check out component examples
- Learn about customization options
