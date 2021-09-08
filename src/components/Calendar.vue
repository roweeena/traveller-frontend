<template lang="html">
  <form  @submit.prevent>
    <div class="calendar">
      <h3>Select your dates</h3>
      <v-date-picker
        v-model="range"
        mode="date"
        :masks="masks"
        is-range
      >
        <template v-slot="{ inputValue, inputEvents, isDragging }">
           <div class="date-picker">
             <div class="toandfrom">
            From:  <input
                :class="isDragging ? 'text-gray-600' : 'text-gray-900'"
                :value="inputValue.start"
                v-on="inputEvents.start"
              />
              To: <input
                :class="isDragging ? 'text-gray-600' : 'text-gray-900'"
                :value="inputValue.end"
                v-on="inputEvents.end"
              />
            </div>
          </div>
        </template>
      </v-date-picker>
      <button type="button" name="button" @click="saveDates">Save</button>
    </div>
  </form>

</template>

<script>
export default {
  name: 'Calendar',
  props: {
      default(){
        return {
          start: '',
          end:''
        }
      }
    },
  data (){
    return {
      range: {
        start: new Date(),
        end: new Date(),
      },
      masks: {
        input: 'YYYY-MM-DD',
      },
    };
  },

  methods: {
    saveDates(){
      this.start = new Date();
      this.end = new Date();
      this.$emit('saveDates', this.start, this.end)
    }
  }
}
</script>

<style scoped>
  .calendar {
    margin-top: 5rem;
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
    width: 5rem;
    height: 2.5rem;
    border-radius: 0.25em;
    color: white;
    border: 1px solid white;
    margin-top: 10em;
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
