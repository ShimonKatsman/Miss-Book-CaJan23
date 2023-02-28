// בס"ד

import { bookService } from '../services/book.service.js'

import LongTxt from '../cmps/LongTxt.js'
import AddReview from '../cmps/AddReview.js'

export default {
    // props: ['book'],
    template: `
        <section class="book-details">
            <h2>{{ book.title }}</h2>
            <h3 :style="{color: setColor}">Price: §{{ book.listPrice.amount }}</h3>
            <p>{{ pageMsg }}</p>
            <p>{{ publishedStatus }}</p>
            <em>{{ saleMsg }}</em>
            <img :src="book.thumbnail">
            <LongTxt :length="10" :txt="book.description"/>
            <!-- <button @click="closeDetails">Close</button> -->

            <AddReview :book="book"/> 

            <RouterLink to="/book">Back to list</RouterLink>
        </section>

    `,
    data() {
        return {
            color: '',
            book: {},
        }
    },
    created() {
        // console.log('Params:',  this.$route.params)
        const { bookId } = this.$route.params
        bookService.get(bookId)
        .then(book => this.book = book)
        // console.log('this.book',this.book)
    },
    methods: {
        // closeDetails() {
        //     this.$emit('hide-details')
        // },
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
        setColor() {
            if (this.book.listPrice.amount > 150) return 'red'
            if (this.book.listPrice.amount < 20) return 'green'
        },
    },
    components: {
        LongTxt,
        AddReview,
    }
}