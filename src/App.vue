<template>
  <div>
    <component :is="layout">
      <router-view :layout.sync="layout"/>
      <a style="cursor:pointer" :style="{'display': installBtn}" @click="installer()">
        <h1>Install!</h1>
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
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
