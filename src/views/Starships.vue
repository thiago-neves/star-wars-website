<template>
    <section>
        <h1 class="bullet">Starships</h1>
        <div class="grid">
            <div v-for="starship in this.$store.state.starships[page - 1]" :key="starship.url">
                <card :object="starship" :type="'starships'"></card>
            </div>
        </div>
        <pagination :page="page" :changePage="changePage" :i="5"></pagination>
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