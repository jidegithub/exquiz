<template>
<div>
  <div class="">
    <p>
      {{ currentQuestion.question }}
    </p>
  </div>
  <hr>
  <label class="answers flex items-center mr-2" v-for="(answer, index) in answers" :key="answer.id" :for="answer.id">
    <input type="radio" :value="index" name="answer" v-model="selectedIndex" :id="answer.id">{{ answer.choice }}
  </label>
  
  <button v-on:click="previous" v-bind:disabled="!endOfQuiz && index === 0" class="bg-main-green text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mr-4" type="button">previous</button>
  <button v-on:click="submitAnswer" v-bind:disabled="endOfQuiz" class="bg-main-green text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">next</button>
</div>

</template>

<script>
const shuffle = require('lodash.shuffle')

export default {
  props: {
    currentQuestion: Object,
    next: Function,
    increment: Function,
    previous: Function,
    endOfQuiz: Boolean,
    index: Number,
  },
  data() {
    return {
      selectedIndex: null,
      correctIndex: null,
      shuffledAnswers: [],
      answered: false,
      questionPoint: 0,
    };
  },
  computed: {
    answers() {
      const answers = this.currentQuestion.choices;
      return answers;
    },
  },
  watch: {
    currentQuestion: {
      immediate: true,
      handler() {
        this.selectedIndex = null;
        this.answered = false;
        this.shuffleAnswers();
        this.questionPoint =  parseFloat(this.currentQuestion.points);
      },
    },
    // index(){
    //   console.log('index don change o')
    // }
  },
  methods: {
    shuffleAnswers() {
      const answers = this.currentQuestion.choices;
      this.shuffledAnswers = shuffle(answers);
      this.correctIndex = answers.findIndex(choice => choice.is_correct_choice === 1);
    },
    submitAnswer() {
      let isCorrect = false;

      if(this.selectedIndex === this.correctIndex){
        isCorrect = true;
        this.$store.commit('incrementNumTotalPoints', this.questionPoint)
      }
  
      this.answered = true;
      this.increment(isCorrect);
      this.next()
      
      if(this.selectedIndex == null){
        this.$store.commit('incrementNumUnanswered', 1)
      }
      this.selectedIndex = null;
    }
  },
  mounted(){
    this.shuffleAnswers()
  }
};
</script>

<style scoped>
    
</style>
