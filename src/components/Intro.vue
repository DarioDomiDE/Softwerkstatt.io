<template>
  <curved class="bg-blue-300">
    <div class="container mx-auto text-white">
      <h1 class="mt-8">„Wir haben eine Vision:<br /><span class="smaller">Unser Handwerk und Ihre Software.“</span></h1>
      <p class="my-16">Ahoi! Segel setzen! Anker lichten! Auf zu neuen Ufern...<br />
        Wir entwickeln Software für Ihre digitalen Prozesse und Geschäftsmodelle.<br />
        Wir sind Macher. Ein Zusammenschluss leidenschaftlicher Softwareentwickler.</p>
      <a class="bg-white hover:bg-blue-200 rounded-full shadow font-semibold px-12 py-4 inline-block transition duration-500 ease-in-out text-xl text-gray-800" href="#">UNVERBINDLICH ANFRAGEN &raquo;</a>
    </div>
  </curved>
</template>


<script>
import Curved from './Curved.vue'
export default {
  name: 'Intro',
  components: {
    Curved
  }
}
</script>

<style scoped>
p {
  font-size: 1.1em;
}
h1 {
  font-size: 4.8em;
}
h1 span.smaller {
  font-size: 0.75em;
}
</style>