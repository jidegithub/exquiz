import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    endOfQuiz: false,
    numCorrect: 0,
    numTotal: 0,
    numUnanswered: 0,
    timerExpired: false,
    numTotalPoints: 0,
    index: 0,
  },
  mutations: {
    modifyEndOfQuiz(state, endOfQuiz){
      state.endOfQuiz = endOfQuiz;
    },
    modifyNumCorrect(state, numCorrect){
      state.numCorrect = numCorrect;
    },
    modifyNumTotal(state, numTotal){
      state.numTotal = numTotal;
    },
    modifyIndex(state, index){
      state.index = index;
    },
    modifyNumUnanswered(state, numUnanswered){
      state.numUnanswered = numUnanswered;
    },
    modifyTimerState(state, timerExpired){
      state.timerExpired = timerExpired;
    },
    modifyNumTotalPoints(state, numTotalPoints){
      state.numTotalPoints += numTotalPoints;
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
    numTotalData(state){
      return state.numTotal;
    },
    currentIndex(state){
      return state.index;
    },
    numUnansweredData(state){
      return state.numUnanswered;
    }
  },
  modules: {
  },
});
