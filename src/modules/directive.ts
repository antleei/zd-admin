import type { App } from 'vue'
import directive from '~/directives'

export default (app: App) => app.use(directive)
