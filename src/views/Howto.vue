<template>
  <curved class="min-h-0 bg text-center" :skipBorderBottom="true" id="bg2">
    <div class="container max-w-screen-xl 2xl:max-w-screen-2xl pb-4 px-4 md:px-8 2xl:px-0">
      <span class="pre-headline color2">Abwicklung</span>
      <h1>Wie wir arbeiten</h1>
      <div id="howtoContainer">
        <img class="hidden lg:block" src="./../assets/img/howto/bg.png" alt="" id="howToBg">
        <div id="step1" class="step order-1 z-10">
          <h4>Analyse</h4>
          <img class="mx-auto" src="./../assets/img/howto/step1.svg" alt="">
          <div class="popup xl:shadow-md">
            <!-- <span>Analyse</span> -->
            <!-- <img class="mx-auto" src="./../assets/img/howto/step1.svg" alt=""> -->
            <p>Nutzen Sie unsere Expertise für neue Strategien und Blickwinkel: Wir helfen Ihnen, Ideen und deren Anforderungen zu analysieren und entwerfen mit Ihnen Lösungen, um langfristige Chancen und Potentiale der Digitalisierung optimal nutzen zu können.</p>
          </div>
        </div>
        <div id="step2" class="step order-2 margin-left">
          <h4>Beratung</h4>
          <img class="mx-auto" src="./../assets/img/howto/step2.svg" alt="">
          <div class="popup xl:shadow-md">
            <!-- <span>Beratung</span> -->
            <!-- <img class="mx-auto" src="./../assets/img/howto/step2.svg" alt=""> -->
            <p>Was braucht Ihre Lösung: Schnellste am Markt oder die Beste am Markt? Wir beraten Sie rund um Technologien und Frameworks und hinterfragen mit Ihnen, was für Sie wirklich wichtig ist statt nur dringend zu sein. Ist ein Prozess effizient? Oder nur effektiv?</p>
          </div>
          <div class="line line-left"></div>
          <div class="line line-bottom block lg:hidden"></div>
        </div>
        <div id="step3" class="step order-4 lg:order-3 margin-left">
          <h4>Prototyping</h4>
          <img class="mx-auto" src="./../assets/img/howto/step3.svg" alt="">
          <div class="popup xl:shadow-md">
            <!-- <span>Prototyping</span> -->
            <!-- <img class="mx-auto" src="./../assets/img/howto/step3.svg" alt=""> -->
            <p>Wir validieren ständig das Look &amp; Feel mithilfe von Mockups, Feedback-Loops und A/B-Tests direkt am Nutzer. Mit Konzepten wie Design Thinking und Design Concepts werden wir uns dabei ab Tag 1 Feedback-getrieben auf die UX fokussieren.</p>
          </div>
          <div class="line line-left"></div>
          <div class="line line-bottom hidden lg:block"></div>
        </div>
        <div id="step4" class="step order-3 lg:order-6 lg-margin-left">
          <h4>Sicherheit</h4>
          <img class="mx-auto" src="./../assets/img/howto/step4.svg" alt="">
          <div class="popup xl:shadow-md">
            <!-- <span>Cyber Security</span> -->
            <!-- <img class="mx-auto" src="./../assets/img/howto/step4.svg" alt=""> -->
            <p>Schutz, Revision und Sicherheit der Daten Ihrer Software, Ihrer Kunden und der Geschäftsgeheimnisse ist für uns selbstverständlich. Gern beraten wir Sie dabei umfassend.</p>
          </div>
          <div class="line line-left hidden lg:block"></div>
          <div class="line line-bottom lg:hidden"></div>
        </div>
        <div id="step5" class="step order-5 lg:order-5 lg-margin-left z-10">
          <h4>Automatisierung</h4>
          <img class="mx-auto" src="./../assets/img/howto/step5.svg" alt="">
          <div class="popup xl:shadow-md">
            <!-- <span>Automatisierung</span> -->
            <!-- <img class="mx-auto" src="./../assets/img/howto/step5.svg" alt=""> -->
            <p>Algorithmen in Ihrer Software werden Entscheidungen durch Auswertung großer Datenmengen erleichtern. Wir analysieren und evaluieren mit Ihnen, das Potential Ihrer Daten nutzbar zu machen und entwickeln individuelle Lösungen.</p>
          </div>
          <div class="line line-left hidden lg:block"></div>
        </div>
        <div id="step6" class="step order-6 lg:order-4 sm-margin-left">
          <h4>Benutzer</h4>
          <img class="mx-auto" src="./../assets/img/howto/step6.svg" alt="">
          <div class="popup xl:shadow-md">
            <!-- <span>Benutzer</span> -->
            <!-- <img class="mx-auto" src="./../assets/img/howto/step6.svg" alt=""> -->
            <p>Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum </p>
          </div>
          <div class="line line-left lg:hidden"></div>
          <div class="line line-bottom"></div>
        </div>
        <div id="step7" class="step order-8 lg:order-7 sm-margin-left">
          <h4>Potential</h4>
          <img class="mx-austo" src="./../assets/img/howto/step7.svg" alt="">
          <div class="popup xl:shadow-md">
            <!-- <span>Potential</span> -->
            <!-- <img class="mx-auto" src="./../assets/img/howto/step7.svg" alt=""> -->
            <p>Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum </p>
          </div>
        </div>
        <div id="step8" class="step order-7 lg:order-8 empty xl:hidden">
        </div>
      </div>
      <CtaButton class="my-4 hover:border-gray-700" @clicked="onClickCta">Jetzt Chancen ergreifen</CtaButton>
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
  methods: {
    onClickCta() {
      this.$emit('clicked', 'Changen ergreifen')
    }
  }
}
</script>

<style scoped>
#bg2 {
  background-color: rgba(243, 244, 246, 1);
}
@media (max-width: 1280px) {
  .popup {
    display: none;
  }
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
    cursor: pointer;
  }
  .step:not(.empty):hover {
    box-shadow: 0 0 20px rgba(0,0,0,0.3);
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
    .sm-margin-left {
      margin-left: 0;
    }
    .margin-left,
    .lg-margin-left {
      margin-left: 8%;
    }
  }
  /* .step:hover .popup {
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    background: #fff;
  } */
    #howtoContainer h4,
    #howtoContainer img {
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
    }
    h4 {
      top: 5%;
    }
    #howtoContainer img {
      height: 100%;
      max-height: calc(100% - 50px);
      top: calc(25px + 10%);
      object-fit: contain;
    }
    .line {
      position: absolute;
      background-color: #C1DDF3;
    }
    .line-left {
      left: calc(-28.5% - 1px);
      top: calc(50% - 10px);
      width: 28.5%;
      height: 20px;
    }
    .line-bottom {
      left: calc(50% - 10px);
      bottom: calc(-28.5% - 1px);
      width: 20px;
      height: 28.5%;
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
  .step .popup span {
    font-size: 1.7em;
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