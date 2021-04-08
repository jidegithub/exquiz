<template>
  <button>{{ countDown }}</button>
</template>

<script>
  export default {
    name: 'timer',
    data(){
      return {
        countDown: 120,
        timer: null
      }
    },
    methods:{
      countDownTimer() {
        if (this.countDown > 0) {
          this.timer = setTimeout(() => {
            this.countDown -= 1
            this.countDownTimer();
          }, 1000)
        }
        else if(this.countDown === 0){
          this.$store.commit('modifyTimerState', true)
        }
        
      }
    },
    created(){
      this.countDownTimer()
    },
    beforeDestroy(){
      clearInterval(this.timer)
    }
  }
</script>

<style lang="scss" scoped>

</style>