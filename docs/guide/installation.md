# Installation

## Package Manager

We recommend using a package manager (npm, yarn, pnpm) to install Mata UI Design.

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

## Peer Dependencies

Mata UI Design requires Vue 3.3.0 or higher:

```json
{
  "peerDependencies": {
    "vue": "^3.3.0"
  }
}
```

## Styles

Don't forget to import the CSS file:

```ts
import 'lynn-mata-ui-design/dist/style.css'
```

## Vite Configuration

If you're using Vite, no additional configuration is needed. The library is fully compatible with Vite out of the box.

## Nuxt 3 Integration

For Nuxt 3 projects, create a plugin file:

```ts
// plugins/mata-ui.ts
import MataUI from 'lynn-mata-ui-design'
import 'lynn-mata-ui-design/dist/style.css'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(MataUI)
})
```
