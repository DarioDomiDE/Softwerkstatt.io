<template>
  <curved class="gradient" :skipBorderBottom="true" :fixed="true" id="footer">
    <footer class="container max-w-screen-xl flex flex-col md:flex-row px-16 pb-16 z-10">
      
      <div class="flex-1">
        <h6 class="mb-2">Freunde werden?</h6>
        <p>Wenn wir Ihre Vorstellungen, gemeinsam die (Software-) Welt zu erobern, teilen, dann lass uns Freunde werden und kennen lernen.</p>
        <ul class="mt-4">
          <li><a href="https://xing.de/">Xing</a></li>
          <li><a href="https://linkedin.com/">LinkedIn</a></li>
        </ul>
      </div>

      <div class="flex-1 md:pl-8 lg:pl-16">
        <h6 class="mb-2">Sie haben Fragen?</h6>
        <p>Wir haben Antworten! Fragen kostet ja nichts. Gerne beraten wir Sie unverbindlich bei Ihren Projekten rund um Softwareentwicklung.</p>
        <ul class="mt-4">
          <li>Ansprechpartner: Dario D. Müller</li>
          <li>Telefon: 040 123 456 789</li>
          <li>E-Mail: <a class="" href="mailto:moin@softwerkstatt.io">moin@softwerkstatt.io</a></li>
          <li>Adresse: Brunckhorstweg 3, 22525 Hamburg</li>
        </ul>
      </div>

      <div class="flex-1 md:pl-8 lg:pl-16">
        <h6 class="mb-2">Interesse geweckt?</h6>
        <p>Schön, dass wir Ihr Interesse wecken konnten. Senden Sie uns doch sehr gerne eine E-Mail oder rufen Sie uns an. Wir freuen uns drauf!</p>
        <ul class="mt-4">
          <li><a href="#">Impressum</a></li>
          <li><a href="#">Datenschutzerklärung</a></li>
          <li><a href="#">Support</a></li>
        </ul>
      </div>

    </footer>
  </curved>
</template>

<script>
import Curved from './Curved.vue'
export default {
  name: 'Footer',
  components: {
    Curved
  }
}
</script>

<style scoped>
h6 {
  color: white;
}
p, li {
  color: white;
  font-size: 1.1em;
}
.gradient {
  background: linear-gradient(45deg, #36c1c7 0%, #67dfc4 90%) !important;
}
</style>

<style>
section:not(#footer) {
  position: relative;
  background-color: #fff;
  z-index: 20;
}
</style>