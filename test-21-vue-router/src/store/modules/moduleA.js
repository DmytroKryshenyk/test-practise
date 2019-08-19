export default {
  namespaced: true,
  state: {
    valueFromModuleA: "Властивість із модуля A",
    count: 1
  },
  mutations: {
    increment(state) {
      // виклик буде такий commit('moduleA/increment')
      state.count++;
    }
  },

  getters: {
    doubleCount(state) {
      // виклик буде такий getters['moduleA/doubleCount']
      return state.count * 2;
    }
  },
  actions: {
    someActionsMethod({ commit }) {
      //виклик буде такий dispatch('moduleA/someActionsMethod')
      commit("increment");
    }
  }
};
