<template>
  <curved class="min-h-0" id="bg">
    <div class="container max-w-screen-lg 2xl:max-w-screen-xl px-4 xl:px-0 pb-8 text-center">
      <span class="pre-headline">Showcases</span>
      <h2>Projekte</h2>
      <p class="pb-8 sm:mb-12 w-full md:max-w-4xl mx-auto text-left sm:text-center">Wir begleiten unsere Kunden langfristig und schaffen Mehrwert, damit aus Ideen Wirklichkeit wird. Wir lieben Lösungen, und entwickeln ausschließlich Individualsoftware - echte Unikate eben.</p>
      
      <div class="flex w-full">

        <div class="flex-1 my-auto -ml-2 md:ml-0 mr-1 md:mr-4">
          <svg class="custom-icon rounded-full cursor-pointer p-1 md:p-2 border-2 sm:border-3 md:border-4 border-black transform transition-transform hover:scale-105 hover:bg-black hover:text-white" @click="clickedLeft" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
        </div>

        <div class="flex-initial">
          <figure :class="{'active': active == 1}">
            <h3>CRM</h3>
            <img class="img-fluid rounded" src="./../assets/img/project_x.jpg" alt="">
            <figcaption class="text-right">Web-Tool zur Verwaltung von Aufträgen und Kunden<br />für die Deutsche Fernsehlotterie</figcaption>
          </figure>
          <figure :class="{'active': active == 2}">
            <h3>Web-Shop</h3>
            <img class="img-fluid rounded" src="./../assets/img/project_y.jpg" alt="">
            <figcaption class="text-right">Tool zur Littfassseulen Buchung<br />für Weischer Media</figcaption>
          </figure>
          <figure :class="{'active': active == 3}">
            <h3>Wunderbox</h3>
            <img class="img-fluid rounded" src="./../assets/img/project_y.jpg" alt="">
            <figcaption class="text-right">Casual Mobile Game<br />für Peppermynt</figcaption>
          </figure>
        </div>
        
        <div class="flex-1 my-auto -mr-2 md:mr-0 ml-1 md:ml-4">
          <svg class="custom-icon rounded-full cursor-pointer p-1 md:p-2 border-2 sm:border-3 md:border-4 border-black transform transition-transform hover:scale-105 hover:bg-black hover:text-white float-right" @click="clickedRight" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </div>
      </div>

    </div>
  </curved>
</template>

<script>
import Curved from './Curved.vue'
export default {
  name: 'Projects',
  components: {
    Curved
  },
  data: () => {
    return {
      active: 1,
      max: 3
    }
  },
  methods: {
    clickedLeft() {
      console.log(this.active);
      this.active--;
      if(this.active == 0) {
        this.active = this.max;
      }
    },
    clickedRight() {
      this.active++;
      if(this.active > this.max) {
        this.active = 1;
      }
    }
  }
}
</script>

<style scoped>
#bg {
  background-color: rgba(243, 244, 246, 1);
}
.custom-icon {
  width: 80px;
  max-width: 100%;
  min-width: 40px;
}
figure {
  display: none;
}
figure.active {
  display: block;
}
</style>