import type { AppRouteRecordRaw } from '../types'

const listRoutes: AppRouteRecordRaw = {
    path: '/list',
    name: 'List',
    meta: {
        title: '列表页',
        requiresAuth: true,
        roles: ['*'],
    },
    redirect: '/list/search-table',
    children: [
        {
            path: 'search-table',
            name: 'SearchTable',
            component: () => import('~/pages/list/search-table/index.vue'),
            meta: {
                title: '查询表格',
                requiresAuth: true,
                roles: ['*'],
            },
        },
        {
            path: 'card',
            name: 'Card',
            component: () => import('~/pages/list/card/index.vue'),
            meta: {
                title: '卡片列表',
                requiresAuth: true,
                roles: ['*'],
            },
        },
    ],
}

export default listRoutes
