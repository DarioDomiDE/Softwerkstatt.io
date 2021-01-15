<template>
  <curved class="min-h-screen bg" :skipBorderBottom="true" id="bg2">
    <div class="container max-w-screen-xl pb-4">
      <h2>Wie wir arbeiten.</h2>
      <img class="mx-auto" src="./../assets/img/how_to.png" alt="">
      <CtaButton class="my-4"></CtaButton>
    </div>
  </curved>
</template>

<script>
import Curved from './Curved.vue'
import CtaButton from './CtaButton.vue'
export default {
  name: 'Howto',
  components: {
    Curved,
    CtaButton
  }
}
</script>

<style scoped>
#bg2 {
  background-color: rgba(243, 244, 246, 1);
}
</style>