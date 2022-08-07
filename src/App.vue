<template>
  <the-navigator />
  <router-view/>
</template>

<script>
import TheNavigator from '@/components/TheNavigator'
export default {
  components: {
    TheNavigator
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
