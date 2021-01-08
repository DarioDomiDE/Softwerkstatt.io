<template>
  <curved class="min-h-screen" v-bind:skipBorderBottom="true">
    <div class="container max-w-screen-xl">
      <h2>How-To</h2>
      <img class="mx-auto" src="./../assets/img/how_to.png" alt="">
      <button class="bg-white rounded-full shadow-md hover:shadow-xl transform scale-101 focus:outline-none transition-all font-semibold px-8 py-3 text-xl text-gray-700 my-4" v-on:click="onClickCta">UNVERBINDLICH ANFRAGEN &raquo;</button>
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