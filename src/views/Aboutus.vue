<template>
  <curved class="bg" id="bg3">
    <div class="container max-w-screen-lg 2xl:max-w-screen-xl pb-4 px-4 xl:px-0 text-center">
      <span class="pre-headline">About Us</span>
      <h1>Wer wir sind</h1>
      <p class="pb-8 sm:pb-12 w-full md:max-w-3xl mx-auto text-left sm:text-center" id="about-us-text">Made with <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="20" class="inline-block" id="heart1"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" width="20" id="heart2"><path fill-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clip-rule="evenodd" />
        </svg> in Hamburg. Wir sind ein Team von Softwareentwicklern und wir tun On-Site oder fully remote für Sie das, was wir am liebsten machen: Software entwickeln.</p>
      <div class="flex flex-col lg:flex-row">
        <div class="flex-1 border-2 border-black px-4 py-2 lg:py-4 text-left mt-4 lg:mt-0 order-3 lg:order-1">
          <h3>Über uns</h3>
          <p class="lg:mt-2">Wir sind Macher, Erfinder und Entdecker! Ein Zusammenschluss leidenschaftlicher Softwareentwickler, die gemeinsam von der Idee bis zum Ergebnis unterstützen werden. Dabei begleiten wir mittelständische Unternehmen in Beratung und Umsetzung.</p>
        </div>
        <div class="flex-1 relative max-w-sm lg:max-w-max lg:ml-2 order-2">
          <div class="square">
            <img src="./../assets/img/about_us.jpg" alt="" />
            <span class="block text-3xl font-bold ml-6 mb-10">Dario D. Müller</span>
            <span class="block text-xl ml-6 mb-3">Kapitän &amp; Programmierer</span>
          </div>
        </div>
        <div class="flex-1 border-2 border-black px-4 py-2 lg:py-4 text-left mt-4 lg:mt-0 lg:ml-2 order-4">
          <h3>Mission</h3>
          <p class="lg:mt-2">Wir entwickeln nicht nur, wir erfinden! Unsere Leidenschaft ist, Software zu entwickeln: Dabei steht das Handwerk und die Produkte stets im Vordergrund. Hierarchien und unnötige Prozesse im Hintergrund. Unser Commitment ist, durch Liebe zur Software Craftsmanship und agiler Vorgehensweisen stets Leidenschaft an der Programmierung zu haben.</p>
        </div>
      </div>
      <div class="contact mt-12">
        <ul>
          <li><a class="" href="mailto:moin@softwerkstatt.io">moin@softwerkstatt.io</a></li>
          <li><a href="tel:04025468922">040 254 689 22</a></li>
          <li><a href="https://www.xing.com/profile/DarioD_Mueller">Xing</a> | <a href="https://www.linkedin.com/in/dariomueller/">LinkedIn</a></li>
        </ul>
      </div>
    </div>
  </curved>
</template>

<script>
import Curved from './Curved.vue'
export default {
  name: 'Aboutus',
  components: {
    Curved
  },
  methods: {
  }
}
</script>

<style scoped>
#bg3 {
  background-color: rgba(243, 244, 246, 1);
}
#heart2 {
  display: none;
}
#about-us-text:hover #heart1 {
  display: none;
}
#about-us-text:hover #heart2 {
  display: inline-block;
}
.square {
  margin-top: 100%;
  position: relative;
}
.square img {
  margin-top: -100%;
}
.square span {
  position: absolute;
  left: 0;
  bottom: 0;
  color: rgba(30, 30, 30, 1);
}
h3 {
  margin: 0;
}
</style>