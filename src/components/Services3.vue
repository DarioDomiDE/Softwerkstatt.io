<template>
  <section class="container min-h-screen max-w-screen-xl pt-32 pb-32 px-4 md:px-8 2xl:px-0">
    <h2 class="mb-8">Hier unterstützen wir.</h2>

    <div class="grid grid-cols-1 lg:grid-cols-4 gap-8">
      <div class="col-span-1 lg:col-span-1">
        <ul id="tab-navi">
          <li v-on:click="active = 1" class="inline-block lg:block w-6/12 lg:w-full xl:text-2xl" v-bind:class="{'active': active == 1}">Digitale Strategie</li>
          <li v-on:click="active = 2" class="inline-block lg:block w-6/12 lg:w-full xl:text-2xl" v-bind:class="{'active': active == 2}">Industrie 4.0</li>
          <li v-on:click="active = 3" class="inline-block lg:block w-6/12 lg:w-full xl:text-2xl" v-bind:class="{'active': active == 3}">Prozessoptimierung</li>
          <li v-on:click="active = 4" class="inline-block lg:block w-6/12 lg:w-full xl:text-2xl" v-bind:class="{'active': active == 4}">Digitale Transformation</li>
        </ul>
      </div>
      <div class="col-span-1 lg:col-span-2">
        <ul>
          <article :class="{'active': active == 1}">
            <h4>Digitale Strategie</h4>
            <p>Sie kennen Optimierungspotenziale, haben Ihre Anforderungen analysiert und passende Lösungskonzepte erarbeitet. Mit etablierten Vorgehensmodellen der agilen Softwareentwicklung, wie Scrum und Kanban und Strategien wie Impact Mapping und Lean Startup können wir Ihre Software so entwickeln, dass Sie währenddessen flexibel auf Veränderungen reagieren können. Wir glauben daran, dass User Feedback an erster Stelle stehen muss und messen daher unsere Ergebnisse vom ersten Prototypen hieran. Denn unser Ziel ist, das Arbeitsleben leichter, angenehmer und produktiver zu machen: Wir möchten Sie dabei unterstützen, gemeinsam über den Tellerrand zu schauen und neue Blickwinkel einzunehmen. Unsere Learnings, ein ständiger Blick auf das Kosten/Nutzen-Verhältnis sowie Hinterfragen der Priorisierung lassen wir mit einfließen, um den langfristigen Erfolg für Ihr Produkt und Projekt zu verbessern.</p>
          </article>
          <article :class="{'active': active == 2}">
            <h4>Industrie 4.0</h4>
            <p>Geschäftsmodelle und Branchen verändern sich, werden digitaler, und Arbeitsabläufe effizienter. Als IT Dienstleister wissen wir aus der Praxis: Für die effizientesten Visionen und Strategien  bedarf es die individuelle Software-Lösung für etablierte und neue Arbeitsabläufe. Um Marktvorsprünge auszubauen, bedarf es nicht weniger als einer 10x Optimierung. Wir möchten Ihre Prozesse und Abläufe optimieren, und bieten Ihnen unverbindlich passgenaue Strategie-Beratung an. Wir verhindern Stillstand, denn solange Ihr Unternehmen wächst, muss Ihre Software mit wachsen.  Mit dem Ziel Arbeitsabläufe zu verbessern und Auslastung zu steigern, um nachhaltiges Wachstum Ihrer Mitarbeiter, Kollegen und Abteilungen zu verwirklichen.</p>
          </article>
          <article :class="{'active': active == 3}">
            <h4>Prozessoptimierung</h4>
            <p>Wie optimieren Sie Ihr Geschäftsmodell im digitalen Raum? Es bedarf kreativer Lösungen für Geschäftsmodelle und komplexe Aufgaben, und um aufwändige Arbeitsschritte und deren Bottlenecks zu entfernen. Auf Basis einer Bewertung von Arbeitsabläufen und Prozessen Ihres Unternehmens bringen wir neue Blickwinkel mit ein, um mit der Entwicklung eigener Tools und Plattformen Prozesse zu digitalisieren und Abläufe zu automatisieren. Wir möchten Sie mit nötigem Fachwissen und Tools ausschalten, und Ihre Software für langfristige Erweiterbarkeit konzipieren, um das Potenzial auch in einem veränderndem Marktumfeld voll auszuschöpfen. Dabei begleiten wir unsere Kunden von der Konzeption, über Programmierung bis zur Skalierung. Um schneller wachsen zu können, Mitarbeiter zu entlasten oder besser neue Kunden zu gewinnen. Denn wir lieben Automatisierung, die das (Business-) Leben vereinfacht.</p>
          </article>
          <article :class="{'active': active == 4}">
            <h4>Digitale Transformation</h4>
            <p>Technologie hat die Welt radikal verändert. Daten sind das neue Gold. Und disruptive Technologien bringen fundamentale Veränderungen in etablierte Geschäftsmodelle. Herausforderungen wie diese sollten Sie als Chancen statt als Probleme sehen: Digitalisierung und Daten bieten Vorteile, um dauerhaft besser und effektiver zu arbeiten, flexibel auf Marktveränderungen zu reagieren sowie Trends frühzeitig zu erkennen. Technologie ist die beste Schnittstelle zwischen Ihren Geschäftsmodellen, Mitarbeitern und neuen Kunden. Maßgeschneiderte Software-Lösungen unterstützen dabei unternehmenskritische Anwendungen. Unser Ziel ist es, strategische und innovative Weitsicht auf Basis dieser digitalen Möglichkeiten zu integrieren und unseren Kunden die digitale Zukunft zu erleichtern. Wir entwickeln ausschließlich Software, in der Unternehmensprozesse wachsen können, um nachhaltig erfolgreich zu sein.</p>
          </article>
        </ul>
      </div>
      <div class="col-span-1 hidden lg:block">
        <ul>
          <li :class="{'active': active == 1}"><img class="rounded-lg" src="./../assets/img/service_1.jpg" alt=""></li>
          <li :class="{'active': active == 2}"><img class="rounded-lg" src="http://placehold.it/300x505" alt=""></li>
          <li :class="{'active': active == 3}"><img class="rounded-lg" src="http://placehold.it/300x510" alt=""></li>
          <li :class="{'active': active == 4}"><img class="rounded-lg" src="http://placehold.it/300x515" alt=""></li>
          <li :class="{'active': active == 5}"><img class="rounded-lg" src="http://placehold.it/300x520" alt=""></li>
        </ul>
      </div>
    </div>
    <CtaButton class="bg-gray-100 float-right my-4 border-gray-100 hover:border-gray-500" @clicked="onClickCta"></CtaButton>
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
      active: 1
    }
  },
  methods: {
    onClick(id) {
      this.active = id; 
    },
    onClickCta() {
      this.$emit('clicked', '')
    }
  }
}
</script>

<style scoped>
ul:not(#tab-navi) article,
ul:not(#tab-navi) li {
  display: none;
}
ul:not(#tab-navi) article.active,
ul:not(#tab-navi) li.active {
  display: block;
}
#tab-navi {
}
  #tab-navi ul {
  }
  #tab-navi li {
    background-color: rgba(243, 244, 246, 1);
    margin-bottom: 5px;
    border-radius: 5px;
    cursor: pointer;
    transition: transform 0.3s;
    background: url('./../assets/img/button2.png') no-repeat center center transparent;
    background-size: cover;
    padding: 7px 0 0 30px;
    line-height: 95px;
  }
  #tab-navi li.active {
    background-image: url('./../assets/img/button1.png');
    color: #fff;
  }
  #tab-navi li:hover {
    transform: scale(1.05);
  }
</style>