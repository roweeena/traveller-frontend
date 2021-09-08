<template lang="html">
  <div class="bucketlist">
    <div class="map">
      <GooglePlaces />
    </div>
    <div class="list">
      <Wishlist/>
    </div>
  </div>

</template>

<script>
import GooglePlaces from '@/components/GooglePlaces.vue'
import Wishlist from '@/components/Wishlist.vue'
export default {
  name:'Visit',
  components: {
    Wishlist,
    GooglePlaces
  }
}
</script>

<style lang="css" scoped>
.bucketlist{
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

.bucketlist {
  display:flex;
  flex-wrap: wrap;
}

.map{
  flex: 2;
  margin: 12px;
}

.list{
  text-align: left;
  margin: 12px;
}
</style>
