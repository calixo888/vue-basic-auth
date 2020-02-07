<template lang="html">
  <div>
    <ul class="navbar">
      <!-- Universal Home Nav Link -->
      <li>
        <router-link to="/">Home</router-link>
      </li>

      <!-- Showing logout option if user is logged in -->
      <span v-if="loggedIn">
        <li>
          <a href="#" v-on:click="logout">Logout</a>
        </li>
      </span>

      <!-- Else, show login and register options -->
      <span v-else="loggedIn">
        <li>
          <router-link to="/login/">Login</router-link>
        </li>
        <li>
          <router-link to="/register/">Register</router-link>
        </li>
      </span>
    </ul>
  </div>
</template>

<script>
export default {
  props: ["loggedIn"],
  methods: {
    // Logging out user when logout clicked
    logout: function(event) {
      event.preventDefault();
      this.$emit("update:loggedIn", false);
      this.$emit("update:loggedInUser", {});
      this.$router.push("/");
    }
  }
}
</script>

<style lang="css" scoped>
  .navbar {
    text-align: center;
  }

  .navbar li {
    display: inline-block;
  }

  .navbar li:not(:last-child) {
    margin-right: 30px;
  }

  .router-link-exact-active {
    background-color: lightblue;
  }
</style>
