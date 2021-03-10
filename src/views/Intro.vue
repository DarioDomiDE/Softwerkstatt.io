<template>
  <curved class="gradient min-h-0 lg:min-h-screen" v-bind:skipBorderTop="isDesktop" v-bind:usePaddingTop="true" id="intro">
    <div class="container xl:max-w-screen-lg 2xl:max-w-screen-2xl mx-auto text-white lg:mt-24 xl:mt-16 clearfix">
      <div class="float-none lg:float-right w-full lg:w-1/3 pb-4 text-center px-4 md:px-0">
        <img src="./../assets/img/intro.png" alt="" class="mx-auto sm:max-w-sm md:max-w-md lg:max-w-full">
      </div>
      <div class="float-none lg:float-right 2xl:float-left w-full lg:w-3/5 px-4 md:px-0">
        <span class="block font-bold mb-4 sm:mb-8 lg:mb-16 text-5xl md:text-6xl lg:text-7xl 2xl:text-8xl text-white" id="headline"><span>Wir haben eine Vision:</span> Unser Handwerk und Ihre Software.</span>
        <span class="inline md:block text-lg lg:text-xl lg:text-2xl">Ahoi! Wir setzen Ihre Segel und lichten den Anker auf dem Weg zu neuen Ufern! </span>
        <span class="inline md:block text-lg lg:text-xl lg:text-2xl ">Wir entwickeln Software für Ihre digitalen Prozesse und Geschäftsmodelle.</span>
        <CtaButton class="mt-4 sm:mt-8 lg:mt-16 block border-white text-gray-700 hover:text-white" @clicked="onClickCta">Segel setzen für neuen Kurs</CtaButton>
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
  data: () => {
    return {
      isDesktop: true
    }
  },
  methods: {
    onClickCta() {
      this.$emit('clicked', 'Segel setzen')
    },
    onResize() {
      this.isDesktop = window.innerWidth >= 1024;
    }
  },
  created() {
    window.addEventListener("resize", this.onResize);
  },
  unmounted() {
    window.removeEventListener("resize", this.onResize);
  }
}
</script>

<style scoped>
#intro {
  margin-top: 100vh;
}
.gradient {
  background: linear-gradient(45deg, #36c1c7 0%, #67dfc4 90%) !important;
}
@media (min-width: 1024px) {
  .gradient {
  mask-image: url('./../assets/img/border_black2.png');
  mask-size: cover;
  }
}
span span {
  -webkit-text-fill-color: transparent;
  -webkit-text-stroke: 2px #ffffff;
  background-clip: text;
  font-size: 1.0em;
  line-height: 1.0em;
}
@media (max-width: 1024px) {
  #headline {
    line-height: 1.2em;
  }
}
@media (max-width: 640px) {
  #headline {
    line-height: 1.1em;
  }
}
.clearfix::after {
  content: "";
  clear: both;
  display: table;
}
</style>