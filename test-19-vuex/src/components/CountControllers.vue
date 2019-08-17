<template>
  <div>
    <button type="button" @click="decrement">-1</button>
    <button type="button" @click="increment">+1</button>
    <button :disabled="asyncStatus" type="button" @click="asyncDecrement">Async -1</button>
    <button :disabled="asyncStatus" type="button" @click="asyncIncrement">Async +1</button>
    <transition name="status" transition="bounce">
      <p v-if="asyncStatus">Зачекайте! Виконується асинхронна операція</p>
    </transition>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions, mapGetters } from "vuex";

export default {
  name: "CountControllers",
  methods: {
    ...mapMutations(["decrement", "increment"]),
    ...mapActions(["asyncDecrement", "asyncIncrement"])
  },
  computed: {
    ...mapState(["asyncStatus"])
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

.status-enter {
  opacity: 0;
  transform: scale(1.5);
}

.status-enter-active {
  transition: all 0.5s linear;
}

.status-leave-active {
  opacity: 0;
  transition: all 1s linear;
}

.status-leave-to {
  transform: scale(1.5);
}
</style>