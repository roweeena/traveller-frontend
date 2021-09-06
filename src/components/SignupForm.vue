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
  name: 'Login',
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
    axios.post(`http://localhost:3000/users`,{
      name: this.name,
      email: this.email,
      password: this.password
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
