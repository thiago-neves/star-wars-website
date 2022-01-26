<template>
    <div class="info">
        <p>Name: {{ specie.name }}</p>
        <p>Classification: {{ specie.classification}}</p>
        <p>Designation: {{ specie.designation }}</p>
        <p>Average height: {{ specie.average_height }}</p>
        <p>Skin color: {{ specie.skin_colors }}</p>
        <p>Hair color: {{ specie.hair_colors }}</p>
        <p>Eye Color: {{ specie.eye_colors }}</p>
        <p>Average lifespan: {{ specie.average_lifespan}}</p>
        <p>Homeworld: {{ specie.homeworld }}</p>
        <p>Language: {{ specie.language }}</p>
        <p>People: {{ specie.people.join(', ') }}</p>
        <p>Films: {{ specie.films.join(', ') }}</p>
    </div>
</template>

<script>
import getNames from '@/store/functions.js'
export default {
    props: ['specie'],
    mounted() {
        this.getPeople(this.specie.people)
        this.getFilms(this.specie.films)
    },
    methods: {
        getPeople: getNames.getPeople,
        getFilms: getNames.getFilms,
    },
}
</script>