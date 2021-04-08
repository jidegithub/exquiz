<template>
  <div class="LayoutDefault bg-main-black p-6">
    <Header/>
    <main class="LayoutDefault__main">
      <slot/>
    </main>
    <Footer/>
  </div>
</template>

<script>
import Header from "./Header.vue";
import Footer from "./Footer.vue";
export default {
  name: 'layout',
  components:{
    Header,
    Footer,
  }
  
}
</script>

<style lang="scss" scoped>

</style>