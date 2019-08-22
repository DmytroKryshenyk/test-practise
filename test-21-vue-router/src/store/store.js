import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

import productList from "./modules/productList.js";
import cart from "./modules/cart.js";
import asyncPosts from "./modules/asyncPosts.js";
import formStore from "./modules/formStore.js";

export const store = new Vuex.Store({
  modules: { productList, cart, asyncPosts, formStore },
  actions: {
    sendOrder(store) {
      const cartProductList = store.getters["cart/cartProductList"];
      const buyerData = store.state.formStore.info.reduce(
        (acc, element) => Object.assign(acc, { [element.name]: element.value }),
        {}
      );
      const body = {
        buyerData: buyerData,
        products: cartProductList
      };

      store.commit("formStore/changeStatePropertyValue", { property: "asyncDataLoading", value: true });
      // setTimeout ниже просто так для симуляції довгої відправки
      setTimeout(() => {
        Vue.http.post("posts/", body).then(response => {
          if (response.ok) {
            store.commit("formStore/changeStatePropertyValue", { property: "asyncDataLoading", value: false});
            store.commit("formStore/toggleStateProperty", "showSubmitInfo");
          }
        });
      }, 3000);
    }
  }
});
