# Button 按钮

常用的操作按钮组件，支持多种类型和尺寸。

## 基础用法

<div class="demo-block">
  <MButton>默认按钮</MButton>
  <MButton type="primary">主要按钮</MButton>
  <MButton type="danger">危险按钮</MButton>
  <MButton type="text">文字按钮</MButton>
</div>

```vue
<template>
  <MButton>默认按钮</MButton>
  <MButton type="primary">主要按钮</MButton>
  <MButton type="danger">危险按钮</MButton>
  <MButton type="text">文字按钮</MButton>
</template>
```

## 按钮尺寸

<div class="demo-block">
  <MButton size="small">小型</MButton>
  <MButton size="medium">中等</MButton>
  <MButton size="large">大型</MButton>
</div>

```vue
<template>
  <MButton size="small">小型</MButton>
  <MButton size="medium">中等</MButton>
  <MButton size="large">大型</MButton>
</template>
```

## 禁用状态

<div class="demo-block">
  <MButton disabled>禁用</MButton>
  <MButton type="primary" disabled>禁用主要</MButton>
</div>

```vue
<template>
  <MButton disabled>禁用</MButton>
  <MButton type="primary" disabled>禁用主要</MButton>
</template>
```

## Props 属性

| 属性名 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| type | `'primary' \| 'default' \| 'danger' \| 'text'` | `'default'` | 按钮类型 |
| size | `'small' \| 'medium' \| 'large'` | `'medium'` | 按钮尺寸 |
| disabled | `boolean` | `false` | 是否禁用 |

## Events 事件

| 事件名 | 参数 | 说明 |
| --- | --- | --- |
| click | `(event: MouseEvent)` | 点击按钮时触发 |

## Slots 插槽

| 插槽名 | 说明 |
| --- | --- |
| default | 按钮内容 |
