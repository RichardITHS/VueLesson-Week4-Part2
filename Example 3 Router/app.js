/* Creating app */
const app = Vue.createApp({})

/* Creating the pages, remember that the varibale name must be in Pascal case */
const About = { template: '<h1>Nu ändrar jag {{ $route.params.whatEver}}</h1>'}
const Contact = { template: '<h1>Vi är nu på Contact sidan</h1>'}
const Home = { template: '<h1>Vi är nu på Home sidan</h1>'}

/* Creating the routes */
const routes = [
    {
        component: About,
        path: '/about/:whatEver'
    },
    {
        component: Contact,
        path: '/contact'
    },
    {
        component: Home,
        path: '/'
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
