import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import People from '../views/People.vue'
import Planets from '../views/Planets.vue'
import Films from '../views/Films.vue'
import Vehicles from '../views/Vehicles.vue'
import Species from '../views/Species.vue'
import Starships from '../views/Starships.vue'

const routes = [
  {
    home: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/people',
    name: 'People',
    component: People
  },
  {
    path: '/planets',
    name: 'Planets',
    component: Planets
  },
  {
    path: '/films',
    name: 'Films',
    component: Films
  },
  {
    path: '/vehicles',
    name: 'Vehicles',
    component: Vehicles
  },
  {
    path: '/species',
    name: 'Species',
    component: Species
  },
  {
    path: '/starships',
    name: 'Starships',
    component: Starships
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
