import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home'
import Map from '@/views/Map'
import List from '@/views/List'
import Data from '@/components/Data'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/list',
    name: 'List',
    component: List
  },
  {
    path: '/map',
    name: 'Map',
    component: Map
  },
  {
    path: '/data',
    name: 'Data',
    component: Data
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
//   // 이동시 스크롤 제일 위로
//   scrollBehavior (to, from, savedPosition) {
//     return { x: 0, y: 0 }
//   }
})

export default router
