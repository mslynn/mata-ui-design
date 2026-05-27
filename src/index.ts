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
import MMessage from './components/MMessage'
import MTooltip from './components/MTooltip.vue'
import MFilterPopover from './components/MFilterPopover.vue'
import MDateRangePicker from './components/MDateRangePicker.vue'
import MStarRating from './components/MStarRating.vue'
import MLazyImage from './components/MLazyImage.vue'
import MImagePreview from './components/MImagePreview.vue'

// 导出单独组件
export {
    MButton,
    MInput,
    MSelect,
    MTable,
    MModal,
    MPagination,
    MTabs,
    MTree,
    MMessage,
    MTooltip,
    MFilterPopover,
    MDateRangePicker,
    MStarRating,
    MLazyImage,
    MImagePreview
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
        app.component('MTooltip', MTooltip)
        app.component('MFilterPopover', MFilterPopover)
        app.component('MDateRangePicker', MDateRangePicker)
        app.component('MStarRating', MStarRating)
        app.component('MLazyImage', MLazyImage)
        app.component('MImagePreview', MImagePreview)
        app.config.globalProperties.$message = MMessage
    }
}
