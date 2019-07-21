<template>
  <div class="cal">
    <main-header></main-header>
    <vue-cal
      xsmall
      hide-view-selector
      click-to-navigate
      :time="false"
      default-view="month"
      class="vuecal--blue-theme"
      :events="events">
    </vue-cal>
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
  .cal {
    background-color: #fefefe;
    height: 500px;
    width: 500px;
  }
</style>
