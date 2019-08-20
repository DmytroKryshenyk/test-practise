export default {
  namespaced: true,
  state: {
    cartProducts: []
  },
  mutations: {
    addProduct(state, product) {
      product = { ...product, quantity: 1 };
      delete product.quantityInStock;
      state.cartProducts.push(product);
    },

    removeProductFromCart(state, id) {
      const productIndex = state.cartProducts.findIndex(elem => elem.id_product === id);
      state.cartProducts.splice(productIndex, 1);
    },

    increaseProductQuantity(state, id) {
        const productIndex = state.cartProducts.findIndex(elem => elem.id_product === id);
        state.cartProducts[productIndex].quantity += 1;
    },

    reduceProductQuantity(state, id) {
      const productIndex = state.cartProducts.findIndex(elem => elem.id_product === id);
      if (state.cartProducts[productIndex].quantity === 1) {
        state.cartProducts.splice(productIndex, 1);
        return;
      }
      state.cartProducts[productIndex].quantity -= 1;
    }
  },
  getters: {
    cartProductList(state) {
      return state.cartProducts;
    }
  },
  actions: {}
};
