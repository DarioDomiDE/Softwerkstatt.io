<template>
  <section class="container mx-auto max-w-screen-lg 2xl:max-w-screen-xl pt-16 pb-32 px-4 lg:px-0">
    <h2>Referenzen.</h2>
    <p class="w-full md:max-w-2xl">Ein Dutzend gute Gründe, mit uns zu arbeiten. Dies ist ein Auszug unserer Kunden, bei denen wir stolz sind, sie glücklich gemacht und unterstützt zu haben.</p>
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
      <img src="./../assets/img/logos/isa.png" alt="ISA Digital Commerce" />
      <img src="./../assets/img/logos/weischer.png" alt="Weischer Media" />
      <img src="./../assets/img/logos/esailors.png" alt="eSailors by ZEAL Network" />
      <img src="./../assets/img/logos/kalypso.png" alt="Kalypso Media Mobile" />
      <img src="./../assets/img/logos/kalypso.png" alt="Kalypso Media Mobile" />
      <img src="./../assets/img/logos/kalypso.png" alt="Kalypso Media Mobile" />
    </div>
  </section>
</template>

<script>
export default {
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