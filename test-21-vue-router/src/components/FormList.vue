<template>
  <ul>
    <li v-for="(item, index, key) in info" :key="key">
      <label>{{item.name}}</label>

      <i
        class="animated"
        :class="{'valid heartBeat':item.isValid, 'unvalid zoomIn ':!item.isValid && item.value}"
      ></i>

      <input type="text" @input="updateMessage(index, $event); isValidValue(index)" />
    </li>
  </ul>
</template>

<script>
export default {
  name: "FormList",
  computed: {
    info() {
      return this.$store.state.formStore.info;
    }
  },
  methods: {
    updateMessage(index, e) {
      const payload = {
        index: index,
        value: e.target.value
      };
      this.$store.commit("formStore/updateMessage", payload);
    },
    isValidValue(index) {
      const info = this.$store.state.formStore.info;
      const pattern = info[index].pattern;
      const value = info[index].value;
      const status = pattern.test(value);
      const payload = {
        index: index,
        status: status
      };
      this.$store.commit("formStore/changeValidStatus", payload);
    }
  }
}
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

