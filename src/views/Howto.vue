<template>
  <curved class="min-h-0 bg text-center" :skipBorderBottom="true" id="bg2">
    <div class="container max-w-screen-xl pb-4 px-4 md:px-8 2xl:px-0">
      <span class="pre-headline color2">Abwicklung</span>
      <h1>Wie wir arbeiten</h1>
      <img class="hidden lg:block absolute left-0 right-0" src="./../assets/img/howto/bg.png" alt="">
      <div id="howtoContainer">
        <div id="step1" class="step order-1 z-10">
          <h4>Analyse</h4>
          <img class="mx-auto" src="./../assets/img/howto/step1.svg" alt="">
          <div class="popup">
            <img class="mx-auto" src="./../assets/img/howto/step1.svg" alt="">
            <p>Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum </p>
          </div>
        </div>
        <div id="step2" class="step order-2 margin-left">
          <h4>Beratung</h4>
          <img class="mx-auto" src="./../assets/img/howto/step2.svg" alt="">
          <div class="popup">
            <img class="mx-auto" src="./../assets/img/howto/step2.svg" alt="">
            <p>Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum </p>
          </div>
          <div class="line line-left"></div>
          <div class="line line-bottom block lg:hidden"></div>
        </div>
        <div id="step3" class="step order-4 lg:order-3 margin-left">
          <h4>Prototyping</h4>
          <img class="mx-auto" src="./../assets/img/howto/step3.svg" alt="">
          <div class="popup">
            <img class="mx-auto" src="./../assets/img/howto/step3.svg" alt="">
            <p>Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum </p>
          </div>
          <div class="line line-left"></div>
          <div class="line line-bottom hidden lg:block"></div>
        </div>
        <div id="step4" class="step order-3 lg:order-6 lg-margin-left">
          <h4>Sicherheit</h4>
          <img class="mx-auto" src="./../assets/img/howto/step4.svg" alt="">
          <div class="popup">
            <img class="mx-auto" src="./../assets/img/howto/step4.svg" alt="">
            <p>Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum </p>
          </div>
          <div class="line line-left hidden lg:block"></div>
          <div class="line line-bottom lg:hidden"></div>
        </div>
        <div id="step5" class="step order-5 lg:order-5 lg-margin-left z-10">
          <h4>Automatisierung</h4>
          <img class="mx-auto" src="./../assets/img/howto/step5.svg" alt="">
          <div class="popup">
            <img class="mx-auto" src="./../assets/img/howto/step5.svg" alt="">
            <p>Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum </p>
          </div>
          <div class="line line-left hidden lg:block"></div>
        </div>
        <div id="step6" class="step order-6 lg:order-4 sm-margin-left">
          <h4>Benutzer</h4>
          <img class="mx-auto" src="./../assets/img/howto/step6.svg" alt="">
          <div class="popup">
            <img class="mx-auto" src="./../assets/img/howto/step6.svg" alt="">
            <p>Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum </p>
          </div>
          <div class="line line-left lg:hidden"></div>
          <div class="line line-bottom"></div>
        </div>
        <div id="step7" class="step order-8 lg:order-7 sm-margin-left">
          <h4>Potential</h4>
          <img class="mx-austo" src="./../assets/img/howto/step7.svg" alt="">
          <div class="popup">
            <img class="mx-auto" src="./../assets/img/howto/step7.svg" alt="">
            <p>Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum </p>
          </div>
        </div>
        <div id="step8" class="step order-7 lg:order-8 empty">
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
.popup {
  display: none;
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

/* #desc {
  position: absolute;
  left: -100px;
  top: -150px;
}
  .step {
    position: absolute;
  }
    .step h6 {
      line-height: 1.1em;
    text-align: center;
    }
    .popup {
      display: none;
      position: absolute;
      top: -150px;
      left: 0px;
      background-color: rgba(255, 255, 255, 1);
      border: 1px solid #000;
      width: 350px;
      padding: 10px 5px;
    }
    .popup img {
      height: 150px;
    }
    .popup p {
    }
    .step:hover .popup {
      display: block;
    }
#step1 {
  left: 190px;
  top: 340px;
}
#step2 {
  left: 540px;
  top: 210px;
}
#step3 {
  left: 890px;
  top: 340px;
}
#step4 {
  left: 540px;
  top: 500px;
}
#step5 {
  left: 50px;
  top: 720px;
}
#step6 {
  left: 550px;
  top: 950px;
}
#step7 {
  left: 1010px;
  top: 720px;
} */
</style>