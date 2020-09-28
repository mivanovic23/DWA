<template>
  <div id="app">
    <div class="navbar">
      <a class="active" href="/"><i class="fa fa-fw fa-home"></i> Home</a>
      <a href="/signup"><i class="fa fa-fw fa-user"></i> Signup</a>
      <a href="/login"><i class="fa fa-fw fa-user"></i> Login</a>
    </div>
    <Workout />
  </div>
</template>

<script>
import Workout from './components/Workout.vue'

export default {
  name: 'App',
  components:{
      Workout
    }
  }
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
}
.navbar {
  width: 100%;
  background-color: #555;
  overflow: auto;
}
.navbar a {
  float: left;
  text-align: center;
  padding: 12px;
  color: white;
  text-decoration: none;
  font-size: 17px;
}
.navbar a:hover {
  background-color: #000;
}
.topnav a.active {
  background-color:rgb(0, 247, 255);
  color: rgb(0, 0, 0);
}
@media screen and (max-width: 500px) {
  .navbar a {
    float: none;
    display: block;
  }
}
</style>
