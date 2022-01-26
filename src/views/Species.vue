<template>
    <section>
        <h1 class="bullet">Species</h1>
        <div class="grid">
            <div v-for="specie in this.$store.state.species[page - 1]" :key="specie.url">
                <card :object="specie" :type="'species'"></card>
            </div>
        </div>
        <pagination :page="page" :changePage="changePage" :i="4"></pagination>
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