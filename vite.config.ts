import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import dts from 'vite-plugin-dts'
import { resolve } from 'path'

export default defineConfig({
    plugins: [
        vue(),
        dts({
            insertTypesEntry: true,
            rollupTypes: true
        })
    ],
    build: {
        lib: {
            entry: resolve(__dirname, 'src/index.ts'),
            name: 'MataUI',
            fileName: 'mata-ui',
        },
        rollupOptions: {
            // 确保外部化处理那些你不想打包进库的依赖
            external: ['vue', 'element-plus', 'dayjs', /^element-plus\//, /^dayjs\//],
            output: {
                // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
                globals: {
                    vue: 'Vue',
                    'element-plus': 'ElementPlus',
                    'dayjs': 'dayjs',
                },
            },
        },
    },
})
