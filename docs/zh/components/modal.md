# Modal 对话框

模态对话框组件，用于显示重要信息或表单。

## 基础用法

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
  <MButton @click="visible = true">打开对话框</MButton>
  
  <MModal v-model="visible" title="对话框标题">
    <p>这是对话框的内容。</p>
  </MModal>
</template>
```

## 不同尺寸

```vue
<template>
  <MModal v-model="visible" title="小型对话框" size="small">
    <p>小型对话框内容</p>
  </MModal>
  
  <MModal v-model="visible" title="大型对话框" size="large">
    <p>大型对话框内容</p>
  </MModal>
  
  <MModal v-model="visible" title="全屏对话框" size="full">
    <p>全屏对话框内容</p>
  </MModal>
</template>
```

## 自定义宽度

```vue
<template>
  <MModal v-model="visible" title="自定义宽度" custom-width="600px">
    <p>自定义宽度的对话框</p>
  </MModal>
</template>
```

## 自定义底部

```vue
<template>
  <MModal v-model="visible" title="自定义底部">
    <p>对话框内容</p>
    
    <template #footer>
      <MButton @click="visible = false">取消</MButton>
      <MButton type="primary" @click="handleSave">保存</MButton>
      <MButton type="danger" @click="handleDelete">删除</MButton>
    </template>
  </MModal>
</template>
```

## 无底部

```vue
<template>
  <MModal v-model="visible" title="无底部" :show-footer="false">
    <p>没有底部按钮的对话框</p>
  </MModal>
</template>
```

## 确认对话框

```vue
<script setup>
const handleConfirm = () => {
  console.log('已确认！')
  visible.value = false
}
</script>

<template>
  <MModal 
    v-model="visible" 
    title="确认操作"
    @confirm="handleConfirm"
  >
    <p>确定要执行此操作吗？</p>
  </MModal>
</template>
```

## Props 属性

| 属性名 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| modelValue | `boolean` | - | 对话框可见性（v-model） |
| title | `string` | `''` | 对话框标题 |
| size | `'small' \| 'medium' \| 'large' \| 'full'` | `'medium'` | 对话框尺寸 |
| customWidth | `string` | - | 自定义最大宽度 |
| showClose | `boolean` | `true` | 显示关闭按钮 |
| showFooter | `boolean` | `true` | 显示底部区域 |
| showCancel | `boolean` | `true` | 显示取消按钮 |
| showConfirm | `boolean` | `true` | 显示确认按钮 |
| cancelText | `string` | `'取消'` | 取消按钮文本 |
| confirmText | `string` | `'确定'` | 确认按钮文本 |
| confirmDisabled | `boolean` | `false` | 禁用确认按钮 |
| closeOnClickModal | `boolean` | `true` | 点击遮罩关闭 |
| closeOnPressEscape | `boolean` | `true` | 按 ESC 键关闭 |
| contentClass | `string` | `''` | 内容区域的自定义类名 |

## Events 事件

| 事件名 | 参数 | 说明 |
| --- | --- | --- |
| update:modelValue | `(value: boolean)` | 可见性变化时触发 |
| confirm | - | 点击确认按钮时触发 |
| cancel | - | 取消对话框时触发 |
| open | - | 对话框打开时触发 |
| close | - | 对话框关闭时触发 |

## Slots 插槽

| 插槽名 | 说明 |
| --- | --- |
| default | 对话框主体内容 |
| header | 自定义头部内容 |
| footer | 自定义底部内容 |
