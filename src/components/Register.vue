<template lang="html">
  <div>
    <h1>Register</h1>
    <h3 v-if="submitted">You've been registered!</h3>
    <div v-else="submitted">
      <label>Name:</label>
      <input type="text" v-model="user.name" placeholder="Name">
      <label>Email:</label>
      <input type="email" v-model="user.email" placeholder="Email">
      <label>Username:</label>
      <input type="text" v-model="user.username" placeholder="Username">
      <label>Password:</label>
      <input type="password" v-model="user.password" placeholder="Password">
      <button type="button" v-on:click="registerSubmit">Register</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      submitted: false,
      user: {
        name: "",
        email: "",
        username: "",
        password: "",
      }
    }
  },
  methods: {
    registerSubmit: function() {
      this.$http.post("https://vue-basic-auth.firebaseio.com/users.json", this.user).then((data) => {
        this.submitted = true;
      });

      this.$emit("update:loggedIn", true);
      this.$emit("update:loggedInUser", this.user);
      this.$router.push("/");
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
