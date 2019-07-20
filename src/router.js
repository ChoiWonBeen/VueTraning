import Vue from 'vue'
import Router from 'vue-router'
import Gpa from './components/gpa/GpaPage'
import Calendar from './components/calendar/calendar'
import Main from './components/MainPage'

Vue.use(Router)

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
