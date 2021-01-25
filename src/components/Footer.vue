<template>
  <curved class="gradient absolute-important left-0 w-full -z-10 -bottom-470" :skipBorderBottom="true" :fixed="true">
    <footer class="container max-w-screen-xl flex flex-col md:flex-row px-16 pb-12 z-10 text-sm">
      
      <div class="flex-1 pb-4">
        <h6 class="mb-2">Freunde werden?</h6>
        <p class="hidden md:block">Wenn wir Ihre Vorstellungen, gemeinsam die (Software-) Welt zu erobern, teilen, dann lass uns Freunde werden und kennen lernen.</p>
        <ul class="mt-4">
          <li><a href="https://xing.de/">Xing</a></li>
          <li><a href="https://linkedin.com/">LinkedIn</a></li>
        </ul>
      </div>

      <div class="flex-1 md:pl-8 lg:pl-16 pb-4 border-t sm:border-none border-white">
        <h6 class="mb-2">Sie haben Fragen?</h6>
        <p class="hidden md:block">Wir haben Antworten! Fragen kostet ja nichts. Gerne beraten wir Sie unverbindlich bei Ihren Projekten rund um Softwareentwicklung.</p>
        <ul class="mt-4">
          <li>Ansprechpartner: Dario D. Müller</li>
          <li>040 123 456 789</li>
          <li><a class="" href="mailto:moin@softwerkstatt.io">ahoi@softwerkstatt.io</a></li>
          <li>Brunckhorstweg 3, 22525 Hamburg</li>
        </ul>
      </div>

      <div class="flex-1 md:pl-8 lg:pl-16 pb-4 border-t sm:border-none border-white">
        <h6 class="mb-2 hidden md:block">Interesse geweckt?</h6>
        <p class="hidden md:block">Schön, dass wir Ihr Interesse wecken konnten. Senden Sie uns doch sehr gerne eine E-Mail oder rufen Sie uns an. Wir freuen uns drauf!</p>
        <ul class="mt-4">
          <li><a href="#">Impressum</a></li>
          <li><a href="#">Datenschutzerklärung</a></li>
          <li><a href="#">Feedback</a></li>
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
.-z-10 {
  z-index: -10;
}
.-bottom-470 {
  bottom: -470px;
}
@media (max-width: 768px) {
  .-bottom-470 {
    bottom: -520px;
  }
}
.absolute-important {
  position: absolute !important;
}
h6 {
  color: white;
}
p, li {
  color: white;
}
.gradient {
  background: linear-gradient(45deg, #36c1c7 0%, #67dfc4 90%) !important;
}
</style>
