<template>
  <div id="app">
    <CountView />
    <CountControllers />
  </div>
</template>

<script>
import CountView from "./components/CountView.vue";
import CountControllers from "./components/CountControllers.vue";

export default {
  name: "App",
  components: { CountView, CountControllers }
};
</script>



