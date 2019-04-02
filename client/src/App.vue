<template>
  <div id="app">
    <div class="main-menu">
      <router-link to="/">Base de datos</router-link>
      <router-link to="/basic">3D</router-link>
    </div>
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
  text-decoration: none;
  font-size: 24px;
  color: lightcoral;
}
</style>
