import type { App } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
// 文件路由
// import generatedRoutes from 'virtual:generated-pages'
import { setupLayouts } from 'virtual:generated-layouts'
import { NOT_FOUND_ROUTE, appRoutes, constantRoutes } from '~/router'
import createRouteGuard from '~/router/guard'

const routes = setupLayouts([
    ...constantRoutes,
    ...appRoutes,
    NOT_FOUND_ROUTE,
])

export const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
    scrollBehavior() {
        return { top: 0 }
    },
})

createRouteGuard(router)

export default (app: App) => app.use(router)
