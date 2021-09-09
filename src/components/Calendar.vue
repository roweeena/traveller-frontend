<template lang="html">
  <form  @submit.prevent class="calendar">
    <div class="calendar_form">
    <div class="calendar__wrapper ">
      <h2 class="class__title">Where are we going?</h2>
        <div class="calendar_container">
          <input type="text" name="location" v-model="location" placeholder="Enter a location" class="calendar_input">
          <h3 class="class__title">Select your dates</h3>
          <v-date-picker
            v-model="range"
            mode="date"
            :masks="masks"
            is-range
          >
            <template v-slot="{ inputValue, inputEvents, isDragging }">
                <div class="calendar_picker">

                <p>From:</p>  <input
                    :class="isDragging ? 'text-gray-600' : 'text-gray-900' " class="calendar_input"
                    :value="inputValue.start"
                    v-on="inputEvents.start"
                  />
                  <p>To:</p> <input
                    :class="isDragging ? 'text-gray-600' : 'text-gray-900'" class="calendar_input"
                    :value="inputValue.end"
                    v-on="inputEvents.end"
                  />
                  </div>
                </template>
              </v-date-picker>
            </div>
          </div>

      <button type="button" name="button" @click="saveDates">Save</button>
    </div>
  </form>

</template>

<script>
import axios from 'axios'
export default {
  name: 'Calendar',
  data (){
    return {
      location: '',
      range: {
        start: new Date(),
        end: new Date()
      },
      masks: {
        input: 'YYYY-MM-DD',
      },
    };
  },

  methods: {
    saveDates(){
    axios.post(`${process.env.VUE_APP_ROOT_API}/trips`, {
      start: this.range.start,
       end: this.range.end,
        uid: localStorage.getItem('uid'),
        location: this.location})
       .then(response => {
         console.log(response.data)
         this.$router.push(`/trip/` + response.data.id)
       })
      // this.$router.push('/trip')
      .catch(error => console.log(error))
    }
  }
}
</script>

<style scoped>

  h3, h2, p {
    color:white;
    text-shadow: 2px 2px #000;
  }
  .calendar {
    margin-top: 5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  .calendar__wrapper{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  .calendar_picker{
    display:inline-flex;
  }
  .calendar_input{
    padding: 0.5rem;
  }

  .class__title{
    margin:2rem;
  }

  .to-and-from {
    margin: 2rem;
  }
  .date-picker {
    display:flex;
    justify-content: center;
    position: absolute;
    top: 25%;
    left: 25%;
    right: 25%;
  }

  button{
    background-color: rgba(255,0,0 ,0.6);
    width: 50%;
    height: 2.5rem;
    border-radius: 0.25em;
    color: white;
    border: 1px solid white;
    margin-top: 5em;
  }

  button:hover{
    background-color: rgba(255,0,0 ,1);
  }

  button:active {
    background-color: rgb(255,0,0);
    box-shadow: 0 2px #fff;
    transform: translateY(4px);
  }


</style>
