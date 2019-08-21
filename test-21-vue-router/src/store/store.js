import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

import productList from "./modules/productList.js";
import cart from "./modules/cart.js";
import asyncPosts from "./modules/asyncPosts.js";
import formStore from './modules/formStore.js'

export const store = new Vuex.Store({
  modules: { productList, cart, asyncPosts, formStore }
});
