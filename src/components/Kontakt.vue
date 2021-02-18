<template>
  <div class="container mx-auto max-w-screen-lg xl:max-w-screen-lg pt-16 px-4 lg:px-0 pb-16 lg:pb-64 lg:my-5">
    <span class="block pre-headline text-center">Zusammenarbeit</span>
    <h1 class="text-center">Kontakt</h1>
    <p>Wir unterstützen Sie gerne dabei, Ihre Software (weiter) zu entwickeln oder erfolgreich zu starten. Rufen Sie uns einfach unverbindlich an oder schreiben Sie uns eine Flaschenpost oder E-Mail.</p>
    <p class="font-bold">Ihr Ansprechpartner: Dario D. Müller</p>
    <ul class="list">
      <li><a href="tel:04025468922">040 254 689 22</a></li>
      <li><a href="mailto:moin@softwerkstatt.io">moin@softwerkstatt.io</a></li>
    </ul>
    <p>Oder kommen Sie doch gerne einfach vorbei.</p>
    <ul>
      <li class="font-bold">Softwerkstatt</li>
      <li>Brunckhorstweg 3, 22525 Hamburg</li>
    </ul>
    <CtaButton class="mt-8 mx-auto bg-gray-100 border-gray-100 hover:border-gray-500" @clicked="onClickCta">Beratungsgespräch vereinbaren</CtaButton>
    <Modal ref="modal" @modalClosed="onModalClosed" />
    <Borders />
  </div>
</template>

<script>
import CtaButton from './../views/CtaButton.vue'
import Modal from './../views/Modal.vue'
import Borders from './../views/Borders.vue'

export default {
  name: 'Legal',
  components: {
    CtaButton,
    Modal,
    Borders
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