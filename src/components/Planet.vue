<template>
    <div class="info">
        <span>Name: {{ planet.name }}</span>
        <span>Rotation period: {{ planet.rotation_period }}</span>
        <span>Orbital period: {{ planet.orbital_period }}</span>
        <span>Diameter: {{ planet.diameter }}</span>
        <span>Climate: {{ planet.climate }}</span>
        <span>Gravity: {{ planet.gravity}}</span>
        <span>Terrain: {{ planet.terrain }}</span>
        <span>Surface Water: {{ planet.surface_water }}</span>
        <span>Population: {{ planet.population }}</span>
        <span>Residents: {{ planet.residents.join(', ') }}</span>
        <span>Films: {{ planet.films.join(', ') }}</span>
    </div>
</template>

<script>
import getNames from '@/store/functions.js'

export default {
    props: ['planet'],
    mounted() {
        this.getFilms(this.planet.films)
        this.getPeople(this.planet.residents)
    },
    methods: {
        getPeople: getNames.getPeople,
        getFilms: getNames.getFilms,
    },
}
</script>