<template>
  <div>
    <ProductList />
  </div>
</template>

<script>
import ProductList from "./ProductList.vue";
import { scrypt } from "crypto";

export default {
  name: "Product",
  components: {
    ProductList
  }
};
</script>