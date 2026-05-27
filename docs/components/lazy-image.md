# LazyImage

`IntersectionObserver`-based lazy image. Requests are deferred until the element approaches the viewport.

## Basic Usage

<div class="demo-block">
  <div style="width: 200px; height: 120px;">
    <MLazyImage
      src="https://picsum.photos/seed/lazy-en/400/240"
      alt="demo"
      img-class="w-full h-full object-cover rounded-lg"
    />
  </div>
</div>

```vue
<template>
  <div style="width: 200px; height: 120px;">
    <MLazyImage src="https://example.com/big.jpg" img-class="w-full h-full object-cover" />
  </div>
</template>
```

## How it works

- `rootMargin: '240px 0px'` — start loading 240px before the image enters the viewport.
- `threshold: 0.01` — fires on the slightest intersection.
- The native `<img>` carries `loading="lazy"` + `decoding="async"` + `fetchpriority="low"` to further offload work from the main thread.
- The observer disconnects immediately once the image is visible to free memory.

## Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| src | `string` | - | Image URL (required) |
| alt | `string` | - | Alt text |
| imgClass | `string` | - | Class forwarded to `<img>` |
| wrapperClass | `string` | - | Class forwarded to the wrapper |
