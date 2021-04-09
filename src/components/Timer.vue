<template>
  <button>{{ countDown }}secs</button>
</template>

<script>
import {mapGetters} from 'vuex';
  export default {
    name: 'timer',
    data(){
      return {
        countDown: 120,
        timer: null
      }
    },
    computed:{
      ...mapGetters([
        'endOfQuizState'
      ]),
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
          if(this.endOfQuizState){
            return;
          }
          this.$router.push('/summary')
        }
      }
    },
    created(){
      this.countDownTimer()
    },
    beforeDestroy(){
      clearInterval(this.timer)
      this.countDown = 0;
      this.$el.parentNode.removeChild(this.$el)
    }
  }
</script>

<style lang="scss" scoped>

</style>