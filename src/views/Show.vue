<template lang="html">
  <div class="trip">
    <div class="text">
      <h2>Your trip starts here </h2>
      <div class="info">
        Dates: {{trip.start}} - {{trip.end}}
        <p>Where: {{trip.location}}</p>
      </div>
      <div class="buttons__wrapper">
        <button><a href="/directions">Directions</a></button>
        <button><a href="/checklist">Your checklist</a></button>
        <button><a href="/where-to-visit">What to see/do</a></button>
        <button><a href="/calculator">Cost Calculator</a></button>
      </div>
    </div>
  </div>
</template>

<script>
import { api } from '../helpers/helpers';
export default {
  name: 'show',
  data (){
    return {
        trip:{},
        checklist:[]
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
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;
}

.text {
  margin-top: 7rem;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: start;
}

a {
  text-decoration: none;
  color: white;
}

a:hover{
  text-decoration: underline;
}

button{
  text-align: center;
  background-color: rgba(115, 194,251 ,0.7);
  width: 100%;
  height: 2.5rem;
  border-radius: 0.25em;
  color: white;
  border: 1px solid white;
  margin: 10px;
}
button:hover{
  background-color: rgba(115, 194,251 ,1);
}

button:active {
  background-color: rgb(115, 194,251);
  box-shadow: 0 2px #fff;
  transform: translateY(4px);
}

.buttons__wrapper{
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 100%;
}


.info{
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  align-items: flex-start;

}
</style>
