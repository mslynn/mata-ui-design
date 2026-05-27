# LazyImage 懒加载图片

基于 `IntersectionObserver` 的懒加载图片，进入视口前不发起请求。

## 基础用法

<div class="demo-block">
  <div style="width: 200px; height: 120px;">
    <MLazyImage
      src="https://picsum.photos/seed/lazy/400/240"
      alt="示例图片"
      img-class="w-full h-full object-cover rounded-lg"
    />
  </div>
</div>

```vue
<template>
  <div style="width: 200px; height: 120px;">
    <MLazyImage
      src="https://picsum.photos/400/240"
      alt="示例图片"
      img-class="w-full h-full object-cover rounded-lg"
    />
  </div>
</template>
```

## 列表场景

每张图片只在滚动到视口前 240px 时才开始加载，长列表性能友好。

```vue
<template>
  <div v-for="item in list" :key="item.id" style="width: 200px; height: 120px;">
    <MLazyImage :src="item.cover" img-class="w-full h-full object-cover" />
  </div>
</template>
```

## 实现细节

- `rootMargin: '240px 0px'`：进入视口前 240px 就开始加载，避免用户感知到加载延迟。
- `threshold: 0.01`：哪怕只露出 1% 也触发。
- 图片标签自带 `loading="lazy"` + `decoding="async"` + `fetchpriority="low"`，进一步降低主线程压力。
- 进入视口后立即断开 observer，释放内存。

## Props 属性

| 属性名 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| src | `string` | - | 图片地址（必填） |
| alt | `string` | - | 替代文本 |
| imgClass | `string` | - | 透传到 `<img>` 的 class |
| wrapperClass | `string` | - | 透传到外层容器的 class |
