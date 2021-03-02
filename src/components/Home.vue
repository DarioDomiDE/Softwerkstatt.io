<template>
  <Welcome />
  <div id="content">
    <Intro @clicked="onClickCta" />
    <Services3 @clicked="onClickCta" />
    <Howto @clicked="onClickCta" />
    <Services6 @clicked="onClickCta" />
    <Technical @clicked="onClickCta" />
    <Aboutus />
    <References @clicked="onClickCta" />
    <Modal ref="modal" @modalClosed="onModalClosed" />
  </div>
</template>

<script>
import Welcome from './../views/Welcome.vue'
import Intro from './../views/Intro.vue'
import Services3 from './../views/Services3.vue'
import Howto from './../views/Howto.vue'
import Services6 from './../views/Services6.vue'
import Technical from './../views/Technical.vue'
import Aboutus from './../views/Aboutus.vue'
import References from './../views/References.vue'
import Modal from './../views/Modal.vue'

export default {
  name: 'Home',
  components: {
    Welcome,
    Intro,
    Services3,
    Howto,
    Services6,
    Technical,
    Aboutus,
    References,
    Modal
  },
  methods: {
    onClickCta(value) {
      this.$refs.modal.open(value);
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