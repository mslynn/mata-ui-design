import DefaultTheme from 'vitepress/theme'
import type { App } from 'vue'
import MataUI from '../../../src/index'
import './custom.css'

export default {
    ...DefaultTheme,
    enhanceApp({ app }: { app: App }) {
        app.use(MataUI)
    }
}
