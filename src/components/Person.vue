<template>
    <div class="info">
        <span>Name: {{ person.name }}</span>
        <span>Height: {{ person.height }}</span>
        <span>Weight: {{ person.mass }}</span>
        <span>Hair color: {{ person.hair_color }}</span>
        <span>Skin color: {{ person.skin_color }}</span>
        <span>Eye color: {{ person.eye_color }}</span>
        <span>Birth year: {{ person.birth_year }}</span>
        <span>Gender: {{ person.gender }}</span>
        <span>Homeworld: {{ person.homeworld }} </span>
        <span>Films: {{ person.films.join(', ') }}</span>
        <span>Species: {{ person.species.join(', ') }}</span>
        <span>Vehicles: {{ person.vehicles.join(', ')    }}</span>
    </div>
</template>

<script>
import getNames from '@/store/functions.js'

export default {
    props: ['person'],
    mounted() {
        this.getHomeworld(this.person)
        this.getFilms(this.person.films)
        this.getSpecies(this.person.species)
        this.getVehicles(this.person.vehicles)
    },
    methods: {
        getColor(data) {
            let arr = data.split(', ');
            arr.forEach((type, i) => {
                arr[i] = this.$store.state.PERSONTYPES[type] ? this.$store.state.PERSONTYPES[type] : arr[i] 
            });
            return arr.join(', ');
        },
        getHomeworld(object) {
            this.$store.state.planets.forEach(arr => {
                arr.filter(e => {
                   if (object.homeworld == e.url)
                        object.homeworld = e.name
                })
            })
        },
        getVehicles(object) {
            object.forEach((vehicle, i) => {
                this.$store.state.vehicles.forEach(arr => {
                    arr.filter(e => {
                        if (vehicle == e.url) object[i] = e.name
                    })
                })
            })
        },
        getFilms: getNames.getFilms,
        getSpecies: getNames.getSpecies
    }
}
</script>