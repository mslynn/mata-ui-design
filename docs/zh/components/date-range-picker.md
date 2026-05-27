# DateRangePicker 日期区间选择器

基于 Element Plus `ElDatePickerPanel` 二次封装的日期区间选择器，支持自定义预设区间、学期入口、双语切换。

## 依赖

> 使用本组件需要安装 peerDependencies：
>
> ```bash
> npm install element-plus dayjs
> ```

## 基础用法

<script setup>
import { ref } from 'vue'
const range = ref(['2026-01-01', '2026-03-31'])
const presets = [
  { key: 'last7',  label: '近 7 天',  mode: 'preset' },
  { key: 'last30', label: '近 30 天', mode: 'preset' },
  { key: 'this-month', label: '本月', mode: 'preset' }
]
</script>

<div class="demo-block" style="min-height: 60px;">
  <MDateRangePicker
    v-model="range"
    :presets="presets"
    :show-semester-action="false"
    start-placeholder="开始日期"
    end-placeholder="结束日期"
    separator="至"
  />
  <div style="margin-top: 8px; color: #888;">当前值：{{ range }}</div>
</div>

```vue
<script setup>
import { ref } from 'vue'
const range = ref(['2026-01-01', '2026-03-31'])
const presets = [
  { key: 'last7',  label: '近 7 天',  mode: 'preset' },
  { key: 'last30', label: '近 30 天', mode: 'preset' },
  { key: 'this-month', label: '本月', mode: 'preset' }
]
</script>

<template>
  <MDateRangePicker
    v-model="range"
    :presets="presets"
    start-placeholder="开始日期"
    end-placeholder="结束日期"
    separator="至"
  />
</template>
```

## 学期入口

通过 `show-semester-action` 显示自定义入口按钮，点击触发 `semester-click` 事件，用于跳转到学期设置等场景。

```vue
<template>
  <MDateRangePicker
    v-model="range"
    semester-action-text="学期设置"
    :show-semester-action="true"
    @semester-click="openSemesterModal"
  />
</template>
```

## 英文界面

```vue
<template>
  <MDateRangePicker
    v-model="range"
    locale="en"
    start-placeholder="Start date"
    end-placeholder="End date"
    separator="~"
  />
</template>
```

## Props 属性

| 属性名 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| modelValue | `string[] \| null` | - | `[startDate, endDate]`（v-model） |
| presets | `DateRangePreset[]` | `[]` | 预设区间列表 |
| disabledDate | `(date: Date) => boolean` | - | 禁用日期判定函数 |
| semesterActionText | `string` | `'Semester Settings'` | 自定义入口文案 |
| showSemesterAction | `boolean` | `true` | 是否显示学期入口 |
| startPlaceholder | `string` | `'Start date'` | 开始日期占位符 |
| endPlaceholder | `string` | `'End date'` | 结束日期占位符 |
| separator | `string` | `'~'` | 起止日期分隔符 |
| locale | `'zh' \| 'en'` | `'zh'` | Element Plus 语言 |

## Events 事件

| 事件名 | 参数 | 说明 |
| --- | --- | --- |
| update:modelValue | `[start, end]` | 区间确认时触发 |
| change | `[start, end]` | 同上 |
| semester-click | - | 点击学期入口时触发 |

## Slots 插槽

| 插槽名 | 作用域 | 说明 |
| --- | --- | --- |
| sidebar | `{ presets, activePresetKey, selectPreset, semesterActionText, emitSemesterClick }` | 完全自定义侧边栏 |
