<template>
  <div>
    <div>
      <h2>Search for a place</h2>
      <GmapAutocomplete
        @place_changed='setPlace'
      />
      <button
        @click='addMarker'
      >
        Add
      </button>
    </div>
    <br>
    <GmapMap
      :center='center'
      :zoom='12'
      style='width:100%;  height: 400px;'
    >
      <GmapMarker
        :key="index"
        v-for="(m, index) in markers"
        :position="m.position"
        @click="center=m.position"
      />
    </GmapMap>
  </div>
</template>

<script>
export default {
  name: 'GoogleMap',
  data() {
    return {
      center: { lat: 45.508, lng: -73.587 },
      currentPlace: null,
      markers: [],
      places: [],
    }
  },
  mounted() {
    this.geolocate();
  },
  methods: {
    setPlace(place) {
      this.currentPlace = place;
    },
    addMarker() {
      if (this.currentPlace) {
        const marker = {
          lat: this.currentPlace.geometry.location.lat(),
          lng: this.currentPlace.geometry.location.lng(),
        };
        this.markers.push({ position: marker });
        this.places.push(this.currentPlace);
        this.center = marker;
        this.currentPlace = null;
      }
    },
    geolocate: function() {
      navigator.geolocation.getCurrentPosition(position => {
        this.center = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        };
      });
    },
  },
};
</script>

<style lang="css" scoped>
h2 {
  color:white;
  text-shadow: 2px 2px #000;
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
