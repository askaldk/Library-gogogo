import axios from 'axios'
import Vue from 'vue'

Vue.use(axios)

const userRequest = axios.create({
    baseURL:"http://localhost:3000",
    params:{id:1}
})
n

export const apiUserCharacter = data => userRequest.post('/character',data)