<template>
  <div class="table">
    <div class="allOfTable">

      <div
        class="table__element class__name"
        :class="{'first__row':rowInfo=='first'}"
        v-if="rowInfo=='first'">
        과목명
      </div>
      <div
       class="table__element class__name"
       v-else-if="rowInfo=='default'">
       {{inputed.data.classname}}
      </div>
      <div class="table__element class__name last"
        v-else>
        <input type="text" v-model="classname">
      </div>

      <div
        class="table__element class__grade"
        :class="{'first__row':rowInfo=='first'}"
        v-if="rowInfo=='first'">
        학점
      </div>
      <div class="table__element class__grade"
        v-else-if="rowInfo=='default'">
        {{inputed.data.classgrade}}
      </div>
      <div class="table__element class__grade"
        v-else>
        <input type="Number" v-model="classgrade">
      </div>

      <div
        class="table__element class__Score"
        :class="{'first__row':rowInfo=='first'}"
        v-if="rowInfo=='first'">
        등급
      </div>
      <div class="table__element class__Score"
        v-else-if="rowInfo=='default'">
        {{inputed.data.classscore}}
      </div>
      <div class="table__element class__Score"
        v-else>
        <input type="text" v-model="classscore">
      </div>

      <div
        class="btn__del"
        v-if="rowInfo=='default'">
        <button type="button" name="del"
        @click="del">
        DEL</button>
      </div>
      <div class="btn__add"
        v-if="rowInfo=='last'">
        <button type="button" name="add"
          @click="add">
          ADD</button>

      </div>
    </div>
    <br>
  </div>
</template>

<script>
  export default {
    name:'gpaTable',
    data:function(){
      return{
        classname:'',
        classgrade:'',
        classscore:''
      }
    },
    props:{
      rowInfo:{
        default:"default",
        type:String
      },
      inputed: {
        default:{
          type:'',
          data:null
        },
        type:Object
      },
      index:{
        default:0,
        type:Number
      }
    },
    methods:{
      del: function(){
        this.$emit("delit",this.index)
      },
      add: function(){
        this.$emit("addit", {
          classname: this.classname,
					classgrade: this.classgrade,
					classscore: this.classscore
				})
        this.classname = ''
        this.classgrade = ''
        this.classscore = ''
      },
      calcul: function(){
        this.$emit("calculate")
      }
    }
  }
</script>

<style scoped>
  .allOfTable {
    float: left
  }
  .table__element {
    float: left;
    border: 1px gray solid;
    margin-bottom: -1px;
    margin-top:-1px;
    width: 100px;
    height: auto;
  }
  .table__element input {
    width:100px;
    margin:0px;
    padding:0px;
    border:0px;
  }
  .btn__del, .btn__add {
    float: left;
  }
</style>
