<script lang="ts" setup>
const isCollapse = $ref(false)
const route = useRoute()
const { menuTree } = $(useMenuTree())

console.log(menuTree)
</script>

<template>
    <ElMenu
        router
        class="app-menu select-none b-r-0"
        :collapse="isCollapse"
        :default-active="route.path"
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
    :deep(.is-active) {
        .el-menu-item.is-active {
            --at-apply: bg-gray-100 dark:bg-dark-600;
        }
    }
}

.dark{
    .app-menu {
        --el-menu-hover-bg-color: theme('colors.dark.600');
    }
}
</style>
