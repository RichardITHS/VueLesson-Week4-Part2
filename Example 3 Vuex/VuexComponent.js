const VuexComponent = Vue.createApp({})

VuexComponent.component('vuex-component', {
    template: `
    <input
    @click="$store.commit('increment', 20)"
    type="button"
    :value="$store.state.counter">
    `
})
VuexComponent.use(store)
VuexComponent.mount('#vuex')