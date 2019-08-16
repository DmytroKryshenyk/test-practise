<template>
  <div id="app">
    <transition name="formResults" mode="out-in">
      <form v-if="!showSubmitInfo" @submit.prevent="showSubmitInfo = true">
        <FormProgressBar :progressbar="progressBar" />
        <FormList :info="info" :is-valid-value="isValidValue" />
        <button :disabled="progressBar !== 100" type="submit">Send Data</button>
      </form>
      <FormResults v-if="showSubmitInfo" :info="info" />
    </transition>

    <button @click="showSubmitInfo = !showSubmitInfo">click</button>
  </div>
</template>

<script>
import FormList from "./FormList.vue";
import FormProgressBar from "./FormProgressBar.vue";
import FormResults from "./FormResults.vue";

export default {
  name: "Form",
  components: {
    FormList,
    FormProgressBar,
    FormResults
  },
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

.formResults-enter-active {
  animation: hideElement 0.5s;
}

.formResults-leave-active {
  animation: showElement 0.5s;
}

@keyframes hideElement {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes showElement {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
</style>

