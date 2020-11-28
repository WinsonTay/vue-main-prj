import { createRouter, createWebHistory } from 'vue-router'
isFinite


const routes = [
  {
    path: '/',
    name: 'Home',

  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
