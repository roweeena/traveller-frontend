<template>
  <div class="login">
    <h2>Register</h2>
    <form @submit.prevent="create_user">
    <label>
     Name: <input v-model="name" type="text" name="email">
    </label>
    <label>
     Email: <input v-model="email" type="text" name="email">
    </label>
    <br>
    <label>
      Password: <input v-model="password" type="password" name="password">
    </label>
    <label>
      Confirm password: <input v-model="password_confirmation" type="password" name="password_confirmation">
    </label>
    <br>
    <button>Sign up</button>
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
.login{
  color:white;
  text-shadow: 2px 2px #000;
  margin-top: 7rem;
}

button{
  background-color: rgba(115, 194,251 ,0.7);
  width: 6rem;
  height: 2.5rem;
  border-radius: 0.25em;
  color: white;
  margin: 10px;
  border: 1px solid white;
}
button:hover{
  background-color: rgba(115, 194,251 ,1);
}

button:active {
  background-color: rgb(115, 194,251);
  box-shadow: 0 2px #fff;
  transform: translateY(4px);
}
</style>
