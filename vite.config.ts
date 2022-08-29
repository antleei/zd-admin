import path from 'path'
import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import Pages from 'vite-plugin-pages'
import Layouts from 'vite-plugin-vue-layouts'
import Inspect from 'vite-plugin-inspect'
import Components from 'unplugin-vue-components/vite'
import AutoImport from 'unplugin-auto-import/vite'
import Modules from 'vite-plugin-use-modules'
import Unocss from 'unocss/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import { viteMockServe } from 'vite-plugin-mock'

export default defineConfig({
    resolve: {
        alias: {
            '~/': `${path.resolve(__dirname, 'src')}/`,
        },
    },
    css: {
        devSourcemap: true,
    },
    plugins: [
        Vue({
            reactivityTransform: true,
        }),

        // 文件路由 https://github.com/hannoeru/vite-plugin-pages
        Pages({
            exclude: ['**/components/*.vue'],
        }),

        // 布局系统 https://github.com/JohnCampionJr/vite-plugin-vue-layouts
        Layouts(),

        // 调试工具 https://github.com/antfu/vite-plugin-inspect
        Inspect(),

        // 模块自动加载 https://github.com/dishait/vite-plugin-use-modules
        Modules(),

        // Api自动导入 https://github.com/antfu/unplugin-auto-import
        AutoImport({
            imports: [
                'vue',
                'vue/macros',
                'vue-router',
                '@vueuse/core',
            ],
            dirs: ['./src/composables'],
            vueTemplate: true,
            resolvers: [ElementPlusResolver()],
            dts: true,
        }),

        // 组件自动按需引入 https://github.com/antfu/vite-plugin-components
        Components({
            dirs: ['src/components', '**/components/'],
            resolvers: [ElementPlusResolver()],
            dts: true,
        }),

        // https://github.com/antfu/unocss
        // see unocss.config.ts for config
        Unocss(),

        // https://github.com/vbenjs/vite-plugin-mock
        viteMockServe({
            mockPath: './src/mock',
            ignore: /^\_/,
            localEnabled: true,
            prodEnabled: true,
            injectCode: `
                import { setupProdMockServer } from './mock/_createProductionServer';
                setupProdMockServer();
            `,
        }),

    ],
})
