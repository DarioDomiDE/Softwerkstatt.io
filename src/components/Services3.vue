<template>
  <section class="container min-h-screen max-w-screen-xl pt-32 pb-32">
    <h2 class="mb-8">Hier unterstützen wir.</h2>

    <div class="grid lg:grid-cols-4 grid-flow-col gap-8 grid-cols-1">
      <div class="lg:row-span-6 row-span-1">
        <ul id="tab-navi">
          <li v-on:click="active = 1" class="transform scale-103 transition-transform" v-bind:class="{'active': active == 1}"><span>Digitale Strategie</span></li>
          <li v-on:click="active = 2" class="transform scale-103 transition-transform" v-bind:class="{'active': active == 2}"><span>Industrie 4.0</span></li>
          <li v-on:click="active = 3" class="transform scale-103 transition-transform" v-bind:class="{'active': active == 3}"><span>Prozessoptimierung</span></li>
          <li v-on:click="active = 4" class="transform scale-103 transition-transform" v-bind:class="{'active': active == 4}"><span>Digitale Transformation</span></li>
        </ul>
      </div>
      <div class="lg:row-span-6 lg:col-span-2 row-span-1 col-span-1">
        <ul>
          <article :class="{'active': active == 1}">
            <h4>Digitale Strategie</h4>
            <p>Sie haben Optimierungspotential erkannt, Anforderungen analysiert und Konzepte ausgearbeitet. Etablierte Vorgehensmodelle wie Agile Softwareentwicklung (Scrum und Kanban), Impact Mapping und Lean-Startup helfen Ihnen nun, Software so zu entwickeln, dass Sie flexibel auf Veränderungen reagieren können. Wir glauben daran, dass User-Feedback an erster Stelle stehen und vom ersten Prototypen daran gemessen werden muss. Erfolgreiche Software-Projekt bedarf es etablierte Vorgehensweisen und ein eingespieltes Team: Wir möchten Sie dabei unterstützen, gemeinsam über den Tellerrand hinaus zu schauen und neue Blickwinkel einzunehmen, um die langfristige Strategie für Ihr Produkt und Projekt zu verbessern, und dabei unsere Learnings, wie ständiges Hinterfragen der Priorisierung mit Fokus auf Kosten/Nutzen, mit einschließen lassen.</p>
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
      <div class="lg:row-span-6 col-span-1 row-span-1">
        <ul>
          <li :class="{'active': active == 1}"><img class="rounded-lg" src="./../assets/img/service_1.jpg" alt=""></li>
          <li :class="{'active': active == 2}"><img class="rounded-lg" src="http://placehold.it/300x505" alt=""></li>
          <li :class="{'active': active == 3}"><img class="rounded-lg" src="http://placehold.it/300x510" alt=""></li>
          <li :class="{'active': active == 4}"><img class="rounded-lg" src="http://placehold.it/300x515" alt=""></li>
          <li :class="{'active': active == 5}"><img class="rounded-lg" src="http://placehold.it/300x520" alt=""></li>
        </ul>
      </div>
    </div>
    <CtaButton class="bg-gray-100 float-right my-4"></CtaButton>
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
  methos: {
    onClick: (id) => {
      this.active = id; 
      console.log("Click");
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
    position: relative;
    cursor: pointer;
  }
  #tab-navi li.active {
    background: linear-gradient(45deg, #36c1c7 0%, #67dfc4 90%);
    color: #fff;
  }
  #tab-navi li span {
    display: table-cell;
    padding: 35px 0 25px 30px;
    height: 20px;
    font-size: 1.2em;
  }
  #tab-navi li::before,
  #tab-navi li::after {
    content: '';
    position: absolute;
    width: calc(100% + 2px);
    height: 64px;
    background: url('./../assets/img/border.png') no-repeat center center;
    background-size: cover;
    left: -1px;
  }
  #tab-navi li::before {
    top: -1px;
  }
  #tab-navi li::after {
    bottom: -1px;
    -moz-transform: scaleX(-1) scaleY(-1);
    -o-transform: scaleX(-1) scaleY(-1);
    -ms-transform: scaleX(-1) scaleY(-1);
    -webkit-transform: scaleX(-1) scaleY(-1);
    transform: scaleX(-1) scaleY(-1);
  }
</style>