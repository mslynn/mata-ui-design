# Message 消息提示

轻量级的消息通知组件，用于显示简短的反馈信息。

## 基础用法

```ts
import { ElMessage } from 'lynn-mata-ui-design'

// 成功消息
ElMessage.success('操作成功！')

// 错误消息
ElMessage.error('操作失败！')

// 警告消息
ElMessage.warning('请注意！')

// 信息消息
ElMessage.info('这是一条提示信息。')
```

## 消息类型

### 成功

```ts
ElMessage.success('文件保存成功！')
```

### 错误

```ts
ElMessage.error('文件保存失败，请重试。')
```

### 警告

```ts
ElMessage.warning('此操作不可撤销。')
```

### 信息

```ts
ElMessage.info('您的会话将在5分钟后过期。')
```

## 自定义持续时间

默认情况下，消息在3秒后自动关闭。您可以自定义：

```ts
// 显示5秒
ElMessage.success('自定义持续时间', { duration: 5000 })

// 不自动关闭（设置 duration 为 0）
ElMessage.info('需要手动关闭', { duration: 0 })
```

## 手动关闭

```ts
// 关闭特定消息
const instance = ElMessage.success('消息')
instance.close()

// 关闭所有消息
ElMessage.closeAll()
```

## API

### 方法

| 方法名 | 参数 | 说明 |
| --- | --- | --- |
| success | `(message: string, options?)` | 显示成功消息 |
| error | `(message: string, options?)` | 显示错误消息 |
| warning | `(message: string, options?)` | 显示警告消息 |
| info | `(message: string, options?)` | 显示信息消息 |
| close | `(id: string)` | 通过 ID 关闭特定消息 |
| closeAll | - | 关闭所有消息 |

### 配置项

| 属性名 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| message | `string` | - | 消息内容 |
| type | `'success' \| 'error' \| 'warning' \| 'info'` | `'info'` | 消息类型 |
| duration | `number` | `3000` | 自动关闭时间（毫秒），设为 0 则不自动关闭 |
| showClose | `boolean` | `false` | 显示关闭按钮 |

### 返回值

每个消息方法返回一个实例对象：

| 属性名 | 类型 | 说明 |
| --- | --- | --- |
| id | `string` | 消息唯一标识 |
| close | `() => void` | 关闭此消息 |
