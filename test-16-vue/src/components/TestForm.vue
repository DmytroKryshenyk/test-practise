<template>
  <form action="#">
    <h4>{{displayedQuestion.title}}</h4>
    <label v-for="(option, index) in displayedQuestion.answers" :key="index">
      <input
        :type="displayedQuestion.type"
        :value="option"
        :name="displayedQuestion.name"
        v-model="userAnswers[shownQuestionIndex].checked"
      />
      {{option}}
    </label>

    <button type="button" @click="showNextQuestion" :class="nextButtonClass">Далі</button>
  </form>
</template>

<script>
export default {
  name: "TestForm",
  props: ["allQuestions"],

  data() {
    return {
      shownQuestionIndex: 0,
      userAnswers: []
    };
  },

  computed: {
    displayedQuestion: function() {
      return this.allQuestions[this.shownQuestionIndex];
    },
    nextButtonClass: function() {
      return this.userAnswers[this.shownQuestionIndex].checked.length > 0
        ? "button-active"
        : "button";
    }
  },

  beforeMount() {
    this.userAnswers = this.allQuestions.map(element => {
      return { title: element.title, checked: [] };
    });
  },

  methods: {
    showNextQuestion() {
      if (this.userAnswers[this.shownQuestionIndex].checked.length > 0) {
        this.shownQuestionIndex += 1;
      }
      if (this.shownQuestionIndex >= this.allQuestions.length) {
        this.$emit("testFinishedEvent", this.userAnswers);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
label {
  display: block;
}

button {
  color: #ffffff;
  padding: 10px;
  border: none;
  border-radius: 10%;
}

.button {
  background-color: #adadad;
}

.button-active {
  background-color: #2f90ff;
}
</style>