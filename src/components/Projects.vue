<template>
  <curved class="bg-gray-100 min-h-screen">
    <div class="container max-w-screen-xl pb-8 px-4 xl:px-0">
      <h2 class="">Projekte</h2>
      <p class="mb-12 w-full md:max-w-4xl">Wir begleiten unsere Kunden und schaffen Mehrwert, damit aus Ideen Wirklichkeit wird. Wir verhindern Stillstand, lieben Lösungen, und entwickeln ausschließlich Individualsoftware - echte Unikate eben.</p>
      
      <div class="flex w-full">

        <div class="flex-1 my-auto mr-4">
          <svg class="custom-icon rounded-full cursor-pointer p-1 md:p-2 border-2 sm:border-3 md:border-4 border-black" v-on:click="clickedLeft" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
        </div>

        <div class="flex-initial px-16 py-4 bg-white rounded shadow-md">
          <figure class="active">
            <h5>CRM</h5>
            <img class="img-fluid rounded" src="./../assets/img/project_x.jpg" alt="">
            <figcaption class="text-right">Web-Tool zur Verwaltung von Aufträgen und Kunden<br />Deutsche Fernsehlotterie</figcaption>
          </figure>
          <figure>
            <h5>Web-Shop</h5>
            <img class="img-fluid rounded" src="./../assets/img/project_y.jpg" alt="">
            <figcaption class="text-right">Tool zur Littfassseulen Buchung<br />Weischer Media</figcaption>
          </figure>
          <figure>
            <h5>Wunderbox</h5>
            <img class="img-fluid rounded" src="./../assets/img/project_y.jpg" alt="">
            <figcaption class="text-right">Casual Mobile Game<br />Peppermynt</figcaption>
          </figure>
        </div>
        
        <div class="flex-1 my-auto ml-4">
          <svg class="custom-icon rounded-full cursor-pointer p-1 md:p-2 border-2 sm:border-3 md:border-4 border-black float-right" v-on:click="clickedRight" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
  methods: {
    clickedLeft: () => {
    },
    clickedRight: () => {
    }
  }
}
</script>

<style scoped>
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
h5 {
  font-size: 2.4em;
}
</style>