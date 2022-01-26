<template>
    <div>
        <div>Title: {{ film.title }}</div>
        <div>Opening Crawl: {{ film.opening_crawl }}</div>
        <div class="grid margin-top">
            <span>Director: {{ film.director }}</span>
            <span>Producer: {{ film.producer }}</span>
            <span>Release date: {{ film.release_date }}</span>
            <span>Characters: {{ film.characters.join(', ') }}</span>
            <span>Planets: {{ film.planets.join(', ') }}</span>
            <span>Species: {{ film.species.join(', ') }}</span>
        </div>
    </div>
</template>

<style scoped>
.margin-top {
    margin-top: 15px;
}
</style>

<script>
import getNames from '@/store/functions.js'

export default {
    props: ['film'],
    mounted() {
        this.getPeople(this.film.characters)
        this.getPlanets(this.film.planets)
        this.getSpecies(this.film.species)
    },
    methods: {
        getPeople: getNames.getPeople,
        getPlanets: getNames.getPlanets,
        getSpecies: getNames.getSpecies
    },
}
</script>