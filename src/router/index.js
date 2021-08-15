import Vue from 'vue'
import VueRouter from 'vue-router'
import {
    Home,
    AllPasswords,
    RecentlyUsedPasswords,
    PasswordGenerator,
    AddAccount,
    ProfilePage,
    Login
} from '../components/pages';

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/login',
        name: 'Login',
        component: Login
    },
    {
        path: '/all-passwords',
        name: 'AllPasswords',
        component: AllPasswords
    },
    {
        path: '/recently-used-passwords',
        name: 'RecentlyUsedPasswords',
        component: RecentlyUsedPasswords
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
    },
    {
        path: '/profile',
        name: 'ProfilePage',
        component: ProfilePage
    }
]

const router = new VueRouter({
    mode: 'history',
    routes
})

export default router