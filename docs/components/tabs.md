# Tabs

A tab navigation component for switching between different views.

## Basic Usage

<script setup>
import { ref } from 'vue'

const activeTab = ref('tab1')
const tabs = [
  { label: 'Tab 1', value: 'tab1' },
  { label: 'Tab 2', value: 'tab2' },
  { label: 'Tab 3', value: 'tab3' }
]
</script>

```vue
<script setup>
import { ref } from 'vue'

const activeTab = ref('tab1')
const tabs = [
  { label: 'Tab 1', value: 'tab1' },
  { label: 'Tab 2', value: 'tab2' },
  { label: 'Tab 3', value: 'tab3' }
]
</script>

<template>
  <MTabs v-model="activeTab" :tabs="tabs" />
</template>
```

## Block Style

Fill the container width:

```vue
<template>
  <MTabs v-model="activeTab" :tabs="tabs" block />
</template>
```

## With Badges

```vue
<script setup>
const tabs = [
  { label: 'Messages', value: 'messages', badge: 5 },
  { label: 'Notifications', value: 'notifications', badge: 12 },
  { label: 'Settings', value: 'settings' }
]
</script>

<template>
  <MTabs v-model="activeTab" :tabs="tabs" />
</template>
```

## Disabled Tabs

```vue
<script setup>
const tabs = [
  { label: 'Active', value: 'active' },
  { label: 'Disabled', value: 'disabled', disabled: true },
  { label: 'Another', value: 'another' }
]
</script>

<template>
  <MTabs v-model="activeTab" :tabs="tabs" />
</template>
```

## Custom Tab Content

```vue
<template>
  <MTabs v-model="activeTab" :tabs="tabs">
    <template #tab-messages="{ tab }">
      📧 {{ tab.label }}
    </template>
  </MTabs>
</template>
```

## Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| modelValue | `string` | - | Currently active tab value (v-model) |
| tabs | `Tab[]` | `[]` | Tab configuration array |
| block | `boolean` | `false` | Fill container width |

### Tab Configuration

| Name | Type | Description |
| --- | --- | --- |
| label | `string` | Tab label text |
| value | `string` | Unique tab value |
| disabled | `boolean` | Whether the tab is disabled |
| badge | `number \| string` | Badge content |

## Events

| Name | Parameters | Description |
| --- | --- | --- |
| update:modelValue | `(value: string)` | Triggered when active tab changes |
| change | `(value: string)` | Triggered when active tab changes |

## Slots

| Name | Scope | Description |
| --- | --- | --- |
| tab-[value] | `{ tab }` | Custom content for specific tab |
