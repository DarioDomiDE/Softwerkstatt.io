<template>
  <div class="container mx-auto max-w-screen-lg 2xl:max-w-screen-xl pt-16 px-4 lg:px-0 pb-32">
    <span class="block pre-headline text-center">Mannschaft</span>
    <h1 class="text-center">Jobs bei Softwerkstatt</h1>
    <h2>Über uns</h2>
    <p>Wir sind ein ambitioniertes Team und arbeiten an abwechslungsreichen Projekten in der Software-Entwicklung.</p>
    <p>Unsere Ziel? Benutzerfreundliche Web-Applikationen, die Benutzern die Arbeit erleichtern. Dabei ist jedes Teammitglied gefragt, um das bestmögliche Produkt zu entwickeln! Wir freuen uns auf Deine Ideen und Fähigkeiten!</p>
    <p>Unser Büro liegt zentral in der Hamburger Innenstadt. In der direkten Umgebung stehen Dir zahlreiche Möglichkeiten für die Mittagspause mit deinen Kollegen zur Verfügung.</p>
    <p>Bis hierhin gefällt Dir alles? Dann wirf doch einen Blick auf unsere offenen Jobs!</p>
    <h2>Aktuelle Jobs</h2>
    <ul class="list">
      <li><router-link to="/jobs/fullstack-entwickler-hamburg">Full-Stack Entwickler/in</router-link></li>
      <li><router-link to="/jobs/dotnet-entwickler-hamburg">.Net Entwickler/in</router-link></li>
    </ul>
    <h3>Praktika / Werkstudenten</h3>
    <ul class="list">
      <li><router-link to="/jobs">Werkstudent/in in der Software-Entwicklung</router-link></li>
    </ul>
    <h3>Initiativbewerbung</h3>
    <p>Kein passendender Job dabei? Schick uns einfach Deine Bewerbungsunterlagen mit Deiner Wunschposition, Gehaltsvorstellung und möglichem Eintrittstermin.</p>
    <button class="bg-white rounded shadow-md hover:shadow-none border-2 border-white hover:bg-transparent transform scale-102 transition-all outline-none focus:outline-none px-5 sm:px-8 py-3 sm:py-4 text-md sm:text-xl text-gray-700 mb-8 sm:mb-0 mt-8 bg-gray-100 border-gray-100 hover:border-gray-500" v-on:click="onClick">
      Bewerbung senden an: moin@softwerkstatt.io
    </button>
  </div>
</template>

<script>
export default {
  name: 'Jobs',
  components: {
  },
  methods: {
  }
}
</script>

<style scoped>
p {
  margin: 0.5em 0;
}
h2, h3 {
  margin: 0.1em 0;
}
</style>