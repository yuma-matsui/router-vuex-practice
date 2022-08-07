<template>
  <div class="main-wrapper">
    <h1>Details in {{ destination.name }}</h1>
    <div class="main-container">
      <img
        :src="require(`@/assets/${slug}.jpg`)"
        :alt="destination.name"
      >
      <p>{{ destination.description }}</p>
    </div>
    <div class="sub-container">
      <ul>
        <li
          v-for="experience in destination.experiences"
          :key="experience.name"
        >
          <img
            :src="require(`@/assets/${experience.slug}.jpg`)"
            :alt="experience.name">
          <span>
            <router-link
              :to="toExperienceDetails(experience.slug)"
            >
              {{ experience.name }}
            </router-link>
          </span>
        </li>
      </ul>
    </div>
    <router-view />
  </div>
</template>

<script>
import store from '@/store'
export default {
  props: {
    slug: {
      type: String,
      required: true
    }
  },

  data () {
    return {
      destinations: store.destinations
    }
  },

  computed: {
    destination () {
      return this.destinations.find(destination =>
        destination.slug === this.slug
      )
    },
    toExperienceDetails () {
      return (experienceSlug) => {
        return {
          name: 'experienceDetails',
          params: {
            experienceSlug
          }
        }
      }
    }
  }
}
</script>

<style scoped>
.main-wrapper {
  max-width: 960px;
  margin: 0 auto;
}

.main-container {
  display: flex;
  align-items: center;
  padding: 30px 0;
}

.sub-container {
  max-width: 500px;
}

.sub-container ul {
  padding: 0;
  margin: 0;
  list-style: none;
  display: flex;
  justify-content: space-between;
}

.sub-container ul li {
  padding: 0 10px;
}

.sub-container ul li img {
  max-width: 240px;
}

.sub-container ul li:first-child {
  padding-left: 0;
}
</style>
