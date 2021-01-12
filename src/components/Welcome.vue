<template>
  <section class="container h-screen pt-32 pb-32">
    <!-- <img class="mx-auto h-full" src="./../assets/img/header_with_bg.png" alt=""> -->
    <video class="h-full grayscale" id="videoPlayer" poster="./../assets/img/header_with_bg.png" preload="auto" autobuffer="" autoplay="" loop="" playsinline="" muted="">
      <source src="./../assets/video/teaser.webm" type='video/webm; codecs="vp8, vorbis"'>
      <source src="./../assets/video/teaser.mp4" type="video/mp4">
    </video>
    <div class="mx-auto w-full h-screen pt-32 pb-32 absolute left-0 top-0">
      <div class="h-full w-full gradient opacity-70"></div>
    </div>
    <div class="mx-auto w-full h-screen pt-32 pb-32 absolute left-0 top-0">
      <img class="h-full" id="headerImage" src="./../assets/img/header2.png" alt="">
    </div>
  </section>
</template>

<script>
export default {
}
</script>

<style scoped>
.gradient {
  background: linear-gradient(90deg, #3eeaff 0%, #a2ff5a 100%);
}
.grayscale {
  filter: grayscale(1);
  -webkit-filter: grayscale(1); 
  filter: grayscale(100%); 
}
#videoPlayer {
  filter:brightness(150%);
}
</style>