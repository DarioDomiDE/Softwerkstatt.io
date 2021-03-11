<template>
  <div class="container mx-auto max-w-screen-lg xl:max-w-screen-lg pt-16 px-4 lg:px-0 pb-32 lg:my-5">
    <span class="block pre-headline text-center">Mannschaft / Karriere</span>
    <h1 class="text-center">Jobs als Softwareentwickler</h1>
    <h2>Softwareentwickler in Hamburg</h2>
    <p>Ahoi Matrose! Liebst Du es genau so wie wir, Software zu entwickeln? Als <a href="https://www.hamburg.de/stellenangebote-hamburg/4286608/softwareentwickler-hamburg/">Softwareentwickler in Hamburg</a> entwickelst und pflegst Du Web-Applikationen, Backend und Datenbanken. Wir fördern Allround-Talente und Du arbeitest <a href="https://de.wikipedia.org/wiki/Softwareentwickler">in diversen Rollen</a>, um Software zu programmieren und Prozesse dahinter zu optimieren. Als <a href="https://jaxenter.de/software-consultants-21060">Software-Consultant</a> erwarten Dich regelmäßig neue Aufgaben und abwechslungsreichen Projekte. Bei uns ist jedes Teammitglied gefragt! Eigenverantwortung und selbständiges Denken ist nicht nur gern gesehen, sondern gehört zu Deinen täglichen Aufgaben.</p>
    <h3>Arbeite mit uns! :)</h3>
    <p>Du findest, dass Du in Deinem Fachgebiet echt was drauf hast? Worauf wartest Du? Komm zu uns ins Team! Wir suchen vielversprechende Entwickler/innen und legen Wert auf Charakter-Eigenschaften, Intelligenz und Persönlichkeit anstatt auf Ausbildung und Skills. Wir freuen uns auf Deine neuen Ideen und Blickwinkel!</p>
    <p>Als branchenübergreifend agierendes Unternehmen mit flachen Hierarchien und einer Start-up-Kultur können wir Dir unzählige Chancen bieten. Ergreife sie! Unser Büro liegt zentral in der Hamburger Innenstadt. In der direkten Umgebung stehen Dir zahlreiche Möglichkeiten für die Mittagspause oder einen Bummel nach der Arbeit zur Verfügung.</p>
    <h2>Jobs to be done</h2>
    <ul class="list">
      <li><router-link to="/jobs/fullstack-entwickler-hamburg">Full-Stack Entwickler/in</router-link></li>
      <li><router-link to="/jobs/dotnet-entwickler-hamburg">.Net Entwickler/in</router-link></li>
    </ul>
    <h3>Praktika</h3>
    <ul class="list">
      <li><router-link to="/jobs">Werkstudent/in in der Software-Entwicklung</router-link></li>
    </ul>
    <div class="-mx-4 lg:mx-0 xl:-mx-32 2xl:-mx-64 text-white my-8 py-8 sm:py-16" style="background-color: #114154;">
      <div class="px-4 sm:px-0 md:w-4/5 lg:w-3/5 2xl:w-2/5 mx-auto">
        <img class="sm:float-left w-2/5 border-4 rounded-full mx-auto" style="border-color: #67dfc4;" src="./../assets/img/about_us.jpg" alt="" />
        <div class="sm:float-right sm:w-3/5 sm:pl-8">
          <h3 style="color: #67dfc4;" class="sm:text-6xl">Noch Fragen?</h3>
          <p><b>Hi, ich bin Dario!</b></p>
          <p>Ich möchte gerne mit Dir zusammen arbeiten! Wenn Du also noch Fragen oder eine Initiativbewerbung im Gepäck hast, schreib mir gern eine Mail.</p>
          <p><a href="mailto:moin@softwerkstatt.io">moin@softwerkstatt.io</a></p>
        </div>
      </div>
      <div class="clear-both"></div>
    </div>
    <h3>Initiativbewerbung</h3>
    <p>(Noch) nicht das Richtige dabei? Keine Bange: Das muss nichts heißen! Vielleicht kannst Du uns trotzdem helfen. Schick uns initiativ Deine Bewerbungsunterlagen zu und lass uns kennen lernen.</p>
    <CtaButton class="my-gradient border-transparent hover:border-gray-500 text-white hover:text-gray-700 mt-8" @clicked="onClick">Jetzt bewerben</CtaButton>
    <Borders />
  </div>
</template>

<script>
import Borders from './../views/Borders.vue'
import CtaButton from './../views/CtaButton.vue'

export default {
  name: 'Jobs',
  components: {
    Borders,
    CtaButton
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
.container > h2,
.container > h3 {
  margin-top: 1em;
}
</style>