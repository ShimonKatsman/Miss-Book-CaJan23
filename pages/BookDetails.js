// בס"ד

import { bookService } from '../services/book.service.js'

import LongTxt from '../cmps/LongTxt.js'
import AddReview from '../cmps/AddReview.js'

export default {
    // props: ['book'],
    template: `
        <section class="book-details" v-if="book">
            <h2>{{ book.title }}</h2>
            <h3 :style="{color: setColor}">Price: §{{ book.listPrice.amount }}</h3>
            <p>{{ pageMsg }}</p>
            <p>{{ publishedStatus }}</p>
            <em>{{ saleMsg }}</em>
            <img :src="book.thumbnail">
            <LongTxt :length="10" :txt="book.description"/>

            <AddReview :book="book"/> 

            <div>
               <RouterLink :to="'/book/' + book.prevBookId">Previous book</RouterLink> | 
               <RouterLink :to="'/book/' + book.nextBookId">Next book</RouterLink>
            </div>
            
            <RouterLink to="/book">Back to list</RouterLink>
        </section>

    `,
    data() {
        return {
            color: '',
            book: null,
        }
    },
    created() {
        this.loadBook()
    },
    methods: {
        loadBook() {
            bookService.get(this.bookId)
                .then(book => this.book = book)
        },
    },
    computed: {
        bookId() {
            return this.$route.params.bookId
        },
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
    watch: {
        bookId() {
            this.loadBook()
        }
    },
    components: {
        LongTxt,
        AddReview,
    }
}