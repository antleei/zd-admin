import { computed } from 'vue'
import type { RouteRecordRaw } from 'vue-router'
import usePermission from './permission'
import { appRoutes } from '~/router'

export function useMenuTree() {
    const permission = usePermission()

    const menuTree = computed(() => {
        const copyRouter = JSON.parse(JSON.stringify(appRoutes))

        function travel(_routes: RouteRecordRaw[], layer: number) {
            if (!_routes)
                return null

            const collector: any = _routes.map((element) => {
                // 过滤掉没有权限的路由
                if (!permission.accessRouter(element))
                    return null

                // 过滤掉没有子路由的路由
                if (element.meta?.hideChildrenInMenu || !element.children) {
                    element.children = []
                    return element
                }

                // 过滤掉隐藏的路由
                element.children = element.children.filter(
                    x => x.meta?.hideInMenu !== true,
                )

                // 递归处理children
                const subItem = travel(element.children, layer + 1)

                if (subItem.length) {
                    element.children = subItem
                    return element
                }

                if (layer > 1) {
                    element.children = subItem
                    return element
                }

                if (element.meta?.hideInMenu === false)
                    return element

                return null
            })
            return collector.filter(Boolean)
        }
        return travel(copyRouter, 0)
    })

    return {
        menuTree,
    }
}
