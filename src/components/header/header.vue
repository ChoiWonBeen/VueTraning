<template>
  <div class="MainHeader">
    <div>this is header line</div>
      <div class="nav">
        <router-link to="/">Home</router-link> |
        <router-link to="/gpa">GPA</router-link> |
        <router-link to="/calendar">Calendar</router-link>
      </div>
    <div>this is header link</div>
    <br>
  </div>
</template>

<script>
  export default {
    name: 'mainheader'
  }
</script>

<style>

</style>
