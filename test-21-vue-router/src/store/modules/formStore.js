export default {
  namespaced: true,
  state: {
    info: [
      {
        name: "Ім’я",
        value: "",
        pattern: /^[a-zA-Z ]{2,30}$/,
        isValid: false
      },
      {
        name: "Мобільний",
        value: "",
        pattern: /^[0-9]{7,14}$/,
        isValid: false
      },
      {
        name: "Email",
        value: "",
        pattern: /.+/,
        isValid: false
      },
      {
        name: "Some Field 1",
        value: "",
        pattern: /.+/,
        isValid: false
      },
      {
        name: "Some Field 2",
        value: "",
        pattern: /.+/,
        isValid: false
      }
    ],
    showSubmitInfo: false,
    asyncDataLoading: false
  },
  getters: {
    progressBar(state) {
      const infoLength = state.info.length;
      const percentFate = 100 / infoLength;
      let progressBarPercent = 0;

      state.info.forEach(element => {
        if (element.isValid) {
          progressBarPercent += percentFate;
        }
      });
      return progressBarPercent;
    }
  },
  mutations: {
    changeValidStatus(state, payload) {
      const index = payload.index;
      const status = payload.status;
      state.info[index].isValid = status;
    },
    updateMessage(state, payload) {
      const index = payload.index;
      const value = payload.value;
      state.info[index].value = value;
    },
    changeStatePropertyValue(state, parameters) {
      state[parameters.property] = parameters.value;
    },
    toggleStateProperty(state, property) {
      state[property] = !state[property];
    }
  },
  actions: {
    asyncShowResults({ state, commit }) {
      commit("changeStatePropertyValue", { property: "asyncDataLoading", value: true });
      setTimeout(() => {
        commit("changeStatePropertyValue", { property: "asyncDataLoading", value: false });
        commit("toggleStateProperty", "showSubmitInfo");
      }, 3000);
    }
  }
};
