<template>
  <section class="container max-w-screen-xl h-screen pt-32 pb-32">
    <video class="h-full mx-auto grayscale object-cover" id="videoPlayer" poster="./../assets/img/header_with_bg.png" preload="auto" autobuffer="" autoplay="" loop="" playsinline="" muted="">
      <source src="./../assets/video/teaser.webm" type='video/webm; codecs="vp8, vorbis"'>
      <source src="./../assets/video/teaser.mp4" type="video/mp4">
    </video>
    <div class="mx-auto w-full h-screen pt-32 pb-32 absolute left-0 top-0">
      <div class="h-full w-full" id="logo"></div>
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
#logo {
  background: url('./../assets/img/header3.png') no-repeat center center;
  background-size: cover;
}
/* 1280/680 + 2x 8rem padding */
@media (min-aspect-ratio: 1980/936) {
  #logo {
    background-size: contain;
  }
}
</style>