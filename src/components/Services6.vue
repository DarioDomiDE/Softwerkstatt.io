<template>
  <curved class="gradient min-h-0" v-bind:borderTopGray="true" v-bind:borderBottomGray="true">
    <div class="container max-w-screen-xl px-4 md:px-8 2xl:px-0 text-center" id="services6">
      <h2>Leistungen</h2>
      <p class="mb-12 mx-auto w-full md:max-w-4xl">Unsere Domäne, hierbei haben wir Spaß. Wir sind im Herzen Techies. Und unterstützen unsere Kunden in allen Phasen ihrer Digitalisierung. Eine Auwahl, was uns besonders am Herzen liegt:</p>
      <div class="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-x-16 gap-y-8 text-left">
        <article :class="isActive(1) ? 'active' : ''" v-on:click="onClickActive(1)">
          <h3>Strategie Analyse</h3>
          <span class="icon"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" /></svg></span>
          <p>Unsere Expertise für neue Strategien und Blickwinkel: Wir helfen Ihnen, Ideen und Anforderungen zu analyiseren und Lösungen zu konzipieren, um mit innovativer Software langfristige Chancen zu nutzen.</p>
        </article>
        <article :class="isActive(2) ? 'active' : ''" v-on:click="onClickActive(2)">
          <h3>Technical Consulting</h3>
          <span class="icon"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" /></svg></span>
          <p>Schnell am Markt sein oder perfektes Handwerk? Wir beraten Sie rund um Technologien und Frameworks und hinterfragen, was wirklich wichtig statt nur dringend ist - effektiv oder nur effizient.</p>
        </article>
        <article :class="isActive(3) ? 'active' : ''" v-on:click="onClickActive(3)">
          <h3>Programmierung</h3>
          <span class="icon"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" /></svg></span>
          <p>Unser Herzstück: Programmierung maßgeschneiderter Tools, Backends und Datenbanken: Wir lieben Open-Source, plattformübergreifende Entwickelung und das Microsoft Ökosystem.</p>
        </article>
        <article :class="isActive(4) ? 'active' : ''" v-on:click="onClickActive(4)">
          <h3>Prototyping</h3>
          <span class="icon"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" /></svg></span>
          <p>Validierung vom Look &amp; Feel mithilfe und Mockups, Feedback-Loops und A/B-Tests direkt am User. Nutzung von Konzepten wie Design Thinking und Design Concepts, um ab Tag 1 Feedback-getrieben die User Experience zu verbessern.</p>
        </article>
        <article :class="isActive(5) ? 'active' : ''" v-on:click="onClickActive(5)">
          <h3>Künstliche Intelligenz</h3>
          <span class="icon"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" /></svg></span>
          <p>Entscheidungen durch Auswertung großer Datenmengen Auswertung erleichtern. Wir analysieren und evalusieren, um das Potential von Daten zu nutzen.</p>
        </article>
        <article :class="isActive(6) ? 'active' : ''" v-on:click="onClickActive(6)">
          <h3>Cyber Security</h3>
          <span class="icon"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" /></svg></span>
          <p>Schutz, Stabilität und Sicherheit der Daten Ihrer Software und Kunden ist für uns selbstverständlich – gerne beraten wir umfassend und bieten dies in unseren Leistungen mit an.</p>
        </article>
      </div>
      <CtaButton class="mt-16 mb-8 hover:text-white" @clicked="onClickCta">Jetzt Potential nutzen</CtaButton>
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
  data: () => {
    return {
      active: []
    }
  },
  methods: {
    onClickActive(id) {
      var index = this.active.indexOf(id)
      if(index === -1) {
        this.active.push(id)
      } else {
        this.active.splice(index, 1)
      }
    },
    isActive(id) {
      return this.active.indexOf(id) !== -1
    },
    onClickCta() {
      this.$emit('clicked', 'Potential nutzen')
    }
  }
}
</script>

<style scoped>
#services6,
#services6 h2,
#services6 h3 {
  color: #fff;
}
.gradient {
  background: linear-gradient(45deg, #36c1c7 0%, #67dfc4 90%) !important;
}
article {
  border: 1px solid transparent;
  transition: all 0.6s;
  height: 50px;
  overflow: hidden;
  cursor: pointer;
}
article:hover {
  border-color: #fff;
  background-color: rgba(255, 255, 255, 0.05);
  border-radius: 3px;
  margin: -10px -20px;
  padding: 10px 20px;
  height: 70px;
}
article.active {
  height: auto;
}
.icon {
  float: right;
  margin: -47px 25px 0 0;
  width: 30px;
  height: 30px;
}
article.active .icon {
  transform: rotate(180deg);
}
</style>