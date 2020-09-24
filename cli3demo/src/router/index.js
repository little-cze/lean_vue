import {createRouter, createWebHistory} from 'vue-router'
import Home from '../views/Home.vue'
import First from '../views/FirstPage'
import User from '../views/use'
import Profile from "../components/Profile";

const routes = [
    {
        path:"",
        redirect:"/home"
    },
    {
        path: '/home',
        name: 'Home',
        component: Home,
        children: [

            {
                path: 'news',
                name:"News",
                component: () => import('../views/HomeNews')
            },{
            path: 'message',
                name:"Message",
                component:()=>import('../views/HomeMessage')
            },

        ]
    },
    {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    },
    {
        path: '/first',
        name: 'FirstPage',
        component: First
    },
    {
        path: '/user/:userId',
        name: 'use',
        component: User
    },
    {
        path: '/profile',
        name: 'Profile',
        component: Profile
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
