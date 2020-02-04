<template lang="html">
  <div>
    <ul class="navbar">
      <li>
        <router-link to="/">Home</router-link>
      </li>
      <span v-if="loggedIn">
        <li>
          <a href="#" v-on:click="logout">Logout</a>
        </li>
      </span>
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
