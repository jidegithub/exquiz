<template>
  <div class="mt-4">
    <QuestionList
      v-if="questionsII.length" 
      :currentQuestion="questionsII[currentIndex]"
      :next="next"
      :previous="previous"
      :increment="increment"
      :endOfQuiz="endOfQuizState"
      :index="currentIndex"
    />
  </div>
</template>

<script>
import {getQuestionsII} from "../api/questions";
import QuestionList from '@/components/QuestionList.vue';
import { mapGetters } from "vuex";

export default {
  name: 'questionview',
  components: {
    QuestionList,
  },
  computed:{
    ...mapGetters([
      'currentIndex','endOfQuizState'
    ]),
    lastQuestionIndex(){
      return this.questionsII.length - 1;
    }
  },
   data(){
    return{
      questionsII:[],
    }
  },
   methods:{
    next(){
      if (this.currentIndex === this.lastQuestionIndex){
        this.$store.commit("modifyEndOfQuiz", true)
        this.$router.push('/summary')
      }else{
        this.$store.commit("incrementIndex", 1);
      }
    },
    previous(){
      this.$store.commit("decrementIndex", 1);
    },
    increment(isCorrect){
      if(isCorrect){
        this.$store.commit('incrementNumCorrect', 1);
      } else{
        this.$store.commit('incrementNumIncorrect', 1);
      }
    },
    getAllQuestionsII() {
      getQuestionsII(response => {
        // console.log(response)
        this.questionsII = response.questions;
        this.$store.commit('modifyNumQuestions', this.questionsII);
        const points = this.calculateQuestionPoints(this.questionsII)
        this.$store.commit('modifyOverAllPoints', points)
      })
    },
    calculateQuestionPoints(questionsList){
      return questionsList.reduce((n, {points}) => n + parseFloat(points), 0);
    }
  },
  mounted:function(){
   this.getAllQuestionsII()
  }
};
</script>

<style>

</style>
