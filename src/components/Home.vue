<template lang="html">
  <div>
    <h1>Home</h1>
    <div v-if="loggedIn">
      welcome {{this.loggedInUser.name}}
    </div>
    <div v-else="loggedIn">
      ew go <router-link to="/login/">login</router-link>
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
