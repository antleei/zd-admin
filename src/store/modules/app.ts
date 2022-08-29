import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', () => {
    const name = ref('测试store内容')

    return { name }
})
