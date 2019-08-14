<template>
  <table>
    <caption>Результати:</caption>
    <tr>
      <td>Питання:</td>
      <td>Відповідь:</td>
    </tr>
    <tr v-for="(answer, index) in formattedUserAnswers" :key="index">
      <td>{{answer.title}}</td>
      <td>{{answer.checked}}</td>
    </tr>
  </table>
</template>

<script>
export default {
  name: "TestResultsTable",
  props: ["userAnswers"],
  computed: {
    formattedUserAnswers: function() {
      let result = [];
      this.userAnswers.forEach((current, index) => {
        let stringChackedValues = Array.isArray(current.checked)
          ? current.checked.join(", ")
          : current.checked;

        result[index] = { title: current.title, checked: stringChackedValues };
      });
      return result;
    }
  }
};
</script>

<style lang="scss" scoped>
table {
  border-collapse: collapse;
}

td {
  border: 1px solid #000000;
  padding: 5px;
}
</style>