<template lang="html">
  <div class="">
    <GoogleMap />
    <ToDo/>
  </div>

</template>

<script>
import GoogleMap from '@/components/GoogleMap.vue'
import ToDo from '@/components/ToDo.vue'
export default {
  name:'Visit',
  components: {
    ToDo,
    GoogleMap
  }
}
</script>

<style lang="css" scoped>
</style>
