// בס"ד

import LongTxt from './LongTxt.js'

export default {
    props: ['book'],
    template: `
        <section class="book-details">
            <h2>{{ book.title }}</h2>
            <h3>Price: §{{ book.listPrice.amount }}</h3>
            <p>{{ pageMsg }}</p>
            <p>{{ publishedStatus }}</p>
            <em>{{ saleMsg }}</em>
            <img :src="book.thumbnail">
            <LongTxt :length="10" :txt="book.description"/>
            <button @click="closeDetails">Close</button>
        </section>

    `,
    methods: {
        closeDetails() {
            this.$emit('hide-details')
        },
    },
    computed: {
        pageMsg() {
            if (this.book.pageCount > 500) return 'Serious Reading'
            if (this.book.pageCount > 200) return 'Descent Reading'
            if (this.book.pageCount > 100) return 'Just Reading'
            if (this.book.pageCount < 100) return 'Light Reading'
        },
        publishedStatus() {
            let date = new Date()
            if (this.book.publishedDate < date - 10) return 'Vintage'
            if (this.book.publishedDate < date - 1) return 'Shelf'
            if (this.book.publishedDate > date - 1) return 'New'
        },
        saleMsg() {
            return this.book.listPrice.isOnSale ? 'On Sale' : ''
        },
    },
    components: {
        LongTxt,
    }
}