<template>
  <div>
    <nav class="nav-tabs nav-justified">
        <a class="nav-item active mr-5"><b>ExQuiz</b></a>
        <a class="nav-item">Counter: {{ this.currentIndex + 1}} of {{ this.numQuestionsData }}</a>
        <Timer
          :year="2022"
          :month="3"
          :date="7"
          :hour="0"
          :minute="2"
          :seconds="0"
          :endDate="new Date(2021-12-10)"
          :milliseconds="0"
        />
    </nav>
  </div>
</template>

<script>
import Timer from '../components/Timer.vue';
import { mapGetters } from "vuex";
export default {
  components: { Timer },
  computed:{
    ...mapGetters([
      'currentIndex', 'numQuestionsData'
    ])
  }
};
</script>

<style>

</style>
