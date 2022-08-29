<script setup lang="ts">
import type { PropType } from 'vue'

const props = defineProps({
    item: {
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
    <el-sub-menu v-if="props.item.children && props.item.children.length > 0" :key="props.basePath" :index="props.basePath">
        <template #title>
            <span>{{ props.item.meta?.title }}</span>
        </template>
        <menu-item v-for="sub in props.item.children" :key="sub.path" :item="sub" :base-path="props.basePath" />
    </el-sub-menu>
    <el-menu-item v-else :key="props.item.path" :index="`${props.basePath}/${props.item.path}`">
        <template #title>
            <span>{{ props.item.meta?.title }}</span>
        </template>
    </el-menu-item>
</template>
