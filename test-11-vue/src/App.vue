<template>
  <div>
    <p v-if="!isReadyUserData">Заповний форму із своїми контакними данним і добав гостей!</p>
    <form v-if="!isReadyUserData" @submit.prevent="toggleIsReadyUserData">
      <label>Email <input type="text" v-model="email" /> </label>
      <label>First Name <input type="text" v-model="name" /> </label>
      <label>Last Name <input type="text" v-model="surname" /> </label>
      <label>Phone <input type="text" v-model="tel" /> </label>
      <ul v-if="guestsCount > 0">
        <li v-for="(guest, index) in guests" :key="index">
          <label> Guest {{index + 1}} <input type="text" v-model="guests[index]" /> </label>
        </li>
      </ul>
      <button type="button" @click="guestsCount += 1; guests.push('')">Add Guests with You</button>
      <button type="submit" @click="isReadyUserData = !isReadyUserData">Send Data</button>
    </form>

    <div v-if="isReadyUserData">
      <h4>All Done!</h4>
      <p>Email: {{email}}</p>
      <p>Name: {{name}} {{surname}}</p>
      <p>Phone: {{tel}}</p>
      <span>Guests</span>
      <ul>
        <li v-for="(guest, index) in guests" :key="index">{{guest}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      email: "",
      name: "",
      surname: "",
      tel: "",
      guests: [],
      guestsCount: 0,
      isReadyUserData: false
    };
  }
};
</script>


<style lang="scss" scoped>
input {
  display: block;
  width: 25rem;
}

.submit {
  display: block;
  margin: 1rem;
}
</style>


