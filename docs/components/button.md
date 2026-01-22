# Button

A basic button component with multiple styles and sizes.

## Basic Usage

<div class="demo-block">
  <MButton>Default</MButton>
  <MButton type="primary">Primary</MButton>
  <MButton type="danger">Danger</MButton>
  <MButton type="text">Text</MButton>
</div>

```vue
<template>
  <MButton>Default</MButton>
  <MButton type="primary">Primary</MButton>
  <MButton type="danger">Danger</MButton>
  <MButton type="text">Text</MButton>
</template>
```

## Sizes

<div class="demo-block">
  <MButton size="small">Small</MButton>
  <MButton size="medium">Medium</MButton>
  <MButton size="large">Large</MButton>
</div>

```vue
<template>
  <MButton size="small">Small</MButton>
  <MButton size="medium">Medium</MButton>
  <MButton size="large">Large</MButton>
</template>
```

## Disabled State

<div class="demo-block">
  <MButton disabled>Disabled</MButton>
  <MButton type="primary" disabled>Disabled Primary</MButton>
</div>

```vue
<template>
  <MButton disabled>Disabled</MButton>
  <MButton type="primary" disabled>Disabled Primary</MButton>
</template>
```

## Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| type | `'primary' \| 'default' \| 'danger' \| 'text'` | `'default'` | Button type |
| size | `'small' \| 'medium' \| 'large'` | `'medium'` | Button size |
| disabled | `boolean` | `false` | Whether the button is disabled |

## Events

| Name | Parameters | Description |
| --- | --- | --- |
| click | `(event: MouseEvent)` | Triggered when the button is clicked |

## Slots

| Name | Description |
| --- | --- |
| default | Button content |
