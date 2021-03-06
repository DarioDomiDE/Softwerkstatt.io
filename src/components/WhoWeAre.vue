<template>
  <div class="pt-16 pb-32 lg:my-5">
    <div class="container mx-auto max-w-screen-lg xl:max-w-screen-lg text-gray-400 px-4 lg:px-0 mb-8">
      <span class="block pre-headline text-center">Wer wir sind</span>
      <h1 class="text-center">Wir sind Softwerkstatt</h1>
      <p>Ein Zusammenschluss leidenschaftlicher Softwareentwickler. In Hamburg daheim, in der Welt zu Hause. Wir sehen uns als Partner, Kollegen und Freunde, die gemeinsam etwas bewegen möchten.</p>
      <p>Nachfolgend unsere Grundsätze für Zufriedene Kunden und langfristige Zusammenarbeit, Selbstverantwortung und Selbstorganisation, effiziente Softwarelösungen, hochwertiges Handwerk und für kreative Diskussionen.</p>
    </div>
    
    <curved v-bind:skipBorderBottom="true">
      <div class="mx-auto max-w-screen-lg xl:max-w-screen-lg -my-4">
        <div class="w-3/5 inline-block">
          <h2>1. User-driven development</h2>
          <p>Gemeinsam bewegen wir Menschen und Unternehmen. Wir arbeiten für Unternehmen, aber designen für Menschen. Wir wollen Software langfristiger und Arbeitsabläufe einfacher machen. Als digitale Problemlöser für echte Menschen sind wir die Erweiterung der Teams unserer Kunden. Wir fangen beim Kunden an und arbeiten von dort aus rückwärts. Problemlösungen-first statt Technologie-first.</p>
        </div>
        <div class="w-2/5 inline-block">
          <img class="w-4/5 ml-auto" src="./../assets/img/howto/step2.svg" alt="">
        </div>
      </div>
    </curved>
    
    <curved class="bg-white" v-bind:skipBorderBottom="true" v-bind:borderTopGray="true">
      <div class="mx-auto max-w-screen-lg xl:max-w-screen-lg-my-4">
        <div class="w-2/5 inline-block">
          <img class="w-4/5" src="./../assets/img/howto/step4.svg" alt="">
        </div>
        <div class="w-3/5 inline-block">
          <h2>2. Verantwortung übernehmen</h2>
          <p class="text-gray-500">Wir sind Macher, Erfinder und Entdecker! Wir wollen unsere Mitarbeter, erwachsene Menschen, nicht babysitten und ihnen sagen, was zu tun ist. Denn wir wissen: Die besten Leute bekommt (und hält) man vielleicht gar nicht mit Dienstwagen und Champagnerfeten. Freiheit ist wichtiger. Wir bieten (und erwarten) Eigenständigkeit und selbstbestimmtes arbeiten. Das funktioniert nur mit gegenseitigem Vertrauen, Loyalität und Eigenverantwortung. Sie sagen nie „das ist nicht meine Aufgabe.“.</p>
        </div>
      </div>
    </curved>

    <curved v-bind:skipBorderBottom="true">
      <div class="mx-auto max-w-screen-lg xl:max-w-screen-lg -my-4">
        <div class="w-3/5 inline-block">
          <h2>3. Ständiges Lernen</h2>
          <p>Jedes Unternehmen wünscht sich die besten Talente der Industrie. Wir hinterfragten, wie Entwickler zu Top-Talente werden, und wie dessen Qualität langfristig erhalten und weiter ausgebaut werden kann. Unsere Schlussfolgerung: Eine Umgebung schaffen, die es nicht nur proaktiv anbietet, sondern zur Pflicht macht, regelmäßig Neues zu lernen und sich zu verbessern. Hierfür ist ein Tag pro Woche reserviert, an dem nicht am Daily Business gearbeitet werden darf! Arbeite an dem, an was auch immer du möchtest. Stelle dir aus unbegrenzten individuellen Entwicklungsmöglichkeiten deinen persönlichen Karrierepfad zusammen. Unsere Kunden stimmen uns zu: Man sieht unseren Projekten die Kultur an, in der sie entstanden ist.</p>
        </div>
        <div class="w-2/5 inline-block">
          <img class="w-4/5 ml-auto" src="./../assets/img/howto/step1.svg" alt="">
        </div>
      </div>
    </curved>

    <curved class="bg-white" v-bind:skipBorderBottom="true" v-bind:borderTopGray="true">
      <div class="mx-auto max-w-screen-lg xl:max-w-screen-lg -my-4">
        <div class="w-2/5 inline-block">
          <img class="w-4/5" src="./../assets/img/howto/step3.svg" alt="">
        </div>
        <div class="w-3/5 inline-block text-gray-500">
          <h2>4. Höchste Maßstäbe</h2>
          <p>Wir entwickeln nicht nur, wir erfinden! Unsere Leidenschaft ist, Software zu entwickeln, auf die wir stolz sind: Wir werden unermüdlich hohe Standards setzen und kontinuierlich die Messlatte höher legen. Dabei steht das Handwerk stets im Vordergrund. Hierarchien und unnötige Prozesse im Hintergrund. Unser Commitment ist, durch Liebe zur Software Craftsmanship und agiler Vorgehensweisen stets Leidenschaft zu designen und programmieren. Unser Anspruch an unsere Leistung ist hoch, und was wir abliefern, funktioniert.</p>
        </div>
      </div>
    </curved>

    <curved>
      <div class="mx-auto max-w-screen-lg xl:max-w-screen-lg -my-4">
        <div class="w-3/5 inline-block">
          <h2>5. Team</h2>
          <p>Jeder im Team hat die Möglichkeit seine Fähigkeiten und Talente einzubringen und Entscheidungen Anderer zu hinterfragen, auch außerhalb seines Fachgebietes. Nicht der Lauteste, sondern das stärkste Argument gewinnt. Nur wenn jeder von uns seine Erfahrungen mit einbringt, entstehen zusammen die besten Konzepte. Wir planen auf lange Sicht und opfern langfristigen Chancen nicht zugunsten kurzfristiger Ergebnisse.</p>
        </div>
        <div class="w-2/5 inline-block">
          <img class="w-4/5 ml-auto" src="./../assets/img/howto/step1.svg" alt="">
        </div>
      </div>
    </curved>

    <Borders />
  </div>
</template>

<script>
import Curved from './../views/Curved.vue'
import Borders from './../views/Borders.vue'

export default {
  name: 'WhoWeAre',
  components: {
    Curved,
    Borders
  },
  methods: {
  }
}
</script>

<style scoped>
.bg-white {
  background-color: #fff;
}
p {
  margin: 1rem 0 0 0;
}
</style>