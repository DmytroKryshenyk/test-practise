import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
  strict: process.env.NODE_ENV !== "production",
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
  mutations: {
    changeValidStatus(state, payload) {
      console.log("changeValidStatus в mutations запустився");
      const index = payload.index;
      const status = payload.status;
      state.info[index].isValid = status;
    },
    updateMessage(state, payload) {
      console.log("updateMessage в mutations запустився");
      const index = payload.index;
      const value = payload.value;
      state.info[index].value = value;
    }
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
  actions: {
    asyncShowResults(store) {
      store.state.asyncDataLoading = true;
      setTimeout(() => {
        store.state.asyncDataLoading = false;
        store.state.showSubmitInfo = !store.state.showSubmitInfo;
      }, 3000);
    }
  }
});
