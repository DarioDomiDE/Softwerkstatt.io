<template>
  <section class="bg-gray-100 relative" :style="{ padding: Math.floor(wantHeight / 2) + 'px 0 ' + (!skipBorderBottom ? Math.floor(wantHeight / 2) : 0) + 'px 0', height: fixed ? '470px' : 'auto' }">
    <div :class="'myborder myborder-top' + (borderTopGray ? ' gray' : '')" :style="{ height: wantHeight + 'px' }"></div>
    <div class="z-10" :class="fixed ? 'fixed bottom-0 w-full' : 'relative'">
      <slot>Content here</slot>
    </div>
    <div class="myborder myborder-bottom" v-if="!skipBorderBottom" :style="{ height: wantHeight + 'px' }"></div>
  </section>
</template>

<script>
export default {
  name: 'test',
  props: {
    skipBorderBottom: Boolean,
    borderTopGray: Boolean,
    fixed: Boolean
  },
  data: () => {
    return {
      windowHeight: window.innerHeight,
      windowWidth: window.innerWidth,
      aspectRatio: -1,
      wantHeight: 0
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
.myborder {
  position: absolute;
  width: 100%;
  height: 300px;
  background: url('./../assets/img/border.png') no-repeat center center;
  background-size: cover;
}
.gray {
  background-image: url('./../assets/img/border_gray.png');
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