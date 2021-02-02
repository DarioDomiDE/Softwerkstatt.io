<template>
  <section class="container max-w-screen-lg 2xl:max-w-screen-xl pt-8 pb-16 px-4 xl:px-0 text-center">
    <span class="pre-headline">About Us</span>
    <h2>Wer wir sind</h2>
    <p class="pb-8 sm:pb-12 w-full md:max-w-3xl mx-auto text-left sm:text-center" id="about-us-text">Wir sind Made with <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="20" class="inline-block" id="heart1"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" width="20" id="heart2"><path fill-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clip-rule="evenodd" />
      </svg> in Hamburg, ein Team von Softwareentwicklern und Freelancern, die onsite oder fully remote das tun, was wir am liebsten machen - Software entwickeln.</p>
    <div class="flex flex-col lg:flex-row">
      <div class="flex-1 border-2 border-black px-4 py-4 text-left mt-4 lg:mt-0 order-3 lg:order-1">
        <h3>Vision</h3>
        <p>Unsere Vision: Unser Handwerk und Ihre Software. Wir möchten mittelständische Unternehmen von der Beratung, über Prototyping bis zur Umsetzung begleiten und dabei mit unserer Leidenschaft, Software zu entwickeln, als IT-Dienstleister bestmöglich unsere Kunden rund um Digitalisierung und Prozessoptimierung unterstützen.</p>
      </div>
      <div class="flex-1 relative max-w-sm lg:max-w-max lg:ml-2 order-2">
        <div class="square">
          <img src="./../assets/img/about_us.jpg" alt="" />
          <span class="block text-3xl font-bold ml-6 mb-10">Dario D. Müller</span>
          <span class="block text-xl ml-6 mb-3">Gründer &amp; Programmierer</span>
        </div>
      </div>
      <div class="flex-1 border-2 border-black mt-4 lg:mt-0 lg:ml-2 px-4 py-4 text-left order-4">
        <h3>Mission</h3>
        <p>Wir entwickeln ausschließlich hochwertige Individualsoftware, die nachhaltige Lösungen für interne und externe Unternehmensaufgaben zu erschaffen. Wir sind Macher, ein Team von Entwicklern, die gemeinsam auch Sie ganzheitlich von der Idee bis zum Ergebnis unterstützen können und möchten.</p>
      </div>
    </div>
    <div class="contact mt-12">
      <ul>
        <li>E-Mail: <a class="" href="mailto:moin@softwerkstatt.io">moin@softwerkstatt.io</a></li>
        <li><a href="tel:040123456789">040 123 456 789</a></li>
        <li><a href="https://xing.de/">Xing</a> | <a href="https://linkedin.com/">LinkedIn</a></li>
      </ul>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Aboutus',
  components: {
  },
  methods: {
  }
}
</script>

<style scoped>
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
  color: #fff;
}
</style>