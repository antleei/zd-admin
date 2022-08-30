<script setup lang="ts">
import type { FormInstance, FormRules } from 'element-plus'
import { ElMessage } from 'element-plus'
import { useUserStore } from '~/store'

const router = useRouter()
const userStore = useUserStore()

const ruleFormRef = $ref<FormInstance>()
const loginForm = reactive({
    username: '',
    password: '',
})

const rules = reactive<FormRules>({
    username: [
        { required: true, message: '请输入用户名' },
    ],
    password: [
        { required: true, message: '请输入密码' },
    ],
})

function handleLogin() {
    if (!ruleFormRef)
        return
    ruleFormRef.validate(async (valid, fields) => {
        if (valid) {
            await userStore.login(loginForm)

            const { redirect, ...othersQuery } = router.currentRoute.value.query
            router.replace({
                name: (redirect as string) || 'Workplace',
                query: {
                    ...othersQuery,
                },
            })
            ElMessage.success('欢迎使用')
        }
    })
}
</script>

<template>
    <div h-full flex>
        <div w-418px bg="#F1F6FB dark:dark-700" display="none lg:flex" items-center>
            <img src="/src/assets/images/login-image.png" alt="">
        </div>

        <div flex="~ 1 col" items-center justify-center>
            <div text="2xl gray-400 dark:#303133" flex="! gap4" items-center>
                <div color="#303133 dark:gray-400">
                    密码登录
                </div>
                <div w-1px h-6 bg="#C0C4CC" />
                <div>验证码登录</div>
            </div>

            <ElForm
                ref="ruleFormRef"
                :model="loginForm"
                :rules="rules"
                w-80
                mt-4xl
            >
                <ElFormItem prop="username">
                    <ElInput
                        v-model="loginForm.username"
                        placeholder="请输入用户名"
                    />
                </ElFormItem>
                <ElFormItem prop="password">
                    <ElInput
                        v-model="loginForm.password"
                        type="password"
                        show-password
                        placeholder="请输入密码"
                        @keydown.enter="handleLogin"
                    />
                </ElFormItem>
                <div login-btn @click="handleLogin">
                    登录
                </div>
            </ElForm>

            <div w-80 h-52px text="sm gray-400" flex items-center justify-between>
                <div color-main cursor-pointer>
                    注册账号
                </div>
                <div cursor-pointer>
                    忘记密码
                </div>
            </div>

            <div w-80>
                <ElDivider>
                    第三方登录
                </ElDivider>
            </div>

            <div flex="~ gap6" mt-3>
                <div oauth-btn bg="#46BB36">
                    <div i-carbon:logo-wechat w-6 h-6 />
                </div>
                <div i-carbon:logo-github w-9 h-9 cursor="pointer" />
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
:deep(.el-form-item) {
    margin-bottom: 32px;
    &.is-error {
        .el-input__wrapper {
            background: rgba(245,108,108,0.1);
        }
        .el-form-item__error {
            margin-top: 4px;
        }
    }

    .el-input {
        height: 44px;
    }
}

:deep(.el-divider) {
    .el-divider__text {
        color: #C0C4CC;
    }
}
</style>

<!-- <route lang="yaml">
meta:
  layout: NoLayout
</route> -->
