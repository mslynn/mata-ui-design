# Select 选择器

下拉选择组件，支持搜索和自定义选项渲染。

## 基础用法

<script setup>
import { ref } from 'vue'

const value = ref(null)
const options = [
  { label: '选项一', value: '1' },
  { label: '选项二', value: '2' },
  { label: '选项三', value: '3' }
]
</script>

<div class="demo-block">
  <MSelect v-model="value" :options="options" placeholder="请选择..." />
</div>

```vue
<script setup>
import { ref } from 'vue'

const value = ref(null)
const options = [
  { label: '选项一', value: '1' },
  { label: '选项二', value: '2' },
  { label: '选项三', value: '3' }
]
</script>

<template>
  <MSelect v-model="value" :options="options" placeholder="请选择..." />
</template>
```

## 可搜索

启用下拉框内的搜索功能：

```vue
<template>
  <MSelect 
    v-model="value" 
    :options="options" 
    filterable 
    placeholder="搜索并选择..."
  />
</template>
```

## 禁用选项

```vue
<script setup>
const options = [
  { label: '可选', value: '1' },
  { label: '禁用', value: '2', disabled: true },
  { label: '可选', value: '3' }
]
</script>

<template>
  <MSelect v-model="value" :options="options" />
</template>
```

## 自定义字段名

使用自定义属性名作为值和标签：

```vue
<script setup>
const users = [
  { id: 1, name: '张三' },
  { id: 2, name: '李四' }
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

## Props 属性

| 属性名 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| modelValue | `string \| number \| null` | - | 绑定值（v-model） |
| options | `Option[]` | `[]` | 选项数组 |
| valueKey | `string` | `'value'` | 选项值的属性名 |
| labelKey | `string` | `'label'` | 选项标签的属性名 |
| placeholder | `string` | `'请选择'` | 占位文本 |
| disabled | `boolean` | `false` | 是否禁用 |
| filterable | `boolean` | `false` | 是否可搜索 |
| error | `boolean` | `false` | 错误状态样式 |

## Events 事件

| 事件名 | 参数 | 说明 |
| --- | --- | --- |
| update:modelValue | `(value: string \| number \| null)` | 选中值变化时触发 |
| change | `(value, option)` | 选中值变化时触发，返回完整的选项对象 |

## Slots 插槽

| 插槽名 | 作用域 | 说明 |
| --- | --- | --- |
| option | `{ option }` | 自定义选项内容 |
