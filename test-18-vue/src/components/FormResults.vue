<template>
  <div>
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