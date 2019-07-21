<template>
  <div class="cal">
    <main-header></main-header>
    <vue-cal
      xsmall
      hide-view-selector
      click-to-navigate
      :time="false"
      default-view="month"
      :min-date="minDate"
      class="vuecal--blue-theme"
      :max-date="maxDate">
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
    }
  }
</script>

<style scoped>
  .cal {
    background-color: #fefefe;
    height: 500px;
    width: 500px;
  }
</style>
