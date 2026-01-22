# Input

A versatile input component with support for prefixes, suffixes, and clearable functionality.

## Basic Usage

<div class="demo-block">
  <MInput placeholder="Enter text..." />
</div>

```vue
<script setup>
import { ref } from 'vue'
const value = ref('')
</script>

<template>
  <MInput v-model="value" placeholder="Enter text..." />
</template>
```

## Clearable

<div class="demo-block">
  <MInput placeholder="Clearable input" clearable />
</div>

```vue
<template>
  <MInput v-model="value" placeholder="Clearable input" clearable />
</template>
```

## Disabled & Readonly

<div class="demo-block">
  <MInput placeholder="Disabled" disabled />
  <MInput placeholder="Readonly" readonly />
</div>

```vue
<template>
  <MInput placeholder="Disabled" disabled />
  <MInput placeholder="Readonly" readonly />
</template>
```

## Error State

<div class="demo-block">
  <MInput placeholder="Error state" error />
</div>

```vue
<template>
  <MInput v-model="value" placeholder="Error state" error />
</template>
```

## With Prefix/Suffix Slots

```vue
<template>
  <MInput v-model="value" placeholder="Search...">
    <template #prefix>
      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    </template>
  </MInput>
</template>
```

## Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| modelValue | `string \| number` | - | Binding value (v-model) |
| type | `string` | `'text'` | Native input type |
| placeholder | `string` | `''` | Placeholder text |
| disabled | `boolean` | `false` | Whether the input is disabled |
| readonly | `boolean` | `false` | Whether the input is readonly |
| clearable | `boolean` | `false` | Show clear button |
| error | `boolean` | `false` | Error state styling |

## Events

| Name | Parameters | Description |
| --- | --- | --- |
| update:modelValue | `(value: string)` | Triggered when input value changes |
| focus | `(event: FocusEvent)` | Triggered when input receives focus |
| blur | `(event: FocusEvent)` | Triggered when input loses focus |
| enter | `(event: KeyboardEvent)` | Triggered when Enter key is pressed |
| clear | - | Triggered when clear button is clicked |

## Slots

| Name | Description |
| --- | --- |
| prefix | Content before the input |
| suffix | Content after the input |

## Exposed Methods

| Name | Parameters | Description |
| --- | --- | --- |
| focus | - | Focus the input |
| blur | - | Blur the input |
