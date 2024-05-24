import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import user_state from '@/composables/getUser';
import Library from '../views/library/Library.vue'

// route guard
const requireAuth = (to, from, next) => {
  //let user = auth.currentUser
  if (!user_state.user) {
    console.log('require auth: user not logged in. User: ', user_state.user)
    next({ name: 'home' })
  } else {
    next()
  }
}

const authticated = (to, from, next) => {
  if (user_state.user) {
    console.log('authenticated: user logged in. From: ', from, ' To: ', to)
    next({ name: 'library' })
  } else {
    next()
  }
}


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    beforeEnter: authticated
  },
  {
    path: '/library',
    name: 'library',
    component: Library,
    beforeEnter: requireAuth
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})


export default router
