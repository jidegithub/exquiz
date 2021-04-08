import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    endOfQuiz: false,
    numCorrect: 0,
    numIncorrect: 0,
    numUnanswered: 0,
    timerExpired: false,
    numTotalPoints: 0,
    numQuestions: 0,
    index: 0,
  },
  mutations: {
    modifyEndOfQuiz(state, endOfQuiz){
      state.endOfQuiz = endOfQuiz;
    },
    incrementNumCorrect(state, numCorrect){
      state.numCorrect += numCorrect;
    },
    incrementNumIncorrect(state, numIncorrect){
      state.numIncorrect += numIncorrect;
    },
    incrementIndex(state, index){
      state.index += index;
    },
    decrementIndex(state, index){
      state.index -= index;
    },
    incrementNumUnanswered(state, numUnanswered){
      state.numUnanswered += numUnanswered;
    },
    modifyTimerState(state, timerExpired){
      state.timerExpired = timerExpired;
    },
    incrementNumTotalPoints(state, numTotalPoints){
      state.numTotalPoints += numTotalPoints;
    },
    modifyNumQuestions(state, numQuestions){
      state.numQuestions = numQuestions.length;
    }
  },
  actions: {
  },
  getters:{
    endOfQuizState(state){
      return state.endOfQuiz;
    },
    numCorrectData(state){
      return state.numCorrect;
    },
    numIncorrectData(state){
      return state.numIncorrect;
    },
    currentIndex(state){
      return state.index;
    },
    numUnansweredData(state){
      return state.numUnanswered;
    },
    numQuestionsData(state){
      return state.numQuestions;
    }
  },
  modules: {
  },
});
