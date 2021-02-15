<template>
  <div class="container mx-auto max-w-screen-lg xl:max-w-screen-lg pt-16 px-4 lg:px-0 pb-32">
    <span class="block pre-headline text-center">Loslegen</span>
    <h1 class="text-center">Kontakt</h1>
    <p>Wir unterstützen Sie gerne dabei Ihre Projekte zu entwickeln und erfolgreich zu machen. Rufen Sie uns einfach an oder schreiben Sie uns eine E-Mail.</p>
    <p>Gerne vereinbaren wir ein persönliches Beratungsgespräch mit Ihnen.</p>
    <p class="font-bold">Ihr Ansprechpartner: Dario D. Müller</p>
    <ul class="list">
      <li><a href="tel:04025468922">040 254 689 22</a></li>
      <li><a href="mailto:moin@softwerkstatt.io">moin@softwerkstatt.io</a></li>
    </ul>
    <p>Kommen Sie doch gerne vorbei :)</p>
    <ul>
      <li class="font-bold">Softwerkstatt</li>
      <li>Brunckhorstweg 3, 22525 Hamburg</li>
    </ul>
    <CtaButton class="mt-8 mx-auto bg-gray-100 border-gray-100 hover:border-gray-500" @clicked="onClickCta">Jetzt Beratungsgespräch vereinbaren</CtaButton>
    <Modal ref="modal" @modalClosed="onModalClosed" />
  </div>
</template>

<script>
import CtaButton from './../views/CtaButton.vue'
import Modal from './../views/Modal.vue'

export default {
  name: 'Legal',
  components: {
    CtaButton,
    Modal
  },
  methods: {
    onClickCta() {
      this.$refs.modal.open('Fragen oder Anmerkungen?');
      this.$refs.menu.close();
    },
    onModalClosed() {
      this.$refs.menu.open();
    }
  }
}
</script>

<style scoped>
h2, h3 {
  margin-top: 1.0rem;
}
p, ul {
  margin-top: 1.0rem;
}
</style>