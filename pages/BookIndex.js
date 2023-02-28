// בס"ד

import { bookService } from '../services/book.service.js'
import { eventBusService } from '../services/event-bus.service.js'

import BookFilter from '../cmps/BookFilter.js'
import BookList from '../cmps/BookList.js'

export default {
    template: `
        <section class="book-index">
            <RouterLink to="/book/edit">Add a book</RouterLink> |

            <BookFilter @filter="setFilterBy"/>
            
            <BookList :books="filteredBooks" 
                @remove="removeBook" />
        </section>
    `,
    data() {
        return {
            books: [],
            filterBy: {},
        }
    },
    created() {
        bookService.query()
            .then(books =>{ this.books = books
                // console.log('this.books',this.books)
            })
    },
    methods: {
        removeBook(bookId) {
            bookService.remove(bookId)
                .then(() => {
                    const idx = this.books.findIndex(book => book.id === bookId)
                    this.books.splice(idx, 1)
                    eventBusService.emit('show-msg', { txt: 'Book removed', type: 'success' })
                })
                .catch(err => {
                    eventBusService.emit('show-msg', { txt: 'Book remove failed', type: 'error' })
                })
        },
        setFilterBy(filterBy) {
            this.filterBy = filterBy
        }
    },
    computed: {
        filteredBooks() {
            const regex = new RegExp(this.filterBy.title, 'i')
            return this.books.filter(book => regex.test(book.title))
        }
    },
    components: {
        BookFilter,
        BookList,
    }
}