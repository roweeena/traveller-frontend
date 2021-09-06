<template>
  <div class="search">
    <h1><img src="../assets/pinpoint.png" alt="pinpoint"> Where are we going?</h1>
    <form>
      <label>
       From: <input type="search" name="search" placeholder="Sydney">
      </label>
      <label>
        To: <input type="search" name="search" placeholder="Orange">
      </label>
      <br>
      <button>Go!</button>
    </form>


  </div>
</template>

<script>
export default {
  name: 'Search'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.search{
  color:white;
  text-shadow: 2px 2px #000;
}
label {
  display:inline-block;
  margin: 10px;
}
input, button {
  width: 10rem;
  height: 2rem;
}
button{
  background-color: rgba(115, 194,251 ,0.7);
  width: 5rem;
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

img {
  width: 10%;
}


</style>
