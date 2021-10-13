const store = new Vuex.Store({
    state: {
        count: 0
    },
    mutation: {
        increment(state){
            state.count++
        }
    }
})


const app = new Vue({
    //state
    el: '#app',
    store: store,
    data(){
        return {
            count: 0
        }
    },
    //actions
    methods: {
        increment(){
            // this.count()++
            this.$store.commit('increment')
            console.log(this.$store.state.count)
        }
    }
})