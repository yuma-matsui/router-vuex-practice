<template>
  <nav>
    <ul>
      <li>
        <router-link to="/">Home</router-link>
      </li>
      <li
        v-for="destination in destinations"
        :key="destination.name"
      >
        <router-link
          :to="toDestinationDetails(destination.slug)"
        >
        {{ destination.name }}
        </router-link>
      </li>
    </ul>

  </nav>
</template>

<script>
import store from '@/store'
export default {
  data () {
    return {
      destinations: store.destinations
    }
  },

  computed: {
    toDestinationDetails () {
      return (slug) => {
        return {
          name: 'destinationDetails',
          params: {
            slug
          }
        }
      }
    }
  }
}
</script>

<style scoped>
nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}

nav ul {
  padding: 0;
  margin: 0;
  list-style: none;
  display: flex;
  justify-content: center;
}

nav ul li {
  padding: 0 10px;
}
</style>
