import type { Router } from 'vue-router'
import userPermission from '~/composables/permission'

export default function setupPermissionGuard(router: Router) {
    router.beforeEach(async (to, from, next) => {
        const permission = userPermission()
        const hasPermission = permission.accessRouter(to)

        if (hasPermission) {
            next()
        }
        else {
            next({
                name: 'NotFound',
            })
        }
    })
}
