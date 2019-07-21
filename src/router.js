import Vue from 'vue'
import Router from 'vue-router'
import Gpa from './components/gpa/GpaPage'
import Calendar from './components/calendar/calendar'
import Main from './components/MainPage'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

Vue.use(Router)
Vue.use(VueMaterial)
Vue.use(Vuetify)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'main',
      component: Main
    },
    {
      path: '/gpa',
      name: 'GPA',
      component: Gpa
    },
    {
      path: '/calendar',
      name: 'Calendar',
      component: Calendar
    }
  ]
})
