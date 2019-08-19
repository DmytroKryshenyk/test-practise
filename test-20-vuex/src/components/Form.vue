<template>
  <div id="app">
    <transition name="formResults" mode="out-in">
      <form v-if="!showSubmitInfo" @submit.prevent="changeshowSubmitInfo">
        <h3>Заповніть форму англійською</h3>
        <FormProgressBar />
        <FormList />
        <button :disabled="isActiveSendButton" type="submit">Send Data</button>
      </form>
      <FormResults v-if="showSubmitInfo" />
    </transition>
    <transition name="loadingMessage">
      <p v-if="asyncDataLoading">Відправка данних. Зачекайте</p>
    </transition>
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
  methods: {
    changeshowSubmitInfo() {
      this.$store.dispatch("asyncShowResults");
    }
  },
  computed: {
    showSubmitInfo() {
      return this.$store.state.showSubmitInfo;
    },
    progressBar() {
      return this.$store.getters.progressBar;
    },
    asyncDataLoading() {
      return this.$store.state.asyncDataLoading;
    },
    isActiveSendButton() {
      return (this.progressBar !== 100) || (this.asyncDataLoading) ;
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

p {
  text-align: center;
  color: red
}

.loadingMessage-enter-active {
  animation: hideElement 0.5s;
}

.loadingMessage-leave-active {
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

