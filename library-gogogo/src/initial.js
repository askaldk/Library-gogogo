import Vuex from 'vuex'
import Vue from 'vue'
import Axios from 'axios';

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        count: 0
    },
    mutations: {
        mutations: {
            increment(state) {
                state.count++
            }
        }
    }
})

Axios.post('/character',)

