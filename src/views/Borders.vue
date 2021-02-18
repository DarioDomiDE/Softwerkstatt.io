<template>
  <div class="hidden lg:block">
    <div class="my-border" id="left"></div>
    <div class="my-border" id="right"></div>
    <div class="my-border" id="top"></div>
    <div class="my-border" id="bottom"></div>
  </div>
</template>

<script>
export default {
  name: 'Borders'
}
</script>

<style scoped>
.my-border {
  position: fixed;
  z-index: 30;
}
#left {
  left: 0;
  top: 0;
  width: 20px;
  height: 100%;
  background-image: linear-gradient(to top, #36c1c7, #5DCAC7);
}
#right {
  right: 0;
  top: 0;
  width: 20px;
  height: 100%;
  background-image: linear-gradient(to top, #74DCC5, #67dfc4);
}
#top {
  left: 0;
  top: 0;
  width: 100%;
  height: 20px;
  z-index: 30;
  background-image: linear-gradient(to right, #5DCAC7, #67dfc4);
}
#bottom {
  left: 0;
  bottom: 0;
  width: 100%;
  height: 20px;
  z-index: 30;
  background-image: linear-gradient(to right, #36c1c7, #74DCC5);
}
</style>