import { createApp } from 'vue'
import App from './App.vue'
import AqilioVueComponentsPlugin from './AqilioVueComponentsPlugin'
import './assets/main.css'


const app = createApp(App)
app.use(AqilioVueComponentsPlugin)
app.mount('#app')
