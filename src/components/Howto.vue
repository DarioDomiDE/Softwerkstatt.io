<template>
  <curved class="min-h-screen bg" :skipBorderBottom="true" id="bg2">
    <div class="container max-w-screen-xl pb-4 px-4 md:px-8 2xl:px-0">
      <h2>Wie wir arbeiten.</h2>
      <div id="content">
        <img class="mx-auto" src="./../assets/img/howto2.png" alt="">
        <div id="desc">
          <div id="step1" class="step">
            <h6>Analyse</h6>
            <div class="popup">
              <img class="mx-auto" src="./../assets/img/howto_step1.png" alt="">
              <p>Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum </p>
            </div>
          </div>
          <div id="step2" class="step">
            <h6>Beratung</h6>
            <!-- <p>Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum </p> -->
          </div>
          <div id="step3" class="step">
            <h6>Prototyping</h6>
            <!-- <p>Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum </p> -->
          </div>
          <div id="step4" class="step">
            <h6>Sicherheit</h6>
            <!-- <p>Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum </p> -->
          </div>
          <div id="step5" class="step">
            <h6>Algorithmen</h6>
            <!-- <p>Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum </p> -->
          </div>
          <div id="step6" class="step">
            <h6>Benutzer</h6>
            <!-- <p>Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum </p> -->
          </div>
          <div id="step7" class="step">
            <h6>Potential</h6>
            <!-- <p>Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum </p> -->
          </div>
        </div>
      </div>
      <CtaButton class="my-4 hover:border-black" @clicked="onClickCta"></CtaButton>
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
      this.$emit('clicked', '')
    }
  }
}
</script>

<style scoped>
#bg2 {
  background-color: rgba(243, 244, 246, 1);
}
#content {
  position: relative;
}
#desc {
  position: absolute;
  left: 0;
  top: 0;
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
      top: -300px;
      left: -100px;
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
}
</style>