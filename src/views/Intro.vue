<template>
  <curved class="gradient min-h-0 lg:min-h-screen" v-bind:skipBorderTop="true" v-bind:usePaddingTop="true" id="intro">
    <div class="container xl:max-w-screen-lg 2xl:max-w-screen-2xl mx-auto text-white lg:mt-16 xl:mt-0">
      <div class="float-none lg:float-right w-full lg:w-1/3 pt-16 sm:pt-0 text-center">
        <img src="./../assets/img/intro_1.png" alt="" class="mx-auto sm:max-w-sm md:max-w-md lg:max-w-full">
      </div>
      <div class="float-none lg:float-right 2xl:float-left w-full lg:w-3/5 px-4 md:px-0">
        <h1 class="mb-8 lg:mb-16 text-5xl md:text-6xl lg:text-8xl text-white"><span>Wir haben eine Vision:</span> Unser Handwerk und Ihre Software.</h1>
        <span class="inline md:block text-lg lg:text-xl lg:text-2xl">Ahoi! Wir setzen Segel und lichten den Anker auf dem Weg zu neuen Ufern! </span>
        <span class="inline md:block text-lg lg:text-xl lg:text-2xl ">Wir entwickeln Software für Ihre digitalen Prozesse und Geschäftsmodelle.</span>
        <CtaButton class="mt-8 lg:mt-16 block hover:text-white" @clicked="onClickCta">Segel setzen für neuen Kurs</CtaButton>
      </div>
    </div>
  </curved>
</template>

<script>
import Curved from './Curved.vue'
import CtaButton from './CtaButton.vue'
export default {
  name: 'Intro',
  components: {
    Curved,
    CtaButton
  },
  methods: {
    onClickCta() {
      this.$emit('clicked', 'Segel setzen')
    }
  }
}
</script>

<style scoped>
#intro {
  margin-top: 100vh;
}
.gradient {
  background: linear-gradient(45deg, #36c1c7 0%, #67dfc4 90%) !important;
  mask-image: url('./../assets/img/border_black2.png');
  mask-size: cover;
}
h1 span {
  -webkit-text-fill-color: transparent;
  -webkit-text-stroke: 2px #ffffff;
  background-clip: text;
  font-size: 1.0em;
  line-height: 1.0em;
}
</style>