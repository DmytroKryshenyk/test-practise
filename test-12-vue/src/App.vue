<template>
  <div>
    <form @submit.prevent="showSubmitInfo = true" v-if="!showSubmitInfo">
      <div class="progress">
        <div class="progress-bar" :style="{width: progressBar + '%'}"></div>
      </div>

      <ul v-for="(item, index, key) in info" :key="key">
        <li>
          <label
            :class="[item.isValid ? 'valid': '', !item.isValid && item.value ? 'unvalid' : '']"
          >{{ item.name }}</label>

          <input type="text" v-model="item.value" @input="isValidValue(index)" />
        </li>
      </ul>

      <button :disabled="progressBar !== 100" type="submit">Send Data</button>
    </form>
    <div v-else v-for="(item, key) in info" :key="key">
      <p>{{item.name}}: {{item.value}}</p>
    </div>
  </div>
</template>
<script>
export default {
  name: "App",
  data() {
    return {
      info: [
        {
          name: "Name",
          value: "",
          pattern: /^[a-zA-Z ]{2,30}$/,
          isValid: false
        },
        {
          name: "Phone",
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
      showSubmitInfo: false
    };
  },
  methods: {
    isValidValue(index) {
      const pattern = this.info[index].pattern;
      const value = this.info[index].value;
      this.info[index].isValid = pattern.test(value);
    }
  },
  computed: {
    progressBar: function() {
      const infoLength = this.info.length;
      const percentFate = 100 / infoLength;
      let progressBarPercent = 0;

      this.info.forEach(element => {
        if (element.isValid) progressBarPercent += percentFate;
      });
      return progressBarPercent;
    }
  }
};
</script>

<style lang="scss" scoped>
form {
  padding: 15px;
  max-width: 500px;
  margin: 0 auto;
  border: 1px solid #424242;
  border-radius: 15px;
}

.progress {
  height: 15px;
  background: #f0f0f0;
  box-shadow: inset 0px 0px 3px 0px rgba(66, 66, 66, 0.5);
  border-radius: 5px;
  overflow: hidden;
}

.progress-bar {
  height: 100%;
  background: rgb(0, 153, 255);
  display: inline-block;
  width: 10%;
}

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

  &:after {
    content: "";
    position: absolute;
    height: 10px;
    width: 10px;
    top: 50%;
    right: -15px;
    transform: translateY(-50%);
    background: url("./assets/checked.svg") no-repeat;
    background-size: contain;
  }
}

.unvalid {
  position: relative;

  &:after {
    content: "";
    position: absolute;
    height: 10px;
    width: 10px;
    top: 50%;
    right: -15px;
    transform: translateY(-50%);
    background: url("./assets/unvalid.svg") no-repeat;
    background-size: contain;
  }
}
</style>
