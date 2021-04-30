import {createWebHistory , createRouter} from 'vue-router'
import Home from '@/components/Home.vue'
import View from '@/components/View.vue'
import Create from '@/components/Create.vue'
import Edit from '@/components/Edit.vue'


const routes = [
    {
        path:"/",
        name:"Home",
        component:Home
    },
    {
        path:"/view",
        name:"View",
        component:View
    },
    {
        path:"/create",
        name:"Create",
        component:Create
    }
    ,
    {
        path:"/edit/:id",
        name:"Edit",
        component:Edit
    }
]

const router = createRouter({
    history:createWebHistory(),
    routes
})

export default router;