import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    name: 'destinationDetails',
    path: '/destinations/:slug',
    component:
      () =>
        import(/* webpackChunkName: 'destinationDetails' */ '@/views/DestinationDetails'),
    props: true,
    children: [
      {
        name: 'experienceDetails',
        path: 'experiences/:experienceSlug',
        component:
          () =>
            import(/* webpackChunkName: 'experienceDetails' */ '@/views/ExperienceDetails'),
        props: true
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
