<template>
  <curved class="gradient min-h-screen">
    <div class="container max-w-screen-lg mx-auto text-white">
      <h1 class="mt-8">„Wir haben eine Vision:<br /><span class="smaller">Unser Handwerk und Ihre Software.“</span></h1>
      <p class="my-16">Ahoi! Segel setzen! Anker lichten! Auf zu neuen Ufern...<br />
        Wir entwickeln Software für Ihre digitalen Prozesse und Geschäftsmodelle.<br />
        Wir sind Macher. Ein Zusammenschluss leidenschaftlicher Softwareentwickler.</p>
      <button class="bg-white hover:bg-grey-200 active:bg-green-700 cursor-pointer
      rounded-full shadow font-semibold px-8 py-3 inline-block transition text-xl text-gray-800" v-on:click="onClickCta">UNVERBINDLICH ANFRAGEN &raquo;</button>
    </div>
  </curved>
</template>


<script>
import Curved from './Curved.vue'
export default {
  name: 'Intro',
  components: {
    Curved
  },
  methods: {
    onClickCta: () => {
      console.log("clicked");
    }
  }
}
</script>

<style scoped>
p {
  font-size: 1.4em;
}
h1 {
  font-size: 4.8em;
}
h1 span.smaller {
  font-size: 0.75em;
}
.gradient {
  background: linear-gradient(45deg, #36c1c7 0%, #67dfc4 90%) !important;
}
</style>