<template>
  <div>
    <p>Список товарів корзини:</p>
    <ul v-if="cartProductList.length !== 0">
      <li v-for="(item, index) in cartProductList" :key="index">
        <h4>{{item.title}}</h4>
        <p>Ціна: {{item.price}}</p>
        <p>кількість: {{item.quantity}}</p>
        <div class="quantity-actions-wrapper">
          <button
            @click="productQuantityActions(item.id_product, 'minus')"
            type="button"
            class="quantity-btn quantity-btn-plus"
          >-1</button>
          <button
            @click="productQuantityActions(item.id_product, 'plus')"
            type="button"
            class="quantity-btn quantity-btn-plus"
          >+1</button>
        </div>
        <button
          @click="removeProductFromCart(item.id_product)"
          type="button"
          class="remove-btn amounts-btn-minus"
        >Remove from Cart</button>
      </li>
    </ul>
    <p v-else class="empty-cart-message">Ваш кошик порожній</p>
    <button
      v-if="cartProductList.length > 0"
      @click="$router.push('/checkout')"
      type="button"
      class="to-cart-btn"
    >Перейти до списку покупок</button>
  </div>
</template>

<script>
export default {
  name: "Cart",
  computed: {
    productList() {
      return this.$store.getters["productList/productList"];
    },
    cartProductList() {
      return this.$store.getters["cart/cartProductList"];
    }
  },
  methods: {
    removeProductFromCart(id) {
      this.$store.commit("productList/addProductFromStock", id);
      this.$store.commit("cart/removeProductFromCart", id);
    },

    productQuantityActions(id, type) {
      if (type === "plus") {
        const productInData = this.productList.find(
          elem => elem.id_product === id
        );

        if (productInData.quantityInStock === 0) return;
        this.$store.commit("productList/removeProductFromStock", id);
        this.$store.commit("cart/increaseProductQuantity", id);
      }
      if (type === "minus") {
        this.$store.commit("productList/addProductFromStock", id);
        this.$store.commit("cart/reduceProductQuantity", id);
      }
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

.quantity-actions-wrapper {
  margin-bottom: 10px;
}

.quantity-btn {
  background: #d6f08e;
  border: none;
  padding: 5px 10px;
  border-radius: 5px;

  &:first-child {
    margin-right: 5px;
  }
}

.remove-btn {
  background: #f08e8e;
  border: none;
  padding: 5px 10px;
  border-radius: 5px;
}

.to-cart-btn {
  background: #a5f08e;
  border: none;
  padding: 5px 10px;
  border-radius: 5px;
  display: block;
  margin: auto;
}

.empty-cart-message {
  font-style: italic;
  color: red;
}
</style>

</style>