<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/register">Register</router-link> |
      <router-link to="/login" ref="loginText" >{{text}}</router-link>
    </div>
    <router-view @login="login"/>

    <div class="home">
  </div>
  </div>
</template>

<script>
export default{
  data() {
    return{
      text: 'Login'
    }
  },
  methods: {
    login(){
      console.log('something happened')
        this.text = "Log out";
    }
  },
  mounted() {
    // debugger
    // localStorage.getItem("token") ? "Login" : "Logout";
      if ( localStorage.getItem("token")){
        console.log("does this work?")
          this.text = "Log out";
    }
  },
  watch: {
    text: function(newValue, oldValue){
      console.log("hello")
      newValue = oldValue;
    }
  }
}

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 10px;
  text-align: right;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}


</style>
