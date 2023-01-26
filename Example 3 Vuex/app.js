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
  counter:0
}
/* Creating mutation (change original state value) */
/* const mutations = {
    increment(state){
        state.counter += 1
    }
} */

/* Adding some type of info when we do an mutation */
const mutations = {
    increment(state, whatEver){
        state.counter += whatEver
    }
}

/* Implementing the vuex "functionality in the app" */
const store = Vuex.createStore({state, mutations})

/* We are using a middleware to tell the app that we want to use Router 
term 'use' */
app.use(router)
/* We are using a middleware to tell the app that we want to use Vuex 
term 'use' */
app.use(store)
app.mount('#app')
