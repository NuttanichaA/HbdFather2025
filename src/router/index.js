import { createRouter, createWebHistory } from 'vue-router'
import Welcome from '@/views/Welcome.vue'
import HbdEmail from '@/views/HbdEmail.vue'
import AllMail from '@/views/AllMail.vue'

const history = createWebHistory(import.meta.env.BASE_URL || '/')

const routes = [
  {
    path: '/',
    redirect: { name: 'welcome' }
  },
  {
    path: '/welcome',
    name: 'welcome',
    component: Welcome,
  },
  {
    path: '/HbdPapa',
    name: 'hbdEmail',
    component: HbdEmail,
  },
  {
    path: '/mails',
    name: 'allMail',
    component: AllMail,
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: { name: 'welcome' }
  }
]

const router = createRouter({
  history,
  routes,
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 }
  }
})

const today = new Date()
const isBirthday = today.getDate() === 11 && today.getMonth() === 4

router.beforeEach((to, from) => {
  if(!isBirthday && to.name !== 'allMail'){
    return { name: 'allMail' }
  }
})

export default router