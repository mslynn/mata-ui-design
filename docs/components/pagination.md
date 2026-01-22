# Pagination

A pagination component for navigating through large datasets.

## Basic Usage

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

## With Quick Jumper

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

## Custom Page Sizes

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

## Hide Features

```vue
<template>
  <!-- Hide total count -->
  <MPagination 
    :current-page="1"
    :page-size="10"
    :total="100"
    :show-total="false"
  />
  
  <!-- Hide size changer -->
  <MPagination 
    :current-page="1"
    :page-size="10"
    :total="100"
    :show-size-changer="false"
  />
</template>
```

## Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| currentPage | `number` | - | Current page number (v-model) |
| pageSize | `number` | - | Items per page (v-model) |
| total | `number` | - | Total number of items |
| pageSizes | `number[]` | `[10, 20, 50, 100]` | Options for page size selector |
| showTotal | `boolean` | `true` | Show total count |
| showSizeChanger | `boolean` | `true` | Show page size selector |
| showQuickJumper | `boolean` | `false` | Show quick jump input |
| pagerCount | `number` | `7` | Number of page buttons to display |

## Events

| Name | Parameters | Description |
| --- | --- | --- |
| update:currentPage | `(page: number)` | Triggered when current page changes |
| update:pageSize | `(size: number)` | Triggered when page size changes |
| change | `(page, pageSize)` | Triggered when either page or size changes |
