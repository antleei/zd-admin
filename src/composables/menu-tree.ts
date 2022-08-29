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
                // no access
                if (!permission.accessRouter(element))
                    return null

                // leaf node
                if (element.meta?.hideChildrenInMenu || !element.children) {
                    element.children = []
                    return element
                }

                // route filter hideInMenu true
                element.children = element.children.filter(
                    x => x.meta?.hideInMenu !== true,
                )

                // Associated child node
                const subItem = travel(element.children, layer + 1)

                if (subItem.length) {
                    element.children = subItem
                    return element
                }
                // the else logic
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
