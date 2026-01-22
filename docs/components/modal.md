# Modal

A modal dialog component for displaying important information or forms.

## Basic Usage

<script setup>
import { ref } from 'vue'
const visible = ref(false)
</script>

```vue
<script setup>
import { ref } from 'vue'
const visible = ref(false)
</script>

<template>
  <MButton @click="visible = true">Open Modal</MButton>
  
  <MModal v-model="visible" title="Modal Title">
    <p>This is the modal content.</p>
  </MModal>
</template>
```

## Sizes

```vue
<template>
  <MModal v-model="visible" title="Small Modal" size="small">
    <p>Small modal content</p>
  </MModal>
  
  <MModal v-model="visible" title="Large Modal" size="large">
    <p>Large modal content</p>
  </MModal>
  
  <MModal v-model="visible" title="Full Modal" size="full">
    <p>Full size modal content</p>
  </MModal>
</template>
```

## Custom Width

```vue
<template>
  <MModal v-model="visible" title="Custom Width" custom-width="600px">
    <p>Modal with custom width</p>
  </MModal>
</template>
```

## Custom Footer

```vue
<template>
  <MModal v-model="visible" title="Custom Footer">
    <p>Modal content</p>
    
    <template #footer>
      <MButton @click="visible = false">Cancel</MButton>
      <MButton type="primary" @click="handleSave">Save</MButton>
      <MButton type="danger" @click="handleDelete">Delete</MButton>
    </template>
  </MModal>
</template>
```

## Without Footer

```vue
<template>
  <MModal v-model="visible" title="No Footer" :show-footer="false">
    <p>Modal without footer buttons</p>
  </MModal>
</template>
```

## Confirmation Dialog

```vue
<script setup>
const handleConfirm = () => {
  console.log('Confirmed!')
  visible.value = false
}
</script>

<template>
  <MModal 
    v-model="visible" 
    title="Confirm Action"
    @confirm="handleConfirm"
  >
    <p>Are you sure you want to proceed?</p>
  </MModal>
</template>
```

## Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| modelValue | `boolean` | - | Modal visibility (v-model) |
| title | `string` | `''` | Modal title |
| size | `'small' \| 'medium' \| 'large' \| 'full'` | `'medium'` | Modal size |
| customWidth | `string` | - | Custom max-width |
| showClose | `boolean` | `true` | Show close button |
| showFooter | `boolean` | `true` | Show footer area |
| showCancel | `boolean` | `true` | Show cancel button |
| showConfirm | `boolean` | `true` | Show confirm button |
| cancelText | `string` | `'取消'` | Cancel button text |
| confirmText | `string` | `'确定'` | Confirm button text |
| confirmDisabled | `boolean` | `false` | Disable confirm button |
| closeOnClickModal | `boolean` | `true` | Close when clicking overlay |
| closeOnPressEscape | `boolean` | `true` | Close when pressing Escape |
| contentClass | `string` | `''` | Custom class for content area |

## Events

| Name | Parameters | Description |
| --- | --- | --- |
| update:modelValue | `(value: boolean)` | Triggered when visibility changes |
| confirm | - | Triggered when confirm button is clicked |
| cancel | - | Triggered when modal is cancelled |
| open | - | Triggered when modal opens |
| close | - | Triggered when modal closes |

## Slots

| Name | Description |
| --- | --- |
| default | Modal body content |
| header | Custom header content |
| footer | Custom footer content |
