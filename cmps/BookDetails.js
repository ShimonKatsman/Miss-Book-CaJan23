// בס"ד

export default {
    props: ['book'],
    template: `
        <section class="book-details">
            <h2>{{ book.title }}</h2>
            <h3>Price: {{ book.listPrice.amount }}</h3>
            <img :src="book.thumbnail">
            <button @click="closeDetails">Close</button>
        </section>
    `,
    methods: {
        closeDetails(){
            this.$emit('hide-details')
        }
    }
}