<template>
  <div>
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
import LayoutDefault from "../Layouts/LayoutDefault.vue";
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
      questions:[],
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
        console.log(response)
        this.questionsII = response.results;
        this.$store.commit('modifyNumQuestions', this.questionsII);
      })
    }
  },
  created() {
    this.$emit(`update:layout`, LayoutDefault);
  },
  mounted:function(){
   this.getAllQuestionsII()
   console.log(this.currentIndex)
  }
};
</script>

<style>

</style>
