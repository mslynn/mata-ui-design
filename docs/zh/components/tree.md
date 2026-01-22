# Tree 树形控件

用于展示层级嵌套数据结构的树形组件。

## 基础用法

<script setup>
import { ref } from 'vue'

const treeData = [
  {
    id: 1,
    label: '一级节点',
    children: [
      { id: 11, label: '二级节点 1-1' },
      { id: 12, label: '二级节点 1-2' }
    ]
  },
  {
    id: 2,
    label: '一级节点 2',
    children: [
      { id: 21, label: '二级节点 2-1' }
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
    label: '一级节点',
    children: [
      { id: 11, label: '二级节点 1-1' },
      { id: 12, label: '二级节点 1-2' }
    ]
  },
  {
    id: 2,
    label: '一级节点 2',
    children: [
      { id: 21, label: '二级节点 2-1' }
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

## 自定义图标

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

## 带操作按钮

```vue
<template>
  <MTree :data="treeData">
    <template #actions="{ node }">
      <MButton size="small" @click="handleAdd(node)">添加</MButton>
      <MButton size="small" type="danger" @click="handleDelete(node)">删除</MButton>
    </template>
  </MTree>
</template>
```

## Props 属性

| 属性名 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| data | `TreeNode[]` | `[]` | 树形数据 |
| nodeKey | `string` | `'id'` | 节点唯一标识的属性名 |
| labelKey | `string` | `'label'` | 节点标签的属性名 |
| childrenKey | `string` | `'children'` | 子节点数组的属性名 |
| selectedKey | `string \| number \| null` | `null` | 当前选中的节点键 |
| expandedKeys | `(string \| number)[]` | `[]` | 展开的节点键数组 |

## Events 事件

| 事件名 | 参数 | 说明 |
| --- | --- | --- |
| select | `(node)` | 点击节点时触发 |
| expand | `(key, expanded)` | 展开/折叠节点时触发 |

## Slots 插槽

| 插槽名 | 作用域 | 说明 |
| --- | --- | --- |
| icon | `{ node, expanded }` | 自定义节点图标 |
| actions | `{ node }` | 每个节点的操作按钮 |
