<template lang="html">
  <div class="bucketlist">
    <GoogleMap />
    <ToDo/>
  </div>

</template>

<script>
import GoogleMap from '@/components/GoogleMap.vue'
import ToDo from '@/components/ToDo.vue'
export default {
  name:'Visit',
  components: {
    ToDo,
    GoogleMap
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
</style>
