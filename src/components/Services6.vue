<template>
  <curved class="gradient min-h-screen" v-bind:borderTopGray="true">
    <div class="container max-w-screen-xl text-white px-4 md:px-8 2xl:px-0">
      <h2>Leistungen</h2>
      <p class="mb-12 w-full md:max-w-4xl">Unsere Domäne, hierbei haben wir Spaß. Wir sind im Herzen Techies. Und unterstützen unsere Kunden in allen Phasen Ihrer Digitalisierung. Eine Auwahl, was uns besonders am Herzen liegt:</p>
      <div class="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-x-16 gap-y-8">
        <article>
          <h4>Analyse</h4>
          <p>Unsere Expertise für neue Blickwinkel: Lösungen für Ideen und Anforderungen konzipieren, denn komplexe Aufgaben sind unsere Leidenschaft.</p>
        </article>
        <article>
          <h4>Prototyping</h4>
          <p>Ihre Ideen sind unsere Baustellen: Prototypen und Mockups helfen der schnellen Validierung neuer Projekte. Unsere Lieblingswörter sind schnelle Markteinführung und Skalierbarkeit.</p>
        </article>
        <article>
          <h4>Automatisierung</h4>
          <p>Manuelle Prozesse war 2020: Gerne optimieren rund alles (und mehr) rund um CSV/Excel Exporte, FTP-Uploads, Kommunikation zu bestehenden CRM, CMS und ähnlichen Services.</p>
        </article>
        <article>
          <h4>Userorientiert</h4>
          <p>Digitalisierung radikal beschleunigen und Risiken vermeiden: Feedback-Loops, A/B-Tests und User-driven für Priorisierung. Moderne digitale Welten ganz nach Bedarf und Wünschen der User.</p>
        </article>
        <article>
          <h4>Priorisierung</h4>
          <p>Effizient vs effektiv, Lieber Schnell am Markt statt perfektes Handwerk. Wir hinterfragen, was ist dringend, aber was wichtig ist. Konzentration auf Core-Features und Kompromisse eingehen.</p>
        </article>
        <article>
          <h4>Programmierung</h4>
          <p>Das Herztück, warum es uns gibt: Individualentwicklung von Apps, Websites, Backends und Datenbanken: Optimeriung der internen Geschäfts-Prozesse, oder neue Nutzergewinnung durch Neueinführung.</p>
        </article>
      </div>
      <CtaButton class="mt-8"></CtaButton>
    </div>
  </curved>
</template>

<script>
import Curved from './Curved.vue'
import CtaButton from './CtaButton.vue'
export default {
  name: 'Solutions',
  components: {
    Curved,
    CtaButton
  }
}
</script>

<style scoped>
.gradient {
  background: linear-gradient(45deg, #168cf8 0%, #59dfff 90%) !important;
}
</style>