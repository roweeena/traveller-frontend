<template lang="html">
  <div class="login">
  <LoginForm />
  </div>
</template>

<script>
import LoginForm from '@/components/LoginForm.vue';
// import {api} from '../helpers/userHelpers.js'
export default {
  name:'Login',
  components: {
    LoginForm
  }
}
</script>

<style lang="css" scoped>
.login{
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
