<template>
  <div>
    <div class="jumbotron">
      <p>
        {{ question.question }}
      </p>
    </div>
    <hr>
    <label class="answers flex items-center mr-2" v-for="(answer, index) in question.answers" v-bind:key="index" :for="index">
      <input type="radio" :value="index" name="answer" v-model="selectedIndex" :id="index">{{ answer }}
    </label>
  </div>
</template>

<script>
  export default {
    name: "question",
    props:{
      question: Object,
    },
    data() {
      return {
        questionId: this.$route.params.id
      }
    },
  }
</script>

<style lang="scss" scoped>

</style>