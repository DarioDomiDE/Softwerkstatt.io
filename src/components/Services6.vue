<template>
  <curved class="gradient min-h-0 lg:min-h-screen" v-bind:borderTopGray="true" v-bind:borderBottomGray="true">
    <div class="container max-w-screen-xl text-white px-4 md:px-8 2xl:px-0">
      <h2>Leistungen.</h2>
      <p class="mb-12 w-full md:max-w-4xl">Unsere Domäne, hierbei haben wir Spaß. Wir sind im Herzen Techies. Und unterstützen unsere Kunden in allen Phasen ihrer Digitalisierung. Eine Auwahl, was uns besonders am Herzen liegt:</p>
      <div class="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-x-16 gap-y-8">
        <article>
          <h4>Strategie Analyse</h4>
          <p>Unsere Expertise für neue Strategien und Blickwinkel: Wir helfen Ihnen, Ideen und Anforderungen zu analyiseren, und Lösungen zu konzipieren, um innovative Produkte zu planen und Chancen zu nutzen.</p>
        </article>
        <article>
          <h4>Technical Consulting</h4>
          <p>Effizient vs effektiv! Schnell am Markt oder perfektes Handwerk? Technologie X oder Framework Y? Wir beraten Sie und hinterfragen, was ist <b>dringend</b>, aber was ist <b>wichtig</b>.</p>
          <!-- Unsere Experten analysieren und evaluieren mit Ihnen die Anforderungen, die Sie für Ihre Projekte brauchen und mit welchen Daten Sie einen klaren Blick für Ihre Entscheidungen haben. -->
        </article>
        <article>
          <h4>Programmierung</h4>
          <p>Unesr Herztück: Programmierung maßgeschneiderter Apps, Websites, Backends und Datenbanken: Wir lieben Open-Source, plattformübergreifende Entwickelung und das Microsoft Ökosystem.</p>
        </article>
        <article>
          <h4>Prototyping</h4>
          <p>Validierung vom Look &amp; Feel mithilfe und Mockups, Feedback-Loops und A/B-Tests direkt am User. Nutzung von Konzepten wie Design Thinking und Design Concepts, um ab Tag 1 die User Experience zu verbessern.</p>
        </article>
        <article>
          <h4>Künstliche Intelligenz</h4>
          <p>Das Feld der AI reicht von der Möglichkeit, große Datenmengen in Entscheidungsvorlagen zu verwandeln, bis hin zu automatisierten Entscheidungen. Unsere Experten helfen Ihnen, das richtige Maß für Sie zu finden und zu implementieren.</p>
          <!-- <p>Manuelle Prozesse war 2020: Gerne optimieren rund alles (und mehr) rund um CSV/Excel Exporte, FTP-Uploads, Kommunikation zu bestehenden CRM, CMS und ähnlichen Services.</p> -->
        </article>
        <article>
          <h4>Cyber Security</h4>
          <p>Der Schutz Ihrer Daten und die Ihrer Kunden ist ein wichtiger Bestandteil Ihres Geschäfts – daher unterstützen unsere Experten Sie umfassend in Sachen Datensicherheit, von der DSGVO bis zur Abwehr von Cyber-Angriffen.</p>
        </article>
        <!-- <article>
          <h4>Priorisierung</h4>
          <p>Effizient vs effektiv, Lieber Schnell am Markt statt perfektes Handwerk. Wir hinterfragen ständig, was ist <b>dringend</b>, aber was auch <b>wichtig</b> ist. Konzentration auf Core-Features und Kompromisse eingehen.</p>
        </article> -->
      </div>
      <CtaButton class="mt-8 hover:text-white" @clicked="onClickCta">Jetzt Technisch beraten lassen</CtaButton>
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
      this.$emit('clicked', '')
    }
  }
}
</script>

<style scoped>
.gradient {
  background: linear-gradient(45deg, #36c1c7 0%, #67dfc4 90%) !important;
  /* background: linear-gradient(45deg, #168cf8 0%, #59dfff 90%) !important; */
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