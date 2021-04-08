<template>
  <div>
    <div class="">
      <p class="font-medium mb-6">
        {{ currentQuestion.question }}
      </p>
    </div>
    <label id="question" class="answers flex items-center" v-for="(answer, index) in answers" :key="answer.id" :for="answer.id">
      <input type="radio" :value="index" name="answer" v-model="selectedIndex" :id="answer.id">{{ answer.choice }}
    </label>
    <div id="quiz" class="mt-6"> 
      <!-- <button class="btn btn-primary" type="submit" v-on:click="submitAnswer" v-bind:disabled="selectedIndex === null || answered">submit</button> -->
      <button v-on:click="previous" v-bind:disabled="!endOfQuiz && index === 0" class="focus:outline-none focus:shadow-outline mr-4" type="button">previous</button>
      <button v-on:click="submitAnswer" v-bind:disabled="endOfQuiz" class="focus:outline-none focus:shadow-outline" type="button">next</button>
    </div>
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
#quiz button {
  float: right;
  margin: 8px 0px 0px 8px;
  padding: 6px 15px;
  background: #9ACFCC;
  color: #00403C;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  outline: none;
}

#quiz button:hover {
  background: #36a39c;
  color: #FFF;
}

#quiz button:disabled {
  opacity: 0.5;
  background: #9ACFCC;
  color: #00403C;
  cursor: default;
}

#question input[type=radio] {
  display: none;
}

label#question {
  display: inline-block;
  margin: 10px auto;
  padding: 8px;
  border: 1px solid rgba(229,231,235);
  background: transparent;
  color: rgba(229,231,235);
  width: 100%;
  min-width: 100px;
  cursor: pointer;
}

label#question:hover {
  background: rgba(229,231,235);
  color: #20232D;
}

label#question + input[type=radio]:checked {
  background: rgba(229,231,235);
  color: #20232D;
}
</style>
