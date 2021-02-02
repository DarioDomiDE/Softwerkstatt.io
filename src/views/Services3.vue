<template>
  <section class="container min-h-0 max-w-screen-xl pt-8 pb-8 px-4 md:px-8 2xl:px-0 text-center">
    <span class="pre-headline color3">Expertise</span>
    <h2>Hier unterstützen wir</h2>
    <div class="grid grid-cols-1 lg:grid-cols-4 gap-8 text-left">
      <div class="col-span-1 lg:col-span-1 hidden md:block">
        <ul id="tab-navi">
          <li v-on:click="active = 1" class="inline-block lg:block w-6/12 lg:w-full xl:text-2xl" v-bind:class="{'active': active == 1}">Digitale Strategie</li>
          <li v-on:click="active = 3" class="inline-block lg:block w-6/12 lg:w-full xl:text-2xl" v-bind:class="{'active': active == 3}">Prozessoptimierung</li>
          <li v-on:click="active = 2" class="inline-block lg:block w-6/12 lg:w-full xl:text-2xl" v-bind:class="{'active': active == 2}">Industrie 4.0</li>
          <li v-on:click="active = 4" class="inline-block lg:block w-6/12 lg:w-full xl:text-2xl" v-bind:class="{'active': active == 4}">Digitale Transformation</li>
        </ul>
      </div>
      <div class="col-span-1 lg:col-span-2">
        <ul>
          <article :class="{'active': active == 1}">
            <h3>Digitale Strategie</h3>
            <p class="inline">Sie kennen Optimierungspotenziale, haben Ihre Anforderungen analysiert und passende Lösungskonzepte erarbeitet. Mit etablierten Vorgehensmodellen der agilen Softwareentwicklung, wie Scrum und Kanban und Strategien wie Impact Mapping und Lean Startup können wir Ihre Software so entwickeln, dass Sie währenddessen flexibel auf Veränderungen reagieren können.</p>
            <p :class="readMore.indexOf(1) !== -1 ? 'inline' : 'hidden lg:inline'"> Wir glauben daran, dass User Feedback an erster Stelle stehen muss und messen daher unsere Ergebnisse vom ersten Prototypen hieran. Denn unser Ziel ist, das Arbeitsleben leichter, angenehmer und produktiver zu machen: Wir möchten Sie dabei unterstützen, gemeinsam über den Tellerrand zu schauen und neue Blickwinkel einzunehmen. Unsere Learnings, ein ständiger Blick auf das Kosten/Nutzen-Verhältnis sowie Hinterfragen der Priorisierung lassen wir mit einfließen, um den langfristigen Erfolg für Ihr Produkt und Projekt zu verbessern.</p>
            <span class="inline-block lg:hidden color-red px-2 ml-2 text-bold border rounded cursor-pointer" v-if="readMore.indexOf(1) === -1" v-on:click="readMore.push(1)">mehr<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" height="12" width="12" class="inline-block align-text-middle"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" /></svg></span>
            <span class="inline-block lg:hidden color-red px-2 ml-2 text-bold border rounded cursor-pointer" v-if="readMore.indexOf(1) !== -1" v-on:click="readMore.splice(readMore.indexOf(1), 1)"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" height="12" width="12" class="inline-block align-text-middle"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" /></svg>weniger</span>
          </article>
          <article :class="{'active': active == 3}">
            <h3>Prozessoptimierung</h3>
            <p class="inline">Wie optimieren Sie Ihr Geschäftsmodell im digitalen Raum? Es bedarf kreativer Lösungen für die komplexen Aufgaben moderner Geschäftsmodelle. Hierbei ist es von besonderer Bedeutung, Arbeitsschritte zu vereinfachen und Bottlenecks zu entfernen. Auf Grundlage einer Bewertung der Arbeitsabläufe Ihres Unternehmens bringen wir neue Blickwinkel ein</p>
            <p :class="readMore.indexOf(3) !== -1 ? 'inline' : 'hidden lg:inline'">, um mit Software teure Abläufe zu automatisieren und so Mitarbeiter zu entlasten. Um zukunftssicher für die stetigen Veränderungen Ihres Marktumfeldes zu sein, möchten wir Sie mit dem nötigen Fachwissen und Tools ausstatten, um das langfristige Potenzial Ihrer Software sicherstellen. Wir begleiten unsere Kunden in allen Schritten der Prozessoptimierung: Von der Konzeption, über Entwicklung von Algorithmen bis zur Programmierung. Denn wir lieben Automatisierung, um schneller wachsen können, Ihre Mitarbeiter zu entlasten und besser neue Kunden gewinnen zu können! Software, die das Leben vereinfacht.</p>
            <span class="inline-block lg:hidden color-red px-2 ml-2 text-bold border rounded cursor-pointer" v-if="readMore.indexOf(3) === -1" v-on:click="readMore.push(3)">mehr<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" height="12" width="12" class="inline-block align-text-middle"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" /></svg></span>
            <span class="inline-block lg:hidden color-red px-2 ml-2 text-bold border rounded cursor-pointer" v-if="readMore.indexOf(3) !== -1" v-on:click="readMore.splice(readMore.indexOf(3), 1)"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" height="12" width="12" class="inline-block align-text-middle"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" /></svg>weniger</span>
          </article>
          <article :class="{'active': active == 2}">
            <h3>Industrie 4.0</h3>
            <p class="inline">Geschäftsmodelle und Branchen verändern sich, werden digitaler und Arbeitsabläufe effizienter. Als IT-Dienstleister wissen wir aus der Praxis: Individuelle Software-Lösungen für etablierte und neue Arbeitsprozesse bringen die effizientesten Strategien im Einklang mit Ihrer Vision hervor.</p>
            <p :class="readMore.indexOf(2) !== -1 ? 'inline' : 'hidden lg:inline'"> Um als Unternehmen Marktvorsprünge auszubauen, braucht es vor allem das grundlegende Commitment zur Optimierung. Wir möchten Ihre Prozesse und Abläufe optimieren, und bieten Ihnen dafür unverbindlich eine passgenaue Strategie-Beratung an. Unser Ziel ist es, Arbeitsabläufe zu verbessern und so die Auslastung zu steigern, um Produktivität Ihrer Mitarbeiter, Kollegen durch intelligente Software-Lösungen nachhaltig zu verbessern.</p>
            <span class="inline-block lg:hidden color-red px-2 ml-2 text-bold border rounded cursor-pointer" v-if="readMore.indexOf(2) === -1" v-on:click="readMore.push(2)">mehr<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" height="12" width="12" class="inline-block align-text-middle"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" /></svg></span>
            <span class="inline-block lg:hidden color-red px-2 ml-2 text-bold border rounded cursor-pointer" v-if="readMore.indexOf(2) !== -1" v-on:click="readMore.splice(readMore.indexOf(2), 1)"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" height="12" width="12" class="inline-block align-text-middle"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" /></svg>weniger</span>
          </article>
          <article :class="{'active': active == 4}">
            <h3>Digitale Transformation</h3>
            <p class="inline">Technologie hat die Welt radikal verändert, Daten sind das neue Gold und disruptive Technologien bringen fundamentale Veränderungen in etablierten Geschäftsmodellen. Ständige Veränderung ist Teil unserer Welt und Herausforderungen wie diese als Chancen statt Probleme zu sehen, bietet neue Umsatzpotenziale</p>
            <p :class="readMore.indexOf(4) !== -1 ? 'inline' : 'hidden lg:inline'"> für etablierte Geschäftsmodelle: Digitalisierung und Data-Mining ermöglichen es, dauerhaft effektiver zu arbeiten, flexibel auf Marktveränderungen zu reagieren und neue Trends frühzeitig zu erkennen. Technologie ist die beste Schnittstelle zwischen Geschäftsmodellen, Mitarbeitern und neuen und alten Kunden. Maßgeschneiderte Software-Lösungen unterstützen dabei Ihre unternehmenskritischen Anwendungen. Unser Ziel ist es, innovative und strategische Weitsicht auf Grundlage dieser digitalen Möglichkeiten für unsere Kunden zu integrieren. Wir möchten damit Ihren Weg in die digitale Zukunft ermöglichen und nachhaltig erleichtern.</p>
            <span class="inline-block lg:hidden color-red px-2 ml-2 text-bold border rounded cursor-pointer" v-if="readMore.indexOf(4) === -1" v-on:click="readMore.push(4)">mehr<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" height="12" width="12" class="inline-block align-text-middle"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" /></svg></span>
            <span class="inline-block lg:hidden color-red px-2 ml-2 text-bold border rounded cursor-pointer" v-if="readMore.indexOf(4) !== -1" v-on:click="readMore.splice(readMore.indexOf(4), 1)"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" height="12" width="12" class="inline-block align-text-middle"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" /></svg>weniger</span>
          </article>
        </ul>
      </div>
      <div class="col-span-1 hidden lg:block">
        <ul>
          <li :class="{'active': active == 1}"><img class="rounded-lg" src="./../assets/img/services3/1.jpg" alt=""></li>
          <li :class="{'active': active == 3}"><img class="rounded-lg" src="./../assets/img/services3/5.jpg" alt=""></li>
          <li :class="{'active': active == 2}"><img class="rounded-lg" src="./../assets/img/services3/3.jpg" alt=""></li>
          <li :class="{'active': active == 4}"><img class="rounded-lg" src="./../assets/img/services3/4.jpg" alt=""></li>
        </ul>
      </div>
    </div>
    <CtaButton class="mt-8 bg-gray-100 border-gray-100 hover:border-gray-500" @clicked="onClickCta">Jetzt Prozesse optimieren</CtaButton>
  </section>
</template>

<script>
import CtaButton from './CtaButton.vue'
export default {
  name: 'Services3',
  components: {
    CtaButton
  },
  data: () => {
    return {
      active: 1,
      readMore: []
    }
  },
  methods: {
    onClick(id) {
      this.active = id; 
    },
    onClickCta() {
      this.$emit('clicked', 'Prozesse optimieren')
    }
  }
}
</script>

<style scoped>
#tab-navi li {
  cursor: pointer;
  background-color: rgba(243, 244, 246, 1);
  border-radius: 5px;
  transition: transform 0.3s;
  background: url('./../assets/img/button2.png') no-repeat center center transparent;
  background-size: cover;
  padding: 7px 0 0 30px;
  line-height: 95px;
  margin-bottom: 5px;
}
#tab-navi li.active {
  background-image: url('./../assets/img/button1.png');
  color: #fff;
}
#tab-navi li:hover {
  transform: scale(1.05);
}

@media (min-width: 768px) {
  ul:not(#tab-navi) article,
  ul:not(#tab-navi) li {
    display: none;
  }
  ul:not(#tab-navi) article.active,
  ul:not(#tab-navi) li.active {
    display: block;
  }
}
@media (max-width: 768px) {
  p {
    margin-bottom: 20px;
  }
}
</style>