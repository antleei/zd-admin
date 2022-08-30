import { defineStore } from 'pinia'
import type { LoginData } from '~/api/user'
import { getUserInfo, login as userLogin, logout as userLogout } from '~/api/user'
import type { UserState } from '~/types'
import { clearToken, getToken, setToken } from '~/utils/auth'

export const useUserStore = defineStore('user', () => {
    const userInfo = ref<UserState>({
        name: '',
        avatar: '',
        role: '',
    })

    /**
     * 切换角色
     */
    function switchRoles() {
        return new Promise((resolve) => {
            userInfo.value.role = userInfo.value.role === 'user' ? 'admin' : 'user'
            resolve(userInfo.value.role)
        })
    }

    /**
     * 登录
     * @param loginForm
     */
    async function login(loginForm: LoginData) {
        try {
            const res = await userLogin(loginForm)
            setToken(res.data.token)
        }
        catch (err) {
            clearToken()
            throw err
        }
    }

    /**
     * 获取用户信息
     */
    async function info() {
        const res = await getUserInfo(getToken())

        userInfo.value = res.data
    }

    /**
     * 退出登录
     */
    async function logout() {
        await userLogout()
        clearToken()
        reset()
    }

    function reset() {
        userInfo.value = {
            name: '',
            avatar: '',
            role: '',
        }
    }

    return { info, login, logout, switchRoles, userInfo, reset }
})
