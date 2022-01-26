import createPersistedState from "vuex-persistedstate"
import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    people: [],
    planets: [],
    films: [],
    vehicles: [],
    species: [],
    starships: [],
    pageCount: [0, 0, 0, 0, 0, 0],
    filledData: 0,
  },
  mutations: {
    addPeople(state, payload) {
      state.people.push(payload)
    },
    addPlanets(state, payload) {
      state.planets.push(payload)
    },
    addFilms(state, payload) {
      state.films.push(payload)
    },
    addVehicles(state, payload) {
      state.vehicles.push(payload)
    },
    addSpecies(state, payload) {
      state.species.push(payload)
    },
    addStarships(state, payload) {
      state.starships.push(payload)
    },
    count(state, payload) {
      state.pageCount[payload.i] = Math.ceil(payload.count / 10)
    }
  },
  actions: {
    async getPeople({ commit }, pageNumber) {
      await axios.get('https://swapi.dev/api/people/?page=' + pageNumber).then(people => {
        commit('addPeople', people.data.results)
        commit('count', { i: 0, count: people.data.count })
      })
    },
    async getPlanets({ commit }, pageNumber) {
      await axios.get('https://swapi.dev/api/planets/?page=' + pageNumber).then(planets => {
        commit('addPlanets', planets.data.results)
        commit('count', { i: 1, count: planets.data.count })
      })
    },
    async getFilms({ commit }, pageNumber) {
      await axios.get('https://swapi.dev/api/films/?page=' + pageNumber).then(films => {
        commit('addFilms', films.data.results)
        commit('count', { i: 2, count: films.data.count })
      })
    },
    async getVehicles({ commit }, pageNumber) {
      await axios.get('https://swapi.dev/api/vehicles/?page=' + pageNumber).then(vehicles => {
        commit('addVehicles', vehicles.data.results)
        commit('count', { i: 3, count: vehicles.data.count })
      })
    },
    async getSpecies({ commit }, pageNumber) {
      await axios.get('https://swapi.dev/api/species/?page=' + pageNumber).then(species => {
        commit('addSpecies', species.data.results)
        commit('count', { i: 4, count: species.data.count })
      })
    },
    async getStarships({ commit }, pageNumber) {
      await axios.get('https://swapi.dev/api/starships/?page=' + pageNumber).then(starships => {
        commit('addStarships', starships.data.results)
        commit('count', { i: 5, count: starships.data.count })
      })
    }
  },
  plugins: [createPersistedState()]
})
