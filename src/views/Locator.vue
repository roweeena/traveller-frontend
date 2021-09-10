<template>
  <div class="locate">
  <GoogleMap />
  </div>
</template>

<script>
import GoogleMap from '@/components/GoogleMap.vue'
export default {
  name: "Locator",
  components: {
    GoogleMap
  }
}
</script>

<style lang="css" scoped>
.locate{

  margin: 0 auto;
  padding: 10px;
  width: 95vw;
  height: 100%;
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
