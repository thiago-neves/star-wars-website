<template>
    <section>
        <h1 class="bullet">People</h1>
        <div class="grid">
            <div v-for="person in this.$store.state.people[page - 1]" :key="person.url">
                <card :object="person" :type="'people'"></card>
            </div>
        </div>
        <pagination :page="page" :changePage="changePage" :i="0"></pagination>
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