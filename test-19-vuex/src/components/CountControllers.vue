<template>
  <div>
    <button type="button" @click="minusMethod">-1</button>
    <button type="button" @click="plusMethod">+1</button>
  </div>
</template>

<script>
export default {
  name: "CountControllers",
  methods: {
    minusMethod() {
      this.$store.commit("decrement");
    },
    plusMethod() {
      this.$store.commit("increment");
    }
  }
};
</script>
<style lang="scss" scoped>
div {
  text-align: center;
}

button {
  margin: 5px;
}
</style>