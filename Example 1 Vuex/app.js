/* Creating app */
const app = Vue.createApp({})

/* Creating the pages, remember that the varibale name must be in Pascal case */
const About = { template: '<h1>{{$store.state.someValue}}</h1>'}
const Home = { template: '<h1>{{$store.state.someOtherValue}}</h1>'}

/* Creating the routes */
const routes = [
    {
        component: About,
        path: '/about'
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

/* Creating my states(information that will be available everywhere) */
const state = {
    someValue: 'Nu har vi ett state som inhämtas till about sidan',
    someOtherValue: 'This is someOtherValue'
}



/* Implementing the vuex "functionality in the app" */
const store = Vuex.createStore({state})

/* We are using a middleware to tell the app that we want to use Router 
term 'use' */
app.use(router)
/* We are using a middleware to tell the app that we want to use Vuex 
term 'use' */
app.use(store)
app.mount('#app')
