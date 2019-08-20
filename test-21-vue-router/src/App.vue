<template>
  <div id="app">
    <main>
      <nav>
        <!-- Ниже три тега <router-link> це теги, які стануть тегами <a> які "перенапрялять" нас на вказану "сторінку" шляхом відображення відповідного компонента на місці тега <router-view>  -->
        <ul>
          <li>
            <router-link :to="{name: 'Product'}" active-class="nav-link-active">Продукти</router-link>
          </li>
          <li>
            <router-link to="/cart" active-class="nav-link-active">Кошик</router-link>
          </li>
          <li>
            <router-link to="/checkout" active-class="nav-link-active">Список покупки</router-link>
          </li>
        </ul>
      </nav>
      <div class="container">
        <!-- Ниже тег <router-view> це тег замість якого нам покажеться компонент, який ми вибрали через <router-link>  -->
        <router-view></router-view>
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
main {
  font: 1rem Arial, sans-serif;
}

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

.nav-link-active {
  background: #aff4a0;
  transition: background 0.2s linear;
}

.container {
  background: #ffe6ff;
  border: 1px solid #c5c5c5;
}

.modules-practise {
  margin-top: 150px;
}
</style>

