<template>
  <div id="app" class="text-gray-200 bg-main-black">
    <Header v-if="$route.path === '/questions'"/>
      <router-view />
      <a style="cursor:pointer" :style="{'display': installBtn}" @click="installer()">
        <h1 id="install-prompt">Install!</h1>
      </a>
    <Footer/>
  </div>
</template>

<script>
import Header from './Layouts/Header';
import Footer from './Layouts/Footer';
export default {
  name: 'App',
  components:{
    Header,
    Footer
  },
  data() {
    return {
      layout: 'div',
      installBtn: "none",
      installer: undefined,
    }
  },
  created() {
    let installPrompt;

    window.addEventListener("beforeinstallprompt", e => {
      e.preventDefault();
      installPrompt = e;
      this.installBtn = "block";
    });

    this.installer = () => {
      this.installBtn = "none";
      installPrompt.prompt();
      installPrompt.userChoice.then(result => {
        if (result.outcome === "accepted") {
          console.log("Install accepted!")
        } else {
          console.log("Install denied!")
        }
      });
    };
  }
};
</script>

<style lang="scss">
html {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
h1#install-prompt{
  position: fixed;
  bottom: 0;
}
#app{
  height: 100vh;
}
.bg-main-black {
  background-color: #20232D;
}
.bg-main-green{
  background-color: #1f8a65;
  :hover{
    background-color: #1f8a65d7;
  }
}
</style>
