# DateRangePicker

A date-range picker wrapping Element Plus's `ElDatePickerPanel`, with custom presets, a side action button, and locale switching.

## Peer Dependencies

> Install peer dependencies before using this component:
>
> ```bash
> npm install element-plus dayjs
> ```

## Basic Usage

<script setup>
import { ref } from 'vue'
const range = ref(['2026-01-01', '2026-03-31'])
const presets = [
  { key: 'last7',  label: 'Last 7 days',  mode: 'preset' },
  { key: 'last30', label: 'Last 30 days', mode: 'preset' },
  { key: 'month',  label: 'This month',   mode: 'preset' }
]
</script>

<div class="demo-block" style="min-height: 60px;">
  <MDateRangePicker
    v-model="range"
    :presets="presets"
    :show-semester-action="false"
    locale="en"
    start-placeholder="Start date"
    end-placeholder="End date"
    separator="~"
  />
  <div style="margin-top: 8px; color: #888;">Value: {{ range }}</div>
</div>

```vue
<script setup>
import { ref } from 'vue'
const range = ref(['2026-01-01', '2026-03-31'])
const presets = [
  { key: 'last7',  label: 'Last 7 days',  mode: 'preset' },
  { key: 'last30', label: 'Last 30 days', mode: 'preset' }
]
</script>

<template>
  <MDateRangePicker
    v-model="range"
    :presets="presets"
    locale="en"
    start-placeholder="Start date"
    end-placeholder="End date"
    separator="~"
  />
</template>
```

## Custom Action Button

`show-semester-action` reveals a custom side button that emits `semester-click` — handy for jumping to a settings dialog.

```vue
<template>
  <MDateRangePicker
    v-model="range"
    semester-action-text="Settings"
    :show-semester-action="true"
    @semester-click="openSettings"
  />
</template>
```

## Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| modelValue | `string[] \| null` | - | `[startDate, endDate]` (v-model) |
| presets | `DateRangePreset[]` | `[]` | Preset range list |
| disabledDate | `(date: Date) => boolean` | - | Predicate to disable dates |
| semesterActionText | `string` | `'Semester Settings'` | Side button label |
| showSemesterAction | `boolean` | `true` | Show side action |
| startPlaceholder | `string` | `'Start date'` | Start input placeholder |
| endPlaceholder | `string` | `'End date'` | End input placeholder |
| separator | `string` | `'~'` | Separator between inputs |
| locale | `'zh' \| 'en'` | `'zh'` | Element Plus locale |

## Events

| Name | Args | Description |
| --- | --- | --- |
| update:modelValue | `[start, end]` | Range committed |
| change | `[start, end]` | Alias of the above |
| semester-click | - | Side action clicked |

## Slots

| Name | Scope | Description |
| --- | --- | --- |
| sidebar | `{ presets, activePresetKey, selectPreset, semesterActionText, emitSemesterClick }` | Fully customize the sidebar |
