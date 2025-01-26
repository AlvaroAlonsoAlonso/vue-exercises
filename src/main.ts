import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/700.css'
import '@fontsource/open-sans/300.css'
import '@fontsource/open-sans/600.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
