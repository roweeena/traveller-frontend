<template>
  <div class="top">
    <h3>How do we get there?</h3>
    <label>
        <gmap-autocomplete
          @place_changed="setPlace" placeholder="From"/>
        <button @click="addMarker(0)">Add</button>
      </label>
    <label>
        <gmap-autocomplete
          @place_changed="setPlace" placeholder="To" />
        <button @click="addMarker(1)">Add</button>
      </label>
      <div class="map">
      <br />
      <br />
      <div class="map-render">
    <gmap-map
      :zoom="14"
      :center="center"
      style="width:100%; height: 400px; margin: 10px"
      >
      <DirectionsRenderer
        travelMode="DRIVING"
        :origin="startLocation"
        :destination="endLocation"
        v-on:steps="setSteps"
      />
  </gmap-map>
  </div>
  <br>
  <div class="instructions">
    <p v-for="step in steps" v-bind:key="step" v-html="step.instructions">
    </p>
  </div>
  </div>
    </div>
</template>

<script>
import DirectionsRenderer from "@/components/DirectionsRenderer";
export default {
  name: "GoogleMap",
    components: {
      DirectionsRenderer
    },
  data(){
    return {
      center: { lat: 45.508, lng: -73.587 },
      currentPlace: null,
      markers: [],
      places: [],
      startLocation: null,
      endLocation: null,
      steps:[]

    };
  },

  mounted(){
    this.geolocate();
  },
  methods: {
    setPlace(place) {
      this.currentPlace = place;
    },
    setSteps(steps){
      this.steps=steps;
    },
    addMarker(index) {
      const marker = {
        lat: this.currentPlace.geometry.location.lat(),
        lng: this.currentPlace.geometry.location.lng(),
      };
      if (index === 0) this.startLocation = marker;
      if (index === 1) this.endLocation = marker;
      this.center = marker;
    },
    geolocate: function(){
      navigator.geolocation.getCurrentPosition(position => {
        this.center = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
          };
      });
    }
  }
}
</script>

<style lang="css" scoped>
.top{
  margin-top: 5rem;
}
.map {
  display:flex;
  flex-wrap: wrap;
}

.map-render{
  flex: 2;
  margin: 12px;
}

.instructions{
  text-align: left;
  margin: 12px;
}
p {
  margin:0;
}
button{
  background-color: rgba(115, 194,251 ,0.7);
  width: 5rem;
  height: 2rem;
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
</style>
