# StarRating 星级评分

SVG 绘制的星级评分组件，支持半星与自定义颜色尺寸。

## 基础用法

<script setup>
import { ref } from 'vue'
const score = ref(3.5)
const interactive = ref(0)
</script>

<div class="demo-block">
  <MStarRating :model-value="score" />
  <div style="margin-top: 8px; color: #888;">只读，分数：{{ score }}</div>
</div>

```vue
<template>
  <MStarRating :model-value="3.5" />
</template>
```

## 可交互打分

支持半星：点击星星左半区给 0.5 分，右半区给整分。

<div class="demo-block">
  <MStarRating v-model="interactive" :readonly="false" :size="28" />
  <div style="margin-top: 8px;">当前分数：{{ interactive }}</div>
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

## 自定义样式

<div class="demo-block" style="display: flex; flex-direction: column; gap: 8px;">
  <MStarRating :model-value="4" fill-color="#FF9900" empty-color="#FFE4B8" :size="20" />
  <MStarRating :model-value="2.5" fill-color="#3366FF" empty-color="#D6E0FF" :size="24" />
  <MStarRating :model-value="5" fill-color="#22C55E" :size="32" :gap="4" />
</div>

```vue
<template>
  <MStarRating :model-value="4" fill-color="#FF9900" empty-color="#FFE4B8" />
  <MStarRating :model-value="2.5" fill-color="#3366FF" :size="24" />
  <MStarRating :model-value="5" fill-color="#22C55E" :size="32" :gap="4" />
</template>
```

## Props 属性

| 属性名 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| modelValue | `number` | - | 当前分数（支持 0.5 步进） |
| maxStars | `number` | `5` | 总星数 |
| size | `number` | `20` | 单个星星尺寸（px） |
| gap | `number` | `2` | 星星间距（px） |
| fillColor | `string` | `'#FBBF24'` | 实心星颜色 |
| emptyColor | `string` | `'#D1D5DB'` | 空心星颜色 |
| strokeWidth | `number` | `1.5` | 描边宽度 |
| readonly | `boolean` | `true` | 是否只读 |
| wrapperClass | `string` | `''` | 容器自定义 class |

## Events 事件

| 事件名 | 参数 | 说明 |
| --- | --- | --- |
| update:modelValue | `(value: number)` | 分数变化时触发 |
