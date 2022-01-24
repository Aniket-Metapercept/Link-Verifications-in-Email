import Home from './components/Home.vue'
import Signup from './components/Signup'
import Login from './components/Login'

import {createWebHistory,createRouter} from 'vue-router'

const routes = [
    { name:'Home',component:Home,path:'/'},
   
    { name:'signup',component:Signup,path:'/signup'},
    { name:'login',component:Login,path:'/login'},


]

const router = createRouter({history:createWebHistory(),routes})

export default router