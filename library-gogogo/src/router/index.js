import Vue from 'vue'
import Router from 'vue-router'
import Character from '../components/Character.vue'
import Gyuumao from '../components/Gyuumao.vue'
import HoodCho from '../components/HoodCho.vue'
import SpiderDemo from '../components/SpiderDemo.vue'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/character',
            component: Character,
            name:Character,
            children: [
                {
                    path: '/Gyuumao',
                    component: Gyuumao,
                    name:Gyuumao
                },
                {
                    path: '/HoodCho',
                    component: HoodCho,
                    name:HoodCho
                },
                {
                    path: '/SpiderDemo',
                    component: SpiderDemo,
                    name:SpiderDemo
                }
            ]
        },
    ]
})