<template>
  <div class="text-gray-200">
    <component :is="layout">
      <router-view :layout.sync="layout" :key="$route.fullPath"/>
      <a style="cursor:pointer" :style="{'display': installBtn}" @click="installer()">
        <h1 id="install-prompt">Install!</h1>
      </a>
    </component>
  </div>
</template>

<script>

export default {
  name: 'App',
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
</style>
