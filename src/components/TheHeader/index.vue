<script setup lang="ts">
import { ElMessage } from 'element-plus'
import { useUserStore } from '~/store'

const { isFullscreen, toggle } = useFullscreen()
const userStore = useUserStore()
const router = useRouter()

async function switchRoles() {
    const res = await userStore.switchRoles()

    router.push('/')
    ElMessage.success(`切换角色成功：${res}`)
}

async function handleCommand(command: string) {
    switch (command) {
        case 'switchRoles':
            switchRoles()
            break
        case 'logout':
            await userStore.logout()
            router.push('/login')
            break
        default:
            break
    }
}
</script>

<template>
    <nav h-full flex px5 justify-between border="b gray-200 dark:dark-700">
        <h1 flex="~ gap2" items-center>
            <img w-8 src="/src/assets/images/logo.svg" alt="">
            <div text-lg font-medium>
                Zd Admin
            </div>
        </h1>
        <div :key="userStore.userInfo.role" flex="~ gap6" items-center>
            <button icon-btn @click="toggleDark()">
                <div i-carbon-sun dark:i-carbon-moon />
            </button>
            <button icon-btn @click="toggle">
                <i v-if="isFullscreen" class="iconfont icon-a-122-tuichuquanping" />
                <i v-else class="iconfont icon-quanping" />
            </button>
            <button
                v-permission="['admin']"
                icon-btn
                @click="router.push('/user')"
            >
                <div i-carbon:settings />
            </button>

            <ElDropdown
                trigger="click"
                @command="handleCommand"
            >
                <ElAvatar
                    :size="32"
                    :src="userStore.userInfo.avatar"
                />
                <template #dropdown>
                    <ElDropdownMenu>
                        <ElDropdownItem command="switchRoles">
                            <div i-carbon:switch-layer-2 mr-3 />
                            切换角色
                        </ElDropdownItem>
                        <ElDropdownItem command="logout">
                            <div i-carbon:logout mr-3 />
                            退出登录
                        </ElDropdownItem>
                    </ElDropdownMenu>
                </template>
            </ElDropdown>
        </div>
    </nav>
</template>

