<template>
  <div class="home">
    <div class="home_search">
      <HomeButtons />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HomeButtons from '@/components/HomeButtons.vue'

export default {
  name: 'Home',
  components: {
    HomeButtons
  }
}
</script>

<style scoped>
  .home {
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

  .home_search{
    display:flex;
    justify-content: center;
    position: absolute;
    top: 25%;
    left: 25%;
    right: 25%;
  }


</style>
