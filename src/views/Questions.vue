<template>
  <div>
    <QuestionList
      v-if="questions.length" 
      v-bind:currentQuestion="questions[currentIndex]"
      :next="next"
      :previous="previous"
      :increment="increment"
      :endOfQuiz="endOfQuizState"
      :index="currentIndex"
    />
  </div>
</template>

<script>
import LayoutDefault from "../Layouts/LayoutDefault.vue";
import {getQuestions, getQuestionsII} from "../api/questions";
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
      return this.questions.length - 1;
    }
  },
   data(){
    return{
      questions:[],
      questionsII: [],
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
    getAllQuestions() {
      getQuestions(response => {
        this.questions = response.results;
        this.$store.commit('modifyNumQuestions', this.questions);
      });
    },
    getAllQuestionsII() {
      getQuestionsII(response => {
        console.log(response)
        this.questionsII = response.results;
        // this.$store.commit('modifyNumQuestions', this.questions);
      })
    }
  },
  created() {
    this.$emit(`update:layout`, LayoutDefault);
  },
  mounted:function(){
   this.getAllQuestions()
   this.getAllQuestionsII()
  }
};
</script>

<style>

</style>
