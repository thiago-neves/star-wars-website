<template>
    <section>
        <h1 class="bullet">Films</h1>
        <div class="grid">
            <div v-for="film in this.$store.state.films[page - 1]" :key="film.url">
                <card :object="film" :type="'films'"></card>
            </div>
        </div>
        <pagination :page="page" :changePage="changePage" :i="2"></pagination>
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