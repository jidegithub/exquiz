<template>
  <div id="header-comp">
    <section class="">
      <h2 class=""><b>ExQuiz</b></h2>
      <h2 class="text-gray-500">Question {{ this.currentIndex + 1}} / {{ this.numQuestionsData }}</h2>
      <h2 class="">Time:
        <Timer
          :year="2021"
          :month="4"
          :date="8"
          :hour="0"
          :minute="2"
          :seconds="0"
          :milliseconds="0"
        />
        </h2>
    </section>
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
