# Pagination 分页

用于分页浏览大数据集的分页组件。

## 基础用法

<script setup>
import { ref } from 'vue'
const currentPage = ref(1)
const pageSize = ref(10)
</script>

```vue
<script setup>
import { ref } from 'vue'
const currentPage = ref(1)
const pageSize = ref(10)
</script>

<template>
  <MPagination 
    v-model:current-page="currentPage"
    v-model:page-size="pageSize"
    :total="200"
  />
</template>
```

## 快速跳转

```vue
<template>
  <MPagination 
    v-model:current-page="currentPage"
    v-model:page-size="pageSize"
    :total="200"
    show-quick-jumper
  />
</template>
```

## 自定义每页条数选项

```vue
<template>
  <MPagination 
    v-model:current-page="currentPage"
    v-model:page-size="pageSize"
    :total="200"
    :page-sizes="[5, 10, 20, 50]"
  />
</template>
```

## 隐藏部分功能

```vue
<template>
  <!-- 隐藏总数 -->
  <MPagination 
    :current-page="1"
    :page-size="10"
    :total="100"
    :show-total="false"
  />
  
  <!-- 隐藏每页条数选择器 -->
  <MPagination 
    :current-page="1"
    :page-size="10"
    :total="100"
    :show-size-changer="false"
  />
</template>
```

## Props 属性

| 属性名 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| currentPage | `number` | - | 当前页码（v-model） |
| pageSize | `number` | - | 每页条数（v-model） |
| total | `number` | - | 数据总数 |
| pageSizes | `number[]` | `[10, 20, 50, 100]` | 每页条数选项 |
| showTotal | `boolean` | `true` | 显示总数 |
| showSizeChanger | `boolean` | `true` | 显示每页条数选择器 |
| showQuickJumper | `boolean` | `false` | 显示快速跳转输入框 |
| pagerCount | `number` | `7` | 显示的页码按钮数量 |

## Events 事件

| 事件名 | 参数 | 说明 |
| --- | --- | --- |
| update:currentPage | `(page: number)` | 当前页码变化时触发 |
| update:pageSize | `(size: number)` | 每页条数变化时触发 |
| change | `(page, pageSize)` | 页码或每页条数变化时触发 |
