<template>
    <div class="info">
        <p>Name: {{ vehicle.name}}</p>
        <p>Model: {{ vehicle.model }}</p>
        <p>Manufacturer: {{ vehicle.manufacturer }}</p>
        <p>Cost in credits: {{ vehicle.cost_in_credits }}</p>
        <p>Length: {{ vehicle.length }}</p>
        <p>Max atmosphering speed: {{ vehicle.max_atmosphering_speed }}</p>
        <p>Crew: {{ vehicle.crew }}</p>
        <p>Passengers: {{ vehicle.passengers }}</p>
        <p>Cargo capacity: {{ vehicle.cargo_capacity }}</p>
        <p>Consumables: {{ vehicle.consumables }}</p>
        <p>Vehicle class: {{ vehicle.vehicle_class }}</p>
        <p>Pilots: {{ vehicle.pilots.join(', ') }}</p>
        <p>Films: {{ vehicle.films.join(', ') }}</p>
    </div>
</template>

<script>
import getNames from '@/store/functions.js'
export default {
    props: ['vehicle'],
    mounted() {
        this.getFilms(this.vehicle.films)
        this.getPeople(this.vehicle.pilots)
    },
    methods: {
        getPeople: getNames.getPeople,
        getFilms: getNames.getFilms,
    },
}
</script>