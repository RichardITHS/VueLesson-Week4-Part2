/* Creating app */
const app = Vue.createApp({})

/* Creating the pages, remember that the varibale name must be in Pascal case */
const Text = {
    template: '<div>{{ $route.params.a}}{{ $route.params.b}}</div>'
}
const Sida = {
    template: '<div>Sida {{ $route.params.sida}}</div>'
}

/* Creating the routes */
const routes = [
    {
        component: Text,
        path: '/:a/:b'
    },
    {
        component: Sida,
        path: '/sida/:sida'
    }
]

/* Implementing the router "functionality in the app" */
const router = VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
    routes: routes
})

/* We are using a middleware to tell the app that we want to use Router 
term 'use' */
app.use(router)
app.mount('#app')
