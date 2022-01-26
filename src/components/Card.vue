<template>
    <div class="card">
            <img class="card-image" :src="getBackground()">
            <p class="card-text" v-if="object.name">{{ object.name }}</p>
            <p class="card-text" v-if="object.title">{{ object.title }}</p>
            <button class="button" @click="showModal = true">See more</button>
            <modal v-show="showModal">
                <template v-slot:header>
                    <h2 v-if="object.name">{{ object.name }}</h2>
                    <h2 v-if="object.title">{{ object.title }}</h2>
                </template>
                <template v-slot:body>
                    <person v-if="type=='people'" :person="object"></person>
                    <planet v-if="type=='planets'" :planet="object"></planet>
                    <film v-if="type=='films'" :film="object"></film>
                    <specie v-if="type=='species'" :specie="object"></specie>
                    <vehicle v-if="type=='vehicles'" :vehicle="object"></vehicle>
                    <starship v-if="type=='starships'" :starship="object"></starship>
                </template>
                <template v-slot:footer>
                    <button class="button margin-top" @click="showModal = false">Close</button>
                </template>
            </modal>
        </div>
</template>

<script>
import Modal from '@/components/Modal.vue'
import Person from '@/components/Person.vue'
import Planet from '@/components/Planet.vue'
import Film from '@/components/Film.vue'
import Specie from '@/components/Specie.vue'
import Vehicle from '@/components/Vehicle.vue'
import Starship from '@/components/Starship.vue'

export default {
    data() {
        return {
            showModal: false,
        }
    },
    components: {
        Modal,
        Person,
        Planet,
        Film,
        Specie,
        Vehicle,
        Starship
    },
    methods: {
        getBackground() {
            try {
                if (this.type == 'films')
                    return require(`@/assets/img/${this.type}/${this.object.title.replace(/\s/g, '')}.jpg`)
                return require(`@/assets/img/${this.type}/${this.object.name.replace(/\s/g, '')}.jpg`)
            } catch (error) {
                return require(`@/assets/img/${this.type}/default.jpg`)
            }
        }
    },
    props: ['openModal','object','type']
}
</script>

<style scoped>
.card {
    width: 500px;
    height: 300px;
    box-shadow: 0px 0px 3px #000;
    overflow: hidden;
    text-align: center;
    border-radius: 5px;
    margin-bottom: 30px;
    transition: all .5s;
}
.card-image {
    background-size: cover;
    background-repeat: no-repeat;
    width: 500px;
    z-index: -1;
    height: 300px;
    transition: all .5s;
}
.card .card-text {
    color: #FFF;
    font-size: 28px;
    cursor: default;
    text-transform: uppercase;
    font-family: 'Archivo Black', sans-serif;
    transition: all .5s;
}
.card:hover {
    box-shadow: none;
}
.card:hover .card-image {
    box-shadow: none;
    position: relative;
    filter: brightness(50%);
}
.card:hover .card-text {
    margin-top: -180px;
}
.info {
    display: grid;
    grid-template-columns: auto auto auto auto;
    grid-gap: 20px;
    text-align: left;
}
.margin-top {
    margin-top: 15px;
}
</style>