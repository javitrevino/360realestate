<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <hr>

    <router-link to="/">Mongo</router-link>
    <router-link to="/basic">Vue</router-link>
    <router-link to="/test">Test</router-link>

    <router-view></router-view>
  </div>
</template>
<script>
import PostComponent from "./components/PostComponent.vue";
import BasicComponent from "./components/BasicComponent.vue";

export default {
  name: "app",
  components: {
    PostComponent,
    BasicComponent
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

#menu {
  width: 300px;
  margin: 100px;
}

a {
  margin: 10px;
}
</style>
