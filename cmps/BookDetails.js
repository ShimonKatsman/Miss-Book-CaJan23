// בס"ד

export default {
    props: ['book'],
    template: `
        <section class="book-details">
            <h2>{{ book.vendor }}</h2>
            <h3>{{ book.maxSpeed }}</h3>
            <img :src="'../assets/img/' + book.vendor + '.png'" alt="">
            <button @click="closeDetails">Close</button>
        </section>
    `,
    methods: {
        closeDetails(){
            this.$emit('hide-details')
        }
    }
}