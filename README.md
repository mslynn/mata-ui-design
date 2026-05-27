# Mata UI Design

Vue 3 UI Library for Mata Education.

[![npm version](https://img.shields.io/npm/v/lynn-mata-ui-design.svg)](https://www.npmjs.com/package/lynn-mata-ui-design)
[![license](https://img.shields.io/npm/l/lynn-mata-ui-design.svg)](https://github.com/mslynn/mata-ui-design/blob/main/LICENSE)

## Documentation

📘 **[Documentation & Demos](https://mslynn.github.io/mata-ui-design/)**

## Installation

```bash
npm install lynn-mata-ui-design
```

Some components depend on `element-plus` and `dayjs` (peer dependencies). Install them if you use `MDateRangePicker`:

```bash
npm install element-plus dayjs
```

## Usage

```js
import { createApp } from 'vue'
import App from './App.vue'
import MataUI from 'lynn-mata-ui-design'
import 'lynn-mata-ui-design/style.css'

const app = createApp(App)
app.use(MataUI)
app.mount('#app')
```

Or import on demand:

```js
import { MButton, MMessage } from 'lynn-mata-ui-design'
import 'lynn-mata-ui-design/style.css'
```

## Components

### Basic
- **MButton** — Button with multiple types and sizes
- **MInput** — Text input
- **MSelect** — Dropdown select with search and custom options
- **MDateRangePicker** — Date range picker with custom presets (requires `element-plus` + `dayjs`)

### Data Display
- **MTable** — Data table
- **MPagination** — Pagination
- **MTree** — Tree control
- **MTabs** — Tabs
- **MStarRating** — SVG-based star rating with half-star support
- **MLazyImage** — `IntersectionObserver`-based lazy image
- **MImagePreview** — Full-screen image preview overlay

### Feedback
- **MModal** — Modal dialog
- **MMessage** — Function-style message notifications (`MMessage.success(...)`)
- **MTooltip** — Hover-triggered tooltip with 4 placements
- **MFilterPopover** — Hover-triggered filter dropdown panel

## License

MIT
