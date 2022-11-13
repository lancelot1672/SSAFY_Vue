import Vue from 'vue'
import VueRouter from 'vue-router'
import UserView from '@/views/UserView';
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component:() => import('@/views/HomeView.vue'),
  },
{
  path:'/login',
  name : 'login',
  component:() => import('@/components/LoginForm'),
},
{
  path:'/user',
  component:UserView,
  children:[
    {
      path: "/user/regist",
      name:"Regist",
      component:() => import('@/components/user/UserRegist'),
    },
    {
      path: "",
      name: "List",
      component:() => import('@/components/user/UserList'),
    },
    {
      path: "/user/:id",
      name : "Detail",
      component:() => import('@/components/user/UserDetail'),
    }
  ]
}
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
