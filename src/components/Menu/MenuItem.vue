<script setup lang="ts">
import type { PropType } from 'vue'

const { menu, basePath } = defineProps({
    menu: {
        type: Object as PropType<childrenType>,
        required: true,
    },
    isNest: {
        type: Boolean,
        default: false,
    },
    basePath: {
        type: String,
        default: '',
    },
})

interface childrenType {
    title: string
    path: string
    children?: childrenType[]
    meta?: {
        title?: string
        icon?: string
        roles?: string[]
        requiresAuth: boolean
        hideInMenu?: boolean
        hideChildrenInMenu?: boolean
        ignoreCache?: boolean
    }
}
</script>

<template>
    <ElSubMenu v-if="menu.children && menu.children.length > 0" :key="basePath" :index="basePath">
        <template #title>
            <span>{{ menu.meta?.title }}</span>
        </template>
        <menu-item v-for="sub in menu.children" :key="sub.path" :menu="sub" :base-path="basePath" />
    </ElSubMenu>
    <ElMenuItem v-else :key="menu.path" :index="`${basePath}/${menu.path}`">
        <template #title>
            <span>{{ menu.meta?.title }}</span>
        </template>
    </ElMenuItem>
</template>
