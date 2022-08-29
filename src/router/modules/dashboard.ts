import type { AppRouteRecordRaw } from '../types'

const dashboardRoutes: AppRouteRecordRaw = {
    path: '/dashboard',
    name: 'dashboard',
    meta: {
        title: '仪表盘',
        requiresAuth: true,
        roles: ['*'],
    },
    redirect: '/dashboard/workplace',
    children: [
        {
            path: 'workplace',
            name: 'Workplace',
            component: () => import('~/pages/dashboard/workplace/index.vue'),
            meta: {
                title: '工作台',
                requiresAuth: true,
                roles: ['*'],
            },
        },
        {
            path: 'monitor',
            name: 'Monitor',
            component: () => import('~/pages/dashboard/monitor/index.vue'),
            meta: {
                title: '监控页',
                requiresAuth: true,
                roles: ['admin'],
            },
        },
    ],
}

export default dashboardRoutes
