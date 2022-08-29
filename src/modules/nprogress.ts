import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import { router } from './router'

NProgress.configure({ showSpinner: false })

export default () => {
    router.beforeEach(() => { NProgress.start() })
    router.afterEach(() => { NProgress.done() })
}
