<template>
    <section>
        <h1 class="bullet">Planets</h1>
        <div class="grid">
            <div v-for="planet in this.$store.state.planets[page - 1]" :key="planet.url">
                <card :object="planet" :type="'planets'"></card>
            </div>
        </div>
        <pagination :page="page" :changePage="changePage" :i="1"></pagination>
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