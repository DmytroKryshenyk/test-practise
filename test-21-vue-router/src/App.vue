<template>
  <div id="app">
    <main>
      <nav>
        <!-- Ниже три тега <router-link> це теги, які стануть тегами <a> які "перенапрялять" нас на вказану "сторінку" шляхом відображення відповідного компонента на місці тега <router-view>  -->
        <ul>
          <li>
            <router-link to="/cart">Cart</router-link>
          </li>
          <li>
            <router-link :to="{name: 'Product'}">Product</router-link>
          </li>
          <li>
            <router-link to="/checkout">Checkout</router-link>
          </li>
        </ul>
      </nav>
      <div class="container">
        <!-- Ниже тег <router-view> це тег замість якого нам покажеться компонент, який ми вибрали через <router-link>  -->
        <router-view></router-view>
      </div>

      <div class="modules-practise">
        <hr />
        <p>{{this.$store.state.moduleA.valueFromModuleA}}</p>
        <p>Тут ниже просто практикую модульність</p>
        <p>{{this.$store.state.moduleA.count}}</p>
        <p>{{this.$store.getters["moduleA/doubleCount"]}}</p>
        <button @click="$store.commit('moduleA/increment')">Increment</button>
        <button @click="$store.dispatch('moduleA/someActionsMethod')">Action Increment</button>
      </div>
    </main>
  </div>
</template>

<script>
import ProductList from "./components/ProductList.vue";

export default {
  name: "App",
  components: {
    ProductList
  }
};
</script>

<style lang="scss" scoped>
nav {
  background: #bffff6;
  border: 1px solid #c5c5c5;
  text-align: center;
  margin-bottom: 20px;
}

ul {
  list-style-type: none;
  padding-left: 0;
  margin-top: 0;
  margin-bottom: 0;
}

li {
  display: inline-block;
}

a {
  display: inline-block;
  padding: 10px;
}

.container {
  background: #ffe6ff;
  border: 1px solid #c5c5c5;
}

.modules-practise {
  margin-top: 150px;
}
</style>

