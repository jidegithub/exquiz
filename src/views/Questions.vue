<template>
  <div>
    <QuestionList
      v-if="questions.length" 
      v-bind:currentQuestion="questions[index]"
      :next="next"
      :previous="previous"
      :increment="increment"
      :endOfQuiz="endOfQuiz"
      :index="index"
    />
  </div>
</template>

<script>
import LayoutDefault from "../Layouts/LayoutDefault.vue";
import {getQuestions} from "../api/questions";
import QuestionList from '@/components/QuestionList.vue';

export default {
  name: 'questionview',
  components: {
    QuestionList,
  },
   data(){
    return{
      questions:[],
      index:0,
      numCorrect:0,
      numTotal:0,
      endOfQuiz: false
    }
  },
   methods:{
    next(){
      if (this.index === 9){
        this.endOfQuiz = true
        alert("end of quiz")
      }
      else(this.index++)
      
    },
    previous(){
      this.index--
    },
    increment(isCorrect){
      if(isCorrect){
        this.numCorrect++
      }
      this.numTotal++
    },
    getAllQuestions() {
      getQuestions(response => {
        this.questions = response.results
      });
    }
  },
  created() {
    this.$emit(`update:layout`, LayoutDefault);
  },
  mounted:function(){
   this.getAllQuestions()
  }
};
</script>

<style>

</style>
