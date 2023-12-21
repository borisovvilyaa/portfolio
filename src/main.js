import { createApp } from 'vue'
import App from './App.vue'
import router from './router' // Укажите правильный путь к вашему файлу маршрутизации
import './assets/css/main.css'

const app = createApp(App)

app.use(router) // Подключите маршрутизацию

app.mount('#app')
