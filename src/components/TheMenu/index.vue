<script lang="ts" setup>
const route = useRoute()
const { menuTree } = $(useMenuTree())
const isLargeScreen = useMediaQuery('(min-width: 1024px)')
</script>

<template>
    <ElMenu
        router
        class="app-menu select-none b-r-0"
        :collapse="!isLargeScreen"
        :default-active="route.path"
        :collapse-transition="false"
    >
        <MenuItem
            v-for="routes in menuTree"
            :key="routes.path"
            :menu="routes"
            :base-path="routes.path"
        />
    </ElMenu>
</template>

<style scoped lang="scss">
.app-menu {
    --el-menu-hover-bg-color: theme('colors.gray.100');
    :deep(.el-menu-item.is-active) {
        --at-apply: bg-gray-100 dark:bg-dark-600;
    }
}

.dark{
    .app-menu {
        --el-menu-hover-bg-color: theme('colors.dark.600');
    }
}
</style>
