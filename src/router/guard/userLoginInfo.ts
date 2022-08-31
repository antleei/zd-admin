import type { LocationQueryRaw, Router } from 'vue-router'
import { useUserStore } from '~/store'
import { isLogin } from '~/utils/auth'

const whiteList = ['/login']

export default function setupUserLoginInfoGuard(router: Router) {
    router.beforeEach(async (to, from, next) => {
        const userStore = useUserStore()
        if (isLogin()) {
            if (to.path === '/login')
                next({ path: '/' })

            // 判断用户信息是否存在
            if (userStore.userInfo.role) {
                next()
            }
            else {
                try {
                    await userStore.info()
                    next()
                }
                catch (error) {
                    await userStore.logout()
                    next({
                        name: 'Login',
                        query: {
                            redirect: to.name,
                            ...to.query,
                        } as LocationQueryRaw,
                    })
                }
            }
        }
        else {
            if (whiteList.includes(to.path)) {
                next()
                return
            }
            next({
                name: 'Login',
                query: {
                    redirect: to.name,
                    ...to.query,
                } as LocationQueryRaw,
            })
        }
    })
}
