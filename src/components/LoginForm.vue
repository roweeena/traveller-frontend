<template>
  <div class="login">
    <form @submit.prevent="login">
    <label>
     Email: <input v-model="email" type="text" name="email">
    </label>
    <label>
      Password: <input v-model="password" type="password" name="password">
    </label>
    <button>Login</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Login',
data() {
  return {
    email: '',
    password: '',
    errors: ''
  }
},
methods: {
  login(){
    // const config = {email: this.email, password:this.password}
    axios.post(`http://localhost:3000/login`,{
      email: this.email,
      password: this.password
    })
    .then(response  => console.log(response))
    .catch(error => console.log(error));
  }
 }
}
</script>

<style lang="css" scoped>
</style>
