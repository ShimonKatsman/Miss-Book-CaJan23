// בס"ד
import { bookService } from "../services/book.service.js"
import { utilService } from "../services/util.service.js"

export default {
    props: [],
    template: `
        <input type="text" v-model="val" placeholder="Search a book"
        @change="search">

        <ul v-if="titles">
            <li v-for="title in titles">
            <p>{{ title }}</p>
            <button v-if="val!==''" @click="onAdd(title)">+</button>
            </li>
        </ul>
    `,
    data() {
        return {
            val: '',
            titles: null,
            books: null,
        }
    },
    methods: {
        search() {
            let googleBooks = utilService.loadFromStorage(this.val)

            if (googleBooks && this.val === '') {
                this.titles = ['no value entered']
            }

            if (googleBooks) {
                this.titles = googleBooks.items.map(item => { return item.volumeInfo.title })
                this.books = googleBooks
                return
            }

            bookService.request(this.val).then(res => {
                this.books = res
                utilService.saveToStorage(this.val, res)
                console.log('hi')
                this.titles = res.items.map(item => { return item.volumeInfo.title })
            })
            // .catch(err => console.log('invalid term'))
        },
        onAdd(title) {
            bookService.addGoogleBook(title, this.books)
        },
    },
    computed: {
    },
    created() {
    },
    components: {
    },
    watch: {
    },
    emits: [],
}