import Vue from 'vue'
import VueRouter from 'vue-router'
import BoardList from '@/components/BoardList.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'BoardList',
    component: BoardList
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
