<template>
  <transition name="progress-bar">
    <div class="progress">
      <div class="progress-bar" :style="{width: `${progressbar}%`}"></div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "FormProgressBar",
  computed: {
    progressbar() {
      return this.$store.getters.progressBar;
    }
  }
};
</script>

<style lang="scss" scoped>
.progress {
  height: 15px;
  background: #f0f0f0;
  box-shadow: inset 0px 0px 3px 0px rgba(66, 66, 66, 0.5);
  border-radius: 5px;
  overflow: hidden;
}

.progress-bar {
  height: 100%;
  background: rgb(0, 153, 255);
  display: inline-block;
  width: 10%;
}
</style>
