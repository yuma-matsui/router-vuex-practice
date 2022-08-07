<template>
  <div class="experience-wrapper">
    <h2>Experience in {{ experience.name }}</h2>
    <div class="experience-container">
      <img
        :src="require(`@/assets/${experience.slug}.jpg`)"
        :alt="experience.name"
      >
      <p>{{ experience.description }}</p>
    </div>
  </div>

</template>

<script>
import store from '@/store'

export default {
  props: {
    slug: {
      type: String,
      required: true
    },

    experienceSlug: {
      type: String,
      required: true
    }
  },

  computed: {
    experience () {
      const destination = this.getDestination()
      return destination
        .experiences
        .find(experience => experience.slug === this.experienceSlug)
    }
  },

  methods: {
    getDestination () {
      return store
        .destinations
        .find(destination => destination.slug === this.slug)
    }
  }
}
</script>

<style scoped>
.experience-wrapper {
  max-width: 100%;
  margin: 0 auto;
}
</style>
