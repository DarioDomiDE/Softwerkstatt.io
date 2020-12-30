<template>
  <curved v-bind:skipBorderTop="true">
    <div class="container pt-32 pb-32">
      <img class="mx-auto" src="./../assets/img/how_to.png" alt="">
    </div>
  </curved>
</template>

<script>
import Curved from './Curved.vue'
export default {
  name: 'Solutions',
  components: {
    Curved
  }
}
</script>

<style scoped>
</style>