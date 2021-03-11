<template>
  <div class="container mx-auto max-w-screen-lg xl:max-w-screen-lg pt-16 px-4 lg:px-0 pb-32">
    <span class="block pre-headline text-center">Verstärkung gesucht</span>
    <h1 class="text-center">Full Stack Entwickler/in (Hamburg)</h1>
    <img class="" src="./../assets/img/jobs_1.png" alt="">
    <p>Als Full Stack Entwickler/in bist Du für den kompletten Softwareentwicklungsprozess zuständig und arbeitest im Team an Web-Applikationen. Dich erwarten regelmäßig neue Aufgaben und abwechslungsreichen Projekte.</p>
    <p>Unser Tech Stack basiert normalerweise auf .Net und wahlweise Vue.js oder Angular 2+. In Kombination mit Agiler Softwareentwicklung nach Scrum/Kanban sowie TDD und Continuous Integration können wir so langfristig nutzbare Software entwickeln. Trotzdem versuchen wir, je nach Projekt, immer das passende Werkzeug zu finden. Dabei stehen wir neue Ansätze, Technologien und Frameworks offen gegenüber, bring dich gerne mit ein.</p>
    <img class="" src="./../assets/img/jobs_2.png" alt="">
    <h2>Deine Hauptaufgaben:</h2>
    <ul class="list">
      <li>Programmierung von komplexen Webanwendungen</li>
      <li>Technische Konzeption &amp; Planung</li>
      <li>Schnittstellenprogrammierung (RESTful-API)</li>
      <li>Evaluierung neuer Technologien</li>
      <li>Fehleranalyse und -behebung</li>
    </ul>
    <h2>Das solltest Du mitbringen:</h2>
    <ul class="checklist">
      <li>Sehr gute PHP-Kenntnisse</li>
      <li>Sehr gute Kenntnisse in CSS3 (Sass, Scss), JavaScript / Typescript &amp; Vue.js / Angular 2+</li>
      <li>Grundlegende Kenntnisse im Backend-Bereich mit .Net</li>
      <li>Gute Kenntnisse im Umgang mit relationalen Datenbanken</li>
      <li>Kunden- &amp; projektorientiertes Arbeiten</li>
    </ul>
    <h2>Das bieten wir Dir:</h2>
    <img class="" src="./../assets/img/jobs_3.png" alt="">
    <h2>Das solltest Du wissen:</h2>
    <ul class="list"><li>Mac, Linux oder Windows? Ist uns egal, Dein Betriebssystem suchst Du Dir selbst aus</li><li>Als IDE hat sich bei uns PHP-Storm und Visual Studio Code etabliert. Andere sind auch herzlich willkommen</li><li>Wir setzen auf moderne Web-Anwendungen und haben einige Projekte als Single-Page-Applikationen umgesetzt</li><li>Laravel oder Vue.js ist für Dich Neuland? Solltest du bereits weiterführende Kenntnisse in PHP oder einem anderen PHP-Framework haben, bieten wir Dir gern entsprechende Weiterbildungsmöglichkeiten, um schnellstmöglich mit Laravel bzw. Vue.js zu starten. Das kann beispielsweise ein Praktikum sein, in dem Du Dir Laravel oder Vue.js autodidaktisch aneignest und Dir einer unserer Entwickler zur Seite steht</li></ul>
    <h3>Hört sich gut an?</h3>
    <p>Unser Büro liegt zentral in der Hamburger Innenstadt, die U- und S-Bahn Station ist wenige Meter entfernt. In unmittelbarer Umgebung stehen Dir zahlreiche Möglichkeiten für die Mittagspause zur Verfügung.</p>
    <p>Sende uns einfach eine kurze Bewerbung mit möglichem Eintrittstermin und Gehaltsvorstellung.</p>

    <CtaButton class="my-gradient border-transparent hover:border-gray-500 text-white hover:text-gray-700 mt-8" @clicked="onClick">Jetzt bewerben</CtaButton>
    <Borders />
  </div>
</template>

<script>
import Borders from './../views/Borders.vue'
import CtaButton from './../views/CtaButton.vue'

export default {
  name: 'JobFullStackDeveloper',
  components: {
    Borders,
    CtaButton
  },
  methods: {
  }
}
</script>

<style scoped>
p {
  margin: 1rem 0;
}
img {
  margin: 2rem 0;
}
</style>