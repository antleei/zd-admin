<script lang="ts" setup>
const isCollapse = $ref(false)
const route = useRoute()
// const router = useRouter()

const { menuTree } = $(useMenuTree())

console.log(menuTree)
</script>

<template>
    <!-- <div mb-4>
        <ElButton
            type="primary"
            @click="router.push('/')"
        >
            跳转仪表盘
        </ElButton>
    </div>
    <div mb-4>
        <ElButton
            type="primary"
            @click="router.push('/list')"
        >
            跳转list
        </ElButton>
    </div>
    <div mb-4>
        <ElButton
            type="primary"
            @click="router.push('/user')"
        >
            跳转用户
        </ElButton>
    </div> -->

    <ElMenu
        router
        unique-opened
        mode="vertical"
        class="outer-most select-none"
        :collapse="isCollapse"
        :default-active="route.path"
        :collapse-transition="false"
    >
        <MenuItem
            v-for="routes in menuTree"
            :key="routes.path"
            :item="routes"
            :base-path="routes.path"
            class="outer-most select-none"
        />
        <ElMenuItem />
    </ElMenu>
</template>

<style>
</style>
