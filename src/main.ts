import { createApp } from 'vue'
import App from './App.vue'
import {createWebHashHistory,createRouter} from 'vue-router'
import './index.css'
import First from './components/First.vue'
import HelloWorld from './components/HelloWorld.vue'


const history = createWebHashHistory()
const router = createRouter({
  history:history,
  routes:[
    {
      path:'/',
      component:First
    },
    {path:'/hello',component:HelloWorld}
  ]
})
const app = createApp(App)
app.use(router)
app.mount('#app')
