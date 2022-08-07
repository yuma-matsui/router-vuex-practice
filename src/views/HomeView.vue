<template>
  <div class="home">
    <ul>
      <li
        v-for="destination in destinations"
        :key="destination.name"
      >
        <router-link
          :to="toDestinationDetails(destination.slug)"
        >
          <img
            :src="imageURL(destination.slug)"
            :alt="destination.name"
          />
        </router-link>
        <span>
          <router-link
            :to="toDestinationDetails(destination.slug)"
          >
            {{ destination.name }}
          </router-link>
        </span>
      </li>
    </ul>
  </div>
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
    imageURL () {
      return (destinationSlug) => {
        return require(`@/assets/${destinationSlug}.jpg`)
      }
    },
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
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    justify-content: center;
  }

  li {
    padding: 0 10px;
  }

  img {
    max-width: 250px;
  }

  a {
    text-decoration: none;
    display: block;
  }
</style>
