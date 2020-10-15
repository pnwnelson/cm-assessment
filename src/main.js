import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'

Vue.config.productionTip = false
Vue.use(VueRouter)

const routes = [
  {
    name: 'city-time',
    path: '/:city',
    component: () => import('@/components/city-time'),
    props (route) { return { city: route.query.city }}
  }
]

const router = new VueRouter({
  routes
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')