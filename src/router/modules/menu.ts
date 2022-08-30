import type { AppRouteRecordRaw } from '../types'

const menuRoutes: AppRouteRecordRaw = {
    path: '/menu',
    name: 'Menu',
    meta: {
        title: '多级菜单',
        requiresAuth: true,
        roles: ['*'],
    },
    redirect: '/menu/menu1',
    children: [
        {
            path: 'menu1',
            name: 'Menu1',
            component: () => import('~/pages/menu/menu1/index.vue'),
            redirect: '/menu/menu1/menu1-1',
            meta: {
                title: '菜单1',
                requiresAuth: true,
                roles: ['*'],
            },
            children: [
                {
                    path: 'menu1-1',
                    name: 'Menu1-1',
                    component: () => import('~/pages/menu/menu1/menu1-1/index.vue'),
                    meta: {
                        title: '菜单1-1',
                        requiresAuth: true,
                        roles: ['*'],
                    },
                },
                {
                    path: 'menu1-2',
                    name: 'Menu1-2',
                    component: () => import('~/pages/menu/menu1/menu1-2/index.vue'),
                    redirect: '/menu/menu1/menu1-2/menu1-2-1',
                    meta: {
                        title: '菜单1-2',
                        requiresAuth: true,
                        roles: ['*'],
                    },
                    children: [
                        {
                            path: 'menu1-2-1',
                            name: 'Menu1-2-1',
                            component: () => import('~/pages/menu/menu1/menu1-2/menu1-2-1/index.vue'),
                            meta: {
                                title: '菜单1-2-1',
                                requiresAuth: true,
                                roles: ['*'],
                            },
                        },
                        {
                            path: 'menu1-2-2',
                            name: 'Menu1-2-2',
                            component: () => import('~/pages/menu/menu1/menu1-2/menu1-2-2/index.vue'),
                            meta: {
                                title: '菜单1-2-2',
                                requiresAuth: true,
                                roles: ['*'],
                            },
                        },
                    ],
                },
                {
                    path: 'menu1-3',
                    name: 'Menu1-3',
                    component: () => import('~/pages/menu/menu1/menu1-3/index.vue'),
                    meta: {
                        title: '菜单1-3',
                        requiresAuth: true,
                        roles: ['*'],
                    },
                },
            ],
        },
        {
            path: 'menu2',
            name: 'Menu2',
            component: () => import('~/pages/menu/menu2/index.vue'),
            meta: {
                title: '菜单2',
                requiresAuth: true,
                roles: ['*'],
            },
        },
    ],
}

export default menuRoutes
