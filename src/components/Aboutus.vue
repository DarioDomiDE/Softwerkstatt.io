<template>
  <section class="container max-w-screen-lg 2xl:max-w-screen-xl py-16 px-4 xl:px-0">
    <h2>Wer wir sind.</h2>
    <p class="pb-8 w-full md:max-w-4xl">Wir stellen uns vor. Made with love x3 in Hamburg und im Herzen Techies sind wir ein Zusammenschluss von Softwareentwicklern und ein Netzwerk aus Freiberuflern, um als Consultant on-site oder fully remote das zu tun, was wir am liebsten machen - Software entwickeln.</p>
    <div class="flex">
      <div class="flex-1 relative">
        <img src="./../assets/img/about_us.jpg" alt="">
        <div class="absolute bottom-1 text-white ml-6 mb-3">
          <span class="block text-3xl font-bold">Dario D. Müller</span>
          <span class="block text-xl">Gründer &amp; Software-Entwickler</span>
        </div>
      </div>
      <div class="flex-1 border-2 border-black ml-2 px-4">
        <h4>Vision</h4>
        <p>Unser Handwerk und Ihre Software. Unsere Leidenschaft, Software zu entwickeln und unser Ziel: Ihr Technologiepartner zu werden. Als Dienstleister unterstützen wir unsere Kunden als Consulting und Agentur von der Beratung, über Prototyping bis zur Umsetzzung und Go-Live.</p>
      </div>
      <div class="flex-1 border-2 border-black ml-2 px-4">
        <h4>Mission</h4>
        <p>Wir entwickeln hochwertige Individualsoftware, die nachhaltige Wartbarkeit und hohe Flexibität erlaubt. Um Chancen zu nutzen und Kunden zu gewinnen.</p>
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
h4 {
  font-size: 4.0em;
  line-height: 1.5em;
}
</style>