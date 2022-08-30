<script setup lang="ts">
import path from 'path'
import type { RouteMeta } from 'vue-router'

const { menu, basePath = '' } = defineProps<{
    menu: childrenType
    isNest?: boolean
    basePath?: string
}>()

interface childrenType {
    title: string
    path: string
    children?: childrenType[]
    meta?: RouteMeta
}

function resolvePath(routePath: string) {
    const httpReg = /^http(s?):\/\//
    if (httpReg.test(routePath) || httpReg.test(basePath))
        return routePath || basePath

    else
        return path.resolve(basePath, routePath)
}
</script>

<template>
    <ElSubMenu
        v-if="menu.children && menu.children.length > 0"
        :index="resolvePath(menu.path)"
    >
        <template #title>
            <span>{{ menu.meta?.title }}</span>
        </template>
        <MenuItem
            v-for="sub in menu.children"
            :key="sub.path"
            :menu="sub"
            :base-path="resolvePath(menu.path)"
        />
    </ElSubMenu>
    <ElMenuItem
        v-else
        :key="menu.path"
        :index="resolvePath(menu.path)"
    >
        <template #title>
            <span>{{ menu.meta?.title }}</span>
        </template>
    </ElMenuItem>
</template>
