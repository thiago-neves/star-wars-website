<template>
    <div class="info">
        <p>Name: {{ starship.name }}</p>
        <p>Model: {{ starship.model }}</p>
        <p>Manufacturer: {{ starship.manufacturer }}</p>
        <p>Cost in credits: {{ starship.cost_in_credits }}</p>
        <p>Length: {{ starship.length }}</p>
        <p>Crew: {{ starship.crew }}</p>
        <p>Passengers: {{ starship.passengers }}</p>
        <p>Cargo capacity: {{ starship.cargo_capacity }}</p>
        <p>Consumables: {{ starship.consumables }}</p>
        <p>HyperDrive rating: {{ starship.hyperdrive_rating }}</p>
        <p>MGLT: {{ starship.MGLT }}</p>
        <p>Starship class: {{ starship.starship_class }}</p>
        <p>Pilots: {{ starship.pilots.join(', ') }}</p>
        <p>Films: {{ starship.films.join(', ') }}</p>
    </div>
</template>

<script>
import getNames from '@/store/functions.js'

export default {
    props: ['starship'],
    mounted() {
        this.getPeople(this.starship.pilots)
        this.getFilms(this.starship.films)
    },
    methods: {
        getFilms: getNames.getFilms,
        getPeople: getNames.getPeople,
    },
}
</script>