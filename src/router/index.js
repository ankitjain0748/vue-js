// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import Home from '../Home/index.vue'
import Find from '../find/FindT.vue'
import Become from '../Become/index.vue'


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: { title: 'Home Page' }
  },
  {
    path: '/find-teacher',
    name: 'FindTeacher', // ✅ Name change karna better hai
    component: Find,
    meta: { title: 'Find Teacher Page' } // ✅ Title update kiya
  },

   {
    path: '/become-teacher',
    name: 'BecomeTeacher', // ✅ Name change karna better hai
    component: Become,
    meta: { title: 'Become Teacher Page' } // ✅ Title update kiya
  },
 
  // Catch all route - redirect to home
  {
    path: '/:pathMatch(.*)*',
    redirect: '/'
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

// Update page title based on route meta
router.afterEach((to) => {
  document.title = to.meta.title || 'Vue Multi-Page App'
})

export default router // ✅ Sirf yeh line, router.js nahi