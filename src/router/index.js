import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const routes = [
    {
        path:'/',
        name:'Home',
        redirect:'/a'
    },
    {
        path:'/a',
        name:'A',
        component:()=>import('../views/A.vue')
    },{
        path:'/b',
        name:'B',
        component:()=>import('../views/B.vue')
    },{
        path:'*',
        name:'notFind',
        component:()=>import('../views/404.vue')
    }
]

const router = new Router({
    mode:'history',
    routes
})

export default router