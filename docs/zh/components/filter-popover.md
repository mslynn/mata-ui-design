# FilterPopover 筛选弹层

悬停触发的下拉筛选面板，常用于列表头筛选。

## 基础用法

<script setup>
import { ref } from 'vue'
const sortBy = ref('time')
const options = [
  { label: '时间排序', value: 'time' },
  { label: '名称排序', value: 'name' },
  { label: '热度排序', value: 'hot' }
]
</script>

<div class="demo-block" style="height: 120px;">
  <MFilterPopover v-model="sortBy" :options="options">
    <template #trigger>
      <span style="cursor: pointer; color: #FF9900;">排序 ▾</span>
    </template>
  </MFilterPopover>
  <div style="margin-top: 16px;">当前选中：{{ sortBy }}</div>
</div>

```vue
<script setup>
import { ref } from 'vue'
const sortBy = ref('time')
const options = [
  { label: '时间排序', value: 'time' },
  { label: '名称排序', value: 'name' },
  { label: '热度排序', value: 'hot' }
]
</script>

<template>
  <MFilterPopover v-model="sortBy" :options="options">
    <template #trigger>
      <span>排序 ▾</span>
    </template>
  </MFilterPopover>
</template>
```

## Props 属性

| 属性名 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| modelValue | `string \| number` | - | 选中的值（v-model） |
| options | `{ label, value }[]` | - | 选项列表 |

## Events 事件

| 事件名 | 参数 | 说明 |
| --- | --- | --- |
| update:modelValue | `(value)` | 选中变化时触发 |

## Slots 插槽

| 插槽名 | 说明 |
| --- | --- |
| trigger | 触发弹层的元素 |
