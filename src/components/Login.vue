<template lang="html">
  <div>
    <h1>Login</h1>
    <div v-if="loggedIn">
      <h3>You are logged in!</h3>
    </div>
    <div v-else="loggedIn">
      <label>Username:</label>
      <input type="text" v-model="user.username" placeholder="Username">
      <label>Password:</label>
      <input type="password" v-model="user.password" placeholder="Password">
      <button type="button" v-on:click="loginSubmit">Login</button>
      <p v-if="incorrectCredentials">Incorrect Credentials</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ["loggedIn"],
  data() {
    return {
      user: {
        username: "",
        password: "",
      },
      incorrectCredentials: false,
    }
  },
  methods: {
    loginSubmit: function() {
      this.$http.get("https://vue-basic-auth.firebaseio.com/users.json").then((response_data) => {
        let users = response_data.data;

        let validUser = null;
        for (let user of Object.values(users)) {
          if ((user.username == this.user.username) && (user.password == this.user.password)) {
            validUser = user;
          }
        }

        if (validUser) {
          this.$emit("update:loggedIn", true);
          this.$emit("update:loggedInUser", validUser);
          this.incorrectCredentials = false;
          this.$router.push("/");
        }
        else {
          this.incorrectCredentials = true;
        }
      })
    },
  }
}
</script>

<style lang="css" scoped>
  label {
    display: block;
  }

  input {
    margin-bottom: 30px;
    display: block;
  }
</style>
