<template>
  <div>
    <TestForm
      v-if="!testFinished"
      :allQuestions="allQuestions"
      @testFinishedEvent="getAndShowResults"
    />
    <TestResultsTable v-if="testFinished" :userAnswers="userAnswers" />
  </div>
</template>



<script>
import TestForm from "./TestForm.vue";
import TestResultsTable from "./TestResultsTable.vue";

export default {
  name: "Test",
  components: { TestForm, TestResultsTable },
  data() {
    return {
      allQuestions: [
        {
          type: "radio",
          title: "Який тег задає ссилку?",
          answers: ["a", "i", "div", "img"],
          name: "link-tag"
        },
        {
          type: "checkbox",
          title: "Які теги строчні?",
          answers: ["a", "span", "p", "img"],
          name: "string-tag"
        }
      ],
      testFinished: false,
      userAnswers: []
    };
  },
  
  methods: {
    getAndShowResults(userAnswersData) {
      this.userAnswers = userAnswersData;
      this.testFinished = true;
    }
  }
};
</script>


