export default {
  namespaced: true,
  state: {
    list: [
      {
        id_product: "a1",
        title: "Iphone 5",
        price: 2000,
        quantityInStock: 3
      },
      {
        id_product: "a2",
        title: "Iphone 6",
        price: 2500,
        quantityInStock: 3
      },
      {
        id_product: "a3",
        title: "Iphone 7",
        price: 3000,
        quantityInStock: 3
      },
      {
        id_product: "a4",
        title: "Iphone 8",
        price: 3500,
        quantityInStock: 3
      },
      {
        id_product: "a5",
        title: "Iphone 10",
        price: 4000,
        quantityInStock: 3
      }
    ]
  },

  mutations: {
    removeProductFromStock(state, id) {
      const product = state.list.find(elem => elem.id_product === id);
      product.quantityInStock -= 1;
    },

    addProductFromStock(state, id) {
      const product = state.list.find(elem => elem.id_product === id);
      product.quantityInStock += 1;
    },

    returnProductToStock(state, payloads) {
      const productIndex = state.list.findIndex(elem => elem.id_product === payloads.id);
      state.list[productIndex].quantityInStock += payloads.productQuantity
    }

  },
  getters: {
    productList(state) {
      return state.list
    }
  }
};
