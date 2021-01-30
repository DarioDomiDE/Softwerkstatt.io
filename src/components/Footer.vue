<template>
  <curved class="gradient absolute-important left-0 w-full -z-10 -bottom-470" :skipBorderBottom="true" :fixed="true">
    <footer class="container max-w-screen-xl flex flex-col md:flex-row px-16 pb-12 z-10">
      
      <div class="flex-1 pb-4">
        <h4 class="mb-2 text-white">Freunde werden?</h4>
        <p class="">Wenn wir Ihre Vorstellungen, gemeinsam die (Software-) Welt zu erobern, teilen, dann lassen Sie uns Freunde werden und kennen lernen.</p>
        <ul class="mt-4">
          <li><a href="https://xing.de/">Xing</a></li>
          <li><a href="https://linkedin.com/">LinkedIn</a></li>
        </ul>
      </div>

      <div class="flex-1 md:pl-8 lg:pl-16 pb-4 pt-4 md:pt0 border-t md:border-none border-white">
        <h4 class="mb-2 text-white">Sie haben Fragen?</h4>
        <p class="hidden md:block">Dann immer her damit, denn wir haben Antworten! Fragen kostet ja nichts. Wir freuen uns über einen kleinen Schnack und kümmern uns gerne um Ihr Anliegen.</p>
        <ul class="mt-4">
          <li>040 123 456 789</li>
          <li><a class="" href="mailto:dario@softwerkstatt.io">dario@softwerkstatt.io</a></li>
          <li>Brunckhorstweg 3, 22525 Hamburg</li>
        </ul>
      </div>

      <div class="flex-1 md:pl-8 lg:pl-16 pb-4 border-t md:border-none border-white">
        <h4 class="mb-2 text-white hidden md:block">Interesse geweckt?</h4>
        <p class="hidden md:block">Schön, dass wir Ihr Interesse wecken konnten. Schreiben Sie uns oder rufen Sie uns an. Wir freuen uns drauf!</p>
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
  bottom: -520px;
}
@media (max-width: 768px) {
  .-bottom-470 {
    bottom: -570px;
  }
}
.absolute-important {
  position: absolute !important;
}
p, li {
  color: white;
  line-height: 1.4em;
}
.gradient {
  background: linear-gradient(45deg, #36c1c7 0%, #67dfc4 90%) !important;
}
</style>
