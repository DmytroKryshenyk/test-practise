import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter); //Це пишеш якщо проект на Vue CLI

// Імпортуєш тільки ті компоненти на які треба робити путі
import Cart from "./components/Cart.vue";
import Product from "./components/Product.vue";
import Error404 from "./components/Error404.vue";
import Checkout from "./components/Checkout.vue";

const routes = [
  /*В строці ниже, ми вказали при стартовій загрузці перекидувати на путь, де вказаний name: Product */
  { path: "", redirect: { name: 'Product' } },
  /*Всі строчки ниже просто вказують які компоненти відобразити в <router-view> коли вказаний нами путь */
  { path: "/product", component: Product, name: "Product" },
  { path: "/cart", component: Cart },
  { path: "/checkout", component: Checkout },
  { path: "/error404", component: Error404 }
];

export const router = new VueRouter({
  routes, //ES6 скорочена запис на `routes: routes`
  mode: "history"
});
