<template>
  <ul>
    <li v-for="(item, index, key) in info" :key="key">
      <label :class="{valid:item.isValid, unvalid:!item.isValid && item.value}">{{item.name}}</label>
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

input {
  width: 100%;
  display: block;
}

.valid {
  position: relative;
}

.valid:after {
  content: "";
  position: absolute;
  height: 10px;
  width: 10px;
  top: 50%;
  right: -15px;
  transform: translateY(-50%);
  background: url("../assets/checked.svg") no-repeat;
  background-size: contain;
}

.unvalid {
  position: relative;
}

.unvalid:after {
  content: "";
  position: absolute;
  height: 10px;
  width: 10px;
  top: 50%;
  right: -15px;
  transform: translateY(-50%);
  background: url("../assets/unvalid.svg") no-repeat;
  background-size: contain;
}
</style>

