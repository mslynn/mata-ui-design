# Tree

A hierarchical tree component for displaying nested data structures.

## Basic Usage

<script setup>
import { ref } from 'vue'

const treeData = [
  {
    id: 1,
    label: 'Level 1',
    children: [
      { id: 11, label: 'Level 1-1' },
      { id: 12, label: 'Level 1-2' }
    ]
  },
  {
    id: 2,
    label: 'Level 2',
    children: [
      { id: 21, label: 'Level 2-1' }
    ]
  }
]

const selectedKey = ref(null)
const expandedKeys = ref([1])
</script>

```vue
<script setup>
import { ref } from 'vue'

const treeData = [
  {
    id: 1,
    label: 'Level 1',
    children: [
      { id: 11, label: 'Level 1-1' },
      { id: 12, label: 'Level 1-2' }
    ]
  },
  {
    id: 2,
    label: 'Level 2',
    children: [
      { id: 21, label: 'Level 2-1' }
    ]
  }
]

const selectedKey = ref(null)
const expandedKeys = ref([1])

const handleSelect = (node) => {
  selectedKey.value = node.id
}

const handleExpand = (key, expanded) => {
  if (expanded) {
    expandedKeys.value.push(key)
  } else {
    expandedKeys.value = expandedKeys.value.filter(k => k !== key)
  }
}
</script>

<template>
  <MTree 
    :data="treeData"
    :selected-key="selectedKey"
    :expanded-keys="expandedKeys"
    @select="handleSelect"
    @expand="handleExpand"
  />
</template>
```

## Custom Icons

```vue
<template>
  <MTree :data="treeData">
    <template #icon="{ node, expanded }">
      <span v-if="node.children">{{ expanded ? '📂' : '📁' }}</span>
      <span v-else>📄</span>
    </template>
  </MTree>
</template>
```

## With Actions

```vue
<template>
  <MTree :data="treeData">
    <template #actions="{ node }">
      <MButton size="small" @click="handleAdd(node)">Add</MButton>
      <MButton size="small" type="danger" @click="handleDelete(node)">Delete</MButton>
    </template>
  </MTree>
</template>
```

## Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| data | `TreeNode[]` | `[]` | Tree data |
| nodeKey | `string` | `'id'` | Property name for unique node key |
| labelKey | `string` | `'label'` | Property name for node label |
| childrenKey | `string` | `'children'` | Property name for children array |
| selectedKey | `string \| number \| null` | `null` | Currently selected node key |
| expandedKeys | `(string \| number)[]` | `[]` | Array of expanded node keys |

## Events

| Name | Parameters | Description |
| --- | --- | --- |
| select | `(node)` | Triggered when a node is clicked |
| expand | `(key, expanded)` | Triggered when a node is expanded/collapsed |

## Slots

| Name | Scope | Description |
| --- | --- | --- |
| icon | `{ node, expanded }` | Custom node icon |
| actions | `{ node }` | Action buttons for each node |
