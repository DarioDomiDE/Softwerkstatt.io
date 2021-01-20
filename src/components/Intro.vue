<template>
  <curved class="gradient min-h-screen">
    <div class="container max-w-screen-2xl mx-auto text-white grid grid-cols-5">
      <div class="col-span-3 pr-32">
        <h1>Wir haben eine Vision: Unser Handwerk und Ihre Software.</h1>
        <p class="my-16">
          Ahoi! Wir setzen Segel und lichten den Anker auf dem Weg zu neuen Ufern!<br />
          Wir entwickeln Software für Ihre digitalen Prozesse und Geschäftsmodelle.
        </p>
        <CtaButton class="block hover:text-white" @clicked="onClickCta">Jetzt Segel setzen für Ihren Kurs</CtaButton>
      </div>
      <div class="col-span-2">
        <img src="./../assets/img/intro_1.png" alt="" class="right">
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
p {
  font-size: 1.5em;
}
h1 {
  font-size: 5.0em;
}
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