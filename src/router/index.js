import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home'
import Jejumap from '@/views/Jejumap'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/jejumap',
    name: 'Jejumap',
    component: Jejumap
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
