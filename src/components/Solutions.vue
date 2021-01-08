<template>
  <curved class="min-h-screen" v-bind:skipBorderBottom="true">
    <div class="container max-w-screen-lg">
      <h2>How-To</h2>
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