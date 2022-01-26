<template>
    <div class="pagination">
            <button class="button" v-if="page > 1" @click="changePage(-1)">Previous</button>
            <button class="button" v-if="page != this.$store.state.pageCount[i]" @click="changePage(1)">Next</button>
        </div>
</template>

<script>
export default {
    props: ['changePage', 'page', 'i']
}
</script>

<style scoped>
.pagination {
    text-align: center;
}
.pagination .button {
    margin: 0 10px 10px 10px;
}
</style>