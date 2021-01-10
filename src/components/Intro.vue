<template>
  <curved class="gradient min-h-screen">
    <div class="container max-w-screen-xl mx-auto text-white">
      <h1 class="mt-8">„Wir haben eine Vision:<br /><span class="smaller">Unser Handwerk und Ihre Software.“</span></h1>
      <p class="my-16">Ahoi! Segel setzen! Anker lichten! Auf zu neuen Ufern...<br />
        Wir entwickeln Software für Ihre digitalen Prozesse und Geschäftsmodelle.<br />
        Wir sind Macher. Ein Zusammenschluss leidenschaftlicher Softwareentwickler.</p>
      <button class="bg-white rounded-full shadow-md hover:shadow-xl transform scale-101 focus:outline-none transition-all font-semibold px-8 py-3 text-xl text-gray-700" v-on:click="onClickCta">
        UNVERBINDLICH ANFRAGEN <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" height="20" width="20" class="inline-block align-text-top"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 5l7 7-7 7M5 5l7 7-7 7" /></svg>
      </button>
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