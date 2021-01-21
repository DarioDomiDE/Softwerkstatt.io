<template>
  <Menu ref="menu" />
  <div id="content">
    <Welcome />
    <Intro @clicked="onClickCta" />
    <Services3 @clicked="onClickCta" />
    <Howto @clicked="onClickCta" />
    <Services6 @clicked="onClickCta" />
    <Technical @clicked="onClickCta" />
    <Aboutus />
    <Projects />
    <References />
    <Modal ref="modal" @modalClosed="onModalClosed" />
  </div>
  <Footer />
</template>

<script>
import Welcome from './components/Welcome.vue'
import Intro from './components/Intro.vue'
import Services3 from './components/Services3.vue'
import Howto from './components/Howto.vue'
import Services6 from './components/Services6.vue'
import Technical from './components/Technical.vue'
import Aboutus from './components/Aboutus.vue'
import Projects from './components/Projects.vue'
import References from './components/References.vue'
import Footer from './components/Footer.vue'
import Menu from './components/Menu.vue'
import Modal from './components/Modal.vue'

export default {
  name: 'App',
  components: {
    Welcome,
    Intro,
    Services3,
    Howto,
    Services6,
    Technical,
    Aboutus,
    Projects,
    References,
    Footer,
    Menu,
    Modal
  },
  methods: {
    onClickCta() {
      this.$refs.modal.open();
      this.$refs.menu.close();
    },
    onModalClosed() {
      this.$refs.menu.open();
    }
  }
}
</script>

<style scoped>
</style>