<template>
  <curved class="gradient min-h-0 lg:min-h-screen" v-bind:borderTopGray="true" v-bind:borderBottomGray="true">
    <div class="container max-w-screen-xl text-white px-4 md:px-8 2xl:px-0">
      <h2>Leistungen</h2>
      <p class="mb-12 w-full md:max-w-4xl">Unsere Domäne, hierbei haben wir Spaß. Wir sind im Herzen Techies. Und unterstützen unsere Kunden in allen Phasen ihrer Digitalisierung. Eine Auwahl, was uns besonders am Herzen liegt:</p>
      <div class="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-x-16 gap-y-8">
        <article>
          <h3>Strategie Analyse</h3>
          <p>Unsere Expertise für neue Strategien und Blickwinkel: Wir helfen Ihnen, Ideen und Anforderungen zu analyiseren und Lösungen zu konzipieren, um mit innovativer Software langfristige Chancen zu nutzen.</p>
        </article>
        <article>
          <h3>Technical Consulting</h3>
          <p>Schnell am Markt sein oder perfektes Handwerk? Wir beraten Sie rund um Technologien und Frameworks und hinterfragen, was wirklich wichtig statt nur dringend ist - effektiv oder nur effizient.</p>
        </article>
        <article>
          <h3>Programmierung</h3>
          <p>Unser Herzstück: Programmierung maßgeschneiderter Tools, Backends und Datenbanken: Wir lieben Open-Source, plattformübergreifende Entwickelung und das Microsoft Ökosystem.</p>
        </article>
        <article>
          <h3>Prototyping</h3>
          <p>Validierung vom Look &amp; Feel mithilfe und Mockups, Feedback-Loops und A/B-Tests direkt am User. Nutzung von Konzepten wie Design Thinking und Design Concepts, um ab Tag 1 Feedback-getrieben die User Experience zu verbessern.</p>
        </article>
        <article>
          <h3>Künstliche Intelligenz</h3>
          <p>Entscheidungen durch Auswertung großer Datenmengen Auswertung erleichtern. Wir analysieren und evalusieren, um das Potential von Daten zu nutzen.</p>
        </article>
        <article>
          <h3>Cyber Security</h3>
          <p>Schutz, Stabilität und Sicherheit der Daten Ihrer Software und Kunden ist für uns selbstverständlich – gerne beraten wir umfassend und bieten dies in unseren Leistungen mit an.</p>
        </article>
      </div>
      <CtaButton class="mt-8 hover:text-white" @clicked="onClickCta">Jetzt Potential nutzen</CtaButton>
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
  },
  methods: {
    onClickCta() {
      this.$emit('clicked', 'Potential nutzen')
    }
  }
}
</script>

<style scoped>
.gradient {
  background: linear-gradient(45deg, #36c1c7 0%, #67dfc4 90%) !important;
}
article {
  border: 1px solid transparent;
  transition: all 0.6s;
}
article:hover {
  border-color: #fff;
  background-color: rgba(255, 255, 255, 0.05);
  border-radius: 3px;
  margin: -10px -20px;
  padding: 10px 20px;
}
</style>