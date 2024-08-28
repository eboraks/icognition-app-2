import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import user_state from '@/composables/getUser';
import AppContainer from '../views/AppContainer.vue'
import DocXRayView from '../views/library/DocXRayView.vue'
import PrivacyPolicy from '@/components/PrivacyPolicy.vue'
import TermsOfUse from '@/components/TermsOfUse.vue'

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

const authenticated = (to, from, next) => {
  if (user_state.user) {
    console.log('authenticated: user logged in. From: ', from, ' To: ', to)
    next({ name: to })
    //next({ name: 'library' })
  } else {
    next()
  }
}


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    beforeEnter: authenticated
  },
  {
    path: '/documents',
    name: 'documents',
    component: AppContainer,
    beforeEnter: requireAuth
  },
  {
    path: '/projects',
    name: 'projects',
    component: AppContainer,
    beforeEnter: requireAuth
  },
  { 
    path: '/docxray/:id',
    name: 'docxray',
    component: DocXRayView,
    beforeEnter: requireAuth,
    props: true
  },
  { 
    path: '/privacy-policy',
    name: 'privacy-policy',
    component: PrivacyPolicy
  },
  { 
    path: '/terms-of-use',
    name: 'terms-of-use',
    component: TermsOfUse
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})


export default router
