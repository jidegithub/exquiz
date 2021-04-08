<template>
  <div class="bg-main-black">
    <header class="container mx-auto">
      <div class="pt-10 lg:flex items-center justify-center">
        <div class="w-auto xs:m-0 md:m-1 md:pl-24 md:pr-24">
          <h2 class="text-white font-black lg:text-4xl md:text-3xl sm:text-xl xs:text-lg mb-4 text-center">
              Welcome to Exquiz!
          </h2>
          <div class="text-white opacity-50 mb-4 px-3 text-justify md:text-md sm:text-sm xs:text-sm">
              This app is trivia simulator for BrandMobileAfrica. discover all the exciting questions around in order to refresh your memory.
          </div>
          <div class="flex text-center lg:w-auto mb-4 lg:mb-0 justify-center">
            <form class="w-full">
              <p class="mb-4" v-if="errors.length">
                <b>Please correct the following error(s):</b>
                <ul>
                  <li v-for="(error, index) in errors" :key="index">{{ error }}</li>
                </ul>
              </p>
              <div class="flex flex-wrap mb-6">
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
                  <input v-model="phone_number" class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="phone-number" type="tel" placeholder="080563266254">
                </div>
              </div>
              <div id="quiz" class="flex items-center justify-between px-3">
                <button @click="submitForm" class="bg-main-green text-gray-200 w-1/2 font-bold py-2 px-4 focus:outline-none focus:shadow-outline" type="button">
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
      phone_number: null,
      country: null,
      errors: [],
    };
  },
  methods:{
    submitForm(e){
      if(this.validateForm(e)){
        this.$router.push('/questions')
      }
    },
    updateCountry(country){
      this.country = country;
    },
    validateForm(e) {
      if (this.phone_number && this.country) {
        return true;
      }

      this.errors = [];

      if (!this.phone_number) {
        this.errors.push('Phone Number required.');
      }
      if (!this.country) {
        this.errors.push('Country required.');
      }

      e.preventDefault();
    }
  }
};
</script>

<style lang="scss">
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

