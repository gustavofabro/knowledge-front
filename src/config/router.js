import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '@/components/home/Home'
import AdminPages from '@/components/admin/AdminPages'
import ArticlesByCategoy from '@/components/article/ArticlesByCategory'

Vue.use(VueRouter)

const routes = [{
    name: 'home',
    path: '/',
    component: Home
}, {
    name: 'adminPages',
    path: '/admin',
    component: AdminPages
}, {
    name: 'articlesByCategoy',
    path: '/categories/:id/articles',
    component: ArticlesByCategoy
}]

export default new VueRouter({
    mode: 'history',
    routes
})