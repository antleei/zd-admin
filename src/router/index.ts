import type { RouteRecordNormalized } from 'vue-router'

const modules = import.meta.glob('./modules/*.ts', {
    import: 'default',
    eager: true,
})

function formatModules(modules: any, result: RouteRecordNormalized[]) {
    Object.keys(modules).forEach((key) => {
        const defaultModule = modules[key]

        if (!defaultModule)
            return

        const moduleList = Array.isArray(defaultModule)
            ? [...defaultModule]
            : [defaultModule]
        result.push(...moduleList)
    })
    return result
}

export const constantRoutes = [
    {
        path: '/',
        name: 'Home',
        redirect: '/dashboard/workplace',
        meta: {
            requiresAuth: true,
        },
    },
    {
        path: '/login',
        name: 'Login',
        component: () => import('~/pages/login/index.vue'),
        meta: {
            requiresAuth: false,
            layout: 'NoLayout',
        },
    },
]

export const NOT_FOUND_ROUTE = {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import('~/pages/[...all].vue'),
    meta: {
        layout: '404',
    },
}

export const appRoutes: RouteRecordNormalized[] = formatModules(modules, [])
