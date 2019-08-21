import Vue from "vue";
import App from "./App.vue";
import { store } from "./store/store.js";
import { router } from "./routes";

import VueResource from "vue-resource";
Vue.use(VueResource);
Vue.http.options.root = "https://jsonplaceholder.typicode.com";
/*вище вказуєм адрес нашого сервака, який дає нам данні по API, щоб потім у методі його вже не прописувати. Взагалі це поле не обовязково давати, просто так легше і менше писанини потім */

Vue.config.productionTip = false;

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount("#app");
