<template lang="html">
  <div class="login">
    <div class="login_wrapper">
      <h2>Login</h2>
    <form @submit.prevent="login">
    <label>
     Email: <input v-model="email" type="text" name="email">
    </label>
    <label>
      Password: <input v-model="password" type="password" name="password">
    </label>
    <br>
    <button>Login</button>
    </form>
    </div>

  </div>
</template>

<script>
// import {api} from '../helpers/userHelpers.js'
import axios from 'axios'
export default {
  name:'Login',
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
      axios.post(`${process.env.VUE_APP_ROOT_API}/login`,{
        email: this.email,
        password: this.password
      })
      .then(response  => {
        // debugger;
        if (!response.data.error){
          console.log(response.data)
          localStorage.setItem("token", response.data.token);
          localStorage.setItem("uid", response.data.localId);
          this.$emit("login");
          this.$router.push('/');
        } else {
          console.log(response.data)
          this.$alert("Please enter your email/password again");
        }
      })
      .catch(error => console.log(error));
      }
    }
  }
</script>

<style lang="css" scoped>
.login{
  color: white;
  text-shadow: 2px 2px #000;
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

.login_wrapper {
  margin-top: 40vh;
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

label {
  padding: 10px;
}
</style>
