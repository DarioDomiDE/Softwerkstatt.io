<template>
  <curved class="gradient min-h-0 lg:min-h-screen">
    <div class="container max-w-screen-2xl mx-auto text-white">
      <div class="float-none lg:float-right w-full lg:w-2/5 text-center">
        <img src="./../assets/img/intro_1.png" alt="" class="mx-auto max-w-sm md:max-w-md lg:max-w-full">
      </div>
      <div class="float-none lg:float-left w-full lg:w-3/5 px-4 md:px-0">
        <h1 class="mb-8 lg:mb-16 text-5xl md:text-6xl lg:text-7xl pr-0 lg:pr-32">Wir haben eine Vision: Unser Handwerk und Ihre Software.</h1>
        <span class="inline xl:block">Ahoi! Wir setzen Segel und lichten den Anker auf dem Weg zu neuen Ufern! </span>
        <span class="inline xl:block">Wir entwickeln Software für Ihre digitalen Prozesse und Geschäftsmodelle.</span>
        <CtaButton class="mt-8 lg:mt-16 block hover:text-white" @clicked="onClickCta">Jetzt Segel setzen für neuen Kurs</CtaButton>
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
      this.$emit('clicked', '')
    }
  }
}
</script>

<style scoped>
span {
  font-size: 1.5em;
}
/* h1 {
  font-size: 5.0em;
} */
.gradient {
  background: linear-gradient(45deg, #36c1c7 0%, #67dfc4 90%) !important;
}
#introText .part1,
#introText:hover .part2 {
  display: block;
}
#introText .part2,
#introText:hover .part1 {
  display: none;
}

#introText {
  border: 1px solid transparent;
  transition: all 0.6s;
  display: inline-block;
}

#introText:hover {
  border-color: #fff;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 3px;
  margin: calc(4rem - 10px) 0 calc(4rem - 10px) -20px;
  padding: 10px 20px;
}
#introText .part2 {
}

</style>