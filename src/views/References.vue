<template>
  <section class="container mx-auto max-w-screen-lg 2xl:max-w-screen-xl pb-12 xl:pb-16 px-4 lg:px-0 text-center">
    <span class="pre-headline">Clients</span>
    <h1>Referenzen</h1>
    <p class="w-full md:max-w-2xl mx-auto text-left sm:text-center">Gute Gründe, mit uns zu arbeiten. Ein Auszug unserer Kunden, bei denen wir stolz sind, sie glücklich gemacht und unterstützt zu haben.</p>
    <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 justify-items-center
    gap-x-8 sm:gap-x-16
    gap-y-8 sm:gap-y-16
    mt-16 w-full">
      <img src="./../assets/img/logos/ergon.png" alt="ERGON Datenprojekte" />
      <img src="./../assets/img/logos/kalypso.png" alt="Kalypso Media Mobile" />
      <img src="./../assets/img/logos/fielmann.png" alt="Fielmann" />
      <img src="./../assets/img/logos/peppermynt.png" alt="Peppermynt" />
      <img src="./../assets/img/logos/elbgoods.png" alt="Elbgoods Internetagentur" />
      <img src="./../assets/img/logos/fernsehlotterie.png" alt="Deutsche Fernsehlotterie" />
      <img src="./../assets/img/logos/esailors.png" alt="eSailors by ZEAL Network" />
      <img src="./../assets/img/logos/weischer.png" alt="Weischer Media" />
    </div>
    <h1 class="mt-8 lg:mt-16 xl:mt-32 mb-2">Jetzt mit uns in See stechen</h1>
    <span class="mb-2 text-center block text-gray-400">Speedboot statt Riesentanker: Wir sind schnell, effektiv und agil wie ein Kanu. </span>
    <CtaButton class="mx-auto bg-gray-100 text-gray-700 border-gray-100 hover:border-gray-500" @clicked="onClickCta">Projekt starten</CtaButton>
  </section>
</template>

<script>
import CtaButton from './CtaButton.vue'

export default {
  name: 'References',
  components: {
    CtaButton
  },
  methods: {
    onClickCta() {
      this.$emit('clicked', 'Projekt starten')
    }
  }
}
</script>

<style scoped>
img {
  max-height: 55px;
  -webkit-filter: grayscale(100%);
  filter: grayscale(100%);
  opacity: 0.7;
  transition: all 0.2s;
}
img:hover {
  -webkit-filter: grayscale(0%);
  filter: grayscale(0%);
  opacity: 1;
  transform: scale(1.15);
}
</style>