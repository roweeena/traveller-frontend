<template>
  <div class="login">
    <form @submit.prevent="create_user">
    <label>
     Name: <input v-model="name" type="text" name="email">
    </label>
    <label>
     Email: <input v-model="email" type="text" name="email">
    </label>
    <label>
      Password: <input v-model="password" type="password" name="password">
    </label>
    <label>
      Confirm password: <input v-model="password_confirmation" type="password" name="password_confirmation">
    </label>
    <button>Login</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'SignupForm',
data() {
  return {
    name: '',
    email: '',
    password: '',
    password_confirmation: '',
    errors: ''
  }
},
methods: {
  create_user(){
    // const config = {email: this.email, password:this.password}
    axios.post(`${process.env.VUE_APP_ROOT_API}/register`,{
      name: this.name,
      email: this.email,
      password: this.password,
      password_confirmation: this.password_confirmation
    })
    .then(response  => response.status,
    this.$router.push('/'))
    .catch(error => console.log(error));
  }
 }
}
</script>

<style lang="css" scoped>
</style>
