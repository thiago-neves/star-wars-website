<template>
    <section>
        <h1 class="bullet">Vehicles</h1>
        <div class="grid">
            <div v-for="vehicle in this.$store.state.vehicles[page - 1]" :key="vehicle.url">
                <card :object="vehicle" :type="'vehicles'"></card>
            </div>
        </div>
        <pagination :page="page" :changePage="changePage" :i="3"></pagination>
    </section>
</template>

<script>
import Card from '@/components/Card.vue'
import Pagination from '@/components/Pagination.vue'

export default {
    data() {
        return { page: 1 }
    },
    methods: {
        changePage(change) {
            this.page += change
        }
    },
    components: {
        Card,
        Pagination
    }
}
</script>