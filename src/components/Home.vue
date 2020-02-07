<template lang="html">
  <div>
    <h1>Home</h1>
    <!-- Showing loggedInUser prop data if user is logged in -->
    <div v-if="loggedIn">
      welcome {{this.loggedInUser.name}}
    </div>
    <!-- Else, telling the user to login -->
    <div v-else="loggedIn">
      You are not logged in. <router-link to="/login/">Login here</router-link>
    </div>
  </div>
</template>

<script>
export default {
  props: ["loggedIn", "loggedInUser"],
}
</script>

<style lang="css" scoped>
</style>
