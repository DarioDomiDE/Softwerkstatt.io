<template>
  <curved class="gradient absolute-important left-0 w-full -z-10 -bottom-470" :skipBorderBottom="true" :fixed="true">
    <footer class="container max-w-screen-xl 2xl:max-w-screen-2xl flex flex-col md:flex-row px-16 pb-12 z-10">
      
      <div class="flex-1 pb-4">
        <h4 class="mb-2 text-white">Freunde werden?</h4>
        <p>Wenn wir Ihre Vorstellungen, gemeinsam die Meere zu erobern, teilen, dann lassen Sie uns doch Freunde werden.</p>
        <ul>
          <li><a href="https://www.xing.com/profile/DarioD_Mueller">Xing</a></li>
          <li><a href="https://www.linkedin.com/in/dariomueller/">LinkedIn</a></li>
        </ul>
      </div>

      <div class="flex-1 md:pl-8 lg:pl-16 2xl:pl-48 pb-4 pt-4 md:pt-0 border-t md:border-none border-white">
        <h4 class="mb-2 text-white">Sie haben Fragen?</h4>
        <p class="hidden md:block">Dann immer her damit, denn wir haben Antworten! Wir freuen uns über einen kleinen Schnack.</p>
        <ul>
          <li><a href="tel:04025468922">040 254 689 22</a></li>
          <li><a href="mailto:moin@softwerkstatt.io">moin@softwerkstatt.io</a></li>
          <!-- <li>Brunckhorstweg 3, 22525 Hamburg</li> -->
        </ul>
      </div>

      <div class="flex-1 md:pl-8 lg:pl-16 2xl:pl-48 pb-4 border-t md:border-none border-white">
        <h4 class="mb-2 text-white hidden md:block">Interesse geweckt?</h4>
        <p class="hidden md:block">Schreiben Sie uns eine Flaschenpost oder rufen Sie uns an. Wir freuen uns drauf und kümmern uns gerne um Ihr Anliegen!</p>
        <ul>
          <li><router-link to="/privacy-policy"><span v-on:click="scrollToTop">Datenschutz</span></router-link></li>
          <li><router-link to="/legal"><span v-on:click="scrollToTop">Impressum</span></router-link></li>
          <li><router-link to="/jobs"><span v-on:click="scrollToTop">Jobs</span></router-link></li>
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
  },
  methods: {
    scrollToTop() {
      window.scrollTo(0,0);
    }
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
  line-height: 1.3em;
}
.gradient {
  background: linear-gradient(45deg, #36c1c7 0%, #67dfc4 90%) !important;
}
a:hover {
  font-weight: bold;
  color: rgba(0,0,0,0.5);
}
h4 {
  margin-bottom: 1rem;
}
ul {
  margin-top: 1rem;
}
</style>
