<template>
  <section class="container max-w-screen-lg 2xl:max-w-screen-xl py-16 px-4 xl:px-0">
    <h2>Wer wir sind.</h2>
    <p class="pb-8 w-full md:max-w-3xl" id="about-us-text">Wir stellen uns vor. Made with <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="20" class="inline-block" id="heart1">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
</svg><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" width="20" id="heart2">
  <path fill-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clip-rule="evenodd" />
</svg> in Hamburg. Wir sind ein Team von Softwareentwicklern und Freiberuflern, die als Consultant on-site oder fully remote das tun, was wir am liebsten machen - Software zu entwickeln.</p>
    <div class="flex flex-col lg:flex-row">
      <div class="flex-1 relative max-w-sm lg:max-w-max">
        <img src="./../assets/img/about_us.jpg" alt="">
        <div class="absolute bottom-1 text-white ml-6 mb-3">
          <span class="block text-3xl font-bold">Dario D. Müller</span>
          <span class="block text-xl">Gründer &amp; Programmierer</span>
        </div>
      </div>
      <div class="flex-1 border-2 border-black mt-4 ml-0 lg:mt-0 lg:ml-2 px-4 py-4">
        <h4>Vision</h4>
        <p class="mt-2">Unser Handwerk und Ihre Software. Unsere Leidenschaft, Software zu entwickeln und unser Ziel: Als Technologiepartner und IT-Dienstleister möchten wir unsere mittelständischen Kunden von der Beratung, über Prototyping bis zur Umsetzung unterstützen.</p>
      </div>
      <div class="flex-1 border-2 border-black mt-4 ml-0 lg:mt-0 lg:ml-2 px-4 py-4">
        <h4>Mission</h4>
        <p class="mt-2">Wir entwickeln ausschließlich hochwertige Individualsoftware, die nachhaltige Lösungen für interne und externe Unternehmensaufgaben zu erschaffen.
          Wir sind Macher, ein Team von Entwicklern, die gemeinsam unsere Kunden von der Idee bis zum Produkt ganzheitlich unterstützen können und möchten.
          </p>
      </div>
    </div>
    <div class="contact mt-8">
      <span>
        XING | LINKEDIN<br />
        Tel: 040 123 456 789<br />
        E-Mail: dario@softwerkstatt.io
      </span>
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
h4 {
  font-size: 4.0em;
  line-height: 1.0em;
}
</style>