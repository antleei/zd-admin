import type { AppRouteRecordRaw } from '../types'

const userRoutes: AppRouteRecordRaw = {
    path: '/user',
    name: 'User',
    component: () => import('~/pages/user/index.vue'),
    meta: {
        title: '用户管理',
        requiresAuth: true,
        roles: ['admin'],
    },
}

export default userRoutes
