<template>
  <div class="bg-main-black">
    <header class="container mx-auto">
      <div class="pt-16 lg:flex items-center">
        <div class="w-auto xs:m-0 md:m-1 md:pl-24 md:pr-24">
          <h2 class="text-white font-black lg:text-4xl md:text-3xl sm:text-xl xs:text-lg mb-4 lg:w-4/5 text-center">
              The best app in the world!
          </h2>
          <div class="text-white opacity-50 mb-4 text-justify lg:w-4/5 md:text-md sm:text-sm xs:text-sm">
              This app helps you discover all the forests arround in order to reconnect with the nature. Download the app and escape from the urban chaos!
          </div>
          <div class="flex text-center lg:w-auto mb-4 lg:mb-0 justify-center lg:w-4/5">
            <form class="w-full max-w-lg">
              <div class="flex flex-wrap -mx-3 mb-6">
                <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                  <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="country">
                    Country
                  </label>
                  <CountriesList @selectedCountry="updateCountry"/>
                </div>
                <div class="w-full md:w-1/2 px-3">
                  <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="phone-number">
                    Phone number
                  </label>
                  <input v-model="phone_number" class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="phone-number" type="tel" placeholder="080563266254">
                </div>
              </div>
              <div class="flex items-center justify-between">
                <button @click="submitForm" class="bg-main-green text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                  Proceed
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </header>
  </div>
</template>

<script>
import CountriesList from './CountriesList.vue';
  export default {
  components: {
    CountriesList
  },
  data() {
   return {
      phone_number: "",
      country: "",
    };
  },
  methods:{
    submitForm(){
      this.$router.push('/questions')
    },
    updateCountry(country){
      this.country = country;
    }
  }
};
</script>

<style lang="scss" scoped>
  div{
    .bg-main-black {
      background-color: #20232D;
      height: 100vh;
    }
    .bg-main-green{
      background-color: #1f8a65;
      :hover{
        background-color: #1f8a65d7;
      }
    }
  }
</style>

