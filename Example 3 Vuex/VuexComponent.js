const VuexComponent = Vue.createApp({})

VuexComponent.component('vuex-component', {
    template: `
    <h2>Nu använder vi oss av en komponent som också hämtar informationen</h2>
    <div>{{$store.state.someOtherValue}}</div>
    `
})
VuexComponent.use(store)
VuexComponent.mount('#vuex')