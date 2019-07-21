<template>
  <div>
    <main-header/>
      <div class="page-container">
    <md-app>
      <md-app-toolbar class="md-primary">
        <span class="md-title font-weight-medium font-italic">내 잡담</span>
      </md-app-toolbar>

      <md-app-content>
        <br>
         <md-card class="md-primary" md-theme="green-card">
          <md-card-header>
            <md-card-header-text>
              <div class="md-title">대체 왜 색상이 안들어갈까요?</div>
              <div class="md-subhead">받아오는 플러그인들마다 하나같이 테마적용이 안돼요!</div>
            </md-card-header-text>
            <md-card-media>
              <img src="https://cdn.pixabay.com/photo/2017/05/15/08/53/question-mark-2314106_960_720.jpg" alt="Avatar">
            </md-card-media>
          </md-card-header>
        </md-card>

         <md-card class="md-primary" md-theme="green-card">
          <md-card-header>
            <md-card-header-text>
              <div class="md-title">테마만이 문제는 아닙니다!</div>
              <div class="md-subhead">정상적인 캘린더를 고르는 데 스무 가지 넘는 모듈들을 거쳤어요!</div>
            </md-card-header-text>
            <md-card-media>
              <img class="sec" src="https://previews.123rf.com/images/tigatelu/tigatelu1411/tigatelu141100064/33887330-angry-smiley-emoticon-cartoon.jpg" alt="Avatar">
            </md-card-media>
          </md-card-header>
        </md-card>

         <md-card class="md-primary" md-theme="green-card">
          <md-card-header>
            <md-card-header-text>
              <div class="md-title">이정도 했으면 제가 문제인 것 같아요</div>
              <div class="md-subhead">그냥 테마 포기하고 직접 스타일링 할래요</div>
            </md-card-header-text>
            <md-card-media>
              <img class="sec" src="https://qotoqot.com/sad-animations/img/400/sitting_alone/sitting_alone.png" alt="Avatar">
            </md-card-media>
          </md-card-header>
        </md-card>

        <md-card class="md-primary" md-theme="green-card">
          <md-card-header>
            <md-card-header-text>
              <div class="md-title">실습 역시 어렵네요</div>
              <div class="md-subhead">시간 정말 많이썼는데.. 그래도 처음이니 다음부턴 덜걸리겠다는 희망을!</div>
            </md-card-header-text>
            <md-card-media>
              <img class="sec" src="https://previews.123rf.com/images/krisdog/krisdog1703/krisdog170300001/73267691-cartoon-fist-hand-in-a-pop-art-comic-book-style.jpg" alt="Avatar">
            </md-card-media>
          </md-card-header>
        </md-card>

      </md-app-content>
    </md-app>
  </div>
  </div>
</template>

<script>
  import mainHeader from './header/header'
  export default {
    name:'Main',
    components:{
      'main-header':mainHeader
    }
  }
</script>

<style>
  .md-card{
    margin-bottom: 20px;
  }
</style>
