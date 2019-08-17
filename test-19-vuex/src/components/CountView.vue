<template>
  <div>
    <p>{{count}}</p>
    <p>{{doubleCount }}</p>
    <p>{{hundredMultiply}}</p>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "CountView",
  computed: {
    ...mapGetters(["doubleCount", "hundredMultiply"]),
    count() {
      return this.$store.state.count;
    }
  }
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