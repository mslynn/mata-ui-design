# Input 输入框

通用的文本输入组件，支持前缀、后缀图标和清除按钮。

## 基础用法

<div class="demo-block">
  <MInput placeholder="请输入内容..." />
</div>

```vue
<script setup>
import { ref } from 'vue'
const value = ref('')
</script>

<template>
  <MInput v-model="value" placeholder="请输入内容..." />
</template>
```

## 可清空

<div class="demo-block">
  <MInput placeholder="可清空输入框" clearable />
</div>

```vue
<template>
  <MInput v-model="value" placeholder="可清空输入框" clearable />
</template>
```

## 禁用与只读

<div class="demo-block">
  <MInput placeholder="禁用状态" disabled />
  <MInput placeholder="只读状态" readonly />
</div>

```vue
<template>
  <MInput placeholder="禁用状态" disabled />
  <MInput placeholder="只读状态" readonly />
</template>
```

## 错误状态

<div class="demo-block">
  <MInput placeholder="错误状态" error />
</div>

```vue
<template>
  <MInput v-model="value" placeholder="错误状态" error />
</template>
```

## 前缀/后缀插槽

```vue
<template>
  <MInput v-model="value" placeholder="搜索...">
    <template #prefix>
      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    </template>
  </MInput>
</template>
```

## Props 属性

| 属性名 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| modelValue | `string \| number` | - | 绑定值（v-model） |
| type | `string` | `'text'` | 原生 input 类型 |
| placeholder | `string` | `''` | 占位文本 |
| disabled | `boolean` | `false` | 是否禁用 |
| readonly | `boolean` | `false` | 是否只读 |
| clearable | `boolean` | `false` | 是否显示清除按钮 |
| error | `boolean` | `false` | 错误状态样式 |

## Events 事件

| 事件名 | 参数 | 说明 |
| --- | --- | --- |
| update:modelValue | `(value: string)` | 输入值变化时触发 |
| focus | `(event: FocusEvent)` | 获得焦点时触发 |
| blur | `(event: FocusEvent)` | 失去焦点时触发 |
| enter | `(event: KeyboardEvent)` | 按下回车键时触发 |
| clear | - | 点击清除按钮时触发 |

## Slots 插槽

| 插槽名 | 说明 |
| --- | --- |
| prefix | 输入框前置内容 |
| suffix | 输入框后置内容 |

## 暴露的方法

| 方法名 | 参数 | 说明 |
| --- | --- | --- |
| focus | - | 使输入框获取焦点 |
| blur | - | 使输入框失去焦点 |
