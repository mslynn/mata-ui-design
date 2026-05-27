# Tooltip

Hover-triggered text tooltip with four placements.

## Basic Usage

<div class="demo-block">
  <MTooltip content="This is a tooltip">
    <button style="padding: 6px 14px; border: 1px solid #ddd; border-radius: 6px; background: #fff; cursor: pointer;">Hover me</button>
  </MTooltip>
</div>

```vue
<template>
  <MTooltip content="This is a tooltip">
    <button>Hover me</button>
  </MTooltip>
</template>
```

## Placement

<div class="demo-block" style="display: flex; gap: 24px;">
  <MTooltip content="Top tooltip" placement="top"><button>top</button></MTooltip>
  <MTooltip content="Bottom tooltip" placement="bottom"><button>bottom</button></MTooltip>
  <MTooltip content="Left tooltip" placement="left"><button>left</button></MTooltip>
  <MTooltip content="Right tooltip" placement="right"><button>right</button></MTooltip>
</div>

## Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| content | `string` | - | Tooltip text |
| placement | `'top' \| 'bottom' \| 'left' \| 'right'` | `'top'` | Placement |
| disabled | `boolean` | `false` | Disable tooltip |

## Slots

| Name | Description |
| --- | --- |
| default | Trigger element |
