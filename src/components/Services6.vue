<template>
  <curved class="gradient min-h-screen" v-bind:borderTopGray="true">
    <div class="container max-w-screen-xl text-white px-4 md:px-8 2xl:px-0">
      <h2>Leistungen</h2>
      <p class="mb-12 w-full md:max-w-4xl">Unsere Domäne, hierbei haben wir Spaß. Wir sind im Herzen Techies. Und unterstützen unsere Kunden in allen Phasen ihrer Digitalisierung. Eine Auwahl, was uns besonders am Herzen liegt:</p>
      <div class="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-x-16 gap-y-8">
        <article>
          <h4>Strategie</h4>
          <p>Unsere Expertise für neue Strategien und Blickwinkel: Wir helfen Ihnen, Ideen und Anforderungen zu analyiseren, und Lösungen zu konzipieren, um innovative Produkte zu planen und Chancen zu nutzen.</p>
        </article>
        <article>
          <h4>User-Feedback</h4>
          <p>Markteinführung radikal beschleunigen und Risiken vermeiden: Feedback-Loops, A/B-Tests und User-driven helfen uns, Ihre Software ganz nach Bedarf und Wünschen Ihrer User und deren Nutzerbedürfnisse auszurichten.</p>
        </article>
        <article>
          <h4>Prototyping</h4>
          <p>Validierung vom Look &amp; Feel mithilfe von Prototypen und Mockups. Wir unterstützen Sie mit Design Thinking und Design Concepts, um kontinuierlich und ab Tag 1 die User Experience zu verbessern.</p>
        </article>
        <article>
          <h4>Automatisierung</h4>
          <p>Manuelle Prozesse war 2020: Gerne optimieren rund alles (und mehr) rund um CSV/Excel Exporte, FTP-Uploads, Kommunikation zu bestehenden CRM, CMS und ähnlichen Services.</p>
        </article>
        <article>
          <h4>Programmierung</h4>
          <p>Das Herztück unseres Daseins: Individual-entwicklung von Apps, Websites, Backend und Datenbanken: Wir lieben Open-Source-Technologien, plattformübergreifende Entwickelung und das Microsoft Ökosystem.</p>
        </article>
        <article>
          <h4>Priorisierung</h4>
          <p>Effizient vs effektiv, Lieber Schnell am Markt statt perfektes Handwerk. Wir hinterfragen ständig, was ist <b>dringend</b>, aber was auch <b>wichtig</b> ist. Konzentration auf Core-Features und Kompromisse eingehen.</p>
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
article {
  border: 1px solid transparent;
  transition: all 0.6s;
}
article:hover {
  border-color: #fff;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 3px;
  margin: -10px -20px;
  padding: 10px 20px;
}
</style>