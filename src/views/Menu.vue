<template>
  <div v-if="isVisible">
    <div v-if="isOpened" class="fixed top-0 right-0 sm:top-4 sm:right-4 w-full z-30 h-screen sm:h-auto sm:w-64 p-4 sm:p-8 pt-16 border-2 border-gray-700 text-xl leading-normal text-white sm:text-gray-700 bg-gray-700 sm:bg-white">
      <ul>
        <li><router-link to="/" ><span v-on:click="isOpened = false, scrollToTop()">Home</span></router-link></li>
        <li><router-link to="/wer-wir-sind"><span v-on:click="isOpened = false, scrollToTop()">Wer wir sind</span></router-link></li>
        <li><router-link to="/jobs"><span v-on:click="isOpened = false, scrollToTop()">Jobs (3)</span></router-link></li>
        <li><router-link to="/kontakt"><span v-on:click="isOpened = false, scrollToTop()">Kontakt</span></router-link></li>
      </ul>
    </div>
    <div :class="'fixed top-0 right-0 sm:top-4 sm:right-4 mt-4 mr-4 z-30 rounded-full shadow p-2 bg-white text-gray-500 hover:bg-gray-500 hover:text-white ' + (isOnTop ? 'bg-custom' : '')" id="icon">
      <svg v-on:click="isOpened = !isOpened" v-if="!isOpened" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="cursor-pointer"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" /></svg>
      <svg v-on:click="isOpened = !isOpened" v-if="isOpened" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="cursor-pointer text-white sm:text-gray-700"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7" /></svg>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Menu',
  components: {
  },
  data: () => {
    return {
      isVisible: true,
      isOpened: false,
      isOnTop: true
    }
  },
  created () {
    window.addEventListener('scroll', this.handleScroll);
  },
  unmounted () {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    open() {
      this.isVisible = true; 
    },
    close() {
      this.isVisible = false; 
    },
    scrollToTop() {
      window.scrollTo(0,0);
    },
    handleScroll () {
      if(this.isOnTop && window.scrollY >= window.innerHeight) {
        this.isOnTop = false;
      } else if(!this.isOnTop && window.scrollY <= window.innerHeight) {
        this.isOnTop = true;
      }
    }
  }
}
</script>

<style scoped>
#icon {
  width: 3.5vw;
  max-width: 45px;
  min-width: 30px;
}
span {
  font-size: 1.0em;
}
@media (max-width: 640px) {
  li {
    width: calc(50% - 5px);
    display: inline-block;
    border: 1px solid #fff;
    padding-top: calc(50% - 7px);
    position: relative;
    max-height: 25vh;
  }
  li:nth-child(even) {
    margin-left: 10px;
  }
    span {
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      vertical-align: middle;
      text-align: center;
      line-height: 20px;
      transform: translateY(calc(50% - 10px));
    }
}
.bg-custom {
  color: #67dfc4;
}
.bg-custom:hover {
  background-color: #67dfc4;
}
a {
  text-decoration: none;
}
</style>