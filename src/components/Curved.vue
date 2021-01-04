<template>
  <section class="bg-gray-100 myborder-container" v-bind:style="{padding: Math.floor(wantHeight / 2) + 'px 0'}">
    <div class="myborder myborder-top" v-bind:style="{ height: wantHeight + 'px' }"></div>
    <div class="relative">
      <slot>Content here</slot>
    </div>
    <div class="myborder myborder-bottom" v-if="!skipBorderTop" v-bind:style="{ height: wantHeight + 'px' }"></div>
  </section>
</template>

<script>
export default {
  name: 'test',
  data() {
    return {
      windowHeight: window.innerHeight,
      windowWidth: window.innerWidth,
      aspectRatio: -1,
      wantHeight: 0,
      skipBorderTop: false
    }
  },
  methods: {
    onResize() {
      this.windowHeight = window.innerHeight
      this.windowWidth = window.innerWidth
      this.refresh();
    },
    refresh() {
      var borderWidth = 1920
      var borderHeight = 400
      var newAspectRatio = this.windowWidth / this.windowHeight
      if(this.aspectRatio != newAspectRatio) {
        this.aspectRatio = newAspectRatio;
        var wantAspectRatio = borderWidth / borderHeight
        this.wantHeight = Math.floor(this.windowWidth / wantAspectRatio);
        // ToDo if footer for Container -> 'padding-top': wantHeight / 3 + 'px'
      }
    }
  },
  mounted() {
    this.refresh();
  },
  created() {
    window.addEventListener("resize", this.onResize);
  },
  unmounted() {
    window.removeEventListener("resize", this.onResize);
  }
}
</script>

<style scoped>
.myborder-container {
  position: relative;
}
.myborder {
  position: absolute;
  width: 100%;
  height: 300px;
  background: url('./../assets/img/border.png') no-repeat center center;
  background-size: cover;
}
.myborder-top {
  top: 0;
}
.myborder-bottom {
  bottom: 0;

  -moz-transform: scaleX(-1) scaleY(-1);
  -o-transform: scaleX(-1) scaleY(-1);
  -ms-transform: scaleX(-1) scaleY(-1);
  -webkit-transform: scaleX(-1) scaleY(-1);
  transform: scaleX(-1) scaleY(-1);
}
</style>