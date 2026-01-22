# Table 表格

功能强大的数据表格组件，支持选择、排序和自定义列渲染。

## 基础用法

<script setup>
import { ref } from 'vue'

const columns = [
  { key: 'name', title: '姓名' },
  { key: 'age', title: '年龄', align: 'center' },
  { key: 'email', title: '邮箱' }
]

const data = [
  { id: 1, name: '张三', age: 28, email: 'zhangsan@example.com' },
  { id: 2, name: '李四', age: 32, email: 'lisi@example.com' },
  { id: 3, name: '王五', age: 45, email: 'wangwu@example.com' }
]
</script>

```vue
<script setup>
import { ref } from 'vue'

const columns = [
  { key: 'name', title: '姓名' },
  { key: 'age', title: '年龄', align: 'center' },
  { key: 'email', title: '邮箱' }
]

const data = [
  { id: 1, name: '张三', age: 28, email: 'zhangsan@example.com' },
  { id: 2, name: '李四', age: 32, email: 'lisi@example.com' },
  { id: 3, name: '王五', age: 45, email: 'wangwu@example.com' }
]
</script>

<template>
  <MTable :columns="columns" :data="data" />
</template>
```

## 显示序号列

```vue
<template>
  <MTable :columns="columns" :data="data" show-index />
</template>
```

## 斑马纹

```vue
<template>
  <MTable :columns="columns" :data="data" stripe />
</template>
```

## 行选择

```vue
<script setup>
const selectedKeys = ref([])

const handleSelect = (keys, rows) => {
  selectedKeys.value = keys
  console.log('选中的行:', rows)
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

## 自定义列内容

使用具名插槽自定义列内容：

```vue
<template>
  <MTable :columns="columns" :data="data">
    <template #name="{ row, value }">
      <span class="font-bold text-blue-600">{{ value }}</span>
    </template>
    <template #actions="{ row }">
      <MButton size="small" @click="handleEdit(row)">编辑</MButton>
      <MButton size="small" type="danger" @click="handleDelete(row)">删除</MButton>
    </template>
  </MTable>
</template>
```

## 加载状态

```vue
<template>
  <MTable :columns="columns" :data="data" :loading="isLoading" />
</template>
```

## Props 属性

| 属性名 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| columns | `Column[]` | `[]` | 列配置数组 |
| data | `any[]` | `[]` | 表格数据 |
| rowKey | `string` | `'id'` | 行的唯一键 |
| loading | `boolean` | `false` | 显示加载遮罩 |
| stripe | `boolean` | `false` | 斑马纹样式 |
| showIndex | `boolean` | `false` | 显示序号列 |
| selectable | `boolean` | `false` | 启用行选择 |
| selectedKeys | `(string \| number)[]` | `[]` | 当前选中的行键 |

### Column 列配置

| 属性名 | 类型 | 说明 |
| --- | --- | --- |
| key | `string` | 列数据键 |
| title | `string` | 列标题 |
| width | `string` | 列宽度（如 '100px', '20%'） |
| minWidth | `string` | 最小列宽度 |
| align | `'left' \| 'center' \| 'right'` | 文本对齐方式 |

## Events 事件

| 事件名 | 参数 | 说明 |
| --- | --- | --- |
| row-click | `(row, index)` | 点击行时触发 |
| select | `(keys, rows)` | 选择变化时触发 |
| select-all | `(selected: boolean)` | 全选复选框变化时触发 |

## Slots 插槽

| 插槽名 | 作用域 | 说明 |
| --- | --- | --- |
| [columnKey] | `{ row, index, value }` | 特定列的自定义内容 |
| empty | - | 空数据时的内容 |
