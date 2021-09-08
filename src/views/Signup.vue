<template lang="html">
  <div class="register">
    <SignupForm />
  </div>

</template>

<script>
import SignupForm from '@/components/SignupForm.vue'
export default {
  name: 'Signup',
  components: {
    SignupForm
  }
}
</script>

<style lang="css" scoped>
.register {
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
