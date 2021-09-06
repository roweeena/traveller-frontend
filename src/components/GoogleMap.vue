<template>
  <div class="map">
    <h3>How to get there</h3>
    <label>
        <gmap-autocomplete
          @place_changed="setPlace">
        </gmap-autocomplete>
        <button @click="addMarker">Add</button>
      </label>
      <br>
    <gmap-map
      :zoom="14"
      :center="center"
      style="width: 100%; height: 600px;"
      >
      <gmap-marker
        :key="index"
        v-for="(m, index) in markers"
        :position="m.position"
        @click = "center=m.position"
        >
      </gmap-marker>
  </gmap-map>
  </div>
</template>

<script>
export default {
  name: "GoogleMap",
  data(){
    return {
      center:{
        lat: 151.2093,
        lng: 33.8688
      },
      markers: [],
      places: [],
      currentPlace: null

    };
  },

  mounted(){
    this.geolocate();
  },
  methods: {
    setPlace(place){
      this.currentPlace = place;
    },
    addMarker(){
      if(this.currentPlace){
        const marker= {
          lat: this.currentPlace.geometry.location.lat(),
          lng: this.currentPlace.geometry.location.lng()
        };
        this.markers.push({ position: marker });
        this.places.push(this.currentPlace);
        this.center = marker;
        this.currentPlace = null;
      }
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
</style>
