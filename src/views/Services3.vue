<template>
  <section class="container min-h-0 max-w-screen-xl pb-2 px-4 md:px-8 2xl:px-0 text-center">
    <span class="pre-headline color3">Expertise</span>
    <h1>Hier unterstützen wir</h1>
    <div class="grid grid-cols-1 lg:grid-cols-4 gap-8 text-left">
      <div class="col-span-1 lg:col-span-1 hidden md:block">
        <ul id="tab-navi">
          <li v-on:click="active = 1" class="inline-block lg:block w-6/12 lg:w-full xl:text-2xl" v-bind:class="{'active': active == 1}">Software Consulting</li>
          <li v-on:click="active = 3" class="inline-block lg:block w-6/12 lg:w-full xl:text-2xl" v-bind:class="{'active': active == 3}">Prozessoptimierung</li>
          <li v-on:click="active = 2" class="inline-block lg:block w-6/12 lg:w-full xl:text-2xl" v-bind:class="{'active': active == 2}">Digitale Strategie</li>
          <li v-on:click="active = 4" class="inline-block lg:block w-6/12 lg:w-full xl:text-2xl" v-bind:class="{'active': active == 4}">Digitale Transformation</li>
        </ul>
      </div>
      <div class="col-span-1 lg:col-span-2">
        <ul>
          <article :class="{'active': active == 1}">
            <h3 v-on:click="onClickHeadline(1)">Software Consulting</h3>
            <span class="icon block sm:hidden text-gray-400"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" /></svg></span>
            <div :class="active == 1 ? 'inline-block' : 'hidden lg:inline'">
              <p class="inline">Geschäftsmodelle und Branchen verändern sich, werden digitaler und Arbeitsabläufe effizienter. Als IT-Dienstleister wissen wir aus der Praxis: Individuelle Softwarelösungen für etablierte Arbeitsprozesse bringen die effizientesten Strategien im Einklang mit Ihrer Vision hervor.</p>
              <p :class="active == 1 && readMore ? 'inline' : 'hidden lg:inline'"> Um als Unternehmen Marktvorsprünge auszubauen, braucht es vor allem das grundlegende Commitment zur Optimierung. Wir möchten Ihre Prozesse und Abläufe optimieren, und bieten Ihnen dafür unverbindlich eine passgenaue Strategie-Beratung an. Denn unser Ziel ist es, Arbeitsabläufe zu verbessern und so die Auslastung zu steigern, um die Produktivität Ihrer Mitarbeiter, Kollegen und Kunden durch intelligente Individualsoftware nachhaltig zu verbessern.</p>
              <span class="inline-block lg:hidden color-red px-2 ml-2 text-bold border rounded cursor-pointer" v-if="!readMore" v-on:click="readMore = true">mehr<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" height="12" width="12" class="inline-block align-text-middle"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" /></svg></span>
            </div>
          </article>
          <article :class="{'active': active == 2}">
            <h3 v-on:click="onClickHeadline(2)">Digitale Strategie</h3>
            <span class="icon block sm:hidden text-gray-400"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" /></svg></span>
            <div :class="active == 2 ? 'inline-block' : 'hidden lg:inline'">
              <p class="inline">Sie haben Optimierungspotenziale erkannt und Ihre Anforderungen analysiert? Wir helfen Ihnen dabei, passende Lösungskonzepte zu erarbeiten. Mit etablierten Vorgehensmodellen der agilen Softwareentwicklung, wie Scrum und Kanban, und Strategien wie Impact Mapping und Lean Startup können wir Ihre Software so entwickeln, dass Sie währenddessen flexibel auf Veränderungen reagieren können.</p>
              <p :class="active == 2 && readMore ? 'inline' : 'hidden lg:inline'"> Wir glauben daran, dass Nutzerfeedback an erster Stelle stehen muss und messen daher unsere Ergebnisse vom ersten Prototypen hieran: Wir möchten Sie dabei unterstützen, gemeinsam über den Tellerrand zu schauen und neue Blickwinkel einzunehmen. Unsere Learnings, ein ständiger Blick auf das Kosten/Nutzen-Verhältnis sowie das Hinterfragen der Priorisierung lassen wir mit einfließen, um den langfristigen Erfolg für Ihr Produkt und Projekt zu verbessern. Denn das Ziel unserer Software ist, das Arbeitsleben leichter, angenehmer und produktiver zu machen.</p>
              <span class="inline-block lg:hidden color-red px-2 ml-2 text-bold border rounded cursor-pointer" v-if="!readMore" v-on:click="readMore = true">mehr<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" height="12" width="12" class="inline-block align-text-middle"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" /></svg></span>
            </div>
          </article>
          <article :class="{'active': active == 3}">
            <h3 v-on:click="onClickHeadline(3)">Digitale Transformation</h3>
            <span class="icon block sm:hidden text-gray-400"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" /></svg></span>
            <div :class="active == 3 ? 'inline-block' : 'hidden lg:inline'">
              <p class="inline">Technologien haben die Welt radikal verändert, Daten sind das neue Gold und Maschinen sowie Produkte sind direkt miteinander vernetzt, man spricht auch von Industrie 4.0. Ständige Veränderung ist Teil unserer Geschäftswelt geworden und Herausforderungen wie diese als Chancen statt Probleme zu sehen, bietet neue Umsatzpotenziale:</p>
              <p :class="active == 3 && readMore ? 'inline' : 'hidden lg:inline'"> Digitalisierung und Data-Mining ermöglichen es, dauerhaft effektiver zu arbeiten, flexibel auf Marktveränderungen zu reagieren und neue Trends frühzeitig zu erkennen. Technologie ist die beste Schnittstelle zwischen Geschäftsmodellen, Mitarbeitern und bestehenden sowie neuen Kunden. Unser Ziel ist es, innovative und strategische Weitsicht auf Grundlage dieser digitalen Möglichkeiten für unsere Kunden zu integrieren. Wir möchten damit Ihren Weg in eine digitalere Zukunft ermöglichen und nachhaltig erleichtern. Denn maßgeschneiderte Individualsoftware unterstützt dabei Ihre unternehmenskritischen Anwendungen.</p>
              <span class="inline-block lg:hidden color-red px-2 ml-2 text-bold border rounded cursor-pointer" v-if="!readMore" v-on:click="readMore = true">mehr<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" height="12" width="12" class="inline-block align-text-middle"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" /></svg></span>
            </div>
          </article>
          <article :class="{'active': active == 4}">
            <h3 v-on:click="onClickHeadline(4)">Prozessoptimierung</h3>
            <span class="icon block sm:hidden text-gray-400"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" /></svg></span>
            <div :class="active == 4 ? 'inline-block' : 'hidden lg:inline'">
              <p class="inline">Wie optimieren Sie Ihr Geschäftsmodell im digitalen Raum? Manchmal bedarf es innovativer Lösungen für die komplexen Herausforderungen moderner Geschäftsmodelle. Hierbei ist es von besonderer Bedeutung, Arbeitsschritte zu vereinfachen und Bottlenecks zu entfernen. Auf Grundlage einer Bewertung der Arbeitsabläufe Ihres Unternehmens bringen wir neue Blickwinkel ein</p>
              <p :class="active == 4 && readMore ? 'inline' : 'hidden lg:inline'">, um mit Software teure Abläufe zu automatisieren und so Mitarbeiter zu entlasten. Um zukunftssicher für die stetigen Veränderungen Ihres Marktumfeldes zu sein, möchten wir Sie mit dem nötigen Fachwissen und Tools ausstatten, um das langfristige Potenzial Ihrer Software sicherstellen. Wir begleiten unsere Kunden in allen Schritten der Prozessoptimierung: Von der Konzeption, über Entwicklung von Algorithmen bis zur Programmierung. Denn wir lieben Automatisierung, um schneller wachsen können, Ihre Mitarbeiter zu entlasten und besser neue Kunden gewinnen zu können! Software, die das Leben vereinfacht.</p>
              <span class="inline-block lg:hidden color-red px-2 ml-2 text-bold border rounded cursor-pointer" v-if="!readMore" v-on:click="readMore = true">mehr<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" height="12" width="12" class="inline-block align-text-middle"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" /></svg></span>
            </div>
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
    <CtaButton class="mt-8 bg-gray-100 text-gray-700 border-gray-100 hover:border-gray-500" @clicked="onClickCta">Sprechen Sie mit uns</CtaButton>
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
      readMore: false
    }
  },
  methods: {
    onClick(id) {
      this.active = id; 
    },
    onClickCta() {
      this.$emit('clicked', 'Kontakt aufnehmen')
    },
    onClickHeadline(id) {
      this.active = this.active == id ? 0 : id;
      this.readMore = false
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
  h3 {
    margin-top: -10px;
  }
}
@media (max-width: 768px) {
  article {
    position: relative;
  }
  h3 {
    position: relative;
    z-index: 10;
    cursor: pointer;
  }
  article.active h3 {
    font-weight: bold;
    color: #114154;
  }
  .icon {
    position: absolute;
    right: 0;
    top: 5px;
    width: 30px;
    height: 30px;
  }
  article.active .icon {
    transform: rotate(180deg);
  }
  p {
    margin-bottom: 20px;
  }
  article div {
    background-color: #114154;
    color: #fff;
    padding: 20px 15px;
    border-radius: 6px;
    box-shadow: 0 0 20px rgba(0,0,0,0.3);
  }
}
</style>