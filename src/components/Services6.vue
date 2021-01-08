<template>
  <curved class="gradient min-h-screen">
    <div class="container max-w-screen-xl text-white px-4 md:px-8 2xl:px-0">
      <h2>Leistungen</h2>
      <p class="pb-8">Unsere Domäne, hierbei haben wir Spaß. Wir unterstützen Unternehmen in allen Phase Ihrer Digitalisierung.</p>
      <div class="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-x-16 gap-y-8">
        <article>
          <h4>Anforderungen</h4>
          <p>Analyse, Im Herzen Techies. Komplexe Aufgaben sind unsere Leidenschaft. Lieber 1x zu viel Diagramm erstellt. Projekt-Management und Vorgehensweise.</p>
        </article>
        <article>
          <h4>Konzeption</h4>
          <p>Baustellen, Ideen sind der Anfang. von derIdeenfindung bis zur Realisierung. validieren mit unserer Expertise Feedback-getrieben, Brainstorming</p>
        </article>
        <article>
          <h4>Prototyping</h4>
          <p>Ideen, Ungewissheit, ob das Produkt gut ankommt oder skaliert? Schnelles Feedback durch Entwicklung von Prototypen und Mockups für neue Blickwinkel schaffen. Digitalisierung radikal beschleunigen.</p>
        </article>
        <article>
          <h4>Userorientiert</h4>
          <p>Feedback des Endanwender bestimmt Features und Priorisierung und unterstützt Entscheidungen. Durch regelmäßige Updates entstehen moderne digitale Welten nach Bedarf und Wünschender User.</p>
        </article>
        <article>
          <h4>Programmierung</h4>
          <p>Passgenaue Software durch Individualentwicklung. Ob Tools für interne Prozesse, oder eine Companion-App für Ihre Produkte. Entwicklung von Websites mit Backends und Datenbanken, im Hintergrund für Sicherheit und Stabilität sorgen.</p>
        </article>
        <article>
          <h4>Priorisierung</h4>
          <p>Effizient vs effektiv, Lieber Schnell am Markt statt perfektes Handwerk. Wir hinterfragen, was ist dringend, aber was wichtig ist. Konzentration auf Core-Features und Kompromisse eingehen.</p>
        </article>
      </div>
      <button class="bg-white rounded-full shadow-md hover:shadow-xl transform scale-101 focus:outline-none transition-all font-semibold px-8 py-3 text-xl text-gray-700 mt-8" v-on:click="onClickCta">UNVERBINDLICH ANFRAGEN &raquo;</button>
    </div>
  </curved>
</template>

<script>
import Curved from './Curved.vue'
export default {
  name: 'Solutions',
  components: {
    Curved
  }
}
</script>

<style scoped>
.gradient {
  background: linear-gradient(45deg, #168cf8 0%, #59dfff 90%) !important;
}
</style>