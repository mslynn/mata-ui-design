# Tabs 标签页

用于切换不同视图的标签导航组件。

## 基础用法

<script setup>
import { ref } from 'vue'

const activeTab = ref('tab1')
const tabs = [
  { label: '标签一', value: 'tab1' },
  { label: '标签二', value: 'tab2' },
  { label: '标签三', value: 'tab3' }
]
</script>

```vue
<script setup>
import { ref } from 'vue'

const activeTab = ref('tab1')
const tabs = [
  { label: '标签一', value: 'tab1' },
  { label: '标签二', value: 'tab2' },
  { label: '标签三', value: 'tab3' }
]
</script>

<template>
  <MTabs v-model="activeTab" :tabs="tabs" />
</template>
```

## 填充模式

填满容器宽度：

```vue
<template>
  <MTabs v-model="activeTab" :tabs="tabs" block />
</template>
```

## 带徽标

```vue
<script setup>
const tabs = [
  { label: '消息', value: 'messages', badge: 5 },
  { label: '通知', value: 'notifications', badge: 12 },
  { label: '设置', value: 'settings' }
]
</script>

<template>
  <MTabs v-model="activeTab" :tabs="tabs" />
</template>
```

## 禁用标签

```vue
<script setup>
const tabs = [
  { label: '可用', value: 'active' },
  { label: '禁用', value: 'disabled', disabled: true },
  { label: '其他', value: 'another' }
]
</script>

<template>
  <MTabs v-model="activeTab" :tabs="tabs" />
</template>
```

## 自定义标签内容

```vue
<template>
  <MTabs v-model="activeTab" :tabs="tabs">
    <template #tab-messages="{ tab }">
      📧 {{ tab.label }}
    </template>
  </MTabs>
</template>
```

## Props 属性

| 属性名 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| modelValue | `string` | - | 当前激活的标签值（v-model） |
| tabs | `Tab[]` | `[]` | 标签配置数组 |
| block | `boolean` | `false` | 填满容器宽度 |

### Tab 标签配置

| 属性名 | 类型 | 说明 |
| --- | --- | --- |
| label | `string` | 标签文本 |
| value | `string` | 唯一标签值 |
| disabled | `boolean` | 是否禁用 |
| badge | `number \| string` | 徽标内容 |

## Events 事件

| 事件名 | 参数 | 说明 |
| --- | --- | --- |
| update:modelValue | `(value: string)` | 激活标签变化时触发 |
| change | `(value: string)` | 激活标签变化时触发 |

## Slots 插槽

| 插槽名 | 作用域 | 说明 |
| --- | --- | --- |
| tab-[value] | `{ tab }` | 特定标签的自定义内容 |
