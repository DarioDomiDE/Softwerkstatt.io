<template>
  <div class="container mx-auto max-w-screen-lg xl:max-w-screen-lg pt-16 px-4 lg:px-0 pb-32">
    <span class="block pre-headline text-center">Mannschaft</span>
    <h1 class="text-center">Jobs als Softwareentwickler</h1>
    <h2>Softwareentwickler in Hamburg</h2>
    <p>Als <a href="https://www.hamburg.de/stellenangebote-hamburg/4286608/softwareentwickler-hamburg/">Softwareentwickler in Hamburg</a> entwickelst, bugfixst und erstellst Architektur für Web-Applikationen, Tools und Backend-Lösungen. Wir fördern allround-Talente und du arbeitest als <a href="https://de.wikipedia.org/wiki/Softwareentwickler">Entwickler in diversen Rollen</a>, um Programme und Prozesse unserer Kunden zu optimieren und neu zu programmieren. Als branchenübergreifender <a href="https://jaxenter.de/software-consultants-21060">Software-Consultant</a> erwarten dich regelmäßig neue und abwechslungsreiche Aufgaben.</p>
    <h3>Ahoi Matrosen :)</h3>
    <p>Wir sind ein Zusammenschluss leidenschaftlicher Entwickler, die es lieben, Software zu entwickeln. Unsere Ziel ist es, benutzerfreundliche Web-Applikationen zu entwickeln, die Mitarbeitern und Endnutzern die Arbeit erleichtern. Um dieses Ziel zu erreichen und um das bestmögliche Produkt zu entwickeln, ist jedes Teammitglied gefragt! Eigenverantwortung und selbständiges Denken ist nicht nur gern gesehen, sondern gehört zu den täglichen Aufgaben.</p>
    <p>Wir suchen vielversprechende Entwickler/innen und legen Wert auf Charakter-Eigenschaften, Intelligenz und Persönlichkeit anstatt auf Ausbildung und Skills. Wir freuen uns auf Deine Ideen und Fähigkeiten!</p>
    <p>Unser Büro liegt zentral in der Hamburger Innenstadt. In der direkten Umgebung stehen Dir zahlreiche Möglichkeiten für die Mittagspause und einen Bummel nach der Arbeit zur Verfügung.</p>
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
    <p class="max-w-2xl">Keine passendender Ausschreibung dabei? Lass uns trotzdem kennen lernen: Schick uns initiativ Deine Bewerbungsunterlagen mit Deiner Wunschposition, Gehaltsvorstellung und möglichem Eintrittstermin.</p>
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
    onClick() {
      window.location = "mailto:moin@softwerkstatt.io";
    }
  }
}
</script>

<style scoped>
p {
  margin: 0.5em 0;
}
h2, h3 {
  margin-top: 1em;
}
</style>