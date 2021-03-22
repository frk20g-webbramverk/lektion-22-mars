<template>
    <article class="book" v-bind:style="{ backgroundColor: color }" v-on:click="showBookInfo">
        <section class="bg"></section>
        <section class="content">
        <aside></aside>
        <section>
            <h2>{{ title }}</h2>
            <h3>{{ author }}</h3>
        </section>
        </section>
    </article>
</template>

<script>
export default {
    name: 'Book',
    props: {
        book: Object
    },
    computed: {
        title() {
            return this.book.title;
        },
        author() {
            return this.book.author;
        },
        color() {
            return this.book.color;
        }
    },
    methods: {
        showBookInfo: function() {
            console.log('[book] Vald bok: ', this.book);
            this.$store.commit('selectBook', this.book);
            this.$router.push('/book');
        }
    }
}
</script>

<style>

</style>