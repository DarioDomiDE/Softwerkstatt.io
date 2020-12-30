<template>
  <curved class="bg-gray-100">
    <div class="container h-screen pt-32 pb-32">
      
      <div class="grid grid-cols-12">
        <h2 class="col-span-12">Projekte</h2>
        <p class="col-span-12">Wir begleiten unsere Kunden und schaffen Mehrwert, damit aus Ideen Wirklichkeit wird. Wir verhindern Stillstand, lieben Lösungen, und entwickeln ausschließlich Individualsoftware - echte Unikate eben.</p>

        <div class="col-span-1">
          <svg class="custom-icon rounded-full" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
        </div>

        <div class="col-start-5 col-span-4 p-10 bg-white rounded shadow-md">
          <div>
            <h5>Weischer Select Pro</h5>
            <div><img class="img-fluid rounded" src="http://placehold.it/400x200" alt=""></div>
            <span>Web-Tool zur Kunden-Betreuung</span>
            <span>Deutsche Fernsehlotterie</span>
          </div>
        </div>
        
        <div class="col-start-12 col-span-1">
          <svg class="custom-icon rounded-full" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
  }
}
</script>

<style scoped>
.custom-icon {
  border: 4px solid #000;
  /* border-radius: 100%; */
  width: 80px;
  padding: 10px;
}
</style>