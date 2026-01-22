import './style.css'
import type { App } from 'vue'

// 导入所有组件
import MButton from './components/MButton.vue'
import MInput from './components/MInput.vue'
import MSelect from './components/MSelect.vue'
import MTable from './components/MTable.vue'
import MModal from './components/MModal.vue'
import MPagination from './components/MPagination.vue'
import MTabs from './components/MTabs.vue'
import MTree from './components/MTree.vue'

// 导出单独组件
export {
    MButton,
    MInput,
    MSelect,
    MTable,
    MModal,
    MPagination,
    MTabs,
    MTree
}

// 导出 Vue 插件安装方法
export default {
    install: (app: App) => {
        app.component('MButton', MButton)
        app.component('MInput', MInput)
        app.component('MSelect', MSelect)
        app.component('MTable', MTable)
        app.component('MModal', MModal)
        app.component('MPagination', MPagination)
        app.component('MTabs', MTabs)
        app.component('MTree', MTree)
    }
}
