<template>
  <div class="results">
    <div v-for="(item, key) in info" :key="key">
      <p>{{ item.name }}: {{ item.value }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "FormResults",
  props: ["info"]
};
</script>

<style lang="scss" scoped>
.results {
  padding: 15px;
  max-width: 500px;
  margin: 0 auto;
  border: 1px solid #424242;
  border-radius: 15px;
}
</style>