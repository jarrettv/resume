// import { createApp } from 'vue'
import { ViteSSG } from 'vite-ssg/single-page'
import App from './App.vue'

//createApp(App).mount('#app')
export const createApp = ViteSSG(
    App,
    ({ app, initialState }) => {
    },
  )