<template lang="html">
  <div class="login">
  <h2>Login</h2>
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
</style>
