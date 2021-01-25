<template>
  <curved class="bg" :skipBorderTop="true" id="bg3">
    <div class="container max-w-screen-lg 2xl:max-w-screen-xl pt-16 px-4 xl:px-0">
      <h2>Maschinenraum</h2>
      <p class="pb-8 w-full md:max-w-4xl">Unser Handwerk: Wir sind auf Full-Stack- und Backend-Entwicklung spezialisiert, programmieren Websites, mobile Apps und Datenbanken. Sie können zwischen Spritsparend und Vollausstattung wählen. Wir bevorzugen "Try early - fail fast", um User-orientiert zu entwickeln.</p>
      <div class="grid grid-cols-4 lg:grid-cols-7 gap-4">
        <div class="col-span-2">
          <h3>Technologien</h3>
          <ul>
            <li>Responsive Websites &amp; SPAs</li>
            <li>Mobile Apps</li>
            <li>Backend-Anwendungen</li>
            <li>Datenbanken</li>
            <li>Cloud-Hosting</li>
            <li>Clean Code, DRY, KISS</li>
            <li>Agile Softwareentwicklung</li>
          </ul>
        </div>
        <div class="col-span-2">
          <h3 class="hidden sm:block">Werkzeuge</h3>
          <ul class="mt-10 sm:mt-0 pl-4 border-l border-black sm:pl-0 sm:border-0">
            <li>Vue.js &amp; Angular</li>
            <li>React Native, Flutter, Unity</li>
            <li>.Net Core &amp; .Net 5</li>
            <li>MySQL, SQL Server, NoSQL</li>
            <li>Azure &amp; AWS</li>
            <li>Unit Tests &amp; UI-Tests</li>
            <li>Scrum &amp; Kanban</li>
          </ul>
        </div>
        <div class="col-span-4 lg:col-span-3">
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
ul li {
  list-style: circle;
  margin-left: 20px;
}
</style>