# Table

A powerful data table component with selection, sorting, and custom column rendering.

## Basic Usage

<script setup>
import { ref } from 'vue'

const columns = [
  { key: 'name', title: 'Name' },
  { key: 'age', title: 'Age', align: 'center' },
  { key: 'email', title: 'Email' }
]

const data = [
  { id: 1, name: 'John Doe', age: 28, email: 'john@example.com' },
  { id: 2, name: 'Jane Smith', age: 32, email: 'jane@example.com' },
  { id: 3, name: 'Bob Johnson', age: 45, email: 'bob@example.com' }
]
</script>

```vue
<script setup>
import { ref } from 'vue'

const columns = [
  { key: 'name', title: 'Name' },
  { key: 'age', title: 'Age', align: 'center' },
  { key: 'email', title: 'Email' }
]

const data = [
  { id: 1, name: 'John Doe', age: 28, email: 'john@example.com' },
  { id: 2, name: 'Jane Smith', age: 32, email: 'jane@example.com' },
  { id: 3, name: 'Bob Johnson', age: 45, email: 'bob@example.com' }
]
</script>

<template>
  <MTable :columns="columns" :data="data" />
</template>
```

## With Index Column

```vue
<template>
  <MTable :columns="columns" :data="data" show-index />
</template>
```

## Stripe Style

```vue
<template>
  <MTable :columns="columns" :data="data" stripe />
</template>
```

## Row Selection

```vue
<script setup>
const selectedKeys = ref([])

const handleSelect = (keys, rows) => {
  selectedKeys.value = keys
  console.log('Selected rows:', rows)
}
</script>

<template>
  <MTable 
    :columns="columns" 
    :data="data" 
    selectable
    :selected-keys="selectedKeys"
    @select="handleSelect"
  />
</template>
```

## Custom Column Content

Use named slots to customize column content:

```vue
<template>
  <MTable :columns="columns" :data="data">
    <template #name="{ row, value }">
      <span class="font-bold text-blue-600">{{ value }}</span>
    </template>
    <template #actions="{ row }">
      <MButton size="small" @click="handleEdit(row)">Edit</MButton>
      <MButton size="small" type="danger" @click="handleDelete(row)">Delete</MButton>
    </template>
  </MTable>
</template>
```

## Loading State

```vue
<template>
  <MTable :columns="columns" :data="data" :loading="isLoading" />
</template>
```

## Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| columns | `Column[]` | `[]` | Column configuration array |
| data | `any[]` | `[]` | Table data |
| rowKey | `string` | `'id'` | Unique key for each row |
| loading | `boolean` | `false` | Show loading overlay |
| stripe | `boolean` | `false` | Striped row style |
| showIndex | `boolean` | `false` | Show index column |
| selectable | `boolean` | `false` | Enable row selection |
| selectedKeys | `(string \| number)[]` | `[]` | Currently selected row keys |

### Column Configuration

| Name | Type | Description |
| --- | --- | --- |
| key | `string` | Column data key |
| title | `string` | Column header title |
| width | `string` | Column width (e.g., '100px', '20%') |
| minWidth | `string` | Minimum column width |
| align | `'left' \| 'center' \| 'right'` | Text alignment |

## Events

| Name | Parameters | Description |
| --- | --- | --- |
| row-click | `(row, index)` | Triggered when a row is clicked |
| select | `(keys, rows)` | Triggered when selection changes |
| select-all | `(selected: boolean)` | Triggered when select all checkbox changes |

## Slots

| Name | Scope | Description |
| --- | --- | --- |
| [columnKey] | `{ row, index, value }` | Custom content for specific column |
| empty | - | Content for empty state |
