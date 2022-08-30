<script lang="ts" setup>
const isCollapse = $ref(false)
const route = useRoute()
const { menuTree } = $(useMenuTree())
</script>

<template>
    <ElMenu
        router
        unique-opened
        mode="vertical"
        class="select-none"
        :collapse="isCollapse"
        :default-active="route.path"
        :collapse-transition="false"
    >
        <MenuItem
            v-for="routes in menuTree"
            :key="routes.path"
            :menu="routes"
            :base-path="routes.path"
            class="select-none"
        />
        <ElMenuItem />
    </ElMenu>
</template>

<style>
</style>
