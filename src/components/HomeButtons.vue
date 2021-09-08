<template>
  <div class="search">
    <h1><img src="../assets/pinpoint.png" alt="pinpoint"> Let's go on a roadtrip!</h1>
      <button type="button" name="button" @click="createTrip">Create a trip</button>
      <button type="button" name="button" @click="getDirections">Get Directions</button>
      <button type="button" name="button" @click="calculate">Cost Calculator</button>


  </div>
</template>

<script>
export default {
  name: 'HomeButtons',
  methods: {
    createTrip(){
   this.$router.push('/pick-dates-calendar');
 },
    getDirections(){
   this.$router.push('/directions');
 },
    calculate(){
   this.$router.push('/');
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.search{
  color:white;
  text-shadow: 2px 2px #000;
}

button{
  background-color: rgba(115, 194,251 ,0.7);
  width: 10rem;
  height: 2.5rem;
  border-radius: 0.25em;
  color: white;
  margin: 10px;
  border: 1px solid white;
}
button:hover{
  background-color: rgba(115, 194,251 ,1);
}

button:active {
  background-color: rgb(115, 194,251);
  box-shadow: 0 2px #fff;
  transform: translateY(4px);
}

img {
  width: 10%;
}

</style>
