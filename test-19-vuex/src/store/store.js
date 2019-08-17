import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    count: 1,
    asyncStatus: false
  },
  mutations: {
    decrement(state) {
      state.count--;
    },
    increment(state) {
      state.count++;
    },
    changeAsyncStatus(state, status) {
      state.asyncStatus = status;
    }
  },
  getters: {
    doubleCount(state) {
      return state.count * 2;
    },
    hundredMultiply(state) {
      return state.count * 100;
    }
  },
  actions: {
    asyncIncrement(store) {
      store.commit("changeAsyncStatus", true);

      setTimeout(() => {
        store.commit("increment");
        store.commit("changeAsyncStatus", false);
      }, 1000);
    },

    asyncDecrement(store) {
      store.commit("changeAsyncStatus", true);

      setTimeout(() => {
        store.commit("decrement");
        store.commit("changeAsyncStatus", false);
      }, 1000);
    }
  }
});
