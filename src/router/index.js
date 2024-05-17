import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SigninView from '../views/auth/Signin.vue'
import Signup from '../views/auth/Signup.vue'
import Library from '../views/library/Library.vue'
import { auth } from '../firebase/config'

// route guard
const requireAuth = (to, from, next) => {
  let user = auth.currentUser
  if (!user) {
    console.log('require auth: user not logged in. From: ', from, ' To: ', to)
    next({ name: 'signin' })
  } else {
    next()
  }
}

const authticated = (to, from, next) => {
  let user = auth.currentUser
  if (user) {
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
  },
  {
    path: '/signin',
    name: 'signin',
    component: SigninView,
    beforeEnter: authticated
  },
  {
    path: '/signup',
    name: 'signup',
    component: Signup
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
