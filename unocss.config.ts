import {
    defineConfig,
    presetAttributify,
    presetIcons,
    presetUno,
    presetWebFonts,
    // transformerVariantGroup,
} from 'unocss'
import transformerDirective from '@unocss/transformer-directives'

export default defineConfig({
    shortcuts: [
        ['main-bg', 'bg-white dark:bg-#121212'],
        ['main-text', 'text-gray-700 dark:text-gray-200'],
        ['btn', 'px-4 py-1 rounded inline-block bg-teal-600 text-white cursor-pointer hover:bg-teal-700 disabled:cursor-default disabled:bg-gray-600 disabled:opacity-50'],
        ['icon-btn', 'h-8 w-8 text-[0.9em] opacity-75 rounded-50% flex items-center justify-center border-1 border-gray-200 dark:border-gray-700 cursor-pointer transition duration-200 ease-in-out hover:opacity-100 !outline-none'],
        ['login-btn', 'w-full h-14 bg-main color-white rounded-full cursor-pointer select-none flex items-center justify-center mt-13'],
        ['oauth-btn', 'w-9 h-9 color-white cursor-pointer rounded-1/2 flex items-center justify-center'],
    ],
    theme: {
        colors: {
            theme: 'var(--theme-color)',
            main: 'var(--main-color)',
        },
        boxShadow: {
            aside: '0 2px 5px 0 rgb(0 0 0 / 8%)',
        },
    },
    presets: [
        presetUno(),
        presetAttributify(),
        presetIcons({
            scale: 1.2,
            warn: true,
        }),
        presetWebFonts({
            fonts: {
                sans: 'DM Sans',
                serif: 'DM Serif Display',
                mono: 'DM Mono',
            },
        }),
    ],
    // 解决和element-ui冲突的问题
    preflights: [{
        getCSS: () => `
            .el-button {
                background-color: var(--el-button-bg-color, var(--el-color-white))
            }
          `,
    }],

    transformers: [
        transformerDirective(),
        // transformerVariantGroup(),
    ],
})
