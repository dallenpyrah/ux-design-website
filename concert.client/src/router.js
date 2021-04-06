import { createRouter, createWebHashHistory } from 'vue-router'
import { authGuard } from '@bcwdev/auth0provider-client'

function loadPage(page) {
  return () => import(`./pages/${page}.vue`)
}

const routes = [
  {
    path: '/',
    name: 'Home',
    component: loadPage('HomePage')
  },
  {
    path: '/about',
    name: 'About',
    component: loadPage('AboutPage')
  },
  {
    path: '/booktickets',
    name: 'BookTickets',
    component: loadPage('BookTicketsPage')
  },
  {
    path: '/conference',
    name: 'Conference',
    component: loadPage('ConferencePage')
  },
  {
    path: '/contact',
    name: 'Contact',
    component: loadPage('ContactPage')
  },
  {
    path: '/ourservices',
    name: 'OurServicesPage',
    component: loadPage('OurServicesPage')
  },
  {
    path: '/account',
    name: 'Account',
    component: loadPage('AccountPage'),
    beforeEnter: authGuard
  }
]

const router = createRouter({
  linkActiveClass: 'router-link-active',
  linkExactActiveClass: 'router-link-exact-active',
  history: createWebHashHistory(),
  routes
})

export default router
