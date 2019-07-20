<template>
  <div>
    <main-header></main-header>
    <vue-cal class="vuecal--rounded-theme vuecal--green-theme"
         xmall
         hide-view-selector
         :time="false"
         default-view="month"
         :disable-views="['week']">
</vue-cal>
  </div>
</template>

<script>
  // In your VueJS component.
  import VueCal from 'vue-cal'
  import 'vue-cal/dist/vuecal.css'
  import mainHeader from '@/components/header/header'

  export default {
  components: {
    VueCal,
    mainHeader
  },
  data: () => ({

  }),

  }
</script>

<style scoped>

</style>
