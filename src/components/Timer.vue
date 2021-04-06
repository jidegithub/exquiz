<template>
  <div v-if="loaded">
    {{displayDays}} <span class="leading-snug">:</span>
    {{displayHours}} <span class="leading-snug">:</span>
    {{displayMinutes}} <span class="leading-snug">:</span>
    {{displaySeconds}}
    <span v-if="expired">Time is up</span>

  </div>
</template>

<script>
  export default {
    name: "timer",
    props:{
      year: Number,
      month: Number,
      date: Number,
      hour: Number,
      minute: Number,
      seconds: Number,
      milliseconds: Number
    },
    computed:{
      _seconds: () => 1000,
      _minutes(){
        return this._seconds * 60;
      },
      _hours(){
        return this._minutes * 60;
      },
      _days(){
        return this._hours * 24;
      },
      end(){
        return new Date(
          this.year,
          this.month,
          this.date,
          this.hour,
          this.minute,
          this.seconds,
          this.milliseconds
        )
      }
    },
    data(){
      return {
        displayDays: 0,
        displayHours: 0,
        displayMinutes: 0,
        displaySeconds: 0,
        loaded: false,
        expired: false,
      }
    },
    mounted(){
      this.showRemaining();
    },
    // unmounted() {
    //   clearInterval(this.timer);
    // },
    // beforeRouteLeave (to, from, next) {
    //   clearInterval(this.timer);
    // },
    methods:{
      formatTimeDigits(digit){
        return digit < 10 ? "0" + digit : digit;
      },
      showRemaining(){
          const timer = setInterval(() => {
          const now = new Date();
          // const end = new Date(2021, 4, 22, 10, 10, 10);
          const distance = this.end.getTime() - now.getTime();

          if(distance < 0){
            clearInterval(timer);
            this.expired = true;
            this.loaded = true;
            return;
          }

          const days = Math.floor(distance / this._days);
          const hours = Math.floor((distance % this._days) / this._hours);
          const minutes = Math.floor((distance % this._hours) / this._minutes);
          const seconds = Math.floor((distance % this._minutes) / this._seconds);
          this.displayMinutes = this.formatTimeDigits(minutes)
          this.displaySeconds = this.formatTimeDigits(seconds)
          this.displayHours = this.formatTimeDigits(hours)
          this.displayDays = this.formatTimeDigits(days)
          this.loaded = true;
        }, 1000);
      }
    }
  };
</script>

<style lang="scss" scoped>

</style>