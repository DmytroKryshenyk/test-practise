<template>
  <div>
    <p>{{ this.$store.state.count }}</p>
  </div>
</template>

<script>
export default {
  name: "CountView",
};
</script>

<style lang="scss" scoped>
div {
  margin-top: 100px;
  text-align: center;
}

p {
  display: inline-block;
  padding: 5px 20px;
  background: #dfdfdf;
  border: 1px solid #424242;
}
</style>