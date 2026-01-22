# Message

A lightweight message notification component for displaying brief feedback.

## Basic Usage

```ts
import { ElMessage } from 'lynn-mata-ui-design'

// Success message
ElMessage.success('Operation successful!')

// Error message
ElMessage.error('Operation failed!')

// Warning message
ElMessage.warning('Please be careful!')

// Info message
ElMessage.info('Here is some information.')
```

## Message Types

### Success

```ts
ElMessage.success('File saved successfully!')
```

### Error

```ts
ElMessage.error('Failed to save file. Please try again.')
```

### Warning

```ts
ElMessage.warning('This action cannot be undone.')
```

### Info

```ts
ElMessage.info('Your session will expire in 5 minutes.')
```

## Custom Duration

By default, messages auto-close after 3 seconds. You can customize this:

```ts
// Show for 5 seconds
ElMessage.success('Custom duration', { duration: 5000 })

// Don't auto-close (set duration to 0)
ElMessage.info('Manual close required', { duration: 0 })
```

## Close Programmatically

```ts
// Close a specific message
const instance = ElMessage.success('Message')
instance.close()

// Close all messages
ElMessage.closeAll()
```

## API

### Methods

| Method | Parameters | Description |
| --- | --- | --- |
| success | `(message: string, options?)` | Show success message |
| error | `(message: string, options?)` | Show error message |
| warning | `(message: string, options?)` | Show warning message |
| info | `(message: string, options?)` | Show info message |
| close | `(id: string)` | Close specific message by ID |
| closeAll | - | Close all messages |

### Options

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| message | `string` | - | Message content |
| type | `'success' \| 'error' \| 'warning' \| 'info'` | `'info'` | Message type |
| duration | `number` | `3000` | Auto-close duration (ms), 0 to disable |
| showClose | `boolean` | `false` | Show close button |

### Return Value

Each message method returns an instance with:

| Property | Type | Description |
| --- | --- | --- |
| id | `string` | Unique message ID |
| close | `() => void` | Close this message |
