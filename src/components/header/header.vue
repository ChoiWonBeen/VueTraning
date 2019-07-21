<template>
  <div class="MainHeader">
      <div class="page-container">
        <md-tabs class="md-primary" md-alignment="centered">
          <md-tab class="md-primary" id="tab-home" md-label="내 잡담" @click="clickmtab"></md-tab>
          <md-tab class="md-primary" id="tab-pages" md-label="학점계산기" @click="clickgtab"></md-tab>
          <md-tab class="md-primary" id="tab-posts" md-label="달력" @click="clickctab"></md-tab>
        </md-tabs>
      </div>
  </div>
</template>

<script>

  export default {
    name: 'mainheader'
    ,
    methods: {
      clickgtab: function(){
        this.$router.push('/gpa')
      },
      clickmtab: function(){
        this.$router.push('/')
      },
      clickctab: function(){
        this.$router.push('/calendar')
      }
    }
  }
</script>

<style>
  .MainHeader{
    background-color: #426efe;
    color:white;
    height: 50px;
    align-content: center;
  }

</style>
