# ImagePreview 图片预览

点击缩略图后弹出全屏遮罩预览大图。

## 基础用法

<script setup>
import { ref } from 'vue'
const visible = ref(false)
const url = 'https://picsum.photos/seed/preview/800/600'
</script>

<div class="demo-block">
  <img
    :src="url"
    style="width: 120px; height: 90px; object-fit: cover; cursor: zoom-in; border-radius: 8px;"
    @click="visible = true"
  />
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

## Props 属性

| 属性名 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| visible | `boolean` | - | 是否显示（支持 `v-model:visible`） |
| imageUrl | `string` | - | 大图地址 |

## Events 事件

| 事件名 | 参数 | 说明 |
| --- | --- | --- |
| update:visible | `(value: boolean)` | 关闭时触发 |
| close | - | 关闭时触发 |
