<template>
  <curved class="bg" :skipBorderTop="true" id="bg3">
    <div class="container max-w-screen-lg 2xl:max-w-screen-xl pt-16 px-4 xl:px-0">
      <h2>Handwerk.</h2>
      <p class="pb-8 w-full md:max-w-4xl">Jetzt wird‘s technisch; Wir sind auf Full-Stack- und Backend-Entwicklung spezialisiert, programmieren Websites, mobile Apps und Datenbanken. Sie können zwischen Spritsparend und Vollausstattung wählen. Wir bevorzugen "Try early - fail fast", um User-orientiert zu entwickeln.</p>
      <div class="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-7 gap-4">
        <div class="md:col-span-2">
          <h4>Technologien</h4>
          <ul>
            <li>Responsive Websites &amp; SPA</li>
            <li>Mobile Apps</li>
            <li>Backend-Anwendungen</li>
            <li>Datenbanken</li>
            <li>Cloud-Hosting</li>
            <li>Agile nach Scrum &amp; Kanban</li>
            <li>Clean Code, DRY, KISS</li>
          </ul>
        </div>
        <div class="md:col-span-2">
          <h4>Werkzeuge</h4>
          <ul>
            <li>Vue.js &amp; Angular</li>
            <li>React Native, Flutter, Unity</li>
            <li>.Net 5</li>
            <li>MySQL, SQL Server, NoSQL</li>
            <li>Azure &amp; AWS</li>
            <li>Unit Tests &amp; UI-Tests</li>
          </ul>
        </div>
        <div class="md:col-span-3">
          <h4>Muttersprachen</h4>
          <img src="./../assets/img/technologies.jpg" alt="">
        </div>
      </div>
      <CtaButton class="mt-16 hover:border-black" @clicked="onClickCta"></CtaButton>
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
#bg3 {
  background-color: rgba(243, 244, 246, 1);
}
</style>