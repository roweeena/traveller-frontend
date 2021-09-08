<template lang="html">
  <div class="trip">
    <div class="text">
      <h2>Your trip starts here </h2>
      Dates: {{trip.trip.start}} - {{trip.trip.end}}
      <p><a href="/directions">Directions</a></p>
      <p><a href="/where-to-visit">What to see</a></p>
      <p><a href="/checklist">Your checklist</a></p>
      <p><a href="/calculator">Cost Calculator</a></p>
    </div>
  </div>
</template>

<script>
import { api } from '../helpers/helpers';
export default {
  name: 'show',
  data (){
    return {
        trip:{}
    }
  },
  async mounted(){
    this.trip = await api.getTrip(this.$route.params.id)
  }

}


</script>

<style lang="css" scoped>
.trip{
  color: white;
  text-shadow: 2px 2px #000;
  margin: 0 auto;
  padding: 10px;
  width: 95vw;
  height: 100vh;
  background: url('../assets/homepage.jpg')
  no-repeat center center
  fixed;
-webkit-background-size: cover;
-moz-background-size: cover;
-o-background-size: cover;
background-size: cover;
position: relative;
}

.text {
  margin-top: 7rem;
}

a {
  text-decoration: none;
  color: white;
}

a:hover{
  text-decoration: underline;
}
</style>
