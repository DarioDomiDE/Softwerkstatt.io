<template>
  <div class="pt-16 pb-32 lg:my-5">
    <div class="container mx-auto max-w-screen-lg xl:max-w-screen-lg text-gray-400 px-4 lg:px-0 mb-8">
      <span class="block pre-headline text-center">Wer wir sind</span>
      <h1 class="text-center">Wir sind Softwerkstatt</h1>
      <p>Ein Zusammenschluss leidenschaftlicher Softwareentwickler. Wir sehen uns als Partner, Kollegen und Freunde, die gemeinsam etwas bewegen möchten. In Hamburg daheim, in der Welt zu Hause.</p>
      <p>Unsere Grundsätze: Zufriedene Kunden und langfristige Zusammenarbeit, Selbstverantwortung und Selbstorganisation, effiziente Softwarelösungen, hochwertiges Handwerk und kreative Diskussionen.</p>
    </div>
    
    <div class="bg-gray-100">
      <div class="mx-auto max-w-screen-lg xl:max-w-screen-lg py-4">
        <div class="w-3/5 inline-block">
          <h2>1. 100% kundenorientiert</h2>
          <p>Wir arbeiten für Unternehmen, aber designen für Menschen. Wir wollen Software langfristiger und Arbeitsabläufe einfacher machen. Als digitale Problemlöser für echte Menschen sind wir die Erweiterung der Teams unserer Kunden. Wir fangen beim Kunden an und arbeiten von dort aus rückwärts.</p>
        </div>
        <div class="w-2/5 inline-block">
          <img class="w-4/5 ml-auto" src="./../assets/img/howto/step2.svg" alt="">
        </div>
      </div>
    </div>
    
    <div class="">
      <div class="mx-auto max-w-screen-lg xl:max-w-screen-lg py-4">
        <div class="w-2/5 inline-block">
          <img class="w-4/5" src="./../assets/img/howto/step4.svg" alt="">
        </div>
        <div class="w-3/5 inline-block">
          <h2>2. Verantwortung übernehmen</h2>
          <p class="text-gray-500">Wir sind Macher, Erfinder und Entdecker! Wir wollen unsere Mitarbeter, erwachsene Menschen, nicht babysitten und ihnen sagen, was zu tun ist. Denn wir wissen: Die besten Leute bekommt (und hält) man vielleicht gar nicht mit Dienstwagen und Champagnerfeten. Freiheit ist wichtiger. Wir bieten (und erwarten) Eigenständigkeit und selbstbestimmtes arbeiten. Das funktioniert nur mit gegenseitigem Vertrauen, Loyalität und Eigenverantwortung. Sie sagen nie „das ist nicht meine Aufgabe.“. Denn jeder plant auf lange Sicht und opfert keine langfristigen Chancen zugunsten kurzfristiger Ergebnisse.</p>
        </div>
      </div>
    </div>

    <div class="bg-gray-100">
      <div class="mx-auto max-w-screen-lg xl:max-w-screen-lg py-4">
        <div class="w-3/5 inline-block">
          <h2>3. Ständiges Lernen</h2>
          <p>Jedes Unternehmen wünscht sich die besten Talente der Industrie. Wir hinterfragten, wie Entwickler zu Top-Talente werden, und wie dessen Qualität langfristig erhalten und weiter ausgebaut werden kann. Unsere Schlussfolgerung: Eine Umgebung schaffen, die es nicht nur proaktiv anbietet, sondern zur Pflicht macht, regelmäßig Neues zu lernen und sich zu verbessern. Hierfür ist ein Tag pro Woche reserviert, an dem nicht am Daily Business gearbeitet werden darf! Arbeite an dem, an was auch immer du möchtest. Unsere Kunden stimmen uns zu: Man sieht unseren Projekten die Kultur an, in der sie entstanden ist.</p>
        </div>
        <div class="w-2/5 inline-block">
          <img class="w-4/5 ml-auto" src="./../assets/img/howto/step1.svg" alt="">
        </div>
      </div>
    </div>

    <div class="">
      <div class="mx-auto max-w-screen-lg xl:max-w-screen-lg py-4">
        <div class="w-2/5 inline-block">
          <img class="w-4/5" src="./../assets/img/howto/step3.svg" alt="">
        </div>
        <div class="w-3/5 inline-block text-gray-500">
          <h2>4. Höchste Maßstäbe</h2>
          <p>Wir entwickeln nicht nur, wir erfinden! Unsere Leidenschaft ist, Software zu entwickeln, auf die wir stolz sind: Wir werden unermüdlich hohe Standards setzen und kontinuierlich die Messlatte höher legen. Dabei steht das Handwerk stets im Vordergrund. Hierarchien und unnötige Prozesse im Hintergrund. Unser Commitment ist, durch Liebe zur Software Craftsmanship und agiler Vorgehensweisen stets Leidenschaft zu designen und programmieren. Unser Anspruch an unsere Leistung ist hoch, und was wir abliefern, funktioniert.</p>
        </div>
      </div>
    </div>

    <Borders />
  </div>
</template>

<script>
import Borders from './../views/Borders.vue'

export default {
  name: 'Team',
  components: {
    Borders
  },
  methods: {
  }
}
</script>

<style scoped>
p {
  margin: 1rem 0;
}
</style>