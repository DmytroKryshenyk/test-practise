<template>
  <ul>
    <li v-for="(item, index, key) in info" :key="key">
      <label>{{item.name}}</label>

      <i class="animated" :class="{'valid heartBeat':item.isValid, 'unvalid zoomIn ':!item.isValid && item.value}"></i>

      <input type="text" v-model="item.value" @input="isValidValue(index)" />
    </li>
  </ul>
</template>

<script>
export default {
  name: "FormList",
  props: ["info", "isValidValue"]
};
</script>

<style lang="scss" scoped>
ul {
  padding: 0;
}

li {
  list-style-type: none;
}

label {
  display: inline-block;
  margin-right: 5px;
}

input {
  width: 100%;
  display: block;
}

i {
  display: inline-block;
  width: 10px;
  height: 10px;
  vertical-align: middle;
}

.valid {
  background: url("../assets/checked.svg") no-repeat;
  background-size: contain;
}

.unvalid {
  background: url("../assets/unvalid.svg") no-repeat;
  background-size: contain;
}

</style>

