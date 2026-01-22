# Select

A dropdown select component with search and custom option rendering.

## Basic Usage

<script setup>
import { ref } from 'vue'

const value = ref(null)
const options = [
  { label: 'Option 1', value: '1' },
  { label: 'Option 2', value: '2' },
  { label: 'Option 3', value: '3' }
]
</script>

<div class="demo-block">
  <MSelect v-model="value" :options="options" placeholder="Select..." />
</div>

```vue
<script setup>
import { ref } from 'vue'

const value = ref(null)
const options = [
  { label: 'Option 1', value: '1' },
  { label: 'Option 2', value: '2' },
  { label: 'Option 3', value: '3' }
]
</script>

<template>
  <MSelect v-model="value" :options="options" placeholder="Select..." />
</template>
```

## Filterable

Enable search functionality within the dropdown:

```vue
<template>
  <MSelect 
    v-model="value" 
    :options="options" 
    filterable 
    placeholder="Search and select..."
  />
</template>
```

## Disabled Options

```vue
<script setup>
const options = [
  { label: 'Available', value: '1' },
  { label: 'Disabled', value: '2', disabled: true },
  { label: 'Available', value: '3' }
]
</script>

<template>
  <MSelect v-model="value" :options="options" />
</template>
```

## Custom Keys

Use custom property names for value and label:

```vue
<script setup>
const users = [
  { id: 1, name: 'John Doe' },
  { id: 2, name: 'Jane Smith' }
]
</script>

<template>
  <MSelect 
    v-model="userId" 
    :options="users" 
    value-key="id"
    label-key="name"
  />
</template>
```

## Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| modelValue | `string \| number \| null` | - | Binding value (v-model) |
| options | `Option[]` | `[]` | Array of options |
| valueKey | `string` | `'value'` | Property name for option value |
| labelKey | `string` | `'label'` | Property name for option label |
| placeholder | `string` | `'请选择'` | Placeholder text |
| disabled | `boolean` | `false` | Whether the select is disabled |
| filterable | `boolean` | `false` | Enable search functionality |
| error | `boolean` | `false` | Error state styling |

## Events

| Name | Parameters | Description |
| --- | --- | --- |
| update:modelValue | `(value: string \| number \| null)` | Triggered when selection changes |
| change | `(value, option)` | Triggered when selection changes with full option object |

## Slots

| Name | Scope | Description |
| --- | --- | --- |
| option | `{ option }` | Custom option content |
