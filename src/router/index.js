import {createRouter, createWebHistory} from 'vue-router'

const routes = [
    //empty - register, login
    //main - another
    {
        path: '/login',
        name: 'login',
        meta: {layout: 'empty'},
        component: () => import('../views/Login')
    },
    {
        path: '/register',
        name: 'register',
        meta: {layout: 'empty'},
        component: () => import('../views/Register')
    },
    {
        path: '/',
        name: 'home',
        meta: {layout: 'main'},
        component: () => import('../views/Home')
    },
    {
        path: '/categories',
        name: 'categories',
        meta: {layout: 'main'},
        component: () => import('../views/Categories')
    },
    {
        path: '/record',
        name: 'record',
        meta: {layout: 'main'},
        component: () => import('../views/Record')
    },
    {
        path: '/profile',
        name: 'profile',
        meta: {layout: 'main'},
        component: () => import('../views/Profile')
    },
    {
        path: '/planning',
        name: 'planning',
        meta: {layout: 'main'},
        component: () => import('../views/Planning')
    },
    {
        path: '/history',
        name: 'history',
        meta: {layout: 'main'},
        component: () => import('../views/History')
    },
    {
        path: '/detail-record',
        name: 'detail-record',
        meta: {layout: 'main'},
        component: () => import('../views/Detail-record')
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
