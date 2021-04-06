<template>
  <div>
    <nav class="nav-tabs nav-justified">
        <a class="nav-item active mr-5"><b>ExQuiz</b></a>
        <a class="nav-item">Counter: {{ this.numCorrect }}/{{ this.numTotal }}</a>
        <Timer
          :year="2021"
          :month="3"
          :date="7"
          :hour="20"
          :minute="7"
          :seconds="0"
          :milliseconds="0"
        />
    </nav>
  </div>
</template>

<script>
import Timer from '../components/Timer.vue';
import LayoutDefault from '../Layouts/LayoutDefault.vue'
export default {
  components: { Timer },
  props: [
    'numTotal',
    'numCorrect',
  ],
  created(){
    this.$emit('update:layout', LayoutDefault)
  }
};
</script>

<style>

</style>
