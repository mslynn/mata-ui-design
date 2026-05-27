# Tooltip 文字提示

鼠标悬停时显示提示信息，支持四个方位。

## 基础用法

<div class="demo-block">
  <MTooltip content="这是一段提示文字">
    <button style="padding: 6px 14px; border: 1px solid #ddd; border-radius: 6px; background: #fff; cursor: pointer;">悬停我</button>
  </MTooltip>
</div>

```vue
<template>
  <MTooltip content="这是一段提示文字">
    <button>悬停我</button>
  </MTooltip>
</template>
```

## 位置方向

<div class="demo-block" style="display: flex; gap: 24px;">
  <MTooltip content="上方提示" placement="top">
    <button>top</button>
  </MTooltip>
  <MTooltip content="下方提示" placement="bottom">
    <button>bottom</button>
  </MTooltip>
  <MTooltip content="左侧提示" placement="left">
    <button>left</button>
  </MTooltip>
  <MTooltip content="右侧提示" placement="right">
    <button>right</button>
  </MTooltip>
</div>

```vue
<template>
  <MTooltip content="上方提示" placement="top"><button>top</button></MTooltip>
  <MTooltip content="下方提示" placement="bottom"><button>bottom</button></MTooltip>
  <MTooltip content="左侧提示" placement="left"><button>left</button></MTooltip>
  <MTooltip content="右侧提示" placement="right"><button>right</button></MTooltip>
</template>
```

## Props 属性

| 属性名 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| content | `string` | - | 提示文字 |
| placement | `'top' \| 'bottom' \| 'left' \| 'right'` | `'top'` | 出现位置 |
| disabled | `boolean` | `false` | 禁用提示 |

## Slots 插槽

| 插槽名 | 说明 |
| --- | --- |
| default | 触发提示的元素 |
