<template lang="html">
  <div>
    <navbar v-bind:loggedIn="loggedIn"
            @update:loggedIn="updateLoggedIn"
            @update:loggedInUser="updateLoggedInUser"
    />
    <router-view v-bind:loggedInUser="loggedInUser"
                 v-bind:loggedIn="loggedIn"
                 @update:loggedIn="updateLoggedIn"
                 @update:loggedInUser="updateLoggedInUser"
    />
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue';

export default {
  components: {
    navbar: NavBar,
  },
  data() {
    return {
      loggedIn: ($cookies.get("loggedIn") == "true"), // Cookies return loggedIn as string, so this is converting to boolean
      loggedInUser: $cookies.get("loggedInUser"),
    }
  },
  methods: {
    // Will update login with whatever value is provided -> used for login/logout/register
    updateLoggedIn: function(value) {
      $cookies.set("loggedIn", value); // Updating cookies
      this.loggedIn = value; // Updating props
    },
    // Will update current logged in user with corresponding data
    updateLoggedInUser: function(value) {
      $cookies.set("loggedInUser", value); // Updating cookies
      this.loggedInUser = value; // Updating props
    },
  },
  // computed: {
  //   loggedIn: () => {
  //     return ($cookies.get("loggedIn") == "true");
  //   },
  //   loggedInUser: () => {
  //     return $cookies.get("loggedInUser");
  //   }
  // }
}
</script>

<style lang="css" scoped>
</style>
