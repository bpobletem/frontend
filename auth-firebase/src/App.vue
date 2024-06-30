<template>
  <nav>
    <router-link to="/" v-if="isAuthenticated">Home |</router-link>
    <router-link to="/login" v-if="!isAuthenticated">Login |</router-link>
    <router-link to="/signup" v-if="!isAuthenticated">Signup</router-link>
  </nav>
  <router-view/>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters('userState', ['isAuthenticated'])
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
