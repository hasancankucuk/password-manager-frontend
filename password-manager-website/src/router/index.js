import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/pages/Home.vue'
import AllPasswords from '../components/pages/AllPasswords.vue'
import PasswordGenerator from '../components/pages/PasswordGenerator.vue'
import AddAccount from '../components/pages/AddAccount.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/all-passwords',
        name: 'AllPasswords',
        component: AllPasswords
    }, 
    {
        path: '/password-generator',
        name: 'PasswordGenerator',
        component: PasswordGenerator
    },
    {
        path: '/add-account',
        name: 'AddAccount',
        component: AddAccount
    }
]

const router = new VueRouter({
    mode: 'history',
    routes
})

export default router
