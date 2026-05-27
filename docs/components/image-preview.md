# ImagePreview

Full-screen overlay preview triggered by a thumbnail click.

## Basic Usage

<script setup>
import { ref } from 'vue'
const visible = ref(false)
const url = 'https://picsum.photos/seed/preview-en/800/600'
</script>

<div class="demo-block">
  <img :src="url" style="width: 120px; height: 90px; object-fit: cover; cursor: zoom-in; border-radius: 8px;" @click="visible = true" />
  <MImagePreview v-model:visible="visible" :image-url="url" />
</div>

```vue
<script setup>
import { ref } from 'vue'
const visible = ref(false)
const url = 'https://example.com/big.jpg'
</script>

<template>
  <img :src="url" @click="visible = true" />
  <MImagePreview v-model:visible="visible" :image-url="url" />
</template>
```

## Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| visible | `boolean` | - | Visibility (supports `v-model:visible`) |
| imageUrl | `string` | - | Full-size image URL |

## Events

| Name | Args | Description |
| --- | --- | --- |
| update:visible | `(value: boolean)` | Emitted on close |
| close | - | Emitted on close |
