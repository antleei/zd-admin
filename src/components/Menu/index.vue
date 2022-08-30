<script lang="ts" setup>
const isCollapse = $ref(false)
const route = useRoute()
const { menuTree } = $(useMenuTree())
</script>

<template>
    <ElMenu
        router
        class="select-none"
        :collapse="isCollapse"
        :default-active="route.path"
    >
        <MenuItem
            v-for="routes in menuTree"
            :key="routes.path"
            :menu="routes"
            :base-path="routes.path"
        />
        <ElMenuItem />
    </ElMenu>
</template>

<style>
</style>
