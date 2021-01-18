<template>
  <curved class="min-h-screen bg" :skipBorderBottom="true" id="bg2">
    <div class="container max-w-screen-xl pb-4 px-4 md:px-8 2xl:px-0">
      <h2>Wie wir arbeiten.</h2>
      <div id="content">
        <img class="mx-auto" src="./../assets/img/howto2.png" alt="">
        <div id="desc">
          <div id="step1">
            <h6>Analyse</h6>
            <p>Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum </p>
          </div>
          <div id="step2">
            <h6>Beratung</h6>
            <p>Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum </p>
          </div>
          <div id="step3">
            <h6>Prototyping</h6>
            <p>Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum </p>
          </div>
          <div id="step4">
            <h6>Sicherheit</h6>
            <p>Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum </p>
          </div>
          <div id="step5">
            <h6>Algorithmen</h6>
            <p>Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum </p>
          </div>
          <div id="step6">
            <h6>Benutzer</h6>
            <p>Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum </p>
          </div>
          <div id="step7">
            <h6>Potential</h6>
            <p>Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum </p>
          </div>
        </div>
      </div>
      <CtaButton class="my-4" @clicked="onClickCta"></CtaButton>
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
#desc > div {
  position: absolute;
  text-align: center;
}
#desc > div > h6 {
  line-height: 1.1em;
}
#desc > div > p {
  display: none;
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