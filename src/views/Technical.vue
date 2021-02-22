<template>
  <curved class="bg" :skipBorderTop="true" id="bg3">
    <div class="container max-w-screen-lg 2xl:max-w-screen-xl px-4 xl:px-0 text-center">
      <span class="pre-headline color3">Handwerk</span>
      <h1>Maschinenraum</h1>
      <p class="pb-4 md:pb-8 w-full md:max-w-4xl mx-auto text-left sm:text-center">Unser Handwerk: Wir fühlen uns von der Software Craftmanship Bewegung geleitet. Sie können zwischen Spritsparend und Vollausstattung wählen. Wir agieren nach "Try early - fail fast".</p>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
        <div class="col-span-1">
          <h3>Werkzeuge</h3>
          <ul class="checklist">
            <li>Responsive Websites &amp; SPAs mit Vue.js &amp; Angular 2+</li>
            <li>Mobile Apps &amp; PWAs mit React Native, Flutter &amp; Unity</li>
            <li>Backend mit Asp.Net, .Net Core &amp; .Net 5</li>
            <li>Datenbanken mit SQL Server, MySQL &amp; MongoDB</li>
            <li>Cloud-Hosting mit Azure &amp; AWS</li>
            <li>Unit- &amp; UI-Tests sowie Clean Code, DRY, KISS</li>
            <li>Agile Softwareentwicklung nach Scrum &amp; Kanban</li>
            <li>Hohe Handwerkskunst nach Software Craftmanship Manifesto</li>
          </ul>
        </div>
        <div class="col-span-1">
          <h3>Muttersprachen</h3>
          <img src="./../assets/img/technologies.png" alt="Technologien Softwerkstatt">
        </div>
      </div>
      <CtaButton class="mt-16 hover:border-gray-700" @clicked="onClickCta">Jetzt Werkstatt betreten</CtaButton>
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
      this.$emit('clicked', 'Werkstatt betreten')
    }
  }
}
</script>

<style scoped>
#bg3 {
  background-color: rgba(243, 244, 246, 1);
}
img {
  -webkit-filter: grayscale(1); 
  filter: grayscale(1); 
}
img:hover {
  -webkit-filter: grayscale(0); 
  filter: grayscale(0); 
}
</style>