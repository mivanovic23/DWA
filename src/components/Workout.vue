<template>
  <div class="container">
    <h1> Workouts </h1>
    <div class="create-workout">
      <label>Workout title:</label>
      <input v-model="naziv" type="text" class="form-control rounded-0" id="create-workout" placeholder="Input workout name">
      <label>Description:</label>
      <textarea type="text" class="form-control rounded-0" rows="10" v-model="text" placeholder="Input description"></textarea>
      <button v-on:click="createWorkout">Input workout</button>
    </div>
    <hr>
    <p class="error" v-if="error"> {{error}}</p>
    <div class="workouts-container">
    <div class="collection with-header">
      <div class= "collection-item"
        v-for="(workout, index) in workouts"
        v-bind:item="workout"
        v-bind:index="index"
        v-bind:key="workout._id"
        v-on:dblclick="deleteWorkout(workout._id)"
        >
        <h3 class="title-display"> {{workout.naziv}}  {{`${workout.createdAt.getDate()}/${workout.createdAt.getMonth()}/${workout.createdAt.getFullYear()}`}}</h3>
        <p class="content-display" style="white-space: pre-line;"> {{workout.text}} </p>
  </div>
  </div>
  </div>
  </div>
</template>

<script>

import WorkoutService from '../WorkoutService';

export default {
  name: 'Workout',
  data() {
    return {
      workouts: [],
      error: '',
      text: '',
      naziv: ''
    }
  },
  async created(){
    try{
      this.workouts = await WorkoutService.getWorkouts();
    }catch (err) {
      this.error = err.message;
    }
  },
  methods: {
    async createWorkout(){
      await WorkoutService.insertWorkout(this.naziv,this.text);
      this.workouts = await WorkoutService.getWorkouts();
    },
    async deleteWorkout(id){
      await WorkoutService.deleteWorkout(id);
      this.workouts = await WorkoutService.getWorkouts();
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
input[type=text] {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  box-sizing: border-box;
  border-radius: 12px;
}
textarea[type=text]{
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  box-sizing: border-box;
  border-radius: 12px;
}
button{
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  box-sizing: border-box;
  background-color:#555;
  font-size: 20px;
  color: whitesmoke;
  border-radius: 12px;
}
.title-display {
  padding: 20px;
  text-align: left;
  background:gray;
  color: white;
  font-size: 30px;
}
</style>
