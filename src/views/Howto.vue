<template>
  <curved class="min-h-0 bg text-center" :skipBorderBottom="true" id="bg2">
    <div class="container max-w-screen-xl 2xl:max-w-screen-2xl pb-1 px-4 md:px-8 2xl:px-0">
      <span class="pre-headline color2">Abwicklung</span>
      <h1>Wie wir arbeiten</h1>
      <div id="howtoContainer">
        <img class="hidden xl:block" src="./../assets/img/howto/bg.png" alt="" id="howToBg">
        <div id="step1" class="step order-1">
          <h4>Analyse</h4>
          <svg viewBox="0 0 500 500">
            <path id="curve" d="M73.2,148.6c4-6.1,65.5-96.8,178.6-95.6c111.3,1.2,170.8,90.3,175.1,97" />
            <text width="500">
              <textPath xlink:href="#curve">&nbsp;&nbsp;&nbsp;&nbsp;Analyse</textPath>
            </text>
          </svg>
          <img class="mx-auto" src="./../assets/img/howto/step1.svg" alt="" @click="open(0)">
          <div :class="'popup xl:shadow-md ' + (isOpen === 0 ? 'active' : '')" @click="close">
            <span>Analyse</span>
            <img class="mx-auto" src="./../assets/img/howto/step1.svg" alt="">
            <p>Nutzen Sie unsere Expertise für neue Strategien und Blickwinkel: Wir helfen Ihnen, Ideen und deren Anforderungen zu analysieren und entwerfen mit Ihnen Lösungen, um langfristige Chancen und Potentiale der Digitalisierung optimal nutzen zu können.</p>
          </div>
        </div>
        <div id="step2" class="step order-2 margin-left">
          <h4>Beratung</h4>
          <svg viewBox="0 0 500 500">
            <path id="curve" d="M73.2,148.6c4-6.1,65.5-96.8,178.6-95.6c111.3,1.2,170.8,90.3,175.1,97" />
            <text width="500">
              <textPath xlink:href="#curve">&nbsp;&nbsp;&nbsp;&nbsp;Beratung</textPath>
            </text>
          </svg>
          <img class="mx-auto" src="./../assets/img/howto/step2.svg" alt="" @click="open(1)">
          <div :class="'popup xl:shadow-md ' + (isOpen === 1 ? 'active' : '')" @click="close">
            <span>Beratung</span>
            <img class="mx-auto" src="./../assets/img/howto/step2.svg" alt="">
            <p>Was braucht Ihre Lösung: Schnellste am Markt oder die Beste am Markt? Wir beraten Sie rund um Technologien und Frameworks und hinterfragen mit Ihnen, was für Sie wirklich wichtig ist statt nur dringend zu sein. Ist ein Prozess effizient? Oder nur effektiv?</p>
          </div>
          <div class="line line-left"></div>
          <div class="line line-bottom block lg:hidden"></div>
        </div>
        <div id="step3" class="step order-4 lg:order-3 margin-left">
          <h4>Prototyping</h4>
          <svg viewBox="0 0 500 500">
            <path id="curve" d="M73.2,148.6c4-6.1,65.5-96.8,178.6-95.6c111.3,1.2,170.8,90.3,175.1,97" />
            <text width="500">
              <textPath xlink:href="#curve">&nbsp;&nbsp;Prototyping</textPath>
            </text>
          </svg>
          <img class="mx-auto" src="./../assets/img/howto/step3.svg" alt="" @click="open(2)">
          <div :class="'popup xl:shadow-md ' + (isOpen === 2 ? 'active' : '')" @click="close">
            <span>Prototyping</span>
            <img class="mx-auto" src="./../assets/img/howto/step3.svg" alt="">
            <p>Wir validieren ständig das Look &amp; Feel mithilfe von Mockups, Feedback-Loops und A/B-Tests direkt am Nutzer. Mit Konzepten wie Design Thinking und Design Concepts werden wir uns dabei ab Tag 1 Feedback-getrieben auf die UX fokussieren.</p>
          </div>
          <div class="line line-left"></div>
          <div class="line line-bottom hidden lg:block"></div>
        </div>
        <div id="step4" class="step order-3 lg:order-6 lg-margin-left">
          <h4>Sicherheit</h4>
          <svg viewBox="0 0 500 500">
            <path id="curve" d="M73.2,148.6c4-6.1,65.5-96.8,178.6-95.6c111.3,1.2,170.8,90.3,175.1,97" />
            <text width="500">
              <textPath xlink:href="#curve">&nbsp;&nbsp;&nbsp;Sicherheit</textPath>
            </text>
          </svg>
          <img class="mx-auto" src="./../assets/img/howto/step4.svg" alt="" @click="open(3)">
          <div :class="'popup xl:shadow-md ' + (isOpen === 3 ? 'active' : '')" @click="close">
            <span>Sicherheit</span>
            <img class="mx-auto" src="./../assets/img/howto/step4.svg" alt="">
            <p>Schutz, Revision und Sicherheit der Daten Ihrer Software, Ihrer Kunden und der Geschäftsgeheimnisse ist für uns selbstverständlich. Gern beraten wir Sie dabei umfassend.</p>
          </div>
          <div class="line line-left hidden lg:block"></div>
          <div class="line line-bottom lg:hidden"></div>
        </div>
        <div id="step5" class="step order-5 lg:order-5 lg-margin-left">
          <h4>Automatisierung</h4>
          <svg viewBox="0 0 500 500">
            <path id="curve" d="M73.2,148.6c4-6.1,65.5-96.8,178.6-95.6c111.3,1.2,170.8,90.3,175.1,97" />
            <text width="500" class="smaller">
              <textPath xlink:href="#curve">&nbsp;Automatisierung</textPath>
            </text>
          </svg>
          <img class="mx-auto" src="./../assets/img/howto/step5.svg" alt="" @click="open(4)">
          <div :class="'popup xl:shadow-md ' + (isOpen === 4 ? 'active' : '')" @click="close">
            <span>Automatisierung</span>
            <img class="mx-auto" src="./../assets/img/howto/step5.svg" alt="">
            <p>Algorithmen in Ihrer Software werden Entscheidungen durch Auswertung großer Datenmengen erleichtern. Wir analysieren und evaluieren mit Ihnen, das Potential Ihrer Daten nutzbar zu machen und entwickeln individuelle Lösungen.</p>
          </div>
          <div class="line line-left hidden lg:block"></div>
        </div>
        <div id="step6" class="step order-6 lg:order-4 sm-margin-left">
          <h4>Benutzer</h4>
          <svg viewBox="0 0 500 500">
            <path id="curve" d="M73.2,148.6c4-6.1,65.5-96.8,178.6-95.6c111.3,1.2,170.8,90.3,175.1,97" />
            <text width="500">
              <textPath xlink:href="#curve">&nbsp;&nbsp;&nbsp;&nbsp;Benutzer</textPath>
            </text>
          </svg>
          <img class="mx-auto" src="./../assets/img/howto/step6.svg" alt="" @click="open(5)">
          <div :class="'popup xl:shadow-md ' + (isOpen === 5 ? 'active' : '')" @click="close">
            <span>Benutzer</span>
            <img class="mx-auto" src="./../assets/img/howto/step6.svg" alt="">
            <p>Wir werden das Arbeitsleben Ihrer Mitarbeiter angenehmer und produktiver zu machen, indem wir Arbeitsschritte vereinfachen und Bottlenecks entfernen. Leicht bedienbare Anwendungen werden es Ihren Kunden ermöglichen, mit Ihren Produkten oder Services zu agieren.</p>
          </div>
          <div class="line line-left lg:hidden"></div>
          <div class="line line-bottom"></div>
        </div>
        <div id="step7" class="step order-8 lg:order-7 sm-margin-left">
          <h4>Potential</h4>
          <svg viewBox="0 0 500 500">
            <path id="curve" d="M73.2,148.6c4-6.1,65.5-96.8,178.6-95.6c111.3,1.2,170.8,90.3,175.1,97" />
            <text width="500">
              <textPath xlink:href="#curve">&nbsp;&nbsp;&nbsp;&nbsp;Potential</textPath>
            </text>
          </svg>
          <img class="mx-austo" src="./../assets/img/howto/step7.svg" alt="" @click="open(6)">
          <div :class="'popup xl:shadow-md ' + (isOpen === 6 ? 'active' : '')" @click="close">
            <span>Potential</span>
            <img class="mx-auto" src="./../assets/img/howto/step7.svg" alt="">
            <p>Unser Ziel ist es, Arbeitsabläufe zu verbessern und so die Auslastung zu steigern, um Produktivität Ihrer Mitarbeiter, Kollegen nachhaltig zu verbessern und besser neue Kunden gewinnen zu können!</p>
          </div>
        </div>
        <div id="step8" class="step order-7 lg:order-8 empty xl:hidden">
        </div>
      </div>
      <CtaButton class="my-4 border-white text-gray-700 hover:border-gray-700" @clicked="onClickCta">Jetzt Chancen ergreifen</CtaButton>
    </div>
  </curved>
</template>

<script>
import Curved from './Curved.vue'
import CtaButton from './CtaButton.vue'

export default {
  name: 'Howto',
  components: {
    Curved,
    CtaButton
  },
  data: () => {
    return {
      isOpen: -1
    }
  },
  methods: {
    onClickCta() {
      this.$emit('clicked', 'Changen ergreifen')
    },
    open(index) {
      this.isOpen = index;
    },
    close() {
      this.isOpen = -1;
    }
  }
}
</script>

<style scoped>
#bg2 {
  background-color: rgba(243, 244, 246, 1);
}
@media (max-width: 1280px) {
  #howtoContainer {
    position: relative;
    display: flex;
    flex-flow: wrap;
  }
  .step {
    position: relative;
    width: 44%;
    padding-top: 44%;
    display: inline-block;
    border-radius: 100%;
    text-align: center;
    margin-bottom: 12%;
  }
  .step:not(.empty) {
    background: #fff;
    box-shadow: 0 0 20px rgba(0,0,0,0.1);
    transition: all 0.4s;
  }
  .margin-left,
  .sm-margin-left {
    margin-left: 12%;
  }
  @media (min-width: 1024px) {
    .step {
      width: 28%;
      padding-top: 28%;
      margin-bottom: 8%;
    }
    .step:not(.empty) {
      cursor: pointer;
    }
    .step:not(.empty):hover {
      box-shadow: 0 0 20px rgba(0,0,0,0.3);
    }
    .sm-margin-left {
      margin-left: 0;
    }
    .margin-left,
    .lg-margin-left {
      margin-left: 8%;
    }
  }
  #howtoContainer h4 {
    display: none;
  }
  #howtoContainer svg,
  #howtoContainer > .step > img {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
  }
  #howtoContainer svg {
    top: 1%;
  }
  path {
    fill: transparent;
  }
  text {
    fill: rgb(59,60,66);
    font-size: 75px;
  }
  text.smaller {
    font-size: 60px;
  }
  #howtoContainer > .step > img {
    height: 100%;
    max-height: calc(100% - 25px);
    top: calc(10px + 10%);
    object-fit: contain;
    overflow: hidden;
    border-radius: 0 0 50% 50%;
  }
  .line {
    position: absolute;
    background-color: #fff;
  }
  .line-left {
    left: calc(-27% - 1px);
    top: calc(50% - 10px);
    width: 29%;
    height: 20px;
  }
  .line-bottom {
    left: calc(50% - 10px);
    bottom: calc(-27% - 1px);
    width: 20px;
    height: 29%;
  }
  /* Popup */
  .popup {
    display: none;
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background-color: rgba(17, 24, 39, 0.7);
    z-index: 50;
  }
  .step .popup.active {
    display: block;
  }
  .popup::before {
    content: '';
    background-color: #fff;
    width: 90%;
    height: 360px;
    position: absolute;
    left: 5%;
    top: calc(50% - 170px);
    border-radius: 0.25rem;
    box-shadow: var(#fff, 0 0 #0000), var(0 0 #0000, 0 0 #0000), var(0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05));
  }
  .popup span,
  .popup img,
  .popup p {
    position: absolute;
    left: 5%;
    top: calc(50% - 170px);
    text-align: center;
    width: 90%;
  }
  .popup span {
    font-size: 1.7em;
    padding-top: 5px;
  }
  .popup img {
    height: 185px;
    padding-top: 35px;
  }
  .popup p {
    margin-top: 185px;
    text-align: left;
    width: 90%;
    height: 175px;
    padding: 5px 10px 0 10px;
    background-color: rgba(243, 244, 246, 1);
    border-radius: 0 0 0.25rem 0.25rem;
  }
}

@media (min-width: 1280px) {
  #howtoContainer {
    margin: 16rem 0 4rem 0;
    position: relative;
    height: 622px;
  }
  #howToBg {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
  }
  .step {
    position: absolute;
    height: 200px;
    width: 220px;
    margin: -200px 0 0 -110px;
  }
  #step1,
  #step2,
  #step3 {
    z-index: 55;
  }
  #step4 {
    z-index: 50;
  }
  .step svg {
    display: none;
  }
  .step h4 {
    position: relative;
    font-size: 1.7em;
    font-weight: normal;
    transition: all 0.5s;
    z-index: 40;
  }
  .step:hover h4 {
    transition: all 0.3s;
    transform: translateY(-55px);
  }
  .step img {
    position: absolute;
    bottom: 0;
    transition: all 0.3s;
    z-index: 40;
  }
  .step:hover img {
    transition: all 0.5s;
    transform: scale(1.3) translateY(-20px);
  }
  #step1 {
    left: 17%;
    top: 23%;
  }
  #step2 {
    left: 52%;
    top: 7%;
  }
  #step3 {
    left: 88.5%;
    top: 22%;
  }
  #step4 {
    left: 52.5%;
    top: 49%;
  }
  #step5 {
    left: 9%;
    top: 68%;
  }
  #step6 {
    left: 51%;
    top: 91%;
  }
  #step7 {
    left: 91%;
    top: 69%;
  }
  /* Popup */
  .step .popup {
    position: relative;
    margin: -100px 0 0 -60px;
    width: 340px;
    background-color: #fff;
    padding: 10px;
    border-radius: 6px;
    z-index: 30;
    transition: all 0.4s;
    opacity: 0;
  }
  .step:hover .popup {
    opacity: 1;
  }
  .step .popup span,
  .step .popup img {
    display: none;
  }
  .step .popup p {
    font-size: 1.1em;
    text-align: left;
    margin-top: 255px;
  }
}
@media (min-width: 1536px) {
  #howtoContainer {
    height: 778px;
  }
  .step {
    height: 240px;
    width: 280px;
    margin: -240px 0 0 -140px;
  }
  .step .popup {
    margin: -100px 0 0 -60px;
    width: 400px;
  }
  .step .popup p {
    margin-top: 295px;
  }
}
</style>