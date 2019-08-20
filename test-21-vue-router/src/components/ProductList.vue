<template>
  <ul>
    <li v-for="(item, index) in productList" :key="index">
      <h4>{{item.title}}</h4>
      <p>Ціна: {{item.price}}</p>
      <button
        v-if="!isProductInCart(item.id_product)"
        @click="addProductToCart(item.id_product)"
        type="button"
        class="add-btn"
      >Add to Cart</button>
      <button
        v-if="isProductInCart(item.id_product)"
        @click="removeProductFromCart(item.id_product)"
        type="button"
        class="remove-btn"
      >Remove from Cart</button>
    </li>
  </ul>
</template>

<script>
export default {
  name: "ProductList",
  computed: {
    productList() {
      return this.$store.state.productList.list;
    }
  },
  methods: {
    addProductToCart(id) {
      const product = this.$store.state.productList.list.find(
        elem => elem.id_product === id
      );
      if (product === undefined || product.quantityInStock === 0) return;
      const isProductInCart = this.isProductInCart(id);
      if (!isProductInCart) {
        this.$store.commit("productList/removeProductFromStock", id);
        this.$store.commit("cart/addProduct", product);
      }
    },

    removeProductFromCart(id) {
      const product = this.$store.getters["cart/cartProductList"].find(
        elem => elem.id_product === id
      );
      const productQuantity = product.quantity;
      this.$store.commit("cart/removeProductFromCart", id);
      this.$store.commit("productList/returnProductToStock", {
        id,
        productQuantity
      });
    },

    isProductInCart(id) {
      return this.$store.getters["cart/cartProductList"].some(
        element => element.id_product === id
      );
    }
  }
};
</script>

<style lang="scss" scoped>
ul {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  list-style-type: none;
}

li {
  display: inline-block;
  flex-basis: 30%;
  border: 1px solid #535353;
  margin-top: 10px;
  text-align: center;
  padding-top: 10px;
  padding-bottom: 15px;

  &:nth-child(-n + 3) {
    margin-top: 0;
  }
}

.add-btn {
  background: #d6f08e;
  border: none;
  padding: 5px 10px;
  border-radius: 5px;
  margin-bottom: 5px;
}

.remove-btn {
  background: #86dcff;
  border: none;
  padding: 5px 10px;
  border-radius: 5px;
}
</style>
