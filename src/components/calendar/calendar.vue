<template>
  <div class="cal">
    <main-header></main-header>
    <div class="page-container">
      <md-app>
        <md-app-toolbar class="md-primary">
          <span class="md-title font-weight-medium font-italic">달력</span>
        </md-app-toolbar>
        <md-app-content>
          <md-table v-model="users" md-card>
            <md-table-toolbar>
             <h1 class="md-title">제 생일을 표기해둔 그냥 달력입니다. 7월 30일!</h1>
           </md-table-toolbar>
          </md-table>
          <vue-cal
            hide-view-selector
            click-to-navigate
            :time="false"
            default-view="month"
            class="vuecal--blue-theme"
            :events="events">
          </vue-cal>
        </md-app-content>
      </md-app>
    </div>
  </div>
</template>

<script>
  import mainHeader from '@/components/header/header'
  import VueCal from 'vue-cal'
  import 'vue-cal/dist/vuecal.css'

  export default {
    components: {
      mainHeader,
      'vue-cal':VueCal
    },
    computed: {
      minDate () {
        let now = new Date()
        let date = new Date(now)
        date.setDate(now.getDate() - 15)
        return date
      },
      maxDate () {
        let now = new Date()
        let date = new Date(now)
        date.setDate(now.getDate() + 15)
        return date
      }
    },
    data: () => ({
      events: [
        {
          start: '2019-7-22',
          end: '2019-7-23',
          title: 'Need to go shopping',
          content: '<i class="v-icon material-icons">shopping_cart</i>',
          class: 'leisure'
        },
        {
          start: '2019-7-10',
          end: '2019-7-13',
          title: 'Golf with John',
          content: '<i class="v-icon material-icons">golf_course</i>',
          class: 'sport'
        },
        {
          start: '2019-7-29',
          end: '2019-7-30',
          title: '리얼 마이 생일!',
          content: '<i class="v-icon material-icons">cake</i>',
          class: 'sport'
        }
      ]
    })
  }
</script>

<style scoped>
  .vuecal {
    height: 500px;
  }
</style>
