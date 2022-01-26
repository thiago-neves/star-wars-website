<template>
  <div class="body" :style="home()">
    <nav id="nav" :style="nav()">
        <router-link class="nav-link" to="/people">People</router-link>
        <router-link class="nav-link" to="/planets">Planets</router-link>
        <router-link class="nav-link" to="/films">Films</router-link>
        <router-link to="/" @click="home()"><img id="nav-logo" alt="Star wars logo" height="50" src="@/assets/logo.png"/></router-link>
        <router-link class="nav-link" to="/vehicles">Vehicles</router-link>
        <router-link class="nav-link" to="/species">Species</router-link>
        <router-link class="nav-link" to="/starships">Starships</router-link>
    </nav>
    <router-view/>
  </div>
</template>

<script>
export default {
  mounted() {
    if (this.$store.state.pageCount[2] == 0)
      this.$store.dispatch('getFilms', 1)
    if (this.$store.state.pageCount[0] == 0)
      this.$store.dispatch('getPeople', 1)
    if (this.$store.state.pageCount[1] == 0)
      this.$store.dispatch('getPlanets', 1)
    if (this.$store.state.pageCount[3] == 0)
      this.$store.dispatch('getVehicles', 1)
    if (this.$store.state.pageCount[4] == 0)
      this.$store.dispatch('getSpecies', 1)
    if (this.$store.state.pageCount[5] == 0)
      this.$store.dispatch('getStarships', 1)
  },
  computed: {
    peopleCount() {
      return this.$store.state.pageCount[0]
    },
    planetsCount() {
      return this.$store.state.pageCount[1]
    },
    filmsCount() {
      return this.$store.state.pageCount[2]
    },
    vehiclesCount() {
      return this.$store.state.pageCount[3]
    },
    speciesCount() {
      return this.$store.state.pageCount[4]
    },
    starshipsCount() {
      return this.$store.state.pageCount[5]
    }
  },
  watch: {
    async peopleCount() {
      for (let i = 2; i <= this.peopleCount; i++)
        await this.$store.dispatch('getPeople', i)
    },
    async planetsCount() {
      for (let i = 2; i <= this.planetsCount; i++)
        await this.$store.dispatch('getPlanets', i)
    },
    async filmsCount() {
      for (let i = 2; i <= this.filmsCount; i++)
        await this.$store.dispatch('getFilms', i)
    },
    async vehiclesCount() {
      for (let i = 2; i <= this.vehiclesCount; i++)
        await this.$store.dispatch('getVehicles', i)
    },
    async speciesCount() {
      for (let i = 2; i <= this.speciesCount; i++)
        await this.$store.dispatch('getSpecies', i)
    },
    async starshipsCount() {
      for (let i = 2; i <= this.starshipsCount; i++)
        await this.$store.dispatch('getStarships', i)
    },
  },
  methods: {
    home() {
      if (this.$router.currentRoute.value.path != '/')
        return ({ 'background-image': 'none' })
      else
        return ({ 'overflow': 'hidden', 'height': '100vh' })
    },
    nav() {
      if (this.$router.currentRoute.value.path != '/')
        return { 'background-color': '#111' }
    }
  }
}
</script>

<style>
@import url('https://unpkg.com/purecss@1.0.1/build/base-min.css');
@import url('https://fonts.googleapis.com/css2?family=Ubuntu');
@import url('https://fonts.googleapis.com/css?family=Archivo+Black');
* {
  font-family: 'Ubuntu', sans-serif;
}
*::selection {
  background-color: gold!important;
}
body {
  background-color: #111;
}
.body {
  background-image: url('./assets/img/background.jpg');
}
#nav {
  z-index: 100;
  background-color: rgba(0, 0, 0, .7);
  display: flex;
  position: relative;
  flex-direction: row;
  padding: 20px 0; 
  box-shadow: 0 .5px 5px #000;
  justify-content: center;
}
#nav #nav-logo {
  margin: 0 10px;
  cursor: pointer;
  transition: all .5s;
}
#nav .nav-link {
  color: gold;
  text-transform: capitalize;
  margin: auto 10px;
  text-decoration: none;
  transition: all .5s;
}
#nav .nav-link:hover {
  filter: brightness(70%);
}
#nav a.router-link-exact-active {
  color: #FFF;
}
#nav #nav-logo:hover {
  filter: brightness(70%);
}
.bullet {
    margin-left: 10px;
    padding-left: 10px;
    border-left: 5px solid gold;
    color: #FFF;
    font-weight: 300;
}
.grid {
    display: grid;
    grid-template-columns: auto auto auto;
    grid-column-gap: 15px;
    grid-row-gap: 15px;
    justify-items: center;
}
.button {
    background-color: transparent;
    color: gold;
    padding: 10px 25px;
    text-transform: initial;
    border: 1px solid gold;
    border-radius: 2px;
    transition: all .5s;
}
.button:hover {
    background-color: gold;
    color: #FFF;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
