import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

import moduleA from "./modules/moduleA.js";
import moduleB from "./modules/moduleB.js";

export const store = new Vuex.Store({
  state: {
    value: "blahblah",
    count: 5
  },
  modules: { moduleA, moduleB },
  mutations: {},
  getters: {},
  actions: {}
});
