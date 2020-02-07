<template lang="html">
  <div>
    <h1>Login</h1>
    <!-- Showing success message and hiding form if login was successful -->
    <div v-if="loggedIn">
      <h3>You are logged in!</h3>
    </div>
    <!-- Else, show the login form -->
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
    // Loggin user in if credentials are correct
    loginSubmit: function() {
      // Grabbing all users from Firebase for authentication
      this.$http.get("https://vue-basic-auth.firebaseio.com/users.json").then((response_data) => {
        let users = response_data.data;

        // Initializing validUser for later re-assignment if credentials match a user in Firebase
        let validUser = null;
        for (let user of Object.values(users)) {
          // Assigning validUser to current user if credentials match
          // Then breaking loop
          if ((user.username == this.user.username) && (user.password == this.user.password)) {
            validUser = user;
            break;
          }
        }

        // Updating props and pushing to homepage if validUser exists
        if (validUser) {
          this.$emit("update:loggedIn", true);
          this.$emit("update:loggedInUser", validUser);
          this.incorrectCredentials = false;
          this.$router.push("/");
        }
        // Showing "Incorrect Credentials" error message
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
