<template>
  <div>
    <div v-if="cartProductList.length !== 0">
      <table>
        <tr>
          <td>Назва товару</td>
          <td>Ціна</td>
          <td>Кількість</td>
          <td>Сума</td>
        </tr>
        <tr v-for="(item, index) in cartProductList" :key="index">
          <th>{{item.title}}</th>
          <td>{{item.price}}</td>
          <td>{{item.quantity}}</td>
          <td>{{item.price * item.quantity}}</td>
        </tr>
      </table>
      <p class="total">
        В сумі до сплати:
        <span class="total-price">{{totalPrice}}</span>
      </p>
    </div>
    <p v-if="cartProductList.length === 0" class="empty-cart-message">Ваш кошик порожній</p>
  </div>
</template>

<script>
export default {
  name: "Checkout",
  computed: {
    cartProductList() {
      return this.$store.getters["cart/cartProductList"];
    },
    totalPrice() {
      return this.cartProductList.reduce(
        (acc, current) => acc + current.price * current.quantity,
        0
      );
    }
  }
};
</script>

<style lang="scss" scoped>
table {
  text-align: left;
}

tr:first-child {
  font-style: italic;
  color: rgb(0, 102, 255);
}

th,
td {
  padding: 5px 10px;
}

.total {
  font-size: 1.5rem;

  &-price {
      font-weight: bold;
      color: red;
  }
}
</style>