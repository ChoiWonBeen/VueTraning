<template>
  <div class="GpaPage">
    <main-header></main-header>
    <div class="page-container">
      <md-app>
        <md-app-toolbar class="md-primary">
          <span class="md-title font-weight-medium font-italic">학점계산기</span>
        </md-app-toolbar>
        <md-app-content>
        <md-table v-model="users" md-card>
          <md-table-toolbar>
            <h1 class="md-title">정보를 입력하시면 학점을 계산해드립니다!</h1>
          </md-table-toolbar>
        </md-table>
          <gpa-table
            rowInfo='first'
            :inputed="{type:'person', data:null}">
          </gpa-table>

           <div v-for="(gradesInfo, indexnum) in grades">
            <gpa-table
              @delit="delit"
              :index="indexnum+1"
              :inputed="{type:'person', data: gradesInfo }"></gpa-table>
          </div>

          <gpa-table
            rowInfo='last'
            :index='grades.length+1'
            :inputed="{type:'person',data:null}"
            @addit="addit"
          ></gpa-table>
          <br>
          <div class="btn__cal">
          <md-button type="button" 
            @click="calcul">계산!</md-button>
          </div>
            당신의 학점은~~~~! : {{ Sum }}
        </md-app-content>
      </md-app>
    </div>
  </div>
</template>

<script>
  import gpaTable from './calcul/table'
  import mainHeader from '@/components/header/header'

  export default {
    name:'GpaPage',
    components:{
      'gpa-table':gpaTable,
      'main-header':mainHeader,
    },
    data(){
      return{
        selected:[],
        Sum:0,
        grades:[]
      }
    },
    methods:{
      delit:function(index){
        this.grades.splice(index-1,1)
      },
      addit:function(data){
        let values = Object.values(data);

				for(let i=0; i<values.length; i++) {
				  if(values[i] === "") {
				    alert("빈값을 입력하실 수는 없습니다.")
				    return;
					}
          if(1-Number(values[2] == 'A+' || values[2] == 'A0'|| values[2] == 'B+'||
            values[2] == 'B0'|| values[2] == 'C+'|| values[2] == 'C0'||
            values[2] == 'D+'|| values[2] == 'D0'|| values[2] == 'F')){
              alert("등급은 A0, C+, F와 같은 형식으로 작성해야합니다.")
              return;
            }
				}
        this.grades.push(data)
      },
      calcul:function(){
        let gradeSummary = 0;
        let scoreSummary = 0;
        for(let i=0; i<this.grades.length;i++){
          gradeSummary += Number(this.grades[i].classgrade);

          if(this.grades[i].classscore == 'A+'){ scoreSummary += 4.5 * Number(this.grades[i].classgrade)}
          if(this.grades[i].classscore == 'A'){ scoreSummary += 4 * Number(this.grades[i].classgrade)}
          if(this.grades[i].classscore == 'B+'){ scoreSummary += 3.5 * Number(this.grades[i].classgrade)}
          if(this.grades[i].classscore == 'B0'){ scoreSummary += 3 * Number(this.grades[i].classgrade)}
          if(this.grades[i].classscore == 'C+'){ scoreSummary += 2.5 * Number(this.grades[i].classgrade)}
          if(this.grades[i].classscore == 'C0'){ scoreSummary += 2 * Number(this.grades[i].classgrade)}
          if(this.grades[i].classscore == 'D+'){ scoreSummary += 1.5 * Number(this.grades[i].classgrade)}
          if(this.grades[i].classscore == 'D'){ scoreSummary += 1 * Number(this.grades[i].classgrade)}
          if(this.grades[i].classscore == 'F'){ scoreSummary += 0 * Number(this.grades[i].classgrade)}
        }
        this.Sum = scoreSummary / gradeSummary
      }
    }
  }
</script>

<style>
  .btn__cal{
    background-color: blue;
    color: white;
    float:left;
  }
</style>
