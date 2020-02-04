<template lang="html">
  <div>
    <navbar v-bind:loggedIn="loggedIn" @update:loggedIn="updateLoggedIn" @update:loggedInUser="updateLoggedInUser"></navbar>
    <router-view v-bind:loggedInUser="loggedInUser" v-bind:loggedIn="loggedIn" @update:loggedIn="updateLoggedIn" @update:loggedInUser="updateLoggedInUser"></router-view>
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
      loggedIn: false,
      loggedInUser: {},
    }
  },
  methods: {
    updateLoggedIn: function(value) {
      this.loggedIn = value;
    },
    updateLoggedInUser: function(value) {
      this.loggedInUser = value;
    },
  }
}
</script>

<style lang="css" scoped>
</style>
