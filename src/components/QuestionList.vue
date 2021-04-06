<template>
<div>
    <div class="jumbotron">
      <p>
       {{ currentQuestion.question }}
      </p>
    </div>
    <hr>
    <label class="answers flex items-center mr-2" v-for="(answer, index) in answers" v-bind:key="index" :for="index"
    v-on:click="selectAnswer(index)"
    v-bind:class="[
        !answered && selectedIndex === index ? 'selected' :
        answered && correctIndex === index ? 'correct' :
        answered && selectedIndex === index && correctIndex !== index ? 'incorrect' : ''
    ]"
    >
      <input type="radio" name="answer" :id=index>  {{ answer }}
    </label>
    <!-- <button class="btn btn-primary" type="submit"
        v-on:click="submitAnswer"
        v-bind:disabled="selectedIndex === null || answered"
    >
        submit
    </button> -->
    <button v-on:click="previous" v-bind:disabled="!endOfQuiz && index === 0" class="bg-main-green text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mr-4" type="button">previous</button>
    <button v-on:click="submitAnswer" v-bind:disabled="endOfQuiz" class="bg-main-green text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">next</button>
</div>

</template>

<script>
import _ from 'lodash';

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
      unanswered: 0,
    };
  },
  computed: {
    answers() {
      const answers = [...this.currentQuestion.incorrect_answers];
      answers.push(this.currentQuestion.correct_answer);
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
      },
    },
    // (){
    //     this.selectedIndex = null
    //     this.shuffleAnswers()
    // }
  },
  methods: {
    selectAnswer(index) {
      console.log(index)
      this.selectedIndex = index;
    },
    shuffleAnswers() {
      const answers = [...this.currentQuestion.incorrect_answers, this.currentQuestion.correct_answer];
      this.shuffledAnswers = _.shuffle(answers);
      this.correctIndex = this.shuffledAnswers.indexOf(this.currentQuestion.correct_answer);
    },
    submitAnswer() {
      let isCorrect = false;

      if (this.selectedIndex === this.correctIndex) {
        isCorrect = true;
      }

      if(this.selectedIndex){
        this.answered = true;
      }
      else{
        this.unanswered++
      }
      this.increment(isCorrect);
      this.next()
      this.selectedIndex = null;
      this.correctIndex = null;
    },

  },
  // mounted(){
  //     this.shuffleAnswers()
  // }
};
</script>

<style scoped>
    .answers{
        width: 50%;
    }
    .answers:hover{
        background-color:#eee;
        cursor: pointer;
    }
    .selected{
        background-color: lightblue;
    }
    .correct{
        background-color: lightgreen;
    }
    .incorrect{
        background-color: lightsalmon;
    }
</style>
