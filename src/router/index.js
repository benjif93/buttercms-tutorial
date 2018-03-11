import Vue from 'vue'
import Router from 'vue-router'
import CustomersHome from '@/components/CustomersHome'
import CustomersPage from '@/components/CustomersPage'
import FAQ           from '@/components/FAQ'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/customers/',
      name: 'customers-home',
      component: CustomersHome
    },
    {
      path: '/customers/:slug',
      name: 'customer-page',
      component: CustomersPage
    },
    {
      path: '/faq',
      name: 'faq',
      component: FAQ
    }
  ]
})
