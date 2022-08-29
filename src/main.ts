import { createApp } from 'vue'
import { useModules } from 'virtual:modules'
import App from './App.vue'
import '~/styles/main.scss'
import '@unocss/reset/tailwind.css'
import 'uno.css'

const app = createApp(App)

useModules(app)
app.mount('#app')
