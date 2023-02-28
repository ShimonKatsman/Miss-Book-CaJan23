// בס"ד

import { utilService } from '../services/util.service.js'
import { bookService } from '../services/book.service.js'
import Reviews from '../cmps/Reviews.js'

export default {
    props: ['book'],
    template: `
    <h3>ADD A REVIEW!</h3>
    <form @submit.prevent="onSubmit">
        <label>Your review?</label>
        <input type="text" placeholder="Your review" v-model="review.txt">
        <label>Your rate?</label>
        <select :placeholder="review.rate" v-model="review.rate">
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
        </select>
        <br>
        <button @click="onSubmit">SAVE REVIEW</button>

        <Reviews :book="book" :reviews="getReviews"/>
    </form>
    `,
    data() {
        return {
            review: {
                txt: '',
                rate: '1',
                readAt: '',
            }
        }
    },
    methods: {
        onSubmit() {
            this.review.readAt = Date. now()
            bookService.addReview(this.book.id, this.review)
        },
    },
    computed: {
        getReviews() {
            let revsDB = utilService.loadFromStorage('reviewDB')

            if (!revsDB) return

            let revs = revsDB.map(item => {
                if (item.id === this.book.id) return item
            })
            // console.log('rev', rev)
            return revs
        },
    },
    created() {
    },
    components: {
        Reviews,
    },
    emits: [],
}