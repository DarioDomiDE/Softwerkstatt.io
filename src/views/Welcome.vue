<template>
  <section v-if="isActive" class="container max-w-screen-xl h-screen pt-32 pb-32 overflow-hidden" id="welcome">
    <video class="h-full mx-auto grayscale object-cover" id="videoPlayer" poster="./../assets/img/header.png" preload="auto" autobuffer="" autoplay="" loop="" playsinline="" muted="">
      <source src="./../assets/video/teaser.webm" type='video/webm; codecs="vp8, vorbis"'>
      <source src="./../assets/video/teaser.mp4" type="video/mp4">
    </video>
    <div class="mx-auto w-full h-screen pt-32 pb-32 absolute left-0 top-0" id="logoContainer">
      <div class="h-full w-full" id="logo"></div>
    </div>
    <Borders />
  </section>
</template>

<script>
import Borders from './../views/Borders.vue'

export default {
  name: 'Welcome',
  components: {
    Borders
  },
  data: () => {
    return {
      isActive: true
    }
  },
  created () {
    window.addEventListener('scroll', this.handleScroll);
  },
  unmounted () {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll () {
      if(this.isActive && window.scrollY >= window.innerHeight) {
        this.isActive = false;
      } else if(!this.isActive && window.scrollY <= window.innerHeight) {
        this.isActive = true;
      }
    }
  }
}
</script>

<style scoped>
#welcome {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
}
.gradient {
  background: linear-gradient(90deg, #3eeaff 0%, #a2ff5a 100%);
}
.grayscale {
  -webkit-filter: grayscale(1); 
  filter: grayscale(1); 
}
#videoPlayer {
  filter:brightness(150%);
}
#logo {
  background: url('./../assets/img/header.png') no-repeat center center;
  background-size: cover;
}
/* 1280/680 + 2x 8rem padding */
@media (min-aspect-ratio: 1980/936) {
  #logo {
    background-size: contain;
  }
}
@media (max-width: 800px) {
  video {
    transform: scale(1.5);
    object-fit: contain;
  }
  #logoContainer {
    transform: scale(1.7);
  }
  #logo {
    background-size: contain;
  }
}
</style>