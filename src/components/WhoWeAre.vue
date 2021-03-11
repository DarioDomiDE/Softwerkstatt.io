<template>
  <div class="pt-16 pb-32 lg:my-5">
    <div class="container mx-auto max-w-screen-lg text-gray-400 px-4 lg:px-0 mb-8">
      <span class="block pre-headline text-center">Ja, Wer sind wir eigentlich?</span>
      <h1 class="text-center">Wir sind Softwerkstatt</h1>
      <p>Ein Zusammenschluss leidenschaftlicher Softwareentwickler. In Hamburg daheim, in der Welt zu Hause. Wir sehen uns als Partner, Kollegen und Freunde, die gemeinsam etwas bewegen möchten. Nachfolgend unsere Grundsätze für erfolgreiche Projekte:</p>
    </div>
    
    <curved v-bind:skipBorderBottom="true">
      <div class="mx-auto max-w-screen-md xl:max-w-screen-lg lg:-my-4 px-4 lg:px-0 flex flex-col md:flex-row">
        <div class="w-full md:w-3/5">
          <h2>1. User-driven development</h2>
          <p>Gemeinsam bewegen wir Menschen und Unternehmen. Wir arbeiten für Unternehmen, aber entwickeln für echte Menschen. Wir wollen Software besser und Arbeitsabläufe einfacher machen. Als digitale Problemlöser sind wir die Erweiterung der Teams unserer Kunden. Wir fangen beim Kunden an und arbeiten von dort aus rückwärts. Problemlösungs-first statt Technologie-first.</p>
        </div>
        <div class="w-1/2 md:w-2/5 mx-auto inline-flex order-first md:order-none">
          <img class="md:w-4/5 md:ml-auto" src="./../assets/img/howto/step2.svg" alt="">
        </div>
      </div>
    </curved>
    
    <curved class="bg-white" v-bind:skipBorderBottom="true" v-bind:borderTopGray="true">
      <div class="mx-auto max-w-screen-md xl:max-w-screen-lg lg:-my-4 px-4 lg:px-0 flex flex-col md:flex-row">
        <div class="w-1/2 md:w-2/5 mx-auto inline-flex">
          <img class="md:w-4/5" src="./../assets/img/howto/step4.svg" alt="">
        </div>
        <div class="w-full md:w-3/5">
          <h2>2. Eigenständigkeit</h2>
          <p class="text-gray-500">Wir sind Macher, Erfinder und Entdecker! Wir wollen unsere Mitarbeter, erwachsene Menschen, nicht babysitten und ihnen sagen, was zu tun ist. Denn wir wissen: Die besten Leute bekommt (und hält) man vielleicht gar nicht mit Dienstwagen und Champagnerfeten. Freiheit ist wichtiger. Wir bieten (und erwarten) Eigenständigkeit und selbstbestimmtes Arbeiten. Das funktioniert nur mit gegenseitigem Vertrauen, Loyalität und Eigenverantwortung. Bei uns sagen man nie: „Das ist nicht meine Aufgabe.“</p>
        </div>
      </div>
    </curved>

    <curved v-bind:skipBorderBottom="true">
      <div class="mx-auto max-w-screen-md xl:max-w-screen-lg lg:-my-4 px-4 lg:px-0 flex flex-col md:flex-row">
        <div class="w-full md:w-3/5">
          <h2>3. Ständiges Lernen</h2>
          <p>Jedes Unternehmen wünscht sich die besten Talente der Industrie. Wir hinterfragten, wie Entwickler zu Top-Talente werden, und wie dessen Erfahrung langfristig ausgebaut werden kann. Unsere Schlussfolgerung: Eine Umgebung schaffen, die es nicht nur proaktiv anbietet, sondern zur Pflicht macht, regelmäßig Neues zu lernen und den Kompetenzbereich zu erweitern. Hierfür ist ein Tag pro Woche reserviert, an dem nicht am Daily Business gearbeitet werden darf! Arbeite an dem, was auch immer du möchtest. Stelle dir aus deine persönlichen Entwicklungsmöglichkeiten zusammen. Unsere Kunden stimmen uns zu: Man sieht unseren Projekten die Kultur an, in der sie entstanden ist.</p>
        </div>
        <div class="w-1/2 md:w-2/5 block inline-flex mx-auto order-first md:order-none">
          <img class="md:w-4/5 md:ml-auto" src="./../assets/img/howto/step1.svg" alt="">
        </div>
      </div>
    </curved>

    <curved class="bg-white" v-bind:skipBorderBottom="true" v-bind:borderTopGray="true">
      <div class="mx-auto max-w-screen-md xl:max-w-screen-lg lg:-my-4 px-4 lg:px-0 flex flex-col md:flex-row">
        <div class="w-1/2 md:w-2/5 mx-auto inline-flex">
          <img class="md:w-4/5" src="./../assets/img/howto/step3.svg" alt="">
        </div>
        <div class="w-full md:w-3/5 text-gray-500">
          <h2>4. Höchste Maßstäbe</h2>
          <p>Wir entwickeln nicht nur, wir erfinden! Unsere Leidenschaft ist, Software zu entwickeln, auf die wir stolz sind: Wir werden unermüdlich hohe Standards setzen und kontinuierlich die Messlatte höher legen. Dabei steht das Handwerk stets im Vordergrund. Hierarchien und unnötige Prozesse im Hintergrund. Unser Commitment ist, durch Liebe zur Software Craftsmanship stets mit Leidenschaft dabei zu sein. Unser Anspruch an die Qualität ist hoch, und was wir abliefern, funktioniert langfristig.</p>
        </div>
      </div>
    </curved>

    <curved>
      <div class="mx-auto max-w-screen-md xl:max-w-screen-lg lg:-my-4 px-4 lg:px-0 flex flex-col md:flex-row">
        <div class="w-full md:w-3/5">
          <h2>5. Team</h2>
          <p>Jeder im Team hat die Möglichkeit, seine Fähigkeiten und Talente einzubringen und Entscheidungen Anderer zu hinterfragen, auch außerhalb seines Fachgebietes. Nicht der Lauteste, sondern das stärkste Argument gewinnt. Denn nur, wenn jeder von uns seine Erfahrungen mit einbringt, entstehen zusammen die besten Lösungen. Wir planen auf lange Sicht und opfern langfristigen Chancen nicht zugunsten kurzfristiger Ergebnisse.</p>
        </div>
        <div class="w-1/2 md:w-2/5 mx-auto inline-flex order-first md:order-none">
          <img class="md:w-4/5 md:ml-auto" src="./../assets/img/howto/step6.svg" alt="">
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