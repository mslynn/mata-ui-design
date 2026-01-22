import { defineConfig } from 'vitepress'

export default defineConfig({
    title: "Mata UI Design",
    description: "Vue 3 UI Library for Mata Education",
    base: '/mata-ui-design/',

    locales: {
        root: {
            label: 'English',
            lang: 'en',
            themeConfig: {
                nav: [
                    { text: 'Home', link: '/' },
                    { text: 'Guide', link: '/guide/getting-started' },
                    { text: 'Components', link: '/components/button' }
                ],
                sidebar: {
                    '/guide/': [
                        {
                            text: 'Guide',
                            items: [
                                { text: 'Getting Started', link: '/guide/getting-started' },
                                { text: 'Installation', link: '/guide/installation' }
                            ]
                        }
                    ],
                    '/components/': [
                        {
                            text: 'Basic',
                            items: [
                                { text: 'Button', link: '/components/button' },
                                { text: 'Input', link: '/components/input' },
                                { text: 'Select', link: '/components/select' }
                            ]
                        },
                        {
                            text: 'Data Display',
                            items: [
                                { text: 'Table', link: '/components/table' },
                                { text: 'Pagination', link: '/components/pagination' },
                                { text: 'Tree', link: '/components/tree' },
                                { text: 'Tabs', link: '/components/tabs' }
                            ]
                        },
                        {
                            text: 'Feedback',
                            items: [
                                { text: 'Modal', link: '/components/modal' },
                                { text: 'Message', link: '/components/message' }
                            ]
                        }
                    ]
                }
            }
        },
        zh: {
            label: '中文',
            lang: 'zh-CN',
            link: '/zh/',
            themeConfig: {
                nav: [
                    { text: '首页', link: '/zh/' },
                    { text: '指南', link: '/zh/guide/getting-started' },
                    { text: '组件', link: '/zh/components/button' }
                ],
                sidebar: {
                    '/zh/guide/': [
                        {
                            text: '指南',
                            items: [
                                { text: '快速开始', link: '/zh/guide/getting-started' },
                                { text: '安装', link: '/zh/guide/installation' }
                            ]
                        }
                    ],
                    '/zh/components/': [
                        {
                            text: '基础组件',
                            items: [
                                { text: 'Button 按钮', link: '/zh/components/button' },
                                { text: 'Input 输入框', link: '/zh/components/input' },
                                { text: 'Select 选择器', link: '/zh/components/select' }
                            ]
                        },
                        {
                            text: '数据展示',
                            items: [
                                { text: 'Table 表格', link: '/zh/components/table' },
                                { text: 'Pagination 分页', link: '/zh/components/pagination' },
                                { text: 'Tree 树形控件', link: '/zh/components/tree' },
                                { text: 'Tabs 标签页', link: '/zh/components/tabs' }
                            ]
                        },
                        {
                            text: '反馈',
                            items: [
                                { text: 'Modal 对话框', link: '/zh/components/modal' },
                                { text: 'Message 消息提示', link: '/zh/components/message' }
                            ]
                        }
                    ]
                },
                outlineTitle: '页面导航',
                lastUpdatedText: '最后更新时间',
                docFooter: {
                    prev: '上一页',
                    next: '下一页'
                }
            }
        }
    },

    themeConfig: {
        logo: '/logo.svg',
        socialLinks: [
            // { icon: 'github', link: 'https://github.com/your-repo' }
        ],
        footer: {
            message: 'Released under the MIT License.',
            copyright: 'Copyright © 2024 Mata Education'
        }
    }
})
