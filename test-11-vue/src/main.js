import Vue from "vue";
import App from "./App.vue";

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");

new Vue({
  el: "#app",
  template: '<p>Бла бла бла</p>'
})