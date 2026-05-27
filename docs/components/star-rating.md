# StarRating

SVG-based star rating with half-star support and customizable colors / size.

## Basic Usage

<script setup>
import { ref } from 'vue'
const interactive = ref(0)
</script>

<div class="demo-block">
  <MStarRating :model-value="3.5" />
</div>

```vue
<template>
  <MStarRating :model-value="3.5" />
</template>
```

## Interactive

Click the left half of a star for `.5`, right half for a full star.

<div class="demo-block">
  <MStarRating v-model="interactive" :readonly="false" :size="28" />
  <div style="margin-top: 8px;">Score: {{ interactive }}</div>
</div>

```vue
<script setup>
import { ref } from 'vue'
const score = ref(0)
</script>

<template>
  <MStarRating v-model="score" :readonly="false" :size="28" />
</template>
```

## Custom Style

<div class="demo-block" style="display: flex; flex-direction: column; gap: 8px;">
  <MStarRating :model-value="4" fill-color="#FF9900" empty-color="#FFE4B8" />
  <MStarRating :model-value="2.5" fill-color="#3366FF" :size="24" />
  <MStarRating :model-value="5" fill-color="#22C55E" :size="32" :gap="4" />
</div>

## Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| modelValue | `number` | - | Current score (0.5 step) |
| maxStars | `number` | `5` | Total stars |
| size | `number` | `20` | Star size (px) |
| gap | `number` | `2` | Gap between stars (px) |
| fillColor | `string` | `'#FBBF24'` | Filled color |
| emptyColor | `string` | `'#D1D5DB'` | Empty color |
| strokeWidth | `number` | `1.5` | Stroke width |
| readonly | `boolean` | `true` | Read-only |
| wrapperClass | `string` | `''` | Wrapper class |

## Events

| Name | Args | Description |
| --- | --- | --- |
| update:modelValue | `(value: number)` | Emitted when score changes |
