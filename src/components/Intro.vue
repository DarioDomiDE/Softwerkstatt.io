<template>
  <curved class="gradient min-h-screen">
    <div class="container max-w-screen-2xl mx-auto text-white grid grid-cols-5">
      <div class="col-span-3 pr-8">
        <h1 class="mt-8">„Wir haben eine Vision: <span class="smaller">Unser Handwerk und Ihre Software.“</span></h1>
        <div id="introText" class="my-16">
          <p class="part1">Ahoi! Segel setzen... Anker lichten! Auf zu neuen Ufern.<br />
            Wir entwickeln Software für Ihre digitalen Prozesse und Geschäftsmodelle.<br />
            Wir sind Macher. Ein Zusammenschluss leidenschaftlicher Softwareentwickler.</p>
          <p class="part2">Ahoi! Segel setzen... Wir sind keine klassische Digitalagentur!<br />
            Wir sind Techies im Herzen, ein Team von Software-Entwicklern und Freelancern,<br />
            um gemeinsam von der Idee zum Produkt unsere Kunden besser zu unterstützen.</p>
        </div>
        <CtaButton class="block" @clicked="onClickCta"></CtaButton>
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
  font-size: 1.4em;
}
h1 {
  font-size: 5.8em;
}
h1 span.smaller {
  font-size: 0.75em;
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