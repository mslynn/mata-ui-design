# FilterPopover

Hover-triggered dropdown filter panel, commonly used in list headers.

## Basic Usage

<script setup>
import { ref } from 'vue'
const sortBy = ref('time')
const options = [
  { label: 'Sort by time', value: 'time' },
  { label: 'Sort by name', value: 'name' },
  { label: 'Sort by hot',  value: 'hot' }
]
</script>

<div class="demo-block" style="height: 120px;">
  <MFilterPopover v-model="sortBy" :options="options">
    <template #trigger>
      <span style="cursor: pointer; color: #FF9900;">Sort ▾</span>
    </template>
  </MFilterPopover>
  <div style="margin-top: 16px;">Current: {{ sortBy }}</div>
</div>

```vue
<template>
  <MFilterPopover v-model="sortBy" :options="options">
    <template #trigger><span>Sort ▾</span></template>
  </MFilterPopover>
</template>
```

## Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| modelValue | `string \| number` | - | Selected value (v-model) |
| options | `{ label, value }[]` | - | Options list |

## Slots

| Name | Description |
| --- | --- |
| trigger | Element that triggers the popover on hover |
